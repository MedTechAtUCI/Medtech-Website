import ScrollReveal from '../components/animations/ScrollReveal';

const companies = [
  { name: 'AVEVA', text: 'AVEVA' },
  { name: 'Capital One', text: 'CapitalOne' },
  { name: 'Roblox', text: 'ROBLOX' },
  { name: 'Capital Group', text: 'Capital Group' },
  { name: 'Google', text: 'Google' },
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'Amazon', text: 'Amazon' },
  { name: 'Meta', text: 'Meta' },
  { name: 'Apple', text: 'Apple' },
  { name: 'Tesla', text: 'Tesla' },
  { name: 'NVIDIA', text: 'NVIDIA' },
  { name: 'IBM', text: 'IBM' },
];

function Companies() {
  return (
    <section className="relative w-full py-12 overflow-hidden bg-white pb-32">
      {/* Background Glows to match Hero/About */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f605_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
              <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Our Network</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 tracking-tighter">
              Where Our Members <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              From Big Tech to innovative healthcare startups, our alumni are shaping the future of global industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Scrolling container */}
        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex overflow-hidden py-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex animate-scroll-left gap-8 items-center pr-8">
                {companies.map((company, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex-shrink-0 w-52 h-28 flex items-center justify-center p-8 
                        rounded-2xl border border-neutral-200 bg-neutral-50/30 
                        backdrop-blur-sm shadow-sm
                        hover:bg-white hover:border-blue-400 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] 
                        hover:-translate-y-1 transition-all duration-500 group"                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="max-w-full max-h-12 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    ) : (
                      <span className="text-xl font-bold text-neutral-800 group-hover:text-blue-600 transition-colors tracking-tighter">
                        {company.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Companies;