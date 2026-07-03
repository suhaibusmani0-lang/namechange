import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Calendar, User, ArrowRight, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/blog/")({
  meta: () => [{ title: "Blog & Legal Updates | Name Change Expert" }],
  component: BlogPage,
});

function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        const data = await res.json();
        
        const blogData = Array.isArray(data) ? data : data.data || [];
        
        const sortedBlogs = blogData.sort((a: any, b: any) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      <PageHero
        eyebrow="Official Updates"
        title={
          <>Latest <span className="text-gradient-brand">News & Guides</span></>
        }
        subtitle="Stay informed with the latest central gazette rules, name change procedures, and legal documentation guides."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-500">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-600 mb-4" />
            <p className="font-bold">Fetching latest articles...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 font-bold text-lg">No articles published yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
              >
                <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden relative">
                  {blog.cover_image ? (
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold bg-slate-200">
                      No Cover Image
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" /> 
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-primary" /> 
                      {blog.author || "Admin Team"}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-medium line-clamp-3 mb-6 flex-grow">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    {/* Yahan Link tag laga diya hai */}
                    <Link 
                      to="/blog/$slug" 
                      params={{ slug: blog.slug }} 
                      className="text-sm font-bold text-primary hover:text-indigo-700 flex items-center gap-1.5 transition-colors"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}