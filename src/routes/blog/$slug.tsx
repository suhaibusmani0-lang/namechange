import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Calendar, User, ArrowLeft, Loader2, Clock, ChevronRight, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  component: SingleBlogPage,
});

function SingleBlogPage() {
  const { slug } = Route.useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchSpecificBlog = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        const found = data.find((b: any) => b.slug === slug);
        setBlog(found);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSpecificBlog();
  }, [slug]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Loading Publication...</p>
    </div>
  );
  
  if (!blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-black text-slate-900 mb-2">404</h1>
      <p className="text-slate-500 font-medium mb-6">This publication could not be found.</p>
      <Link to="/blog" className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-md">
        Browse All Articles
      </Link>
    </div>
  );

  // Share Links
  const shareUrl = window.location.href;
  const encodedTitle = encodeURIComponent(blog.title);

  return (
    <div className="bg-white min-h-screen pb-24 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Clean Navigation Bar */}
      <div className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
          </div>
        </div>
      </div>

      {/* Main Article Container - Optimal Reading Width (max-w-3xl) */}
      <article className="max-w-3xl mx-auto px-4 mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest mb-5 border border-indigo-100">
            Legal & Compliance
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight mb-6">
            {blog.title}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6 border-y border-slate-100">
            {/* Author & Meta */}
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shadow-sm">
                {(blog.author || "A").charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-slate-900 font-bold">{blog.author || "Admin Team"}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 3 Min Read</span>
                </div>
              </div>
            </div>

            {/* Elegant Share Buttons */}
            <div className="flex items-center gap-2">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors" title="Share on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors" title="Share on X">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodedTitle}`} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-colors" title="Share on LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <button onClick={copyToClipboard} className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors relative" title="Copy Link">
                <Link2 className="w-4 h-4" />
                {copied && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold">Copied!</span>}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image - Edge to Edge in container */}
        {blog.cover_image && (
          <figure className="mb-12">
            <img 
              src={blog.cover_image} 
              alt={blog.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-sm border border-slate-100" 
            />
          </figure>
        )}
        
        {/* Article Body - Highly readable typography */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-700 prose-p:leading-loose prose-a:font-bold prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl">
          {blog.excerpt.split('\n').map((para: string, i: number) => (
            para.trim() ? <p key={i}>{para}</p> : null
          ))}
        </div>

        {/* Premium CTA Box at the bottom */}
        <div className="mt-16 p-8 md:p-10 bg-slate-900 rounded-3xl text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-50%] left-[-10%] w-64 h-64 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[80px]"></div>
          <div className="absolute bottom-[-50%] right-[-10%] w-64 h-64 bg-blue-500/30 rounded-full mix-blend-screen filter blur-[80px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-3">Need Help With Legal Documentation?</h3>
            <p className="text-slate-400 font-medium mb-8 text-sm max-w-lg mx-auto">
              Our experts handle the entire Central Gazette notification process so you don't have to worry about rejections.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-black uppercase tracking-wider text-sm rounded-xl transition-all hover:bg-indigo-50 hover:scale-105 shadow-lg">
              Get a Free Consultation
            </Link>
          </div>
        </div>
        
      </article>
    </div>
  );
}