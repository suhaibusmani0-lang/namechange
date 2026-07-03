import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Phone,
  Menu,
  X,
  Mail,
  MessageCircle,
  FileSignature,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Scale,
  MapPin,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

// Direct standard import for the asset layout to avoid JSON reading mismatches
import logoAsset from "@/assets/logo.jpeg";

export const PHONE_PRIMARY = "+91-7982744129";
export const PHONE_PRIMARY_TEL = "+917982744129";
export const PHONE_SECONDARY = "+91-9654484565";
export const PHONE_SECONDARY_TEL = "+919654484565";
export const EMAIL = "info@namechangeexpert.in";
export const WHATSAPP_URL = `https://wa.me/${PHONE_PRIMARY_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Hi, I need help with a name change / gazette notification.",
)}`;

// Yahan maine Blog ka link add kar diya hai
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/aboutus", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center"
      aria-label="Name Change Expert by Home2Home Services - home"
    >
      <img
        src={logoAsset}
        alt="Name Change Expert by Home2Home Services"
        className="h-18 w-auto sm:h-20 object-contain"
        width={220}
        height={56}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur shadow-sm">
      {/* Top Compliance Strip */}
      <div className="bg-slate-950 text-white text-[11px] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-semibold tracking-wide">
          <p className="flex items-center gap-1.5 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
            Official Directorate of Printing Compliance Layout
          </p>
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-slate-200 font-bold"
          >
            <Phone className="w-3 h-3 text-indigo-500" /> Executive Assistance Terminal:{" "}
            {PHONE_PRIMARY}
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 h-20">
        <Logo />
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            aria-label="Call us now"
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white shadow-brand"
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background text-navy"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-indigo-600 font-bold" }}
              inactiveProps={{ className: "text-navy/80 hover:text-indigo-600" }}
              className="text-sm font-semibold transition"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            aria-label={`Call ${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-brand transition hover:opacity-95"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now: {PHONE_PRIMARY}
          </a>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 font-semibold"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-muted text-indigo-600" }}
                className="rounded-md px-3 py-2 text-sm text-navy hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_PRIMARY_TEL}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-white shadow-brand"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_PRIMARY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const services = [
    { to: "/services", label: "Central Gazette Notification" },
    { to: "/services", label: "Name Change After Marriage" },
    { to: "/services", label: "Judicial Affidavit Preparation" },
    { to: "/services", label: "Government Document Up-dation" },
    { to: "/services", label: "PAN Card Record Modifications" },
    { to: "/services", label: "Passport Identity Adjustments" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 border-b border-slate-900 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand Column Descriptor */}
        <div className="space-y-4">
          <div className="inline-flex rounded-xl bg-white p-3 shadow-md max-w-[240px]">
            <img
              src={logoAsset}
              alt="Name Change Expert by Home2Home Services"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            Delhi&apos;s premier, legally compliant documentation desk specializing in error-free
            Central Gazette applications, personalized court affidavits, and strategic public notice
            layouts.
          </p>

          {/* Social Channels Block */}
          <div className="space-y-2 pt-2">
            <span className="block text-[10px] font-black uppercase text-slate-500 tracking-wider">
              Follow Our Social Handles
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/1GMG3fkkuZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-indigo-600 hover:bg-indigo-600/10 transition-all shadow-sm"
                aria-label="Connect on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/home.2homeservices?igsh=MXN2emQzNms0YzJzNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-pink-500 hover:bg-pink-500/10 transition-all shadow-sm"
                aria-label="Connect on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/home2home-consultant-services-93939a388?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-sky-600 hover:bg-sky-600/10 transition-all shadow-sm"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@home2home-z9t?si=5MxyuduEb7wveR9D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-red-600 hover:bg-red-600/10 transition-all shadow-sm"
                aria-label="Connect on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Route Anchors */}
        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-indigo-500 pl-2.5">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
            {NAV_LINKS.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-white transition-colors">
                  {i.label} Overview Terminal
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://egazette.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Official Gazette System <ExternalLink className="w-3 h-3 text-indigo-400" />
              </a>
            </li>
          </ul>
        </div>

        {/* Service Portfolios Column */}
        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-indigo-500 pl-2.5">
            Service Portfolios
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
            {services.map((s, i) => (
              <li key={i}>
                <Link to={s.to} className="hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Direct Communication Channels */}
        <div>
          <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4 border-l-2 border-indigo-500 pl-2.5">
            Office Locations
          </h4>
          <ul className="space-y-3.5 text-xs font-semibold text-slate-400">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
              <p>
                <span className="font-bold text-white block text-[10px] uppercase tracking-wider">
                  Corporate Head Office Desk:
                </span>{" "}
                Kh No-14/11, Street No-36, Chandan Vihar, Burari, Delhi - 110084
              </p>
            </li>
            <li className="flex gap-2 border-t border-slate-900 pt-2.5">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
              <p>
                <span className="font-bold text-white block text-[10px] uppercase tracking-wider">
                  Regional Branch Desk:
                </span>{" "}
                Arya Samaj Rd, near Gupta Jewellery Shop, Block J, Uttam Nagar, Delhi - 110059
              </p>
            </li>
            <li className="border-t border-slate-900 pt-2.5 space-y-1 font-bold">
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider">
                Direct Hotlines:
              </span>
              <a
                href={`tel:${PHONE_PRIMARY_TEL}`}
                className="block hover:text-white text-slate-300"
              >
                {PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${PHONE_SECONDARY_TEL}`}
                className="block hover:text-white text-slate-300"
              >
                {PHONE_SECONDARY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block hover:text-white text-slate-300 pt-1 text-[11px] underline font-mono"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimers Sub-row with Zarnetic Link */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p>
            © {new Date().getFullYear()} Name Change Expert by Home2Home Services. All rights
            reserved.
          </p>
          <span className="hidden sm:inline text-slate-800">|</span>
          <p className="text-slate-400 font-bold">
            Developed by{" "}
            <a
              href="https://zarnetic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-indigo-500/50 hover:decoration-indigo-400 font-black tracking-wide"
            >
              Zarnetic
            </a>
          </p>
        </div>
        <p className="text-[10px] text-slate-600 max-w-md text-center sm:text-right leading-relaxed font-medium">
          Disclaimer: We are a private administrative documentation consultant setup. We are not a
          direct department of the central printing press and do not modify credentials
          independently.
        </p>
      </div>
    </footer>
  );
}

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-brand transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE_PRIMARY_TEL}`}
        aria-label={`Call ${PHONE_PRIMARY}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-white shadow-brand transition hover:scale-105"
      >
        <Phone className="h-6 w-6" aria-hidden />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}

export function CTASection({
  title = "Ready to Start Your Name Change Request?",
  subtitle = "Talk to our legal documentation advisors in Delhi today — 100% free consultation workflow.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 relative z-10">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-white/90 text-sm font-medium">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 font-bold">
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            aria-label={`Call ${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm text-navy shadow-card transition hover:bg-white/95"
          >
            <Phone className="h-4 w-4" /> Call Hotline: {PHONE_PRIMARY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm text-white backdrop-blur transition hover:bg-white/20"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Channels
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Free Case Review
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  icon: Icon = FileSignature,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-brand-soft py-16 sm:py-20 border-b border-slate-200/50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-brand opacity-20 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
          <Icon className="h-3.5 w-3.5" /> {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
