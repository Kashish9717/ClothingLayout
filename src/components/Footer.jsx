import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Send, Phone, MapPin, Sparkles, Shield, RefreshCw, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#141210] text-[#F3EFEA] pt-20 pb-12 border-t border-[#2A2420] relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Value Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 mb-16 border-b border-[#26201C] grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#201C19] border border-[#332B25] text-amber-300">
            <Award size={22} />
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-[#F7F2EB]">Authentic Artisan Craft</h4>
            <p className="text-xs text-[#998A7F] mt-0.5 font-light">Certified pure handlooms & heritage Chikankari</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#201C19] border border-[#332B25] text-amber-300">
            <RefreshCw size={22} />
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-[#F7F2EB]">Complimentary Exchanges</h4>
            <p className="text-xs text-[#998A7F] mt-0.5 font-light">7-day doorstep size and fit exchange across India</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-[#201C19] border border-[#332B25] text-amber-300">
            <Shield size={22} />
          </div>
          <div>
            <h4 className="font-serif text-base font-semibold text-[#F7F2EB]">Secure Luxury Checkout</h4>
            <p className="text-xs text-[#998A7F] mt-0.5 font-light">256-bit encrypted UPI, NetBanking & Cards</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* 1. Brand & Maison (4 cols) */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-serif font-bold tracking-[0.25em] text-[#FAF8F5]">
              KASHYA
            </h2>
            <p className="text-[10px] tracking-[0.4em] uppercase text-amber-300/80 font-light">
              Maison De Haute Couture
            </p>
          </div>
          
          <p className="text-[#A6988D] text-sm leading-relaxed font-light max-w-sm">
            Crafting heirloom silhouettes for celebrations and timeless contemporary living. Handcrafted with reverence in India.
          </p>

          <div className="flex items-center space-x-3 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full bg-[#201C19] hover:bg-[#B83B5E] text-[#D8CCC2] hover:text-white transition-all duration-300 border border-[#302822]"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-full bg-[#201C19] hover:bg-[#25D366] text-[#D8CCC2] hover:text-white transition-all duration-300 border border-[#302822]"
              aria-label="WhatsApp Concierge"
            >
              <MessageCircle size={17} />
            </a>
            <a 
              href="tel:+919876543210" 
              className="p-3 rounded-full bg-[#201C19] hover:bg-amber-600 text-[#D8CCC2] hover:text-white transition-all duration-300 border border-[#302822]"
              aria-label="Direct Phone"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* 2. Collections (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold tracking-[0.25em] text-[#E0D5C9] uppercase">
            Curations
          </h4>
          <ul className="space-y-3 text-[#998A7F] text-sm">
            {[
              { label: 'Chikankari Kurtis', path: '/shop/kurti' },
              { label: 'Mulberry Silks', path: '/shop/dress' },
              { label: 'Pastel Tops', path: '/shop/top' },
              { label: 'Fine Accessories', path: '/shop/accessory' },
              { label: 'Complete Catalog', path: '/shop/all-collection' }
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="hover:text-rose-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Concierge & Client Care (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold tracking-[0.25em] text-[#E0D5C9] uppercase">
            Concierge
          </h4>
          <ul className="space-y-3 text-[#998A7F] text-sm">
            {['Bespoke Fit Guide', 'Shipping & Customs', 'Exchange Policy', 'Artisan Origins', 'Maison Appointments'].map((item) => (
              <li key={item}>
                <span className="hover:text-rose-300 cursor-pointer transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. The Gazette / Newsletter (4 cols) */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-[#E0D5C9] uppercase">
            <Sparkles size={14} className="text-amber-400" />
            <span>The Kashya Gazette</span>
          </div>
          <p className="text-[#998A7F] text-sm leading-relaxed font-light">
            Receive private lookbook releases, seasonal previews, and invitations to private showroom trunk shows.
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[#201C19] border border-[#382E27] rounded-full py-3.5 pl-5 pr-14 text-sm text-[#FAF8F5] placeholder:text-[#665A52] focus:outline-none focus:border-rose-400 transition"
            />
            <button 
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#B83B5E] hover:bg-rose-600 text-white flex items-center justify-center transition shadow-md cursor-pointer"
              aria-label="Subscribe"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright and Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[#201B17] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A6C62] gap-4">
        <p>© 2026 KASHYA HAUT DE LUXE. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-8 uppercase tracking-[0.2em] text-[10px]">
          <span className="hover:text-stone-300 cursor-pointer transition">Privacy Mandate</span>
          <span className="hover:text-stone-300 cursor-pointer transition">Terms of Concierge</span>
          <span className="hover:text-stone-300 cursor-pointer transition">Ethics & Craft</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;