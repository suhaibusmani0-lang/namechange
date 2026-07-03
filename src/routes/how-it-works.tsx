import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  MessageSquare,
  Newspaper,
  Scale,
  ShieldCheck,
  Compass,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  FileCheck2,
  BookmarkCheck,
} from "lucide-react";
import { CTASection, PageHero } from "@/components/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Legal Name Change & Gazette Publication Timeline" },
      {
        name: "description",
        content:
          "Discover our structured 4-step process for legal name change and Central Gazette notification. Step-by-step timeline covering legal consultation, affidavit drafting, newspaper ad insertion, and final publication logistics.",
      },
      { property: "og:title", content: "How It Works | Legal Name Change Timeline" },
      {
        property: "og:description",
        content:
          "A thoroughly professional, simple 4-step legal process for executing name change and Central Gazette notification smoothly.",
      },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const processes = [
  {
    icon: MessageSquare,
    title: "Step 1: Strategic Legal Consultation",
    desc: "Every legal journey begins with a meticulous background review. Our seasoned documentation specialists evaluate your identity modification requirements, cross-examine discrepancies in your active certificates, and prepare a customized roadmap tailored to your specific case structure.",
    details: [
      "Comprehensive verification of educational and birth records",
      "Analysis of matrimonial or astronomical change requirements",
      "Custom checklist generation for required supporting identity proofs",
    ],
  },
  {
    icon: ClipboardList,
    title: "Step 2: Affidavit Execution & Drafting",
    desc: "Our legal department drafts a structurally compliant, robust non-judicial affidavit. This document lists your original name, the proposed new name, valid residential identifiers, and a formal declaration statement. We manage the stamp paper procurement and ensure notary public verification.",
    details: [
      "Precision copywriting of judicial declaration templates",
      "Management of government stamp duties and document processing",
      "Formal attestation by certified notary officials",
    ],
  },
  {
    icon: Newspaper,
    title: "Step 3: Dual Newspaper Ad Insertions",
    desc: "To fulfill statutory public notice mandates, our media wing coordinates classified ads in two distinct, widely read daily newspapers—one national English publication and one regional language newspaper. This ensures full regulatory compliance before submitting your file.",
    details: [
      "Standard text layout design to prevent structural errors",
      "Coordination with authorized media networks for publication",
      "Compilation of complete print page cutouts as legal evidence",
    ],
  },
  {
    icon: FileCheck2,
    title: "Step 4: Central Gazette Publication",
    desc: "The final phase involves organizing all your verified documents—including your original affidavit, newspaper sheets, and formatted digital data (CD format)—into a secure folder for manual submission at the Department of Publication counters in New Delhi.",
    details: [
      "Rigorous pre-screening of the dossier to prevent rejections",
      "Direct manual delivery and handling at government office counters",
      "Final digital publication in the weekly online e-Gazette journal",
    ],
  },
];

const timelineBenchmarks = [
  {
    duration: "Phase 1: Day 1 to Day 2",
    title: "Initial Legal Intake & Document Assembly",
    context:
      "During this initial phase, our documentation desk conducts a thorough analysis of your case. We draft your specialized judicial affidavit layout, cross-verify all validation parameters, and compile the necessary digital folders required to seamlessly proceed with the subsequent steps.",
  },
  {
    duration: "Phase 2: Day 3 to Day 5",
    title: "Public Disclosure & Media Advertisements",
    context:
      "Once your legal affidavit is formally notarized, we design the required public announcement text. This notification is securely scheduled and published in two leading national and regional daily newspapers to maintain compliance with statutory public notice laws.",
  },
  {
    duration: "Phase 3: Week 2 to Week 6",
    title: "Government Registry Scrutiny & Publishing",
    context:
      "Your complete document dossier is delivered to the Central Gazette Office counters in New Delhi. The department's verification desk performs rigorous audits on the files. Once approved, the official name change decree is compiled, indexed, and formally published in the weekly digital e-Gazette journal.",
  },
  {
    duration: "Phase 4: Post-Publication",
    title: "Final Document Updates Support",
    context:
      "Once the e-Gazette notification is live, you can securely download your official copy. Our legal advisors then provide a structured roadmap to help you smoothly update your newly approved legal name across core document registries, including Aadhaar cards, PAN profiles, and Passports.",
  },
];

function HowItWorks() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Page Hero */}
      <PageHero
        eyebrow="Our Process Blueprints"
        title={
          <>
            A Simple <span className="text-gradient-brand">4-Step</span> Legal Name Change Process
          </>
        }
        subtitle="Our streamlined, end-to-end management takes care of everything—from initial drafting to final Central Gazette publication. We handle the complex compliance steps so you don't have to."
      />

      {/* Structural Overview */}
      <section className="py-16 bg-white border-b border-slate-200/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-navy tracking-tight">
            A Transparent, Compliant Path to Updating Your Legal Identity
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
            Navigating the rules of the Directorate of Printing can feel overwhelming. A single
            formatting error on your form, using an unapproved newspaper network, or an incorrect
            stamp duty layout can result in an automatic rejection, forcing you to start the process
            all over again. Our platform resolves these complexities by managing each step through a
            structured workflow that guarantees compliance and eliminates technical errors.
          </p>
        </div>
      </section>

      {/* Interactive Process Pipeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Execution Steps
          </span>
          <h2 className="text-3xl font-extrabold text-navy mt-3 tracking-tight sm:text-4xl">
            Step-by-Step Administrative Workflow
          </h2>
        </div>

        <ol className="grid gap-8 lg:grid-cols-2">
          {processes.map((p, i) => (
            <li
              key={p.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="absolute top-4 right-6 text-4xl font-black text-slate-100 select-none">
                0{i + 1}
              </div>
              <div>
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-xl mb-4">
                  <p.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-navy tracking-tight">{p.title}</h3>
                <p className="mt-3 text-xs text-slate-600 leading-relaxed font-medium">{p.desc}</p>
              </div>

              {/* Step Bullet Sub-items */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                {p.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[11px] text-slate-700 font-semibold"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Deep Timeline Narrative Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Expected Milestones
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3 sm:text-4xl lg:text-5xl">
              Complete Procedural Timeline Breakdown
            </h2>
            <p className="text-xs text-slate-300 mt-3 font-medium">
              A detailed guide to the processing times and operational phases involved in your name
              change validation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {timelineBenchmarks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black tracking-wider text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md border border-indigo-400/20">
                    {item.duration}
                  </span>
                  <h4 className="font-bold text-lg text-white mt-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400 shrink-0" /> {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed font-medium">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Core Assurances */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Quality Benchmarks
          </span>
          <h2 className="text-2xl font-extrabold text-navy mt-4 tracking-tight sm:text-3xl">
            Strict Pre-Submission Auditing Controls
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">
            To maintain our high success rate, our legal processing desk runs deep data-matching
            filters on every application packet before it leaves our office. We double-check core
            attributes, identity layouts, cross-checks for spelling variations, and newspaper
            verification tags against the official publication manuals. This rigorous evaluation
            guarantees full compliance and completely eliminates formatting rejections.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
            {[
              {
                title: "Zero Layout Vulnerability",
                text: "We verify the structural phrasing of your affidavit against current judicial rules to prevent language errors.",
              },
              {
                title: "Compliant Media Networks",
                text: "We use only officially recognized national and local newspapers to ensure public notices are fully valid.",
              },
              {
                title: "Direct Counter Delivery",
                text: "Our specialized logistics handlers manage the physical delivery to the New Delhi counters safely and efficiently.",
              },
            ].map((assurance, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                <h4 className="font-bold text-navy text-sm flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-primary shrink-0" /> {assurance.title}
                </h4>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed font-semibold">
                  {assurance.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to initiate your identity update request?"
        subtitle="Get step-by-step support from your very first document layout up to your finalized Central Gazette notification copy."
      />
    </div>
  );
}
