import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Calendar, User, ArrowRight, BookOpen, Loader2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site"; // Assuming PageHero is exported from here

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Legal Insights & News | Name Change Expert Blog" },
      {
        name: "description",
        content:
          "Stay updated with the latest rules, tips, and legal insights on name change, gazette notifications, and document corrections in India.",
      },
      { property: "og:title", content: "Legal Insights | Name Change Expert" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

// Defining the structure of a blog post coming from your admin panel
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  cover_image: string;
  published_at: string;
  author: string;
  slug: string; // Used for the URL (e.g., /blog/how-to-change-name)
};

function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        
        // 🚀 ADMIN PANEL INTEGRATION SPOT:
        // Yahan par aap apne database ka fetch logic lagayenge. 
        // Example for a database client:
        // const { data, error } = await dbClient.from('blogs').select('*').order('published_at', { ascending: false });
        // if (error) throw error;
        // setBlogs(data);

        // Simulated Network Delay for UI testing
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Temporary Mock Data (Remove this when connecting your actual API)
        const mockData: BlogPost[] = [
          {
            id: "1",
            title: "How to Legally Change Your Surname After Marriage in India",
            excerpt: "A complete step-by-step guide to legally changing your surname post-marriage and updating your Aadhaar, PAN, and Passport without hassle.",
            cover_image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
            published_at: "2026-06-28",
            author: "Legal Advisory Desk",
            slug: "change-surname-after-marriage",
          },
          {
            id: "2",
            title: "Why Local Affidavits Are Rejected by Passport Offices",
            excerpt: "Understanding the strict federal rules and why a Central Gazette Notification is mandatory for updating your passport details.",
            cover_image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
            published_at: "2026-06-25",
            author: "Documentation Team",
            slug: "why-local-affidavits-rejected",
          },
          {
            id: "3",
            title: "Correcting Minor Spelling Mistakes in CBSE Marksheets",
            excerpt: "Is a single letter mismatch causing issues? Learn the exact 'One and the Same Person' declaration process to fix academic records.",
            cover_image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
            published_at: "2026-06-20",
            author: "Legal Advisory Desk",
            slug: "cbse-marksheet-correction",
          },
        ];

        setBlogs(mockData);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans min-h-screen pb-24">
      {/* Hero Section */}
      <PageHero
        eyebrow="Knowledge Base"
        title={
          <>
            Legal Insights &amp; <span className="text-gradient-brand">Updates</span>
          </>
        }
        subtitle="Read our latest articles on statutory guidelines, documentation processes, and expert tips for a seamless identity modification experience."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
        
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Loading Articles...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">Unable to load blogs</h3>
            <p className="text-sm text-slate-600 max-w-md">We are having trouble connecting to the database. Please try refreshing the page in a few moments.</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && blogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
            <BookOpen className="h-12 w-12 text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">No Articles Found</h3>
            <p className="text-sm text-slate-500">Check back later for new updates and legal insights.</p>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {new Date(blog.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" />
                      {blog.author}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 line-clamp-3 leading-relaxed font-medium">
                    {blog.excerpt}
                  </p>

                  {/* Read More Link */}
                  {/* Note: Update the to path based on your single blog post route structure */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-navy transition-colors"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}