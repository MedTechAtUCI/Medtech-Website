import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkalyaw");

  if (state.succeeded) {
    return (
      <div className="py-20 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-black text-neutral-900 mb-2 tracking-tight">Message Received</h2>
        <p className="text-neutral-500 font-medium">We'll get back to you shortly!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
          <input 
            id="name" 
            type="text" 
            name="name" 
            placeholder="John Doe"
            className="w-full p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium" 
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="john@uci.edu"
            className="w-full p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium" 
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-neutral-400 ml-1">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="How can we help?"
          className="h-40 w-full p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all font-medium resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting}
        className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}