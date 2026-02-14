import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';

import { partnerships } from '../data/ParnershipData';


export default function Partnerships() {
  const [selectedPartner, setSelectedPartner] = useState(0);

  return (
    <section className="relative px-6 py-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0">
                {/* 3. INTENSE GRID: Increased line opacity from 12 (0.07) to 30 (0.18) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* 4. OVERLAY VIGNETTE: Softens the edges of the grid so it doesn't feel like a spreadsheet */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)]"></div>

                {/* Top-left accent glow to balance the intensity */}
                <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[90px]"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.3),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
              <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Collaborations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tighter">
              Our Strategic <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Partners</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Partner Circles Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-20">
          {partnerships.map((partner, index) => {
            const Icon = partner.icon;
            const isActive = selectedPartner === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedPartner(index)}
                className={`group relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 transition-all duration-500 flex flex-col items-center justify-center
                  ${isActive 
                    ? `${partner.borderColor} ${partner.bgColor} scale-110 shadow-2xl shadow-blue-500/10` 
                    : 'border-neutral-100 bg-white hover:border-neutral-200 hover:scale-105 shadow-md'
                  }`}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <Icon className={`w-10 h-10 md:w-16 md:h-16 mb-2 transition-all duration-300 ${
                  isActive ? partner.textColor : 'text-neutral-300 group-hover:text-neutral-500'
                }`} />
                
                <span className={`text-[10px] md:text-xs font-bold tracking-tighter text-center px-4 uppercase transition-colors ${
                  isActive ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-700'
                }`}>
                  {partner.name}
                </span>

                {isActive && (
                <div className={`absolute -inset-2 border-2 rounded-full opacity-40 ${partner.borderColor}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Information Panel */}
        <div className="relative max-w-5xl mx-auto min-h-[400px]">
           <div className={`transition-all duration-700 transform ${selectedPartner !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${partnerships[selectedPartner].color} rounded-[2.5rem] blur-2xl opacity-10`} />
                
                <div className="relative bg-white border border-neutral-100 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-neutral-200/40">
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className={`flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br ${partnerships[selectedPartner].color} flex items-center justify-center shadow-xl`}>
                      {(() => {
                        const ActiveIcon = partnerships[selectedPartner].icon;
                        return <ActiveIcon className="w-12 h-12 text-white" />;
                      })()}
                    </div>

                    <div className="flex-1 space-y-6">
                      <div className="space-y-2">
                        <div className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] ${partnerships[selectedPartner].bgColor} ${partnerships[selectedPartner].textColor}`}>
                          Active Partnership
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter italic leading-tight">
                          {partnerships[selectedPartner].fullName}
                        </h3>
                      </div>

                      <p className="text-xl text-neutral-600 leading-relaxed font-medium border-l-4 border-neutral-50 pl-6">
                        {partnerships[selectedPartner].description}
                      </p>

                      {/* Dynamic Button (Fixed) */}
                      <a 
                        href={partnerships[selectedPartner].websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 font-bold ${partnerships[selectedPartner].textColor} group/btn transition-all hover:gap-3`}
                      >
                        {partnerships[selectedPartner].name} Website 
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}