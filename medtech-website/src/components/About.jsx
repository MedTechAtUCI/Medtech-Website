import CountUp from "../components/animations/CountUp";
import ScrollReveal from '../components/animations/ScrollReveal';

function About() {
  return (
    <section id="about" className="relative w-full py-32 overflow-hidden bg-white">
      {/* Background Aesthetic - Matching your Hero intensity */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid that continues from the hero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        
        {/* Soft glow on the right side to balance the image */}
        <div className="absolute top-1/4 -right-1/4 w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm">
              <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">About Us</span>
            </div>

            <ScrollReveal>
                <h2 className="text-5xl md:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tighter">
                Pioneering Innovation in <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Healthcare
                </span>
                </h2>
                
                <p className="text-xl pt-8 text-neutral-600 leading-relaxed font-medium max-w-xl">
                We are a student-led organization passionate about exploring the intersection of medicine and technology. Through research projects, partnerships, and student initiatives we empower members to become leaders in medical innovation.
                </p>
            </ScrollReveal>
            
            {/* Stats Grid with "Intense" Blue accents */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-100">
              <div className="space-y-1">
                <div className="text-4xl font-black text-neutral-900 tracking-tighter">
                   <CountUp end={30} />
                   <span className="text-blue-600">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Members</div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-black text-neutral-900 tracking-tighter">
                   <CountUp end={3} />
                   <span className="text-blue-600">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Projects</div>
              </div>

              <div className="space-y-1">
                <div className="text-4xl font-black text-neutral-900 tracking-tighter">
                   <CountUp end={4} />
                   <span className="text-blue-600">+</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold">Partners</div>
              </div>
            </div>
          </div>

          {/* Right Column: Image with "Glow" frame */}
          <div className="relative group">
            {/* The "Intense" Blue Glow behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-[2rem] blur-2xl group-hover:opacity-100 transition duration-500 opacity-70" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-500/10">
              <img 
                src="/images/mini_aif.jpg"
                alt="Medical technology innovation"
                className="w-full h-[550px] object-cover rounded-[1.5rem]"
              />
              
              {/* Overlay Badge for the Image */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
                <p className="text-sm font-bold text-neutral-900">
                  "Don't just study the breakthrough. Be the one who builds it."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;