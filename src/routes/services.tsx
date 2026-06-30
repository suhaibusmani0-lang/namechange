import { createFileRoute } from "@tanstack/react-router";
import { 
  CheckCircle2, 
  FileSignature, 
  FileText, 
  IdCard, 
  Scale, 
  BookOpen, 
  Check, 
  ChevronRight, 
  HelpCircle,
  AlertCircle
} from "lucide-react";
import { CTASection, PageHero } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Legal Services | Official Gazette Notification & Name Change Expert Delhi" },
      {
        name: "description",
        content:
          "Explore expert legal documentation services in Delhi. We specialize in Central Gazette publication, marriage surname modifications, judicial affidavit preparation, newspaper ad management, and formal government registry re-alignments.",
      },
      { property: "og:title", content: "Our Legal Services | Name Change Expert Delhi" },
      {
        property: "og:description",
        content:
          "Comprehensive legally-compliant portfolio tracking Central Gazette services, structured affidavits, and complete verification processing networks.",
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
    description: "Our primary identity alignment division executes standard procedural structures to modify your name on federal registries through verified government gazette publications.",
    cards: [
      {
        name: "Central Gazette Notification",
        context: "The final statutory benchmark for any individual seeking a legally binding identity switch across India. This service handles entire application dossier compilation for presentation before the Department of Publication.",
        proceedings: ["Compilation of digital text files", "Ministry voucher fee payments", "Official printing index setups"]
      },
      {
        name: "Name Change After Marriage / Divorce",
        context: "Structured explicitly to assist newly-weds or legally separated individuals who want to modify their hereditary last names, integrate marital identifiers, or completely restore ancestral maiden names.",
        proceedings: ["Matrimonial status adjustments", "Maiden profile restoration", "Decree mapping structures"]
      },
      {
        name: "Spelling & Surname Corrections",
        context: "Fixes extensive textual anomalies, missing middle labels, or deep layout printing errors in previous primary certificates that prevent smooth background verification pipelines.",
        proceedings: ["Clerical error resolution", "Syllable match verification", "Disparity mapping checks"]
      },
      {
        name: "First / Middle / Full Name Change",
        context: "Complete strategic identity redesign driven by astrological guidance, personal alignment, numerological conversions, or individual choice with absolute legal validity.",
        proceedings: ["Astrological profile sync", "Complete substitution sets", "Legal credential binding"]
      }
    ]
  },
  {
    category: "Documentation & Auxiliary Submissions",
    icon: FileText,
    description: "Comprehensive structural compliance operations to draft flawless evidentiary records, manage media entries, and build absolute verification backups.",
    cards: [
      {
        name: "Affidavit Preparation",
        context: "Drafting foundational court declarations on non-judicial stamp papers of recommended denominations, specifying precise identity transitions validated by certified executive magistrates.",
        proceedings: ["Judicial statement styling", "Stamp paper procurement", "Notary verification routing"]
      },
      {
        name: "Newspaper Advertisements",
        context: "Fulfilling public disclosure laws by running standardized classified notices in two prominent news publications—one national English daily and one regional vernacular daily.",
        proceedings: ["Classified copy composition", "Media house scheduling", "Clipping sheet compilation"]
      },
      {
        name: "Gazette Application Dossier Preparation",
        context: "Bundling complex operational forms, signed specimen declarations, identification cross-checks, and formatted diagnostic records into an absolute non-rejection system folder.",
        proceedings: ["Proforma indexing files", "Dossier bundle generation", "Defect screening filters"]
      },
      {
        name: "Digital Signature & Form Submission",
        context: "Providing end-to-end support for digital record formatting and processing your identity files directly through the central ministry counters in New Delhi.",
        proceedings: ["Electronic signature loops", "Counter delivery tracking", "Departmental liaison audits"]
      }
    ]
  },
  {
    category: "Government Document Support Systems",
    icon: IdCard,
    description: "Post-gazette records alignment pathways to update your freshly published official identity layout smoothly across primary state and national registries.",
    cards: [
      {
        name: "Aadhaar Record Mapping Support",
        context: "Guiding the systematic update of identification parameters in core residential database cards to completely align with the newly published Central Gazette notification decree.",
        proceedings: ["Demographic database check", "Biometric portal validation", "Discrepancy mitigation sets"]
      },
      {
        name: "PAN Card Data Update",
        context: "Synchronizing tax profiling structures with federal finance department servers to reflect the corrected legal name without affecting historical transaction records.",
        proceedings: ["Taxpayer record matching", "Digital portal validation", "Alphanumeric identity mapping"]
      },
      {
        name: "Passport Name Change Operations",
        context: "Comprehensive navigation through immigration compliance parameters to securely acquire re-issued international passports containing your modified identity data.",
        proceedings: ["Consular form structuring", "Annexure layout adjustments", "Appointment processing logs"]
      },
      {
        name: "Voter ID & Banking Record Updates",
        context: "Comprehensive verification pathways to transition electoral profiles and complex financial assets, savings instruments, or stock holdings under the updated legal name.",
        proceedings: ["Electoral rolls modification", "KYC database adjustment", "Asset validation matching"]
      }
    ]
  }
];

function ServicesPage() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Page Hero Component */}
      <PageHero
        eyebrow="Our Specialized Legal Portfolios"
        title={
          <>
            Complete Name Change &amp; <span className="text-gradient-brand">Documentation</span> Services
          </>
        }
        subtitle="Hassle-free, legally compliant administrative blueprints. Every phase—from legal drafting to Central Gazette publication—is managed by senior document specialists."
      />

      {/* Structural Informative Section */}
      <section className="py-12 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-navy tracking-tight">
            Why Standardized Legal Documentation Matters
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
            In any official state verification, a minor mismatch in spelling, surname structural patterns, or parental initials can cause unexpected rejections during passport tracking, immigration clearings, employment checks, or legacy wealth distribution. Our firm treats your documentation as a vital asset. By following strict federal publication laws, we ensure that your identity profiles are built cleanly, robustly, and with full legal compliance.
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
                <div className="flex items-center gap-3 text-primary mb-2">
                  <group.icon className="w-6 h-6 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    Portfolio Segment 0{groupIndex + 1}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-navy tracking-tight">{group.category}</h2>
                <p className="text-sm text-muted-foreground mt-2 font-medium">{group.description}</p>
              </div>
              <div className="hidden lg:block text-xs font-bold text-slate-400">
                Statutory Regulatory Division
              </div>
            </div>

            {/* Individual Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {group.cards.map((card, cardIndex) => (
                <div 
                  key={cardIndex}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-brand opacity-[0.02] rounded-bl-full pointer-events-none" />
                  <div>
                    <h3 className="text-xl font-bold text-navy flex items-center gap-2 tracking-tight">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0" /> {card.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
                      {card.context}
                    </p>
                  </div>

                  {/* Procedural Highlights */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">
                      Operational Action Points
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.proceedings.map((proc, procIdx) => (
                        <span 
                          key={procIdx}
                          className="bg-slate-100 text-slate-700 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5"
                        >
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" /> {proc}
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
        <div className="absolute inset-0 bg-gradient-brand opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Regulatory Standards
            </span>
            <h2 className="text-3xl font-extrabold mt-4 tracking-tight sm:text-4xl">
              Understanding the Rigorous Central Dossier Scrutiny
            </h2>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed font-medium">
              Every file lodged at the Department of Publication undergoes rigorous screening checks by verification desks. If your affidavit language lacks specific regulatory phrases, if the public ads run in unauthorized newspapers, or if the digital signature code structure contains errors, the application is promptly rejected. Our processing platform uses pre-screened compliance patterns to ensure that your file meets all requirements right from day one.
            </p>
            <div className="mt-6 flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                Important Notice: We run deep compliance filtering on all documents to maintain full security and completely eliminate structural errors before submission.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { t: "Judicial Format Verification", d: "Aligning stamp duties and state laws with standard federal templates." },
              { t: "Media Channel Validations", d: "Selecting licensed national and regional newspapers to ensure public notices are fully valid." },
              { t: "Electronic Profile Checks", d: "Formatting soft copy data into correct digital formats to align cleanly with ministerial indexing engines." }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 border border-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all">
                <h4 className="font-bold text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> {item.t}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
              Common Service Queries
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
              Essential Portfolio Guidelines &amp; Insights
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Can I manage multiple name modifications within a single application dossier?",
                a: "Yes. In cases where you need to combine typo updates, update a surname after marriage, or align middle strings across certificates, multiple changes can be bundled into a comprehensive application dossier to streamline the process."
              },
              {
                q: "What newspaper networks are selected for the mandatory public announcements?",
                a: "Our media division works exclusively with major national publications and widely circulated local daily newspapers that meet the verification standards set by the Central Gazette Department."
              },
              {
                q: "Is an explicit offline physical appearance necessary at the Delhi offices?",
                a: "No. Our centralized desk handles the entire local counter process, administrative follow-ups, and document filing workflows, meaning your physical presence is not required at the government counters."
              }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5 hover:border-primary/40 transition-all bg-slate-50/50">
                <h4 className="text-base font-bold text-navy flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" /> {faq.q}
                </h4>
                <p className="text-xs text-slate-600 mt-2.5 ml-7 leading-relaxed font-semibold">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Not sure which service fits your profile?"
        subtitle="Get a free professional consultation — our team will guide you through the ideal statutory verification pathway."
      />
    </div>
  );
}