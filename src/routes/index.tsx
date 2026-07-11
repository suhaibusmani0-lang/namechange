import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  FileSignature,
  FileText,
  IdCard,
  Check,
  ChevronRight,
  HelpCircle,
  AlertCircle,
  Loader2,
  ChevronDown
} from "lucide-react";
import { CTASection, PageHero } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Services | Name Change & Gazette Expert Delhi" },
      {
        name: "description",
        content:
          "We offer simple and legally approved name change services in Delhi. From Gazette publication and affidavits to newspaper ads and ID updates, we handle it all.",
      },
      { property: "og:title", content: "Our Services | Name Change Expert Delhi" },
      {
        property: "og:description",
        content:
          "Complete Name Change services including affidavits, newspaper ads, and Central Gazette publication with 100% legal validity.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const detailedServices = [
  {
    category: "Main Name Change Services",
    icon: FileSignature,
    description:
      "We help you legally change your name on all government records through the official Central Gazette publication process.",
    cards: [
      {
        name: "Central Gazette Publication",
        context:
          "The ultimate legal proof required to change your name anywhere in India. We handle the entire process from creating the file to submitting it to the Govt. Press.",
        proceedings: [
          "Prepare complete application file",
          "Pay Govt. processing fees",
          "Submit to Delhi Publication Dept.",
        ],
      },
      {
        name: "Name Change After Marriage/Divorce",
        context:
          "Specially designed for newly married women adding a surname, or divorced individuals wanting to go back to their maiden (original) name.",
        proceedings: [
          "Add husband's surname",
          "Restore maiden name",
          "Update marital records",
        ],
      },
      {
        name: "Spelling & Surname Corrections",
        context:
          "Got a spelling mistake or missing surname in your old certificates? We help you fix these typing errors legally so you face no issues in background checks.",
        proceedings: [
          "Fix typing & spelling mistakes",
          "Add/Remove middle name",
          "Match old document records",
        ],
      },
      {
        name: "Complete Name Change",
        context:
          "Want to change your entire first and last name for astrology, numerology, or personal reasons? We make the switch 100% legally valid.",
        proceedings: [
          "Astrology/Numerology changes",
          "Adopt a completely new name",
          "Secure full legal validity",
        ],
      },
    ],
  },
  {
    category: "Legal Documentation Services",
    icon: FileText,
    description:
      "We prepare error-free legal documents, affidavits, and newspaper ads required to process your name change smoothly.",
    cards: [
      {
        name: "Legal Affidavit Drafting",
        context:
          "We draft the main legal declaration on a non-judicial e-Stamp paper, exactly in the format required by the government and courts.",
        proceedings: [
          "Draft legal text format",
          "Procure e-Stamp paper",
          "Get Notary signature & seal",
        ],
      },
      {
        name: "Newspaper Advertisements",
        context:
          "It is a legal rule to announce your name change in public. We publish your notice in two newspapers (one English and one local language).",
        proceedings: [
          "Write the ad content",
          "Publish in a National daily",
          "Publish in a Local daily",
        ],
      },
      {
        name: "Gazette File Preparation",
        context:
          "The government rejects files with even a small mistake. We organize your photos, IDs, forms, and CD into a perfect, rejection-proof folder.",
        proceedings: [
          "Organize all paperwork",
          "Create digital CD files",
          "Double-check for any errors",
        ],
      },
      {
        name: "Govt. Form Submission",
        context:
          "No need to stand in long queues. We take care of signing the final papers and submitting your file directly to the Ministry in Delhi.",
        proceedings: [
          "Finalize all signatures",
          "Submit at Govt. counter",
          "Track publication status",
        ],
      },
    ],
  },
  {
    category: "ID & Bank Update Support",
    icon: IdCard,
    description:
      "Once your name is published in the Gazette, we guide you on how to easily update your new name across all major IDs.",
    cards: [
      {
        name: "Aadhaar Card Update Guide",
        context:
          "Step-by-step support on using your new Gazette certificate to update your name, address, and biometric details in the Aadhaar database.",
        proceedings: [
          "Match demographic data",
          "Link with Gazette proof",
          "Fix data mismatches",
        ],
      },
      {
        name: "PAN Card Update",
        context:
          "We help you sync your new legal name with the Income Tax Department without losing your old financial and tax transaction history.",
        proceedings: [
          "Match old tax records",
          "Update Income Tax portal",
          "Link with new legal name",
        ],
      },
      {
        name: "Passport Name Change",
        context:
          "Changing a name on a Passport is strict. We guide you on which Annexure forms to fill and how to clear the passport office checks easily.",
        proceedings: [
          "Fill correct Passport forms",
          "Prepare required Annexures",
          "Clear immigration checks",
        ],
      },
      {
        name: "Voter ID, Bank & Property",
        context:
          "Clear instructions on how to submit your Gazette copy to your bank branch, election commission, and property registry to update your accounts.",
        proceedings: [
          "Update Bank KYC",
          "Change Voter ID name",
          "Secure property papers",
        ],
      },
    ],
  },
];

function ServicesPage() {
  // --- FORM STATE & HANDLER ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Name Change'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Custom Backend Endpoint Call
      const response = await fetch("https://namechangeexpert.in/server/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your case review request has been submitted securely. We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', service: 'General Name Change' }); // Reset form
      } else {
        alert("Submission failed. Please check your backend connection.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Network error. Is your backend server running?");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Page Hero Component */}
      <PageHero
        eyebrow="Our Name Change Services"
        title={
          <>
            Complete Legal <span className="text-blue-600">Documentation</span>{" "}
            Made Easy
          </>
        }
        subtitle="Hassle-free and legally secure name change services. From drafting the first affidavit to delivering the final Gazette at your doorstep, we handle it all."
      />

      {/* Structural Informative Section */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Why Perfect Documentation Matters?
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
            When it comes to government IDs, even a tiny spelling mistake or wrong format can lead to rejected passports, stuck visas, or frozen bank accounts. We don't just fill forms; we bulletproof your documents. By strictly following government rules, we ensure your new identity is registered without a single hurdle.
          </p>
        </div>
      </section>

      {/* Deep Dive Category Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
        {detailedServices.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-10">
            {/* Category Headers */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-6 gap-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-blue-700 mb-2">
                  <group.icon className="w-6 h-6 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Category 0{groupIndex + 1}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{group.category}</h2>
                <p className="text-sm text-slate-500 mt-2 font-medium">
                  {group.description}
                </p>
              </div>
              <div className="hidden lg:block text-xs font-bold text-slate-400 uppercase tracking-widest">
                Expert Legal Processing
              </div>
            </div>

            {/* Individual Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {group.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 opacity-50 rounded-bl-full pointer-events-none group-hover:bg-blue-100 transition-colors" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 tracking-tight group-hover:text-blue-700 transition-colors">
                      <ChevronRight className="w-5 h-5 text-amber-500 shrink-0" /> {card.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
                      {card.context}
                    </p>
                  </div>

                  {/* Procedural Highlights */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-3">
                      What We Do:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.proceedings.map((proc, procIdx) => (
                        <span
                          key={procIdx}
                          className="bg-slate-50 text-slate-700 border border-slate-100 text-[11px] font-bold px-2.5 py-1.5 rounded-md flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> {proc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* General Compliance Matrix Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-20 pointer-events-none blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30">
              Zero Rejection Policy
            </span>
            <h2 className="text-3xl font-black mt-5 tracking-tight sm:text-4xl text-white">
              Why Our Strict Document Check Saves You Months
            </h2>
            <p className="text-sm text-slate-300 mt-5 leading-relaxed font-medium">
              The Government Press checks every application very strictly. If your lawyer uses the wrong format, publishes the ad in a non-approved newspaper, or burns the CD incorrectly, your file gets rejected and months are wasted. We use a proven checklist to ensure your file is 100% perfect before it even leaves our office.
            </p>
            <div className="mt-8 flex items-start gap-3 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-md">
              <AlertCircle className="w-6 h-6 text-amber-400 shrink-0" />
              <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                Important: We offer a "Zero Rejection Guarantee." We review every single word of your documents to make sure the government accepts your file in the very first attempt.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              {
                t: "100% Correct Affidavit Formats",
                d: "We use the exact legal templates and stamp papers approved by the Central Government.",
              },
              {
                t: "Approved Newspaper Ads",
                d: "We only publish your notice in newspapers that are officially recognized by the Govt. Press.",
              },
              {
                t: "Error-Free Digital Files (CD)",
                d: "We properly format and verify the soft-copy files required by the Ministry to prevent data errors.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="font-bold text-base text-white flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> {item.t}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium pl-8">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEAD FORM SECTION (Injected in Services Page) ================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                Free Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Need Help Choosing the Right Legal Service?
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Navigating legal documentation can be confusing. Submit your details, and our senior legal associates will review your case and guide you through the exact compliance steps required for your specific situation.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "100% Free Initial Case Review",
                  "Guaranteed Privacy & Data Security",
                  "Expert Guidance on Gazette & Affidavits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <div className="bg-slate-950 p-8 lg:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden group hover:shadow-[0_0_50px_rgba(79,70,229,0.15)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 uppercase leading-snug">Case Evaluation Request</h3>
                <p className="text-indigo-200 text-xs font-semibold mb-8">Fast-track your application today.</p>
                
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Full Applicant Name..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Contact Number..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Administrative Email ID..." className="w-full px-5 py-4 bg-white/10 text-white text-xs font-bold rounded-xl border border-white/20 outline-none placeholder-indigo-200/50 focus:bg-white/20 transition-colors" required />
                  <div className="relative">
                    <select name="service" value={formData.service} onChange={handleInputChange} className="w-full px-5 py-4 bg-white/10 text-indigo-200/50 text-xs font-bold rounded-xl border border-white/20 outline-none appearance-none cursor-pointer focus:bg-white/20 transition-colors">
                      <option className="bg-slate-950">Select intended purpose desk...</option>
                      <option className="bg-slate-900" value="General Name Change">General Adult Transition Portfolio</option>
                      <option className="bg-slate-900" value="Marriage Surname Shift">After Marriage Structural Shift</option>
                      <option className="bg-slate-900" value="Spelling Correction">Document Spelling Correction Fix</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-white/50 absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-black text-xs uppercase tracking-wider h-14 rounded-xl shadow-lg mt-2 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
                    {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Get Free Callback"}
                  </button>
                  <p className="text-center text-[11px] font-bold text-amber-200/70 mt-4 leading-relaxed">Guaranteed privacy framework protocols ensure your data is secure.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100 border border-blue-200 px-4 py-1.5 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-5 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Can I fix my spelling and change my surname in the same application?",
                a: "Yes! If you have multiple corrections (like fixing a spelling and adding a husband's surname), we can combine them into a single Gazette application to save you time and money.",
              },
              {
                q: "Which newspapers do you use for the advertisements?",
                a: "We strictly use major National English dailies and reputed local language newspapers that are officially accepted by the Central Gazette Department.",
              },
              {
                q: "Do I need to visit Delhi to submit the documents?",
                a: "Not at all. Our team handles the entire process for you. From drafting to standing in line at the government office in Delhi, we manage everything while you sit at home.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <h4 className="text-base font-black text-slate-900 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" /> {faq.q}
                </h4>
                <p className="text-sm text-slate-600 mt-3 pl-8 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}