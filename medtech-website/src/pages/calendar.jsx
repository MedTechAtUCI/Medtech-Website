import React from 'react';
import ScrollReveal from '../components/animations/ScrollReveal';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Hike with MedTech',
    date: 'Week 1 of the Spring Quarter',
    time: 'TBD',
    location: 'The Great Outdoors',
    image: 'https://images.unsplash.com/photo-1682686578615-39549501dd08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200&q=80',
    description: 'Join us for a refreshing hike to kick off the spring quarter! Connect with fellow members, enjoy nature, and discuss upcoming projects in a relaxed setting.',
    featured: true,
  },
  {
    title: 'Study with a Buddy',
    date: 'March 11, 2026',
    time: '6:00 PM - 7:50 PM',
    location: 'HICH 100P',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200',
  },
  {
    title: 'General Meeting',
    date: 'March 4, 2026',
    time: '6:00 PM - 7:00 PM',
    location: 'ICS 213',
    image: '/images/general_meeting_mar_4_2026.jpg',
  },
];

export default function EventsPage() {
  const featuredEvent = events[0];
  const upcomingEvents = events.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <section id="events" className="relative px-6 py-32 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <div className="inline-block px-4 py-2 rounded-full border border-blue-300 bg-blue-50 backdrop-blur-sm">
                <span className="text-blue-600 text-sm font-bold tracking-widest uppercase">Upcoming Events</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tighter">
                Join Our Next <span className="text-blue-600 italic">Event</span>
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-medium">
                Stay connected with the latest MedTech events!
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Event - Large Hero Card */}q
          <div className="mb-16">
            <ScrollReveal delay={100}>
              <div className="relative rounded-[2.5rem] border-2 border-blue-100 bg-white overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Image Section */}
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <img 
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg">
                      <span className="text-sm font-bold uppercase tracking-wider">🎯 Next Event</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter leading-tight">
                        {featuredEvent.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed font-medium">
                        {featuredEvent.description}
                      </p>
                    </div>

                    {/* Detail Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <CalendarIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Date</div>
                          <div className="text-neutral-900 font-bold">{featuredEvent.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Time</div>
                          <div className="text-neutral-900 font-bold">{featuredEvent.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Location</div>
                          <div className="text-neutral-900 font-bold">{featuredEvent.location}</div>
                        </div>
                      </div>
                    </div>

                    {/* <button className="w-full lg:w-fit px-10 py-5 rounded-2xl bg-neutral-900 text-white font-bold text-lg hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                      <span>Register Now</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button> */}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Upcoming Events - Grid */}
          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-black text-neutral-800 mb-10 tracking-tight border-l-4 border-blue-600 pl-6 uppercase">
                Previous Events
              </h3>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="group bg-white rounded-[2rem] border border-neutral-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    <div className="p-8 space-y-6">
                      <h3 className="text-2xl font-black text-neutral-900 tracking-tight">{event.title}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-neutral-600 font-medium">
                          <CalendarIcon className="w-5 h-5 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-600 font-medium">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-600 font-medium">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {/* <button className="w-full py-4 rounded-xl border-2 border-neutral-100 bg-neutral-50 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-bold transition-all duration-300">
                        Register Now
                      </button> */}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}