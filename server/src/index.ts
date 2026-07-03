import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// ==========================================
// FILE UPLOAD SETUP (MULTER)
// ==========================================

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Badi files aur images upload karte waqt server crash na ho uske liye limit set ki hai
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// ==========================================
// MIDDLEWARES
// ==========================================

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Serve uploaded images statically so frontend can see them
app.use('/uploads', express.static(uploadDir));


// ==========================================
// LEADS ROUTES (Admin Panel CRM ke liye)
// ==========================================

// POST: Nayi lead save karne ke liye (Contact form se)
app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, service, message } = req.body;
    const newLead = await prisma.contactMessage.create({
      data: { name, phone, service, message },
    });
    res.status(201).json({ status: 'success', data: newLead });
  } catch (error) {
    console.error("❌ Error saving lead:", error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// GET: Saari leads fetch karne ke liye (Admin panel mein dikhane ke liye)
app.get('/api/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const leads = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }, // Nayi leads sabse upar aayengi
    });
    res.status(200).json(leads);
  } catch (error) {
    console.error("❌ Error fetching leads:", error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});


// ==========================================
// BLOG ROUTES (Frontend aur Content Studio ke liye)
// ==========================================

// POST: Create a new blog post with IMAGE UPLOAD
app.post('/api/blogs', upload.single('cover_image'), async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, excerpt, author, slug } = req.body;
    
    if (!title || !slug) {
      res.status(400).json({ status: 'error', message: 'Title and Slug are required.' });
      return;
    }

    // Generate image URL if file was uploaded
    let imageUrl = '';
    if (req.file) {
      imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const newBlog = await prisma.blogPost.create({
      data: { 
        title, 
        excerpt, 
        cover_image: imageUrl, 
        author, 
        slug 
      },
    });
    
    console.log("✅ New Blog Published:", newBlog.title);
    res.status(201).json({ status: 'success', data: newBlog });
  } catch (error) {
    console.error("❌ Error saving blog:", error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// GET: Backend se saare blogs frontend par bhejna
app.get('/api/blogs', async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await prisma.blogPost.findMany({
      orderBy: { publishedAt: 'desc' }, // Naye blogs sabse pehle aayenge
    });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// PUT: Blog edit/update karne ke liye (With optional new image upload)
app.put('/api/blogs/:id', upload.single('cover_image'), async (req: Request, res: Response): Promise<void> => {
  try {
    // TypeScript Error Fix: Explicitly convert to String
    const id = String(req.params.id); 
    const { title, excerpt, author, slug } = req.body;

    // Pehle purana blog find karein
    const existingBlog = await prisma.blogPost.findUnique({ where: { id } });
    if (!existingBlog) {
      res.status(404).json({ status: 'error', message: 'Blog not found' });
      return;
    }

    // Agar nayi photo aayi hai toh wo use karein, warna purani wali hi rehne dein
    let imageUrl = existingBlog.cover_image;
    if (req.file) {
      imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const updatedBlog = await prisma.blogPost.update({
      where: { id },
      data: { title, excerpt, author, slug, cover_image: imageUrl },
    });

    console.log("✅ Blog Updated:", updatedBlog.title);
    res.status(200).json({ status: 'success', data: updatedBlog });
  } catch (error) {
    console.error("❌ Error updating blog:", error);
    res.status(500).json({ status: 'error', message: 'Failed to update blog' });
  }
});

// DELETE: Blog delete karne ke liye
app.delete('/api/blogs/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    // TypeScript Error Fix: Explicitly convert to String
    const id = String(req.params.id); 
    
    // Check if blog exists before deleting
    const existingBlog = await prisma.blogPost.findUnique({ where: { id } });
    if (!existingBlog) {
      res.status(404).json({ status: 'error', message: 'Blog not found' });
      return;
    }

    await prisma.blogPost.delete({ where: { id } });
    
    console.log("🗑️ Blog Deleted:", id);
    res.status(200).json({ status: 'success', message: 'Blog deleted successfully' });
  } catch (error) {
    console.error("❌ Error deleting blog:", error);
    res.status(500).json({ status: 'error', message: 'Failed to delete blog' });
  }
});


// ==========================================
// SERVER INITIALIZATION
// ==========================================

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});