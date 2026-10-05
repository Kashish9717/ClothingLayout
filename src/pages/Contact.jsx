import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send, MapPin, MessageCircle, Clock, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      alert('Your concierge message has been sent to our private stylist desk.');
    }, 1500);
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E3D9CE] shadow-xs">
            <Sparkles size={13} className="text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7A6C62]">
              Private Client Services
            </span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-[#1F1916]"
          >
            The Kashya Concierge Desk
          </motion.h1>
          <p className="text-xs text-[#7A6C62] uppercase tracking-[0.2em] font-medium">
            Bespoke bridal styling, customization queries, & showroom appointments
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* 1. Contact Information & Atelier Desk (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-[#EFE8DF] shadow-xs space-y-6">
              <h2 className="text-2xl font-serif font-bold text-[#1F1916]">Atelier Direct Lines</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-amber-600 rounded-2xl border border-[#EAE2D8]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C7A6B] uppercase font-bold tracking-wider">Stylist WhatsApp & Direct</p>
                    <p className="text-sm font-semibold text-[#1F1916] mt-0.5">+91 98765 43210</p>
                    <p className="text-xs text-stone-500 font-light">Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-[#B83B5E] rounded-2xl border border-[#EAE2D8]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C7A6B] uppercase font-bold tracking-wider">Client Inquiries</p>
                    <p className="text-sm font-semibold text-[#1F1916] mt-0.5">concierge@kashya.in</p>
                    <p className="text-xs text-stone-500 font-light">Guaranteed response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF8F5] text-stone-700 rounded-2xl border border-[#EAE2D8]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8C7A6B] uppercase font-bold tracking-wider">Private Showroom</p>
                    <p className="text-sm font-semibold text-[#1F1916] mt-0.5">Maison Kashya, Civil Lines</p>
                    <p className="text-xs text-stone-500 font-light">Jaipur, Rajasthan — 302006</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Journeys */}
            <div className="p-6 rounded-3xl bg-[#1F1916] text-[#FAF8F5] space-y-4">
              <h3 className="font-serif text-lg">Follow The Lookbooks</h3>
              <p className="text-xs text-[#B5A79B] font-light leading-relaxed">
                Experience daily behind-the-scenes karigar craft on our official Instagram channel.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-[#B83B5E] text-xs font-bold uppercase tracking-wider transition"
                >
                  <Instagram size={16} /> Instagram
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold uppercase tracking-wider transition"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. Bespoke Inquiry Form (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#EFE8DF]"
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <h3 className="text-2xl font-serif text-[#1F1916]">Send An Inquiry</h3>
                <p className="text-xs text-[#7A6C62] font-light">
                  Our head stylist will curate customized styling options tailored to your occasion.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A6C62]">First Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-3.5 text-xs text-[#1F1916] outline-none focus:border-[#B83B5E]" 
                    placeholder="Ananya" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A6C62]">Last Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-3.5 text-xs text-[#1F1916] outline-none focus:border-[#B83B5E]" 
                    placeholder="Singhania" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A6C62]">Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="w-full bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-3.5 text-xs text-[#1F1916] outline-none focus:border-[#B83B5E]" 
                  placeholder="ananya@example.com" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A6C62]">Occasion or Requirement</label>
                <select className="w-full bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-3.5 text-xs text-[#1F1916] outline-none focus:border-[#B83B5E]">
                  <option>Bridal / Wedding Troussseau Consultation</option>
                  <option>Custom Fit / Size Inquiry</option>
                  <option>Order & Dispatch Support</option>
                  <option>Showroom Private Appointment</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#7A6C62]">Message / Specific Details</label>
                <textarea 
                  rows="4" 
                  required 
                  className="w-full bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl p-3.5 text-xs text-[#1F1916] outline-none focus:border-[#B83B5E]" 
                  placeholder="Tell us about your preferences, measurements, or celebration dates..."
                />
              </div>

              <button 
                type="submit" 
                disabled={submitted}
                className="w-full bg-[#1F1916] text-[#FAF8F5] py-4 rounded-2xl font-bold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:bg-[#B83B5E] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
              >
                <Send size={15} /> {submitted ? 'Transmitting To Concierge...' : 'Submit Inquiry'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Quick Connect Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default Contact;