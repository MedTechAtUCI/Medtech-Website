import React from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';
import { teams } from '../data/teamData';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <IntroductoryBanner />
      <MissionSection />
      <TeamSection />
    </div>
  );
}

function IntroductoryBanner() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Tech Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 opacity-100 h-screen"
        style={{ backgroundImage: `url('/group_photo1.jpg')` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
            Engineering the <br />
            <span className="text-blue-600 italic">Future of Care.</span>
          </h1>
          <p className="mt-6 text-xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md">
            UCI's premier student organization dedicated to the intersection of 
            healthcare innovation, AI, and medical technology.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          <ScrollReveal>
            <div className="lg:w-full space-y-8">
              <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
                <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter">
                Closing healthcare disparities through <span className="text-blue-600">innovation.</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 font-medium leading-relaxed">
                <p>
                  We strive to integrate artificial intelligence with medicine to transform 
                  diagnostic accuracy. Our mission is to democratize access to professional 
                  medical services worldwide, accelerating innovation in global healthcare delivery.
                </p>
                <p className="p-6 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-2xl">
                    <strong>Latest Update:</strong> Our development team is currently building a 
                    <span className="text-blue-600 font-bold"> Gamified Mnemonic Similarity Task (MST)</span>. 
                    By digitizing traditional laboratory memory tests into an engaging game, we are creating 
                    a scalable tool for early Alzheimer’s risk detection through hippocampal monitoring.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-blue-500/20 transition-all" />
              <img 
                src="/sample_3.jpg" 
                alt="Research at UCI" 
                className="relative rounded-[2rem] border border-neutral-100 shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
function TeamSection() {
  return (
    <section className="py-32 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl font-black text-neutral-900 tracking-tighter italic">
              Our <span className="text-blue-600">Talent</span>
            </h2>
            <p className="text-neutral-500 font-medium uppercase tracking-widest text-xs">
              Organized by Department
            </p>
          </div>
        </ScrollReveal>

        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="mb-24 last:mb-0">
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-black text-neutral-800 mb-10 tracking-tight border-l-4 border-blue-600 pl-6 uppercase">
                {team.name}
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.members.map((member, memberIndex) => (
                <ScrollReveal key={memberIndex} delay={memberIndex * 50}>
                  <div className="group relative bg-white border border-neutral-200 rounded-3xl p-6 transition-all hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                    
                    <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-neutral-100">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{member.name}</h3>
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">{member.role}</p>
                    </div>
                    
                    {/* Dynamic Social Links */}
                    <div className="mt-6 flex gap-4 border-t border-neutral-50 pt-4">
                      {/* Only show LinkedIn if the URL exists */}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-300 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}