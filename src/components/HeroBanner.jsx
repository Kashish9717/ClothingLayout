import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full flex items-center overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#FAF8F5] pt-24 md:pt-20">
      
      {/* Editorial Decorative Background Accents */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-rose-200/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-serif font-black tracking-widest whitespace-nowrap text-stone-900">
        KASHYA
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Side: Editorial Typography & CTAs (7 Cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 space-y-8"
        >
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gray-200 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span className="text-[11px] font-bold tracking-wider text-gray-700 uppercase">
              New Summer Collection 2026
            </span>
          </motion.div>
          
          {/* Main Statement Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.08] tracking-tight">
              Upgrade Your <br />
              <span className="italic font-serif text-rose-500 relative inline-block">
                Daily Fashion.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-rose-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 10 Q 50 0 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
          </div>
          
          <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed">
            Beautiful handmade Kurtis, stylish dresses, modern tops, and unique jewelry made with comfortable pure fabrics.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link 
              to="/shop/all-collection" 
              className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-rose-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <span>Shop All Products</span>
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold text-xs tracking-wider uppercase hover:bg-white hover:border-black transition-all"
            >
              Our Story
            </Link>
          </div>

          {/* Key Value Micro Features */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-xl md:text-2xl font-serif font-bold text-gray-900">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-0.5">Pure Quality</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif font-bold text-gray-900">10k+</p>
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-0.5">Happy Buyers</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif font-bold text-gray-900">4.9 / 5</p>
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-0.5">Customer Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Editorial Model Feature (5 Cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative flex items-center justify-center"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.15)] border-4 border-white/80">
            <img 
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop" 
              alt="Kashya Luxury Fashion" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Soft inner glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
          </div>

          {/* Floating Editorial Card Tag */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-[#EFE8E0] max-w-[210px]"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-[9px] font-bold tracking-widest uppercase text-stone-500">Limited Edition</span>
            </div>
            <p className="font-serif font-bold text-sm text-[#1A1816]">Chikankari Mulberry Gown</p>
            <p className="text-[11px] text-rose-600 font-bold mt-1">₹4,500 <span className="text-gray-400 font-normal line-through">₹5,999</span></p>
          </motion.div>

          {/* Floating Guarantee Badge */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-[#1F1916] text-[#FAF8F5] p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/10"
          >
            <div className="p-2 rounded-xl bg-white/10">
              <Truck size={16} className="text-amber-300" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-amber-200 font-semibold">Fast Express</p>
              <p className="text-xs font-medium">Pan-India Delivery</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroBanner;