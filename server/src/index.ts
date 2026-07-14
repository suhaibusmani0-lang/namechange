import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"] }));

// Serve uploads from both possible paths
app.use('/uploads', express.static(uploadDir));
app.use('/server/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// ==========================================
// 🚀 MASTER API ROUTER
// ==========================================
const apiRouter = express.Router();

apiRouter.post('/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, email, service, message } = req.body;
    const newLead = await prisma.contactMessage.create({
      data: { name, phone, email: email || "N/A", service, message: message || "" },
    });

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@namechangeexpert.in',
      subject: `🚨 New Lead: ${name} | ${service}`,
      html: `
        <h2>New Lead Received!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || 'No additional message.'}</p>
      `
    });

    if (error) {
      console.error("Resend Error:", error);
      res.status(500).json({ status: 'error', message: error.message });
      return; 
    }

    res.status(201).json({ status: 'success', data: newLead });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

apiRouter.get('/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const leads = await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

const getBaseUrl = () => process.env.BASE_URL || `https://namechangeexpert.in/server`;

apiRouter.post('/blogs', upload.single('cover_image'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, excerpt, author, slug } = req.body;
    let imageUrl = req.file ? `${getBaseUrl()}/uploads/${req.file.filename}` : '';
    const newBlog = await prisma.blogPost.create({
      data: { title, excerpt, cover_image: imageUrl, author, slug },
    });
    res.status(201).json({ status: 'success', data: newBlog });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Server error' });
  }
});

apiRouter.get('/blogs', async (req: Request, res: Response): Promise<void> => {
  const blogs = await prisma.blogPost.findMany({ orderBy: { publishedAt: 'desc' } });
  res.status(200).json(blogs);
});

apiRouter.put('/blogs/:id', upload.single('cover_image'), async (req: Request, res: Response): Promise<void> => {
  try {
    const id = String(req.params.id);
    const { title, excerpt, author, slug } = req.body;
    const existingBlog = await prisma.blogPost.findUnique({ where: { id } });
    if (!existingBlog) { res.status(404).json({ message: 'Blog not found' }); return; }

    let imageUrl = req.file ? `${getBaseUrl()}/uploads/${req.file.filename}` : existingBlog.cover_image;
    const updatedBlog = await prisma.blogPost.update({
      where: { id },
      data: { title, excerpt, author, slug, cover_image: imageUrl },
    });
    res.status(200).json({ status: 'success', data: updatedBlog });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update' });
  }
});

apiRouter.delete('/blogs/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.blogPost.delete({ where: { id: String(req.params.id) } });
    res.status(200).json({ status: 'success', message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete' });
  }
});

// ==========================================
// 🛡️ THE MAGIC TRICK: Bind to both paths
// ==========================================
app.use('/api', apiRouter);
app.use('/server/api', apiRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});