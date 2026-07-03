import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Users, FileText, PlusCircle, RefreshCcw, LayoutDashboard,
  Calendar, ShieldCheck, Lock, User, KeyRound, LogOut,
  TrendingUp, Clock, Search, CheckCircle2, Image as ImageIcon,
  Edit, Trash2, X, MoreVertical
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  meta: () => [{ title: "Workspace CRM | Secure Access" }],
  component: AdminAuthWrapper,
});

// ---------------------------------------------------------
// OVERLAY WRAPPER: Hides Header & Footer automatically
// ---------------------------------------------------------
function AdminAuthWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // z-[9999] aur fixed inset-0 website ke header/footer ko poori tarah cover kar lega
    <div className="fixed inset-0 z-[9999] bg-slate-50 overflow-y-auto font-sans text-slate-900">
      {!isAuthenticated ? (
        <AdminLogin onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
      )}
    </div>
  );
}

// ---------------------------------------------------------
// LUXURY LOGIN SCREEN (ANTI-HANG)
// ---------------------------------------------------------
function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const ADMIN_ID = "admin";
    const ADMIN_PASS = "Admin@123";

    if (usernameRef.current?.value === ADMIN_ID && passwordRef.current?.value === ADMIN_PASS) {
      setError("");
      onLogin();
    } else {
      setError("Unauthorized access attempt detected.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] p-4 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-md w-full bg-slate-900/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative z-10 p-1">
        <div className="bg-slate-900/80 rounded-[22px] p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">Executive CRM</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">Classified Terminal</p>
          </div>

          <form onSubmit={handleLogin} data-gramm="false" className="space-y-5" autoComplete="off">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 text-sm font-bold border border-red-500/20 text-center flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> {error}
              </div>
            )}
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  ref={usernameRef}
                  placeholder="System ID"
                  data-gramm="false"
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:bg-black/80 transition-all font-medium focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-slate-500 group-focus-within:text-white transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  ref={passwordRef}
                  placeholder="Passcode"
                  data-gramm="false"
                  className="w-full pl-11 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:bg-black/80 transition-all font-medium focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-white text-black hover:bg-indigo-50 hover:text-indigo-900 font-black rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-6 text-sm uppercase tracking-wide"
            >
              Initialize Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// CRM LAYOUT
// ---------------------------------------------------------
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<"leads" | "blogs">("leads");

  return (
    <div className="min-h-screen bg-[#F1F5F9] flex flex-col md:flex-row selection:bg-indigo-500 selection:text-white">
      {/* Sleek Dark Sidebar */}
      <aside className="w-full md:w-72 bg-[#0B0F19] text-white flex flex-col border-r border-white/10 z-10 shadow-2xl">
        <div className="p-6 border-b border-white/5 flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-tight leading-none">Master Hub</h2>
            <span className="text-[10px] uppercase font-black tracking-widest text-indigo-400 mt-1 block">Command Center</span>
          </div>
        </div>
        
        <nav className="flex-1 p-5 space-y-2">
          <button
            onClick={() => setActiveTab("leads")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "leads"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Users className="w-5 h-5" /> Client Leads
          </button>
          <button
            onClick={() => setActiveTab("blogs")}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "blogs"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <FileText className="w-5 h-5" /> Content Studio
          </button>
        </nav>

        <div className="p-5 border-t border-white/5 bg-white/5">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all shadow-sm"
          >
            <LogOut className="w-4 h-4" /> Terminate Session
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto bg-slate-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
        <div className="p-6 md:p-10 max-w-[1600px] mx-auto relative z-10">
          {activeTab === "leads" ? <LeadsManager /> : <BlogManager />}
        </div>
      </main>
    </div>
  );
}

// ---------------------------------------------------------
// 1. LEADS MANAGER (Same as before but sleeker)
// ---------------------------------------------------------
function LeadsManager() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://namechange-hocg.onrender.com/api/contact");
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      console.error("Failed to fetch leads");
    }
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Client Pipeline</h1>
          <p className="text-sm text-slate-500 font-bold mt-2">Manage incoming high-value consultation requests.</p>
        </div>
        <button
          onClick={fetchLeads}
          className="flex items-center gap-2 bg-slate-900 hover:bg-indigo-600 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-indigo-500/30"
        >
          <RefreshCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Sync
        </button>
      </div>

      <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center text-slate-400 font-bold flex flex-col items-center gap-3">
              <RefreshCcw className="w-8 h-8 animate-spin" /> Synchronizing data...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-20 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                <Users className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-500 font-bold text-lg">Pipeline is empty.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100">
                  <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Prospect</th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Contact</th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Category</th>
                  <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Date Logged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-indigo-600 transition-colors">
                          {lead.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-900">{lead.name}</p>
                          <p className="text-xs text-slate-500 font-semibold truncate max-w-[250px] mt-0.5" title={lead.message}>
                            {lead.message}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <a href={`tel:${lead.phone}`} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                        {lead.service ? lead.service.replace("_", " ") : "N/A"}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm font-bold text-slate-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-300" />
                      {new Date(lead.createdAt).toLocaleDateString('en-GB')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// 2. ULTIMATE BLOG MANAGER (With View, Create, Edit, Delete)
// ---------------------------------------------------------
function BlogManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"list" | "create" | "edit">("list");
  
  // States for forms
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", author: "Admin Team", slug: "", excerpt: "" });

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://namechange-hocg.onrender.com/api/blogs");
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching blogs");
    }
    setLoading(false);
  };

  useEffect(() => { fetchBlogs(); }, []);

  // Form Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedImage(e.target.files[0]);
  };

  // Submit Logic (Handles both CREATE and EDIT)
  async function handleSaveBlog(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("author", formData.author);
    formPayload.append("excerpt", formData.excerpt);
    
    let generatedSlug = formData.slug;
    if (!generatedSlug) {
      generatedSlug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") + "-" + Math.floor(Math.random() * 1000);
    }
    formPayload.append("slug", generatedSlug);
    if (selectedImage) formPayload.append("cover_image", selectedImage);

    try {
      const url = view === "edit" ? `https://namechange-hocg.onrender.com/api/blogs/${editingBlogId}` : "https://namechange-hocg.onrender.com/api/blogs";
      const method = view === "edit" ? "PUT" : "POST";

      const response = await fetch(url, { method, body: formPayload });
      if (!response.ok) throw new Error("Failed to save");

      setStatus("success");
      fetchBlogs(); // Refresh list
      setTimeout(() => {
        setStatus("idle");
        setView("list");
        resetForm();
      }, 1500);
    } catch (error) {
      setStatus("error");
    }
  }

  // Delete Logic
  async function handleDelete(id: string) {
    if(!window.confirm("Are you sure you want to permanently delete this article?")) return;
    try {
      const res = await fetch(`https://namechange-hocg.onrender.com/api/blogs/${id}`, { method: "DELETE" });
      if(res.ok) fetchBlogs();
    } catch (error) {
      alert("Failed to delete.");
    }
  }

  // Edit Setup
  function openEditForm(blog: any) {
    setFormData({ title: blog.title, author: blog.author, slug: blog.slug, excerpt: blog.excerpt });
    setEditingBlogId(blog.id);
    setView("edit");
  }

  function resetForm() {
    setFormData({ title: "", author: "Admin Team", slug: "", excerpt: "" });
    setSelectedImage(null);
    setEditingBlogId(null);
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Content Studio</h1>
          <p className="text-sm text-slate-500 font-bold mt-2">Publish, edit, and manage high-ranking SEO assets.</p>
        </div>
        
        {view === "list" ? (
          <button
            onClick={() => { resetForm(); setView("create"); }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl text-sm font-black transition-all shadow-lg shadow-indigo-500/30 hover:scale-105"
          >
            <PlusCircle className="w-5 h-5" /> Draft New Article
          </button>
        ) : (
          <button
            onClick={() => { resetForm(); setView("list"); }}
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl text-sm font-black transition-all hover:bg-slate-50 shadow-sm"
          >
            <X className="w-5 h-5" /> Cancel & Return
          </button>
        )}
      </div>

      {/* --- LIST VIEW --- */}
      {view === "list" && (
        <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-20 text-center text-slate-400 font-bold">Loading assets...</div>
            ) : blogs.length === 0 ? (
              <div className="p-20 text-center text-slate-500 font-bold text-lg">No articles published yet.</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-100">
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Article Details</th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Status / Date</th>
                    <th className="px-8 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-5">
                          {blog.cover_image ? (
                            <img src={blog.cover_image} className="w-16 h-12 object-cover rounded-lg border border-slate-200 shadow-sm" alt="" />
                          ) : (
                            <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                              <ImageIcon className="w-5 h-5 text-slate-300" />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-black text-slate-900 leading-tight line-clamp-1">{blog.title}</p>
                            <p className="text-xs text-slate-400 font-bold mt-1">/{blog.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-100 mb-1">
                          Published
                        </span>
                        <p className="text-[11px] font-bold text-slate-400">
                          {new Date(blog.publishedAt).toLocaleDateString('en-GB')}
                        </p>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openEditForm(blog)} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(blog.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* --- CREATE / EDIT FORM VIEW --- */}
      {(view === "create" || view === "edit") && (
        <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-w-4xl">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
              {view === "edit" ? <Edit className="w-6 h-6 text-indigo-600" /> : <PlusCircle className="w-6 h-6 text-indigo-600" />}
              {view === "edit" ? "Edit Existing Article" : "Compose New Article"}
            </h2>
            {status === "success" && (
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" /> Saved
              </span>
            )}
          </div>

          <form onSubmit={handleSaveBlog} className="p-8 space-y-8" data-gramm="false">
            {/* Main Title & Content */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Primary Headline</label>
                <input
                  name="title" required value={formData.title} onChange={handleChange}
                  placeholder="Enter an attention-grabbing title..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg outline-none focus:border-indigo-500 focus:bg-white transition-all font-black text-slate-900 placeholder-slate-300"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Article Body (Supports HTML)</label>
                <textarea
                  name="excerpt" rows={12} required value={formData.excerpt} onChange={handleChange}
                  placeholder="Start drafting the content here..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 focus:bg-white transition-all font-medium text-slate-700 placeholder-slate-300 resize-y leading-relaxed"
                ></textarea>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Meta & Media Setup */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Custom URL Slug (Leave blank for auto)</label>
                  <input
                    name="slug" value={formData.slug} onChange={handleChange} placeholder="e.g. name-change-delhi"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 font-bold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Author Assignment</label>
                  <input
                    name="author" value={formData.author} onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-indigo-500 font-bold text-slate-700"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Cover Asset</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                    <input
                      type="file" accept="image/*" onChange={handleImageChange}
                      className="w-full text-sm font-bold text-slate-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-xs file:font-black file:uppercase file:tracking-wider file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
                    />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">JPG, PNG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 flex justify-end gap-4 border-t border-slate-100">
              <button
                type="button" onClick={() => { resetForm(); setView("list"); }}
                className="px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black rounded-xl transition-all text-sm uppercase tracking-wider"
              >
                Discard
              </button>
              <button
                type="submit" disabled={status === "loading" || status === "success"}
                className="px-8 py-4 bg-slate-900 hover:bg-indigo-600 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 disabled:opacity-70 text-sm uppercase tracking-wider"
              >
                {status === "loading" ? "Saving..." : view === "edit" ? "Update Article" : "Publish Article"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}