import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, ChevronDown } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="text-3xl font-serif font-bold tracking-[0.2em] text-gray-900">
          KASHYA<span className="text-rose-400">.IN</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-bold tracking-widest text-gray-600">
          <Link to="/" className="hover:text-rose-500 transition">HOME</Link>

          {/* About Us */}
          <Link to="/about" className="hover:text-rose-500 transition">ABOUT US</Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative group py-7"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center hover:text-rose-500 transition uppercase gap-1">
              Product <ChevronDown size={14} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white shadow-2xl border border-gray-50 py-4 animate-in fade-in slide-in-from-top-2">
                {['All Collection', 'Kurti', 'Dress', 'Top', 'Accessory'].map((item) => (
                  <Link 
                    key={item} 
                    to={`/shop/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-6 py-2.5 text-gray-500 hover:bg-rose-50 hover:text-rose-500 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/contact" className="hover:text-rose-500 transition">CONTACT</Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <Search size={20} className="cursor-pointer hover:text-rose-500 transition" />
          <Link to="/login" className="hover:text-rose-500 transition"><User size={20} /></Link>
          <div className="relative cursor-pointer hover:text-rose-500 transition">
            <Heart size={20} />
          </div>
          <Link to="/cart" className="relative group">
            <ShoppingBag size={20} className="group-hover:text-rose-500 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;