import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  ArrowRight,
  MessageCircle,
  Clock,
  ShieldCheck,
  HelpCircle,
  FileText,
  Loader2,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY,
  PHONE_SECONDARY_TEL,
  EMAIL,
  WHATSAPP_URL,
  PageHero,
} from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Official Legal Consultation Desk | Name Change Expert" },
      {
        name: "description",
        content:
          "Connect with our official legal documentation desks in New Delhi. Reach Name Change Expert for professional Central Gazette applications, affidavit queries, and immediate verification desk assistance.",
      },
      { property: "og:title", content: "Contact Legal Consultation Desk | Name Change Expert" },
      {
        property: "og:description",
        content:
          "Schedule an expert evaluation log at our Burari or Uttam Nagar corporate offices for structured documentation assistance.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased font-sans">
      <PageHero
        eyebrow="Connect With Our Experts"
        title={
          <>
            Get Your <span className="text-gradient-brand">Professional</span> Consultation Today
          </>
        }
        subtitle="Submit your validation query, connect over secure WhatsApp streams, or visit one of our localized New Delhi corporate desks. Our processing team responds within one business hour."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <a
              href={`tel:${PHONE_PRIMARY_TEL}`}
              aria-label={`Call ${PHONE_PRIMARY}`}
              className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-brand px-6 py-4 text-base font-bold text-white shadow-brand transition transform hover:translate-y-[-1px] hover:shadow-lg"
            >
              <Phone className="h-5 w-5" /> Call Hotline: {PHONE_PRIMARY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-md transition transform hover:translate-y-[-1px] hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" /> Instant WhatsApp Desk
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label={`Email ${EMAIL}`}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-4 text-base font-bold text-navy shadow-card transition hover:border-primary hover:bg-slate-50"
            >
              <Mail className="h-5 w-5 text-primary" /> Electronic Mail Support
            </a>
          </div>

          <div className="grid gap-10 lg:grid-cols-5 items-start">
            {/* Form Component Render */}
            <ContactForm />

            <aside className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Clock className="w-4 h-4 text-primary" /> Central Helpdesk Coordinates
                </h2>
                <ul className="mt-4 space-y-4 text-sm font-semibold text-slate-700">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" aria-hidden />
                    <div>
                      <span className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
                        Direct Call Terminals
                      </span>
                      <a
                        href={`tel:${PHONE_PRIMARY_TEL}`}
                        className="block font-bold text-navy hover:text-primary text-base transition-colors"
                      >
                        {PHONE_PRIMARY} (Primary Desk)
                      </a>
                      <a
                        href={`tel:${PHONE_SECONDARY_TEL}`}
                        className="block font-bold text-navy hover:text-primary text-base transition-colors mt-1"
                      >
                        {PHONE_SECONDARY} (Alternate Liaison)
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 border-t border-slate-50 pt-3">
                    <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" aria-hidden />
                    <div>
                      <span className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
                        Secure Inbox Systems
                      </span>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-bold text-navy hover:text-primary text-base transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {[
                {
                  tag: "Corporate Head Office",
                  icon: Building2,
                  addr: "Kh No-14/11, Street No-36, Chandan Vihar, Burari, Delhi - 110084",
                  hours: "Mon - Sat: 09:30 AM - 06:30 PM",
                },
                {
                  tag: "Regional Branch Desk",
                  icon: MapPin,
                  addr: "Arya Samaj Rd, Near Gupta Jewellery Shop, Block J, Uttam Nagar, Delhi - 110059",
                  hours: "Mon - Sat: 10:00 AM - 07:00 PM",
                },
              ].map((o) => (
                <address
                  key={o.tag}
                  className="not-italic rounded-2xl border border-slate-200 bg-white p-6 shadow-sm relative overflow-hidden"
                >
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <o.icon className="h-4 w-4 text-primary shrink-0" aria-hidden />
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                      {o.tag}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm font-bold text-navy leading-relaxed">{o.addr}</p>
                  <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-bold">
                    <span>Operational Timing Window:</span>
                    <span className="text-slate-600 font-extrabold">{o.hours}</span>
                  </div>
                </address>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Institutional Assurances
          </span>
          <h2 className="text-3xl font-extrabold mt-4 tracking-tight">
            What Happens After You Submit A Consultation Ticket?
          </h2>
          <p className="text-sm text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
            Our verification networks treat incoming records with strict privacy protocols. Your
            documentation flow runs through automated security pipelines.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            {[
              {
                title: "Immediate Document Evaluation",
                text: "A legal specialist calls you back within an hour to analyze your case details and check certificate text configurations.",
              },
              {
                title: "Flawless File Assembly",
                text: "We prepare clear proforma files and signature sheets based on active federal rules to eliminate technical layout defects.",
              },
              {
                title: "Direct Administrative Filing",
                text: "Our staff handles delivery directly at the Central Department of Publication counters in New Delhi.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> {step.title}
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed font-medium">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-black text-navy tracking-tight text-center mb-10">
            Frequently Discussed Intake Queries
          </h3>
          <div className="space-y-4">
            {[
              {
                q: "Is there any charge for the initial consultation ticket?",
                a: "No. Our preliminary analysis, certificate layout checking, and advice regarding structural application categories are completely free of cost.",
              },
              {
                q: "What should I bring if I plan to visit the Burari or Uttam Nagar desk?",
                a: "Please bring along clear physical copies or digital scans of your previous birth certificates, school certificates, or matrimonial records, as well as a government-issued address proof document.",
              },
              {
                q: "Can your team manage name updates for clients living outside Delhi?",
                a: "Yes. Since the e-Gazette is governed by the central printing directorate, our centralized New Delhi hub handles file collections and submissions for applicants all across the country.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl flex gap-3 items-start"
              >
                <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy text-sm">{faq.q}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-semibold">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------------------------------------------------------
// CONTACT FORM - UPDATED TO BE 100% BULLETPROOF AGAINST HANGING
// ------------------------------------------------------------------
function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // Controlled State banaya gaya hai taaki input par react ka control rahe
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    setStatus("loading");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Direct state bhej rahe hain
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", service: "", message: "" }); // Form clear karo

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      autoComplete="off" // Browser autofill ko rokne ki koshish
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
      aria-label="Contact form"
    >
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h3 className="text-xl font-bold text-navy tracking-tight">Secure Intake Form</h3>
        <p className="text-xs text-muted-foreground mt-1">
          Please provide accurate credential information to prevent communication delays.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy">
            Full Legal Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="new-password" // Chrome ka ziddi autofill block karne ki ninja trick
            value={formData.name}
            onChange={handleChange}
            disabled={status === "loading"}
            aria-label="Full name"
            placeholder="John Doe"
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 font-medium disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-navy">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="new-password"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === "loading"}
            aria-label="Phone number"
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 font-medium disabled:opacity-60"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy">
          Select Identity Category Service Pathway
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          disabled={status === "loading"}
          aria-label="Service required"
          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 font-bold text-slate-700 disabled:opacity-60"
        >
          <option value="">Choose your processing segment...</option>
          <option value="gazette">Central Gazette Notification</option>
          <option value="marriage_divorce">Name Change After Marriage / Divorce Reversion</option>
          <option value="affidavit">Judicial Affidavit Preparation</option>
          <option value="govt_update">Government Record Up-dation Support</option>
          <option value="other">Other Discrepancy Rectifications</option>
        </select>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy">
          Detailed Context / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          autoComplete="new-password"
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          aria-label="Message"
          placeholder="Please describe the spelling errors or structural variations across your certificates..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 font-medium disabled:opacity-60"
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 pt-6">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          aria-label="Submit consultation request"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-brand transition transform hover:translate-y-[-1px] hover:opacity-95 sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Processing...
            </>
          ) : status === "success" ? (
            <>
              <CheckCircle2 className="h-5 w-5" /> Submitted
            </>
          ) : (
            <>
              Request Free Consultation <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-bold">
          <FileText className="w-3.5 h-3.5 text-primary" /> End-to-end data privacy guaranteed.
        </div>
      </div>

      {status === "success" && (
        <div
          role="status"
          className="mt-6 p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-sm font-bold text-emerald-700 flex items-center gap-2"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          Thank you! We have received your request and our desk will call you shortly.
        </div>
      )}

      {status === "error" && (
        <div
          role="status"
          className="mt-6 p-4 rounded-lg bg-red-50 border border-red-100 text-sm font-bold text-red-700 flex items-center gap-2"
        >
          <AlertTriangle className="w-5 h-5 text-red-600" />
          Something went wrong. Please try submitting again or contact us directly.
        </div>
      )}
    </form>
  );
}