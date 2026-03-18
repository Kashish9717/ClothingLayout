import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Send, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1. Brand & About */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold tracking-[0.2em]">
            KASHYA<span className="text-rose-500">.IN</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crafting luxury for the modern woman. From hand-stitched Kurtis to elegant western wear, we define elegance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-rose-500 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* 2. Shop Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-rose-500 w-fit pb-1">Shop</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Kurti', 'Dress', 'Top', 'Accessory', 'All Collection'].map((item) => (
              <li key={item} className="hover:text-rose-400 hover:translate-x-2 transition-all duration-300">
                <Link to={`/shop/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Customer Care */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-rose-500 w-fit pb-1">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Size Guide', 'Shipping Policy', 'Returns & Exchange', 'Contact Us'].map((item) => (
              <li key={item} className="hover:text-rose-400 hover:translate-x-2 transition-all duration-300 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold mb-6 border-b border-rose-500 w-fit pb-1">Stay Updated</h4>
          <p className="text-gray-400 text-sm">Join the Kashya family for exclusive offers.</p>
          <div className="flex items-center border-b border-gray-700 py-2 group focus-within:border-rose-500 transition-colors">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-none text-sm w-full outline-none focus:ring-0 text-white placeholder:text-gray-600"
            />
            <button className="text-gray-400 hover:text-rose-500 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2026 KASHYA.IN. All Rights Reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;