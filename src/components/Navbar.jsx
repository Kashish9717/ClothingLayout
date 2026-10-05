import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, ChevronDown, X, Sparkles, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartCount = 0 }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Simple Offer Bar */}
      <div className="bg-[#181818] text-[#FAF8F5] text-[11px] font-medium tracking-wider py-2 text-center relative z-[101] overflow-hidden">
        <div className="flex items-center justify-center gap-2">
          <Sparkles size={12} className="text-amber-400" />
          <span>Free Express Shipping Across India on Orders Above ₹1,999!</span>
          <Sparkles size={12} className="text-amber-400 hidden sm:inline" />
        </div>
      </div>

      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 py-3.5' 
            : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3DA]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-rose-600 transition"
            aria-label="Toggle Menu"
          >
            <Menu size={22} />
          </button>

          {/* Brand Logo */}
          <Link to="/" className="group flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.25em] text-[#1a1a1a] group-hover:text-rose-600 transition-colors">
              KASHYA
            </span>
            <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-medium -mt-1">
              Fashion & Pret
            </span>
          </Link>

          {/* Desktop Navigation Links (Simple, clear words) */}
          <div className="hidden md:flex items-center space-x-10 text-[13px] font-semibold tracking-wider text-gray-700">
            <Link 
              to="/" 
              className={`relative py-1 uppercase hover:text-rose-600 transition-colors ${
                location.pathname === '/' ? 'text-rose-600 font-bold' : ''
              }`}
            >
              Home
              {location.pathname === '/' && (
                <motion.span layoutId="navIndicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-500" />
              )}
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center hover:text-rose-600 transition uppercase gap-1 cursor-pointer">
                Categories <ChevronDown size={14} className={`transition-transform duration-300 ${showDropdown ? 'rotate-180 text-rose-500' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-8 w-60 bg-white shadow-2xl border border-gray-100 py-3 rounded-2xl z-50"
                  >
                    <div className="px-5 pb-2 mb-2 border-b border-gray-100">
                      <p className="text-[10px] tracking-wider uppercase font-bold text-gray-400">Shop by Category</p>
                    </div>
                    {[
                      { name: 'All Products', path: 'all-collection', badge: 'All' },
                      { name: 'Kurtis', path: 'kurti', badge: 'Popular' },
                      { name: 'Dresses & Gowns', path: 'dress', badge: 'Trending' },
                      { name: 'Tops', path: 'top', badge: 'New' },
                      { name: 'Earrings & Jewelry', path: 'accessory', badge: 'Special' }
                    ].map((item) => (
                      <Link 
                        key={item.path} 
                        to={`/shop/${item.path}`}
                        className="flex items-center justify-between px-5 py-2.5 text-[13px] text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition group/link rounded-lg mx-1"
                      >
                        <span className="font-medium">{item.name}</span>
                        <span className="text-[9px] font-semibold uppercase px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 group-hover/link:bg-rose-100 group-hover/link:text-rose-700">
                          {item.badge}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`relative py-1 uppercase hover:text-rose-600 transition-colors ${
                location.pathname === '/about' ? 'text-rose-600 font-bold' : ''
              }`}
            >
              About Us
            </Link>
            
            <Link 
              to="/contact" 
              className={`relative py-1 uppercase hover:text-rose-600 transition-colors ${
                location.pathname === '/contact' ? 'text-rose-600 font-bold' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Side Luxury Actions */}
          <div className="flex items-center space-x-5 md:space-x-6 text-[#2A2421]">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 hover:text-rose-600 transition-colors cursor-pointer"
              aria-label="Search Catalog"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            
            <Link 
              to="/login" 
              className="p-1.5 hover:text-rose-600 transition-colors"
              aria-label="Account Profile"
            >
              <User size={19} strokeWidth={1.75} />
            </Link>

            <Link 
              to="/cart" 
              className="relative p-1.5 hover:text-rose-600 transition-colors group flex items-center"
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#B83B5E] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Search Bar Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl p-4 border border-[#E8E1D9] z-[99]"
          >
            <div className="flex items-center gap-3">
              <Search size={18} className="text-gray-400 ml-2" />
              <input 
                type="text" 
                placeholder="Search bridal, silk kurtis, tops, or fine accessories..." 
                className="w-full bg-transparent text-sm md:text-base outline-none text-gray-800 placeholder:text-gray-400"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;