import React from 'react';
import ContactForm from "../components/form";
import ScrollReveal from '../components/animations/ScrollReveal';
import { Instagram, Linkedin, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Aesthetic */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20">
        <ScrollReveal>
          <div className="mb-16">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm mb-6">
              <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Get in touch</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-neutral-900 tracking-tighter italic">
              Contact <span className="text-blue-600">Us</span>.
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: The Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="bg-white border border-neutral-200 rounded-[2.5rem] p-2 shadow-2xl shadow-blue-500/5">
                <div className="bg-white rounded-[2rem] p-8 md:p-10">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Socials & Info */}
          <div className="lg:col-span-5 space-y-10">
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight">Connect with the Club</h3>
                <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                  Have questions about our research or want to join the development team? 
                  Reach out and we'll get back to you as soon as possible!
                </p>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <SocialCard 
                  href="https://www.instagram.com/medtechuci/" 
                  label="Instagram" 
                  icon={<Instagram className="w-6 h-6" />}
                  color="hover:text-pink-500 hover:border-pink-200"
                />
                <SocialCard 
                  href="https://www.linkedin.com/company/medtech-uci/" 
                  label="LinkedIn" 
                  icon={<Linkedin className="w-6 h-6" />}
                  color="hover:text-blue-600 hover:border-blue-200"
                />
                <SocialCard 
                  href="https://discord.gg/5w6uBzW4mm" 
                  label="Discord" 
                  icon={<MessageSquare className="w-6 h-6" />}
                  color="hover:text-indigo-500 hover:border-indigo-200"
                />
                <SocialCard 
                  href="https://linktr.ee/medtechuci" 
                  label="LinkTree" 
                  icon={<ExternalLink className="w-6 h-6" />}
                  color="hover:text-emerald-500 hover:border-emerald-200"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialCard({ href, label, icon, color }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center gap-4 p-6 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${color}`}
    >
      <div className="text-neutral-400 group-hover:text-inherit transition-colors">
        {icon}
      </div>
      <span className="font-bold text-neutral-900">{label}</span>
    </a>
  );
}