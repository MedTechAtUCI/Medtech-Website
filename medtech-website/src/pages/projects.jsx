import React from 'react';
import { ExternalLink, Github, ArrowDown } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';

import { projectsData } from '../data/ProjectsData';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
        <Hero />
        <ProjectsSection />
    </div>
  );
}

const Hero = () => (
    <>
          {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
                {/* 3. INTENSE GRID: Increased line opacity from 12 (0.07) to 30 (0.18) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* 4. OVERLAY VIGNETTE: Softens the edges of the grid so it doesn't feel like a spreadsheet */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]"></div>

                {/* Top-left accent glow to balance the intensity */}
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[90px]"></div>
            </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-70"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
              <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Innovation Lab</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-neutral-900 leading-tight tracking-tighter">
              Featured <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent italic">Projects</span>
            </h1>
          </div>
        </ScrollReveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <ArrowDown className="w-6 h-6 text-blue-600" />
        </div>
      </section>
    </>
)

const ProjectsSection = () => (
    <>
    {/* Project Sections */}
      {projectsData.map((project, index) => (
        <section key={index} className="relative py-32 border-b border-neutral-50 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Content Column */}
              <ScrollReveal delay={100}>
                <div className={`space-y-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-2xl shadow-blue-500/20`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-7xl font-black text-neutral-100 tracking-tighter">0{index + 1}</span>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-5xl font-black text-neutral-900 tracking-tighter italic">{project.title}</h2>
                      <p className={`text-xl font-bold ${project.textColor}`}>{project.subtitle}</p>
                    </div>

                    <p className="text-xl text-neutral-600 font-medium leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      {/* <button className={`px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all hover:bg-blue-700 flex items-center gap-2 group shadow-xl shadow-blue-500/20`}>
                        View Project <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-8 py-4 rounded-2xl border-2 border-neutral-100 text-neutral-900 font-bold hover:border-neutral-200 transition-all flex items-center gap-2">
                        <Github className="w-4 h-4" /> Source
                      </button> */}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* White Cards Column */}
              <ScrollReveal delay={200}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Features Card - White/Clean */}
                  <div className="p-10 rounded-[2.5rem] border border-neutral-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                    <h3 className="text-xs font-black text-neutral-400 mb-8 uppercase tracking-[0.3em]">Technical Features</h3>
                    <div className="grid gap-4">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 hover:border-blue-200 transition-colors">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.color}`} />
                          <p className="text-sm font-bold text-neutral-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}
    </>
)
