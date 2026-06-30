import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  CheckCircle2,
  Shield,
  Zap,
  FileSignature,
  ScrollText,
  ArrowRight,
  FileText,
  IdCard,
  Star,
  HelpCircle,
  Scale,
  Users,
  Check,
  Building2,
  Briefcase,
  AlertTriangle,
  FileCheck,
} from "lucide-react";
import { PHONE_PRIMARY, PHONE_PRIMARY_TEL, CTASection } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Name Change Expert Delhi | Gazette Notification & Legal Name Change Website" },
      {
        name: "description",
        content:
          "Complete online legal name change services in Delhi. Detailed step-by-step guidance for Central Gazette notification, affidavits, newspaper advertisements, and government document updates. 100% compliant legal process.",
      },
      {
        name: "keywords",
        content:
          "name change Delhi, gazette notification, legal name change online, name change procedure, affidavit Delhi, surname change after marriage, change name in passport, spelling correction documents",
      },
      { property: "og:title", content: "Name Change Expert Delhi | Gazette Notification Services" },
      {
        property: "og:description",
        content:
          "Hassle-free, legally compliant name change processes managed by experts in Delhi. Complete documentation from affidavits to gazette copies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Name Change Expert by Home2Home Services",
          description:
            "Legal name change, gazette notification and documentation services in Delhi.",
          telephone: ["+91-7982744129", "+91-9654484565"],
          email: "info@namechangeexpert.in",
          areaServed: "Delhi",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Kh No-14/11 Street No-36 Chandan Vihar Burari",
              addressLocality: "Delhi",
              postalCode: "110084",
              addressCountry: "IN",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Arya Samaj Rd, Block J, Uttam Nagar",
              addressLocality: "Delhi",
              postalCode: "110059",
              addressCountry: "IN",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      <Hero />
      <CoreIntroduction />
      <ServiceHighlights />
      <DetailedProcessSection />
      <ComprehensiveCategories />
      <EligibilitySection />
      <DeepLegalCompliance />
      <WhyChooseUsDetailed />
      <FaqSection />
      <CTASection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand-soft pt-20 pb-24 md:pt-28 md:pb-32 border-b border-border/50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="flex flex-col justify-center lg:col-span-7">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Star className="h-3.5 w-3.5 fill-primary" /> Premier Legal Documentation Authority
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Complete Legal Name Change &amp;{" "}
            <span className="text-gradient-brand">Central Gazette</span> Publication Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Streamline your official identity updates entirely online. Our specialized legal advisory team manages comprehensive affidavit drafting, national newspaper classification, and non-rejection desk submissions at the Central Gazette office without requiring your physical presence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              aria-label="Get a free consultation"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-brand transition transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Get a Free Consultation <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${PHONE_PRIMARY_TEL}`}
              aria-label={`Call ${PHONE_PRIMARY}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-8 py-4 text-base font-bold text-navy shadow-card transition hover:border-navy/30 hover:bg-slate-50"
            >
              <Phone className="h-5 w-5 text-primary" /> {PHONE_PRIMARY}
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3" aria-label="Trust badges">
            {[
              { icon: Shield, label: "100% Legally Binding Process" },
              { icon: Zap, label: "Streamlined Verification Speed" },
              { icon: CheckCircle2, label: "Zero Rejection Guarantee" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-white/90 p-3.5 text-xs font-bold text-navy shadow-sm"
              >
                <Icon className="h-5 w-5 text-primary shrink-0" aria-hidden /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-5 flex items-center">
          <div className="w-full relative rounded-3xl border border-border bg-white p-6 shadow-xl sm:p-8">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              Directorate of Printing Compliant
            </div>
            <div className="mb-6 flex items-center justify-between pt-2">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                The Gazette of India
              </p>
              <ScrollText className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <div className="space-y-3">
              <div className="h-3 w-3/4 rounded-full bg-slate-100" />
              <div className="h-3 w-full rounded-full bg-slate-100" />
              <div className="h-3 w-5/6 rounded-full bg-slate-100" />
              <div className="h-3 w-4/5 rounded-full bg-slate-100" />
            </div>
            <div className="my-6 h-px bg-slate-100" />
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Successful Applications", value: "8,500+" },
                { label: "Standard Execution Time", value: "10-15 Days" },
                { label: "Data Quality Ratio", value: "99.99%" },
                { label: "Senior Legal Advisors", value: "15+ Years" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-50 border border-slate-100 p-4 transition hover:bg-gradient-brand-soft">
                  <div className="text-2xl font-black text-navy">{s.value}</div>
                  <div className="text-[11px] font-semibold text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreIntroduction() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl">
          Understanding the Statutory Framework of Identity Modification in India
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Altering one’s legal identity name is a comprehensive statutory transformation governed by rigid federal regulations. In India, any modification to a citizen’s profile is considered incomplete and legally non-binding unless it is formally announced in the official e-Gazette (Rajpatra) published by the Government of India. While most people mistakenly presume that executing a localized notary affidavit or inserting a local newspaper advertisement satisfies the legal mandate, primary institutions like passport offices, banking networks, corporate employers, and revenue departments strictly require a certified copy of the Central Gazette Notification issued by the Department of Publication, Ministry of Housing and Urban Affairs. Our platform offers an automated endpoint solution to execute this elaborate paperwork seamlessly.
        </p>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  const groups = [
    {
      title: "Full Identity Name Modification",
      icon: FileSignature,
      desc: "Designed for individuals looking to completely substitute their current name, rectify significant structural spelling discrepancies, or transition to a newly desired name for personal, numerological, or religious reasons.",
      bullets: ["Spelling modifications", "Complete core name swap", "Religion change realignment", "Astrological status changes"],
    },
    {
      title: "Surname Change Post Marriage",
      icon: Users,
      desc: "Tailored for matrimonial realignments, allowing newly-weds or legally separated individuals to update their family name, incorporate marital titles, or securely restore their original maiden name across all legal channels.",
      bullets: ["Marriage certificate alignment", "Maiden name restoration", "Divorce decree alignment", "Passport record up-dation"],
    },
    {
      title: "Central Gazette Notification Services",
      icon: ScrollText,
      desc: "A comprehensive pathway where your legal dossier is systematically compiled, digitally recorded, and manually processed directly at the central government head office in New Delhi for publication.",
      bullets: ["Central Gazette documentation", "Specimen signature validation", "Official CD formatting text", "Department follow-ups tracking"],
    },
    {
      title: "Minor Name Correction Framework",
      icon: IdCard,
      desc: "Resolves name and surname discrepancies in birth certificates or academic boards (such as CBSE or ICSE) for children, ensuring accurate documentation profiles that prevent future institutional rejections.",
      bullets: ["Parental legal clearance check", "School certificate error fixes", "Guardianship declaration logs", "Birth record matching matrix"],
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Specialized Legal Modalities
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Comprehensive Documentation Categories We Offer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Modifying a legal identity profile requires absolute accuracy. Our operational streams are designed to guarantee full structural compliance and prevent paperwork errors.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-brand opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                <g.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-navy tracking-tight">{g.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
              
              <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-slate-100 pt-5 text-xs text-slate-700 font-semibold">
                {g.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailedProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Drafting of Legal Affidavit",
      desc: "The absolute baseline of the procedure begins with drafting a precise, legally binding affidavit. This document clearly articulates the applicant's original identity details, the proposed new identity, full residential validation, and a valid underlying rationale for the change. Our legal desk prepares this dossier according to judicial specifications on non-judicial stamp papers before obtaining validation from a competent executive magistrate or authorized notary public.",
    },
    {
      num: "02",
      title: "Newspaper Announcement Insertion",
      desc: "Following the affidavit execution, statutory law mandates a public disclosure via newspaper advertisements. This requires publishing prominent classified notices in two distinct daily publications—one major English national daily and one widely circulated regional vernacular newspaper corresponding to your residential state. Our media placement experts handle the exact layout text to meet strict government requirements.",
    },
    {
      num: "03",
      title: "Gazette Compilation Dossier Preparation",
      desc: "This is the most critical technical phase of the file assembly. Here, all supplementary verified paperwork—including the original notary public affidavit, authentic newspaper clippings, self-attested identity proof credentials, pre-formatted proforma validation letters, and a specially compiled digital soft copy matching text (CD layout format)—is organized into a secure folder setup.",
    },
    {
      num: "04",
      title: "Physical Lodgements at Government Department",
      desc: "The assembled physical dossier file is securely delivered to the Central Department of Publication (Civil Lines, Delhi). Our local processing agents manage the immediate manual counters, resolve minor parsing inquiries raised by government inspectors, and oversee structural administrative follow-ups to keep your application moving smoothly.",
    },
    {
      num: "05",
      title: "Official Publication & Digital Release",
      desc: "Once the verification authorities approve the file parameters, the official notification order is published in the weekly digital e-Gazette network registry of the Government of India. This digital document download serves as your absolute legal proof, authorizing you to swiftly update your identity records across all state and federal registries.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Standard Operating Protocol</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            The Definitive Phase-Wise Execution Protocol
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            We follow strict legal workflows and statutory directives to ensure your file parameters successfully pass regulatory inspection on the first attempt.
          </p>
        </div>

        <div className="relative border-l border-slate-300 ml-4 md:ml-8 space-y-12 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div key={s.num} className="relative pl-8 sm:pl-12 group">
              <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-black ring-4 ring-white group-hover:bg-navy transition-colors">
                {s.num}
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-xl font-bold text-navy tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComprehensiveCategories() {
  const cases = [
    { type: "Corporate / Professional Realignment", icon: Briefcase, text: "For senior business executives, professional directory candidates, and corporate board members who need to standardize their identity data across multiple active systems." },
    { type: "Government Employees Alignment", icon: Building2, text: "Essential for public sector (State or Central Government) personnel whose employment databases, provident fund records, or service files contain structural name variations." },
    { type: "Post-Divorce Status Reversion", icon: Scale, text: "A smooth legal stream providing secure transitions to safely restore ancestral family surnames following final judicial separation orders." },
    { type: "Adoption & Guardianship Mapping", icon: Users, text: "Ensures accurate updates to secondary school boards, academic registries, and legal inheritance files for adopted minors according to updated parenthood lines." }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl">
            Critical Scenarios Requiring Gazette Publication
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-semibold">
            Central Government Gazette Notifications are a strict statutory mandate under federal law for the following scenarios:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-4 items-start">
              <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                <c.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">{c.type}</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EligibilitySection() {
  const checkmarks = [
    "The applicant must possess valid Indian Citizenship with verified primary credentials.",
    "The primary candidate must be at least 18 years of age to initiate independent file logs.",
    "For minor applicants, execution signatures must be authorized by legal biological parents or legal guardians.",
    "The applicant must not have any underlying fraudulent or criminal intention to evade law enforcement.",
    "The modification request must be supported by a legitimate reasoning framework."
  ];
  return (
    <section className="py-20 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Compliance Manual</span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
            Eligibility Evaluation Parameters &amp; Framework Mandates
          </h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Before creating an official Gazette listing application, it is vital to review the eligibility parameters set by the department. All applications must meet the following baseline guidelines:
          </p>
          <ul className="mt-6 space-y-3.5 text-sm font-semibold text-slate-700">
            {checkmarks.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-brand p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white font-black text-9xl">LAW</div>
          <h3 className="text-xl font-bold mb-4">Mandatory Verification Checklist</h3>
          <p className="text-xs text-indigo-100 mb-6 leading-relaxed">
            Ensure the following certified document scans are prepared in clear quality before initiating your setup request:
          </p>
          <div className="space-y-3 text-xs font-bold">
            {["Current Residential Identity & Address Validation proofs", "Digital Passport Size Clear Photographs with explicit background", "Matrimonial Registration certificates / Decree sheets where applicable", "Attested Hardcopy paper clippings from licensed print publications"].map((doc, idx) => (
              <div key={idx} className="bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" /> {doc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeepLegalCompliance() {
  return (
    <section className="py-16 bg-amber-50/60 border-b border-slate-200/50 px-4">
      <div className="max-w-4xl mx-auto border border-amber-200 bg-amber-50 p-6 md:p-8 rounded-2xl flex gap-4 items-start">
        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-amber-900">Crucial Statutory Warning Regarding Misrepresentation</h3>
          <p className="text-xs text-amber-800 mt-2 leading-relaxed font-semibold">
            Submitting false information, misrepresenting identity credentials, or initiating an identity change to evade legal liabilities or criminal records constitutes a serious offense under the Indian Penal Code (IPC) and Directorate of Printing directives. Our compliance team thoroughly evaluates every file structure. We maintain a zero-tolerance policy and immediately cancel applications that show suspicious or fraudulent indicators.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsDetailed() {
  const pillars = [
    { icon: Scale, title: "Uncompromising Legal Integrity", text: "Our document generation architecture strictly matches central regulatory updates, keeping your profile fully compliant with institutional standards." },
    { icon: FileCheck, title: "Error-Free Scrutiny Mechanism", text: "Our legal analysts manually audit every proforma entry and verification line to eliminate the minor clerical errors that frequently lead to official file rejections." },
    { icon: Shield, title: "Complete Confidentiality Infrastructure", text: "Your personal data assets and government-issued credential files are stored behind modern enterprise-grade security layers to protect client confidentiality." },
  ];
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Institutional Trust</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
          Why Thousands of Clients Choose Our Expert Legal Desk
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/70 p-6 rounded-2xl shadow-sm transition hover:shadow-md">
              <div className="p-3 bg-primary/10 w-fit rounded-xl text-primary mb-5">
                <p.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy mb-2">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "What is a Central Gazette Notification and why is it required?", a: "The Central Gazette of India is an official weekly journal published by the government to record formal declarations. For critical identification modifications—such as updating public records, military documents, banking structures, and passports—presenting a certified copy of your Central Gazette entry is the only legally conclusive proof accepted across India." },
    { q: "What is the expected processing timeline for a complete name change?", a: "Drafting the initial judicial affidavit and publishing the two required newspaper announcements takes approximately 2 to 4 working days. Once the compiled dossier is delivered to the government printing center, final validation and publishing in the digital gazette registry typically takes around 3 to 4 weeks." },
    { q: "Can I make edits to my application details after submitting data online?", a: "Yes. Our expert scrutiny team reviews your file details and allows edits, corrections, or metadata adjustments right up until your physical application folder is locked for submission at the central government office counters." },
    { q: "What expenses are covered within your comprehensive service fee structure?", a: "Our pricing structure is completely transparent and includes all processing costs: judicial stamp paper duties, professional legal drafting, public notice print spaces in two major publications, and the official central government gazette publication handling fees." },
    { q: "How do I resolve spelling differences between my school documents and identity cards?", a: "This is a very common issue often referred to as an alias name conflict. Our platform manages this by drafting an explicit, comprehensive public announcement file that legally confirms the certificate holder and the identity card holder are the exact same individual." }
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
            Detailed Legal Resolutions &amp; Guidelines
          </h2>
        </div>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl p-5 hover:border-primary/40 transition-colors bg-slate-50/50"
            >
              <h4 className="text-base font-bold text-navy flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />{" "}
                {f.q}
              </h4>
              <p className="text-xs text-slate-600 mt-2.5 ml-7 leading-relaxed font-semibold">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}