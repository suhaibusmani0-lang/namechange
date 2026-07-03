import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site";
import { ShieldCheck, Users, Target, Award, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/aboutus")({
  head: () => ({
    meta: [
      { title: "About Us | Name Change Expert - Your Trusted Legal Partner" },
      {
        name: "description",
        content:
          "Learn more about Name Change Expert by Home2Home Services. We are India's leading legal documentation consultancy helping citizens with Gazette notifications and identity modifications.",
      },
    ],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        eyebrow="Our Identity"
        title={
          <>
            About <span className="text-gradient-brand">Name Change Expert</span>
          </>
        }
        subtitle="Bridging the gap between citizens and government processes with transparency, speed, and 100% legal compliance."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight sm:text-4xl mb-6">
              Simplifying Legal Transformations
            </h2>
            <p className="text-slate-600 leading-relaxed font-medium mb-4">
              At <strong>Name Change Expert by Home2Home Services</strong>, we understand that
              modifying your legal identity is more than just paperwork—it's a crucial step toward
              your future. Whether you are correcting a name for a passport, updating records
              post-marriage, or aligning your identity for professional growth, we make the process
              stress-free.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              We operate as a private administrative consultancy that helps you navigate the complex
              web of Central Government Gazette procedures, ensuring your file is prepared,
              verified, and lodged without errors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Target,
                label: "Mission",
                desc: "Providing 100% compliant documentation for every Indian citizen.",
              },
              {
                icon: ShieldCheck,
                label: "Trust",
                desc: "Maintaining absolute data security and privacy for all clients.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-navy mb-2">{item.label}</h4>
                <p className="text-xs text-slate-500 font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-navy mb-4">Why We Are Different</h2>
            <p className="text-slate-600">
              We don't just file your documents; we ensure they are accepted on the first attempt.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Legal Audit",
                desc: "Our team manually audits every single document to catch errors before submission.",
              },
              {
                title: "Zero Rejection Policy",
                desc: "We align our file formats with the Directorate of Printing's latest guidelines.",
              },
              {
                title: "Nationwide Reach",
                desc: "We serve clients across India from our centralized hub in New Delhi.",
              },
            ].map((card, i) => (
              <div key={i} className="text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
                <h4 className="font-bold text-navy mb-2">{card.title}</h4>
                <p className="text-sm text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Satisfied Clients", stat: "8,500+" },
            { label: "Years of Experience", stat: "15+" },
            { label: "Gazette Submissions", stat: "10,000+" },
            { label: "States Covered", stat: "28+" },
          ].map((s, i) => (
            <div key={i} className="bg-gradient-brand p-6 rounded-2xl text-white text-center">
              <div className="text-3xl font-black mb-1">{s.stat}</div>
              <div className="text-xs font-bold opacity-90 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
