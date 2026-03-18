import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-28 pb-20 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-gray-500 tracking-widest uppercase text-sm">We'd love to hear from the Kashya family</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* 1. Contact Information & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">WhatsApp & Call</p>
                    <p className="text-gray-800">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Email Us</p>
                    <p className="text-gray-800">support@kashya.in</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Studio Address</p>
                    <p className="text-gray-800">Pink City, Jaipur, Rajasthan - 302001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h2 className="text-xl font-serif font-bold mb-6">Follow Our Journey</h2>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:bg-rose-50 transition-all border border-gray-100">
                  <Instagram size={20} className="text-rose-500" />
                  <span className="text-sm font-bold">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:bg-rose-50 transition-all border border-gray-100">
                  <MessageCircle size={20} className="text-green-500" />
                  <span className="text-sm font-bold">Pinterest</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 2. Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-2xl shadow-xl shadow-gray-100 border border-gray-50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-rose-200 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-rose-200 transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-rose-200 transition-all" placeholder="hello@kashya.in" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border-none rounded-lg p-4 focus:ring-2 focus:ring-rose-200 transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-lg font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-rose-600 transition-all shadow-lg">
                <Send size={18} /> SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
};

export default Contact;



// Highlights of this Contact Page:
// WhatsApp Integration: Ek floating green button diya hai jo screen par fix rahega. Ispe click karte hi customer direct aapke WhatsApp par message kar payega.

// Social Proof: Instagram aur Pinterest ke liye clean buttons hain jo hover par rose-color (Kashya's brand color) mein change hote hain.

// Modern Form: Rounded corners aur soft shadows ka use kiya gaya hai jo modern e-commerce sites ka standard hai.

// Animations: framer-motion ka use karke text aur form ko slide-in effect diya hai.