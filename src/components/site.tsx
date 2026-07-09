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
  MapPin,
  ShieldCheck,
  ExternalLink,
  Gift
} from "lucide-react";

// Direct standard import for the asset layout
import logoAsset from "@/assets/logo.jpeg";

export const PHONE_PRIMARY = "+91-7982744129";
export const PHONE_PRIMARY_TEL = "+917982744129";
export const PHONE_SECONDARY = "+91-9654484565";
export const PHONE_SECONDARY_TEL = "+919654484565";
export const EMAIL = "info@namechangeexpert.in";
export const WHATSAPP_URL = `https://wa.me/${PHONE_PRIMARY_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Hi, I need help with a name change / gazette notification.",
)}`;

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
      className="flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Name Change Expert by Home2Home Services"
    >
      <img
        src={logoAsset}
        alt="Name Change Expert"
        // INCREASED LOGO SIZE HERE
        className="h-20 sm:h-28 lg:h-32 w-auto object-contain drop-shadow-sm py-1"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200">
      {/* Top Discount Strip */}
      <div className="bg-indigo-600 text-white text-xs sm:text-sm py-2.5 px-4 text-center">
        <p className="flex items-center justify-center gap-2 font-bold tracking-wide">
          <Gift className="w-4 h-4 text-amber-300 animate-pulse" />
          Special Offer: 10% Discount for Students and Senior Citizens
          <Gift className="w-4 h-4 text-amber-300 animate-pulse" />
        </p>
      </div>

      {/* Main Header Bar (Centered Logo Design, Adjusted Height for Bigger Logo) */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 min-h-[6rem] sm:min-h-[7rem]">
        
        {/* Left Side: Desktop Nav */}
        <nav aria-label="Primary" className="hidden flex-1 items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-indigo-600 font-black border-b-2 border-indigo-600 pb-1" }}
              inactiveProps={{ className: "text-slate-600 hover:text-indigo-600" }}
              className="text-sm font-bold transition-all uppercase tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: Hamburger (Left) */}
        <div className="flex-1 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0 flex justify-center lg:flex-1">
          <Logo />
        </div>

        {/* Right Side: Desktop CTA */}
        <div className="hidden flex-1 items-center justify-end lg:flex">
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            aria-label={`Call ${PHONE_PRIMARY}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-indigo-600 hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4 text-amber-400" aria-hidden />
            Call: {PHONE_PRIMARY}
          </a>
        </div>

        {/* Mobile: Phone Icon (Right) */}
        <div className="flex flex-1 justify-end lg:hidden">
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            aria-label="Call us now"
            className="grid h-10 w-10 place-items-center rounded-full bg-indigo-600 text-white shadow-md"
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>

      {/* Mobile Nav Menu (Dropdown) */}
      {open && (
        <div className="absolute top-full left-0 w-full border-b border-slate-200 bg-white shadow-2xl lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex flex-col gap-2 px-6 py-6 font-semibold">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600" }}
                className="rounded-r-md px-4 py-3 text-base text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_PRIMARY_TEL}`}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 text-base font-bold text-white shadow-md"
            >
              <Phone className="h-5 w-5" /> Tap to Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const services = [
    { to: "/services", label: "Central Gazette Publication" },
    { to: "/services", label: "Name Change After Marriage" },
    { to: "/services", label: "Legal Affidavit Drafting" },
    { to: "/services", label: "Spelling & Surname Fixes" },
    { to: "/services", label: "PAN & Aadhar Record Sync" },
    { to: "/services", label: "Passport Name Adjustment" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="inline-flex rounded-xl bg-white p-3 shadow-md max-w-[220px]">
              <img
                src={logoAsset}
                alt="Name Change Expert"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              Delhi&apos;s premier, legally compliant documentation desk specializing in error-free
              Central Gazette applications, affidavits, and public notices.
            </p>
            <div className="space-y-3">
              <span className="block text-xs font-black uppercase text-slate-500 tracking-wider">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/share/1GMG3fkkuZ/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/home.2homeservices?igsh=MXN2emQzNms0YzJzNA==" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-pink-600 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/home2home-consultant-services-93939a388?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-sky-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@home2home-z9t?si=5MxyuduEb7wveR9D" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 rounded-lg text-slate-400 hover:text-white hover:bg-red-600 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="text-base font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full" /> Our Services
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              {services.map((s, i) => (
                <li key={i}>
                  <Link to={s.to} className="hover:text-indigo-400 transition-colors flex items-center gap-2">
                    <span className="text-slate-700">›</span> {s.label}
                  </Link>
                </li>
              ))}
              {/* REMOVED OFFICIAL GAZETTE PORTAL LINK AS REQUESTED */}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-base font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full" /> Office Locations
            </h4>
            <ul className="space-y-5 text-sm font-medium text-slate-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="font-bold text-white block text-xs uppercase tracking-wider mb-1">Corporate Head Office:</span>
                  Kh No-14/11, Street No-36, Chandan Vihar, Burari, Delhi - 110084
                </p>
              </li>
              <li className="flex gap-3 items-start border-t border-slate-800 pt-4">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <span className="font-bold text-white block text-xs uppercase tracking-wider mb-1">Regional Branch:</span>
                  Arya Samaj Rd, near Gupta Jewellery Shop, Block J, Uttam Nagar, Delhi - 110059
                </p>
              </li>
              <li className="border-t border-slate-800 pt-4 space-y-2">
                <a href={`tel:${PHONE_PRIMARY_TEL}`} className="block hover:text-white font-bold text-lg text-indigo-400">
                  {PHONE_PRIMARY}
                </a>
                <a href={`mailto:${EMAIL}`} className="block hover:text-white text-slate-400">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps Embed with Overlay Button */}
          <div className="w-full h-64 lg:h-full min-h-[250px] rounded-2xl overflow-hidden border-2 border-slate-800 shadow-xl relative group flex flex-col">
            <div className="absolute inset-0 bg-slate-900 animate-pulse -z-10"></div>
            {/* Live Google Map iframe */}
            <iframe 
              src="https://maps.google.com/maps?q=Chandan%20Vihar,%20Burari,%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, flexGrow: 1 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              title="Office Location Map"
            />
            
            {/* Clickable Overlay Button to requested Maps link */}
            <a 
              href="https://maps.app.goo.gl/zbWLtUxHrp4WC8a7A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-indigo-600 hover:border-indigo-500 hover:scale-105 transition-all w-max"
            >
              <MapPin className="w-4 h-4 text-amber-500" />
              Open in Google Maps
            </a>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4">
            <p>© {new Date().getFullYear()} Name Change Expert. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="text-slate-400">
              Developed by{" "}
              <a href="https://zarnetic.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors font-black tracking-wide">
                Zarnetic
              </a>
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <Link to="/admin" className="flex items-center gap-1 text-slate-500 hover:text-indigo-400 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5" /> Admin Login
            </Link>
          </div>
          <p className="text-[10px] text-slate-600 max-w-sm text-center md:text-right leading-relaxed">
            Disclaimer: We are a private administrative documentation consultant setup. We are not a direct department of the central printing press.
          </p>
        </div>
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
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-[#25D366]/50"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={`tel:${PHONE_PRIMARY_TEL}`}
        aria-label={`Call ${PHONE_PRIMARY}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-indigo-600 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-indigo-600/50"
      >
        <Phone className="h-6 w-6" aria-hidden />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}

export function CTASection({
  title = "Ready to Start Your Name Change Request?",
  subtitle = "Talk to our legal documentation advisors in Delhi today — 100% free consultation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 relative z-10">
        <div>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl tracking-tight">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-slate-300 text-sm font-medium">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 font-bold">
          <a
            href={`tel:${PHONE_PRIMARY_TEL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-4 text-sm text-slate-900 shadow-lg transition-transform hover:-translate-y-1 hover:bg-amber-400"
          >
            <Phone className="h-4 w-4" /> Call Hotline: {PHONE_PRIMARY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 text-sm text-white transition-all hover:bg-slate-800 hover:border-slate-600"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp Us
          </a>
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
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 border-b border-slate-200">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-indigo-500 opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-500 opacity-10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-widest text-indigo-600 shadow-sm mb-6">
          <Icon className="h-3.5 w-3.5" /> {eyebrow}
        </span>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-slate-600 font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}