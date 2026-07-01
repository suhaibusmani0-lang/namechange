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
  MapPin,
  Globe,
  MessageSquare,
  ThumbsUp,
  FileSearch,
} from "lucide-react";
import { PHONE_PRIMARY, PHONE_PRIMARY_TEL, CTASection } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Name Change Expert Delhi | Easy Gazette Notification Services in India" },
      {
        name: "description",
        content:
          "Easy and legal online name change services in India. We help you with affidavits, newspaper ads, and Central Gazette notifications without any hassle.",
      },
      {
        name: "keywords",
        content:
          "name change service India, gazette name change service, name correction service, name change after marriage, minor name change, online name change consultation, name change Delhi, name change Mumbai, name change Bangalore",
      },
      { property: "og:title", content: "Name Change Expert | Easy Gazette Notification Services" },
      {
        property: "og:description",
        content:
          "Change your name legally and easily. We handle all your paperwork, from affidavits to the final government Gazette copy.",
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
            "Professional legal name change, gazette notification and comprehensive documentation services in India.",
          telephone: ["+91-7982744129", "+91-9654484565"],
          email: "info@namechangeexpert.in",
          areaServed: "India",
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
      <TrustSection />
      <CoreIntroduction />
      <DetailedServices />
      <DetailedProcessSection />
      <ComprehensiveCategories />
      <EligibilitySection />
      <DeepLegalCompliance />
      <WhyChooseUsDetailed />
      <LocationsSeoSection />
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
            <Star className="h-3.5 w-3.5 fill-primary" /> India's Trusted Name Change Experts
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Easy & Legal Name Change &amp;{" "}
            <span className="text-gradient-brand">Gazette Services</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Change your name legally from the comfort of your home. We manage everything for you—from creating affidavits and newspaper ads to submitting your file at the Central Gazette office. Fast, secure, and available across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              aria-label="Start Your Process"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-brand transition transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Start Your Process <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`https://wa.me/917982744129`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-white px-8 py-4 text-base font-bold text-green-700 shadow-card transition hover:border-green-600/50 hover:bg-green-50"
            >
              <MessageSquare className="h-5 w-5" /> WhatsApp Enquiry
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3" aria-label="Trust badges">
            {[
              { icon: Shield, label: "100% Legal & Secure" },
              { icon: Zap, label: "Fast Processing" },
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
              Government Compliant
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
                { label: "Happy Clients", value: "8,500+" },
                { label: "Normal Time", value: "10-15 Days" },
                { label: "Success Rate", value: "99.9%" },
                { label: "Legal Experts", value: "15+ Years" },
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

function TrustSection() {
  const trustFactors = [
    { icon: Globe, title: "Serving All Over India", text: "Whether you live in Delhi, Mumbai, or Bangalore, we can help you online." },
    { icon: FileCheck, title: "Full Document Help", text: "We guide you in making affidavits and organizing your files correctly." },
    { icon: MessageSquare, title: "Online Consultation", text: "Talk to our experts from home to understand how we can help you." },
    { icon: ThumbsUp, title: "Great Customer Reviews", text: "Thousands of people have successfully changed their names with us." },
    { icon: Shield, title: "Transparent Process", text: "No hidden fees. We tell you the exact cost and time upfront." }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustFactors.map((factor, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <factor.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-navy mb-2">{factor.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{factor.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreIntroduction() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl">
          Why Do You Need a Gazette Notification to Change Your Name?
        </h2>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed font-medium text-justify">
          Changing your name legally in India is a strict process. Many people think that just making a local affidavit or giving an ad in a newspaper is enough. But that is not true. If you want to update your name in important places like your Passport, Bank Account, PAN Card, or Office records, they will ask for a <strong>Central Gazette Notification</strong> issued by the Government of India.
          <br /><br />
          Whether you want to correct a small spelling mistake in your marksheet, change your surname after marriage, or completely change your name for personal or astrological reasons, the Government Gazette is the final proof you need. We make this tough paperwork very easy for you. We help you draft the perfect affidavit, publish the right newspaper ads, and submit your file to the Government office in Delhi, all while you relax at home.
        </p>
      </div>
    </section>
  );
}

function DetailedServices() {
  const services = [
    {
      title: "Name Change Service India",
      icon: Globe,
      desc: "Want to change your name completely? Whether it is for personal, astrological, or religious reasons, we handle the entire legal paperwork for adults across India.",
      benefits: ["Valid across all of India", "No need to visit government offices", "Complete file preparation"],
      process: "We check your IDs, make your affidavit, publish newspaper ads, and submit your file for you.",
      link: "/contact"
    },
    {
      title: "Gazette Name Change Service",
      icon: ScrollText,
      desc: "The Central Gazette is the final proof of your new name. We make sure your file is perfectly prepared and published in the official Government of India Gazette.",
      benefits: ["Accepted by Passport & Visa offices", "Follows all government rules", "You get a digital Gazette copy"],
      process: "We do the affidavit, two newspaper ads, CD formatting, and physical submission in Delhi.",
      link: "/contact"
    },
    {
      title: "Name Correction Service",
      icon: FileSearch,
      desc: "Small spelling mistakes in your 10th marksheet, PAN, or birth certificate can cause big problems. We help you fix these errors legally through the Gazette.",
      benefits: ["Stops documents from getting rejected", "Matches your name on all IDs", "Safe for background checks"],
      process: "We prepare a special 'One and the Same Person' affidavit and follow the standard publishing steps.",
      link: "/contact"
    },
    {
      title: "Name Change After Marriage",
      icon: Users,
      desc: "Are you a woman adopting your husband's surname? Or do you want your maiden name back after a divorce? We make this update legally safe and easy.",
      benefits: ["Easy to open joint bank accounts", "Smooth updates for Aadhaar and Passport", "Legally safe name change"],
      process: "We use your marriage certificate or divorce papers along with a custom affidavit to update your name.",
      link: "/contact"
    },
    {
      title: "Minor Name Change",
      icon: IdCard,
      desc: "Changing a child's name (under 18 years) needs special permission from parents. We help update their name for school records and passports so they don't face issues later.",
      benefits: ["Fixes school board (CBSE/ICSE) problems", "Helps in getting student visas easily", "Full legal support for parents"],
      process: "Parents sign the affidavit, we publish special ads for minors, and submit the file to the Gazette.",
      link: "/contact"
    },
    {
      title: "Online Consultation",
      icon: MessageSquare,
      desc: "Not sure what to do? Talk to our experts. We offer detailed online advice to help you figure out the exact steps needed for your specific name change problem.",
      benefits: ["Expert check of your current IDs", "Clear details on cost and time", "Find out any legal problems early"],
      process: "Just message us on WhatsApp or fill our form. Share your documents safely and get a step-by-step plan.",
      link: "/contact"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How We Can Help You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From fixing small spelling mistakes to changing your full name, we provide services for every need across India.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div key={idx} className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 flex-grow">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand text-white flex items-center justify-center mb-6 shadow-md">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{s.desc}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Key Benefits:</h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    {s.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-100 text-sm text-slate-600">
                  <span className="font-bold text-navy">Process:</span> {s.process}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Link to={s.link} className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-white border-2 border-primary/20 px-4 py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-colors">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
      title: "Step 1: Share Your Details",
      desc: "First, you share your current IDs (like Aadhaar or PAN), a photo, and the new name you want. Our team checks your documents carefully to make sure everything follows government rules so your application doesn't get rejected later.",
    },
    {
      num: "02",
      title: "Step 2: We Make the Legal Affidavit",
      desc: "Once checked, we create a proper legal affidavit for you on stamp paper. This document explains your old name, new name, and the reason for the change. It is then signed by a notary to make it official.",
    },
    {
      num: "03",
      title: "Step 3: Newspaper Advertisement",
      desc: "The government rule says you must tell the public about your name change. We publish a small ad about your name change in two newspapers—one English and one local language paper. We write the exact words the government wants.",
    },
    {
      num: "04",
      title: "Step 4: Central Gazette Submission",
      desc: "Now comes the main part. We collect your affidavit, newspaper ads, photos, and a digital CD, and put them in a file. Our team personally submits this file to the Government Gazette office in New Delhi and answers any questions they might have.",
    },
    {
      num: "05",
      title: "Step 5: Get Your Official Gazette Copy",
      desc: "Once the government approves, your new name is printed in the official e-Gazette. We send you this digital copy. You can now use this copy to safely update your Passport, Bank Accounts, PAN Card, and Aadhaar Card.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">How It Works</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Our Simple 5-Step Process
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed">
            We have made the difficult government process very easy for you. Just follow our steps and get your work done smoothly.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-12 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div key={s.num} className="relative pl-8 sm:pl-12 group">
              <div className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-black ring-4 ring-slate-50 shadow-md">
                {s.num}
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-navy tracking-tight">{s.title}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed font-medium">{s.desc}</p>
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
    { type: "Job & Business Records", icon: Briefcase, text: "For professionals who need their names to match exactly across their office records, degrees, and business documents." },
    { type: "Government Employees", icon: Building2, text: "Very important for Govt workers whose service files, PF accounts, or official records have a different spelling." },
    { type: "Divorce & Surname Change", icon: Scale, text: "A safe and legal way for women to drop their husband's surname and go back to their original family name after a divorce." },
    { type: "Adoption Updates", icon: Users, text: "Helps update the names of adopted children in school records and property papers legally." }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl">
            Who Needs a Gazette Notification?
          </h2>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed font-semibold">
            The Government makes it compulsory to have a Gazette notification in these situations:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-4 items-start hover:border-primary/30 transition-colors">
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
    "You must be an Indian Citizen with valid ID proofs.",
    "You must be at least 18 years old. (If you are under 18, parents will apply for you).",
    "Parents or legal guardians must sign for minor children.",
    "You should not be changing your name to hide from the police or to run away from loans.",
    "You must have a real and valid reason for the name change."
  ];
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Important Rules</span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
            Who Can Apply & What You Need
          </h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Before we apply to the Government, please check these basic rules. This ensures your application doesn't get rejected:
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
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white font-black text-9xl">RULES</div>
          <h3 className="text-xl font-bold mb-4">Documents You Will Need</h3>
          <p className="text-xs text-indigo-100 mb-6 leading-relaxed">
            Please keep clear photos or scans of these documents ready:
          </p>
          <div className="space-y-3 text-xs font-bold">
            {["ID and Address Proof (Like Aadhaar or Voter ID)", "Clear Passport Size Photos", "Marriage Certificate or Divorce papers (If applicable)", "School marksheets (for spelling corrections)"].map((doc, idx) => (
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
      <div className="max-w-4xl mx-auto border border-amber-200 bg-amber-50 p-6 md:p-8 rounded-2xl flex gap-4 items-start shadow-sm">
        <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-amber-900">Important Legal Warning</h3>
          <p className="text-xs text-amber-800 mt-2 leading-relaxed font-semibold text-justify">
            Giving fake information, using fake IDs, or changing your name to run away from bank loans or criminal cases is a crime in India. Our team checks every file carefully. We will cancel any application if we find that someone is trying to cheat or break the law.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsDetailed() {
  const pillars = [
    { icon: Scale, title: "100% Correct Legal Work", text: "We prepare your documents exactly as the Government wants, so you don't face any problems later." },
    { icon: FileCheck, title: "Zero Mistakes Check", text: "Our team checks your file multiple times to remove small spelling or typing mistakes before submitting." },
    { icon: Shield, title: "Your Data is Safe", text: "Your personal details and documents are kept completely secure and private with us." },
  ];
  return (
    <section className="py-20 bg-white border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Trust & Safety</span>
        <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-14 text-left">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/70 p-6 rounded-2xl shadow-sm transition hover:shadow-md">
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

function LocationsSeoSection() {
  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Gurgaon", "Noida", "Chennai", "Kolkata", "Ahmedabad"];
  
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-navy">Serving Major Cities Across India</h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            The Central Gazette office is in New Delhi, but you do not need to travel to Delhi! We work online and help clients from all over India. Whether you need a Name Change in Delhi, Name Change in Mumbai, Name Change in Bangalore, or Name Change in Pune, we manage everything. We get your newspaper ads done locally in your city, and submit the final file directly to the Delhi office for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, idx) => (
              <span key={idx} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm hover:border-primary/50 cursor-default transition-colors">
                Name Change in {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "What is a Central Gazette Notification and why do I need it?", a: "The Central Gazette is an official government book published every week. If you want to change your name in your Passport, Bank, or school records, they will not accept just a simple affidavit. They will ask for a copy of the Central Gazette to prove your new name legally." },
    { q: "How many days does it take to change my name completely?", a: "Making the affidavit and publishing the two newspaper ads takes about 2 to 4 days. After we submit the file to the Government office in Delhi, they take around 3 to 4 weeks to publish your name in the e-Gazette." },
    { q: "Can I correct mistakes if I gave the wrong spelling by mistake?", a: "Yes. Our team checks your file before sending it to the government. We will show it to you, and you can make changes. But once the file is submitted to the Government, you cannot change it without making a new application." },
    { q: "What is included in your total fees?", a: "Our fees include everything: the cost of stamp paper, making the affidavit, paying for the two newspaper ads, file preparation, and the official Government Gazette fees. There are no extra or hidden charges." },
    { q: "My name spelling is different in my 10th marksheet and Aadhaar card. How to fix it?", a: "This is a very common problem. We will make a special 'One and the Same Person' affidavit for you. We will publish it in the Gazette, which will legally prove that both names belong to you. This solves problems during visa checks or job interviews." }
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Questions & Answers
          </span>
          <h2 className="text-3xl font-extrabold text-navy tracking-tight mt-3 sm:text-4xl">
            Frequently Asked Questions
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
              <p className="text-sm text-slate-600 mt-3 ml-7 leading-relaxed font-medium text-justify">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}