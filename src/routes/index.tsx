import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { 
  Search, ShieldCheck, Scale, Users, Check, ChevronDown, HelpCircle, FileText, Briefcase, Landmark, CheckCircle2,
  ArrowRight, PhoneCall, FileSignature, MapPin, UserPlus, Edit3, Loader2
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // States for Lead Form (Hero Section)
  const [isLeadSubmitting, setIsLeadSubmitting] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Name Change'
  });

  // States for Quick Inquiry Form (Bottom Strip)
  const [isQuickSubmitting, setIsQuickSubmitting] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // --- FORM HANDLERS (Connected to LIVE Backend) ---

  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLeadSubmitting(true);

    try {
      // 🟢 CHANGED TO LIVE BACKEND URL
      const response = await fetch("https://namechangeexpert.in/server/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadFormData),
      });

      if (response.ok) {
        alert('Thank you! Your case review request has been submitted securely. We will contact you soon.');
        setLeadFormData({ name: '', phone: '', email: '', service: 'General Name Change' }); // Reset form
      } else {
        alert("Submission failed. Please check your backend connection.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Network error. Is your backend server running?");
    } finally {
      setIsLeadSubmitting(false);
    }
  }

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsQuickSubmitting(true);

    try {
      // 🟢 CHANGED TO LIVE BACKEND URL
      const response = await fetch("https://namechangeexpert.in/server/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quickFormData,
          service: 'Urgent Callback Request' // Backend ke liye default service name
        }),
      });

      if (response.ok) {
        alert('Your urgent inquiry has been received. Our team will call you shortly!');
        setQuickFormData({ name: '', phone: '', email: '' }); // Reset form
      } else {
        alert("Submission failed. Please check your backend connection.");
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Network error. Is your backend server running?");
    } finally {
      setIsQuickSubmitting(false);
    }
  }

  // Input Change Handlers
  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLeadFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleQuickInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuickFormData(prev => ({ ...prev, [name]: value }));
  }

  // Search Bar Submit Handler
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!searchQuery.trim()) {
      alert("Please enter a service or query to search.");
      return;
    }
    alert(`Searching our legal database for: "${searchQuery}"\n\nRedirecting you to the most relevant compliance framework...`);
    setSearchQuery('');
  }

  // --- ARRAYS FOR DYNAMIC CONTENT ---

  const servicesList = [
    { icon: Users, title: 'Adult Identity Transition', desc: 'A complete legal suite for modifying your given name or surname seamlessly across all government documents.' },
    { icon: Briefcase, title: 'Post-Matrimonial Updates', desc: 'Specifically structured for brides modifying their maiden names post marriage documentation.' },
    { icon: FileText, title: 'Typographical Corrections', desc: 'Rectify minor spelling errors or complete structural mismatch transcription errors in registry logs.' },
    { icon: UserPlus, title: 'Minor Name Change', desc: 'Parent-backed legal identity rectification for children below 18 years in school and Aadhar records.' },
    { icon: Scale, title: 'Faith Alignment Update', desc: 'Statutory legal documentation and Gazette processing for faith and religion-based identity shifts.' },
    { icon: Edit3, title: 'Surname Addition', desc: 'Strategic framing and addition of surnames for professional uniformity and visa compliance.' },
    { icon: FileSignature, title: 'Divorcee Name Reversion', desc: 'Legal restoration and Gazette notification for reverting to your maiden name post-annulment.' }
  ];

  const locationsList = [
    { city: 'New Delhi (PAN)', desc: 'Central Dispatch Hub interfacing directly with Delhi Headquarters.', img: 'https://cdn.britannica.com/38/189838-050-83C7395E/India-War-Memorial-arch-New-Delhi-Sir.jpg' },
    { city: 'Hyderabad', desc: 'Regional Registry Desk serving Telangana and Andhra compliance.', img: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg' },
    { city: 'Bengaluru', desc: 'Southern Branch Node handling expedited corporate document transitions.', img: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Vidhana_Soudha_2012.jpg' },
    { city: 'Chennai Regional', desc: 'Coast Regional Compliance operations handling specialized cases.', img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg' },
    { city: 'Mumbai', desc: 'Western regional desk handling Maharashtra & Gujarat jurisdictions.', img: 'https://preview.redd.it/mumbai-skyline-v0-0telj1ubmkvb1.jpg?width=640&crop=smart&auto=webp&s=8ba3c22299fdb1421def2c0836d9a30323377910' },
    { city: 'Kolkata', desc: 'Eastern nodal center for rapid Bengal & North-East document processing.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1280px-Victoria_Memorial_situated_in_Kolkata.jpg' },
    { city: 'Pune', desc: 'Dedicated verification node for expedited corporate ID transitions.', img: 'https://img.magnific.com/premium-photo/aerial-view-pune-city-maharashtra-india-skyscrapers-modern-architecture-dominate_1268487-11926.jpg' },
    { city: 'Ahmedabad', desc: 'Gujarat central registry for compliance and rapid affidavit vetting.', img: 'https://www.dekhoamdavad.com/images/gallery/Sabarmati-ahmedabad.jpg' }
  ];

  const resourcesList = [
    { title: 'Setup & Basics Chart Logs', desc: 'Process charts analyzing documentation mapping and standard validation timelines.', img: 'https://ppcexpo.com/blog/wp-content/uploads/2024/10/types-of-business-charts-Main.jpg' },
    { title: 'Process Flow Analysis', desc: 'Detailed workflow models mapping core validation systems and submission structures.', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { title: 'Latest Department Circulars', desc: 'Real-time alerts tracing modification layouts published centrally by the government.', img: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* CSS For Infinite Marquee Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee,
        .marquee-container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-16 pb-24 md:pt-28 md:pb-32 text-center bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm transition-all hover:border-slate-300">
            <Landmark className="w-4 h-4 text-blue-700" /> Government of India Compliant Process
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            India&apos;s Most Trusted Legal <br />
            <span className="text-blue-700">Name Change Documentation</span> Desk
          </h1>
          <p className="text-sm md:text-lg font-medium text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Empowering individuals with error-free, legally binding name change services. Complete Central Gazette Notifications, affidavit drafting, and newspaper publications with a 100% approval success rate.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200 flex items-center mb-10 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
            <div className="pl-4 text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type status / service configuration (e.g., Name change after marriage)..." 
              className="w-full px-4 py-3 outline-none text-base text-slate-700 font-medium bg-transparent placeholder-slate-400"
            />
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors whitespace-nowrap hidden sm:block shadow-md">
              Search Setup
            </button>
          </form>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['🛡️ 100% Legal Guarantee', '💍 Name Change After Marriage', '🎓 Correction in Marksheet', '📰 Gazette Publication Desk'].map((tag, i) => (
              <span key={i} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES HIGHLIGHT (Marquee) ================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-3">Name Change Services We Offer</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 font-semibold text-sm mt-4">Fundamental legal documentation frameworks for identity modifications.</p>
          </div>
        </div>
        
        {/* Infinite Scroll Track */}
        <div className="marquee-container w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee gap-8 px-4 cursor-grab active:cursor-grabbing">
            {[...servicesList, ...servicesList].map((srv, idx) => (
              <div key={idx} className="w-[350px] shrink-0 bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 font-black">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 font-medium text-xs leading-relaxed mb-6">{srv.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-black text-blue-700 uppercase tracking-wider hover:underline">
                  View Setup Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERTISE LAYOUT WITH PHOTO ================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Execute Your Name Change With Certified Documentation Specialists
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Col */}
            <div className="space-y-12 text-right">
              <div className="space-y-2 group transition-transform duration-300 hover:-translate-x-2">
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">Affidavit Drafting Desk</h4>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">Precision crafting of court compliant judicial affidavit statements strictly according to standard notary formats.</p>
              </div>
              <div className="space-y-2 group transition-transform duration-300 hover:-translate-x-2">
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">Documents Full Review & Plan</h4>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">Rigorous checks of your submission IDs before forwarding to ensure zero recursive press rejections.</p>
              </div>
            </div>

            {/* Center Col - EXPERT PHOTO */}
            <div className="text-center relative py-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-white rounded-full blur-[100px] -z-10"></div>
              <div className="w-full max-w-[340px] mx-auto bg-slate-200 border border-slate-300 rounded-3xl aspect-[3/4] flex items-center justify-center shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 relative z-10">
                <img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Documentation Expert" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Right Col */}
            <div className="space-y-12 text-left">
              <div className="space-y-2 group transition-transform duration-300 hover:translate-x-2">
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">Gazette Dossier Compilation</h4>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">Assembly of the requisite CD, proformas, physical photographs, and signature attestations ready for the Press.</p>
              </div>
              <div className="space-y-2 group transition-transform duration-300 hover:translate-x-2">
                <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">Post-Publication Support</h4>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">Continuous compliance guidance for syncing data across primary bank instruments and utility data logs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM PACKAGE CATEGORIES ================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-3">Targeted Action Plans</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 font-semibold text-sm mt-4">Select the foundational layout that meets your administrative requirement.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { title: 'General Identity Transition', bg: 'bg-rose-50 border-rose-200/60 text-rose-950', desc: 'Standard given name or surname changes.' },
              { title: 'Matrimonial Name Update', bg: 'bg-amber-50 border-amber-200/60 text-amber-950', desc: 'Brides modifying maiden names.' },
              { title: 'Minor Identity Matrix Fix', bg: 'bg-emerald-50 border-emerald-200/60 text-emerald-950', desc: 'Parent backed child ID rectification.' },
              { title: 'Faith Alignment Portfolio', bg: 'bg-purple-50 border-purple-200/60 text-purple-950', desc: 'Religious transcription name change.' },
              { title: 'Typographical Records Fix', bg: 'bg-blue-50 border-blue-200/60 text-blue-950', desc: 'Fix spelling/DOB mismatches.' }
            ].map((pkg, i) => (
              <div key={i} className={`p-8 bg-white border rounded-2xl ${pkg.bg} hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group`}>
                <h4 className="font-black text-base mb-4 leading-snug group-hover:text-blue-700 transition-colors">{pkg.title}</h4>
                <p className="text-slate-600 text-xs font-semibold mb-6">{pkg.desc}</p>
                <ul className="space-y-3 text-xs font-bold opacity-80 leading-snug">
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Affidavit Setup</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Press Advt. Desk</li>
                  <li className="flex items-start gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" /> Gazette Entry</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS WORKFLOW ================= */}
      <section className="py-16 md:py-24 bg-slate-100 border-y border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 max-w-lg mx-auto">
             <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">Standard Operating Procedure</h2>
             <p className="text-slate-500 font-semibold text-sm mt-3 leading-relaxed">Three essential tiers mapping core statutory validation timelines.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 z-0 rounded-full"></div>

            {[
              { step: '01', label: 'Consultation & File Initiation', desc: 'Submit fundamental structural queries and let our experts dictate the precise legal metrics.' },
              { step: '02', label: 'Digital Processing & Notarization', desc: 'We draft the mandated text and publish the dual-newspaper public notices.' },
              { step: '03', label: 'Gazette Delivery & Handover', desc: 'Receive the officially signed central publication log entries right at your doorstep.' }
            ].map((flow, i) => (
              <div key={i} className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-white border border-slate-200 text-slate-900 rounded-3xl mx-auto flex items-center justify-center text-3xl font-black shadow-xl mb-6 transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                  {flow.step}
                </div>
                <h4 className="font-black text-slate-900 text-lg leading-snug px-3">{flow.label}</h4>
                <p className="text-slate-500 font-medium text-xs leading-relaxed px-4">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REASONS + GAZETTE SAMPLE + LEAD FORM (Connected) ================= */}
      <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col - Reasons */}
            <div className="lg:col-span-4 space-y-6 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">The Legal Imperative of a Gazette</h2>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">Without a Central Gazette Notification, your name change holds no statutory validity in federal databases. Here is why it is critical:</p>
              
              <div className="space-y-5">
                {[
                  { title: 'Passport & Immigration Clearance', desc: 'Mandatory for statutory sync of your Passport data logs with federal entries.' },
                  { title: 'Financial Records Update (PAN/Bank)', desc: 'Required as per RBI guidelines for syncing primary administrative financial logs.' },
                  { title: 'Educational Academic Degrees Sync', desc: 'Crucial for future background checks and perfectly aligning your certificates.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300">
                    <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h5 className="font-black text-base text-slate-900 mb-1">{item.title}</h5>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Col - Gazette Sample */}
            <div className="lg:col-span-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 select-none">Output Format Sample</span>
              <div className="w-full h-full aspect-[3/4] bg-white border border-slate-300 rounded-xl p-6 flex flex-col justify-between shadow-inner text-left font-serif text-[10px] text-slate-400 select-none overflow-hidden relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Gazette_notification_by_Govt._of_India.jpg" alt="Official Gazette Sample" className="w-full h-full object-cover opacity-40" />
                
                <div className="absolute inset-0 pt-6 px-6 border-b-2 border-slate-900 text-center text-slate-800 font-bold bg-white/60 backdrop-blur-[2px]">
                  <p className="text-[12px] font-black">द भारत का राजपत्र</p>
                  <p className="text-[14px] uppercase font-serif tracking-widest font-black mt-1">The Gazette of India</p>
                  <p className="text-[8px] text-slate-600 font-sans tracking-widest mt-2">असाधारण / EXTRAORDINARY | PART IV</p>
                </div>
              </div>
            </div>

            {/* Right Col - Lead Form (Connected) */}
            <div className="lg:col-span-4 bg-slate-950 p-8 lg:p-10 rounded-3xl shadow-2xl text-white flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(37,99,235,0.2)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-black mb-1.5 uppercase leading-snug">Case Evaluation Request</h3>
                <p className="text-indigo-200 text-xs font-semibold mb-8">Submit your case details and our senior legal associates will contact you instantly.</p>
                
                <form className="space-y-4" onSubmit={handleLeadFormSubmit}>
                  <input type="text" name="name" value={leadFormData.name} onChange={handleLeadInputChange} placeholder="Enter Full Applicant Name..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <input type="tel" name="phone" value={leadFormData.phone} onChange={handleLeadInputChange} placeholder="Enter Contact Number..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <input type="email" name="email" value={leadFormData.email} onChange={handleLeadInputChange} placeholder="Enter Administrative Email ID..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <div className="relative">
                    <select name="service" value={leadFormData.service} onChange={handleLeadInputChange} className="w-full px-5 py-4 bg-white/10 text-indigo-200/50 text-xs font-bold rounded-xl border border-white/20 outline-none appearance-none cursor-pointer focus:bg-white/20 transition-colors">
                      <option className="bg-slate-950">Select intended purpose desk...</option>
                      <option className="bg-slate-900" value="General Name Change">General Adult Transition Portfolio</option>
                      <option className="bg-slate-900" value="Marriage Surname Shift">After Marriage Structural Shift</option>
                      <option className="bg-slate-900" value="Spelling Correction">Document Spelling Correction Fix</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-white/50 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button type="submit" disabled={isLeadSubmitting} className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider h-14 rounded-xl shadow-lg mt-2 transition-colors flex items-center justify-center gap-2">
                    {isLeadSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Get Free Callback"}
                  </button>
                  <p className="text-center text-[11px] font-bold text-amber-200 mt-4 leading-relaxed">Guaranteed privacy framework protocols ensure your data is secure.</p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INLINE CRM FORM (Connected) ================= */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="shrink-0 text-center xl:text-left max-w-xl xl:max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase leading-tight">Need Urgent Assistance With Your Application?</h3>
            <p className="text-blue-100 text-sm font-semibold mt-0.5 leading-relaxed">Let our specialized data compilers process your files and fast-track your Gazette notification.</p>
          </div>
          <form onSubmit={handleQuickFormSubmit} className="w-full max-w-3xl grid sm:grid-cols-4 gap-4">
            <input type="text" name="name" value={quickFormData.name} onChange={handleQuickInputChange} required placeholder="Full Legal Name" className="px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-xs font-bold text-white placeholder-blue-200 outline-none focus:bg-white/20 transition-colors" />
            <input type="tel" name="phone" value={quickFormData.phone} onChange={handleQuickInputChange} required placeholder="Mobile Number" className="px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-xs font-bold text-white placeholder-blue-200 outline-none focus:bg-white/20 transition-colors" />
            <input type="email" name="email" value={quickFormData.email} onChange={handleQuickInputChange} required placeholder="Personal Email ID" className="px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-xs font-bold text-white placeholder-blue-200 outline-none focus:bg-white/20 transition-colors" />
            <button type="submit" disabled={isQuickSubmitting} className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider h-11.5 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
               {isQuickSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>

      {/* ================= AVAILABLE CITIES (Marquee) ================= */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-3">Available Across India</h2>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-wider">Our digital workflow frameworks operate efficiently across all pan-national jurisdictions.</p>
        </div>
        
        {/* Infinite Scroll Track - Reverse Direction */}
        <div className="marquee-container w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee-reverse gap-8 px-4 cursor-grab active:cursor-grabbing">
            {[...locationsList, ...locationsList].map((loc, idx) => (
              <div key={idx} className="w-[300px] shrink-0 border border-slate-200 p-6 rounded-2xl bg-slate-50 group hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all">
                <div className="w-full h-32 mb-6 flex items-center justify-center text-slate-400 border border-slate-200 rounded-xl bg-white relative overflow-hidden group hover:shadow-md">
                  <img src={loc.img} alt={loc.city} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h4 className="font-black text-slate-900 text-lg mb-1.5 leading-snug px-1 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" /> {loc.city}
                </h4>
                <p className="text-slate-500 text-xs font-medium mt-1 leading-snug px-1">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEGAL FAQ ACCORDION ================= */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">Frequently Asked Inquiries: Gazette & Name Change</h2>
            <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-slate-500 font-medium">Common inquiries regarding statutory validation workflows centralized at the department.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: '1. Is a Central Gazette notification legally mandatory?', a: 'Yes. While local affidavits might work for minor internal changes, federal agencies (like the Passport Seva Kendra, Banks, and Income Tax Department) strictly mandate a Central Gazette notification as the ultimate proof of identity transition.' },
              { q: '2. What is the stipulated timeframe for final publication?', a: 'The statutory timeframe dictates a processing period of 3 to 5 weeks from the date of submission. This heavily depends on the backlog at the Department of Publication in Delhi. Our pre-verification ensures zero delays due to file rejections.' },
              { q: '3. Can this entire protocol be executed remotely without visiting Delhi?', a: 'Affirmative. Our digital mandate system allows us to execute the affidavit, coordinate national newspaper publications, and file the final physical dossier at the Central Press entirely on your behalf.' },
              { q: '4. What are the total costs involved in the Gazette process?', a: 'The costs vary depending on the type of change (General, Minor, or Religion change) and the public notice publication fees. Our standard package includes drafting, notary, two newspaper ads, government challan, and CD processing fees.' },
              { q: '5. Are there different requirements for a minor changing their name?', a: 'Yes. Minors require a specialized declaration signed by their parents or legal guardians. The application must also include the guardian’s valid ID proof to process modifications in school boards and birth registries.' },
              { q: '6. What happens if my application gets rejected by the department?', a: 'A rejection usually happens due to formatting errors in the CD or mismatch in the newspaper ad text. Our premium service includes a "Zero Rejection Guarantee" where our legal team pre-audits every single character before dispatch.' },
              { q: '7. Do I need to publish a newspaper ad in my local language?', a: 'According to government guidelines, you must publish your name change declaration in at least two newspapers: one in a national English daily, and one in a regional language newspaper active in your residential area.' },
              { q: '8. Can I use the Gazette publication for my Passport renewal?', a: 'Absolutely. The Central Gazette notification is the primary statutory document requested by the Regional Passport Office (RPO) when you apply for a passport re-issue due to a change in your name or surname.' }
            ].map((faq, idx) => (
              <div key={idx} className="border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left font-black text-sm md:text-base text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 shrink-0 mt-0.5 md:mt-1" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                <div className="p-6 pt-0 border-t-0 text-xs md:text-sm text-slate-600 font-medium leading-relaxed bg-white">
                  <div className="pl-9 md:pl-10">{faq.a}</div>
                </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}