import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ShieldCheck, RefreshCw, Star, Heart, Check, ChevronRight, Sparkles, Ruler, Share2 } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [pincode, setPincode] = useState('');
  const [deliveryMsg, setDeliveryMsg] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details', 'care', 'shipping'

  const checkDelivery = () => {
    if (pincode.length === 6) {
      setDeliveryMsg("✨ Express Doorstep Delivery available in 48-72 hours with signature box packaging.");
    } else {
      setDeliveryMsg("Please enter a valid 6-digit Indian pincode.");
    }
  };

  const handleAddToCart = () => {
    if (addToCart) addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-6 md:px-12 bg-[#FAF8F5]">
      
      {/* Breadcrumbs */}
      <div className="flex items-center text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-[0.2em] mb-8 pb-4 border-b border-[#EAE2D8]">
        <Link to="/" className="hover:text-rose-600 transition">Maison</Link>
        <ChevronRight size={13} className="mx-2 text-stone-400" />
        <Link to={`/shop/${product.category}`} className="hover:text-rose-600 transition">{product.category}</Link>
        <ChevronRight size={13} className="mx-2 text-stone-400" />
        <span className="text-[#1F1916] truncate max-w-xs">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Product Lookbook Gallery (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-4"
        >
          <div className="overflow-hidden bg-[#F5EFE6] rounded-3xl border border-[#EAE2D8] aspect-[3/4] relative group shadow-sm">
            <motion.img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-white/60">
              Artisan Certified
            </div>
          </div>

          {/* Micro previews */}
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map(i => (
              <div 
                key={i} 
                className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 border border-[#EAE2D8] cursor-pointer hover:border-rose-400 transition"
              >
                <img src={product.image} alt="Angle" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Bespoke Specifications & Order Action (5 cols) */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B83B5E]">
              {product.category} • Certified Handloom
            </span>
            <h1 className="text-3xl lg:text-4xl font-serif text-[#1F1916] mt-1 mb-2 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs text-[#8C7A6B] font-light">(48 Verified Haute Patrons)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 pb-4 border-b border-[#EAE2D8]">
            <span className="text-3xl font-bold text-[#1F1916]">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-stone-400 line-through font-light">
              ₹{(product.price + 1200).toLocaleString('en-IN')}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Complimentary Shipping Included
            </span>
          </div>

          {/* Fabric & Provenance Story */}
          <div className="bg-[#FAF4EE] p-4 rounded-2xl border border-[#EDE0D2] space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#735A47]">
              <Sparkles size={14} className="text-amber-500" />
              <span>Artisan Provenance</span>
            </div>
            <p className="text-xs text-[#66564B] leading-relaxed font-light">
              Crafted in pure <strong>{product.fabric || 'Mulberry Silk / Cotton'}</strong> with authentic hand-embroidery. Designed for breathable luxury and drape.
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1F1916]">Select Fit / Size</span>
              <button className="flex items-center gap-1 text-[11px] text-[#B83B5E] font-semibold hover:underline">
                <Ruler size={13} /> Size Blueprint Guide
              </button>
            </div>

            <div className="flex gap-2.5">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedSize === size 
                      ? 'bg-[#1F1916] text-white shadow-md' 
                      : 'bg-white border border-[#E0D5C7] text-stone-700 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button 
              onClick={handleAddToCart}
              className={`flex-1 py-4 px-6 rounded-2xl font-bold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 shadow-xl transition-all duration-300 cursor-pointer ${
                isAdded 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#1F1916] text-[#FAF8F5] hover:bg-[#B83B5E]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={16} /> ADDED TO BAG
                </>
              ) : (
                'ADD TO SHOPPING BAG'
              )}
            </button>

            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                isWishlisted 
                  ? 'bg-rose-50 border-rose-400 text-rose-600' 
                  : 'bg-white border-[#E0D5C7] text-stone-700 hover:border-black'
              }`}
              aria-label="Wishlist"
            >
              <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Pincode Check */}
          <div className="p-4 rounded-2xl bg-white border border-[#EAE2D8] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1F1916]">
              <Truck size={15} /> Check Dispatch Timeline
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                maxLength={6}
                placeholder="Enter 6-digit Pincode" 
                className="flex-1 bg-[#FAF8F5] px-3.5 py-2 rounded-xl text-xs outline-none focus:ring-1 focus:ring-rose-500"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button 
                onClick={checkDelivery}
                className="bg-[#1F1916] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#B83B5E] transition"
              >
                Verify
              </button>
            </div>
            {deliveryMsg && <p className="text-xs text-stone-700 mt-2 font-light leading-relaxed">{deliveryMsg}</p>}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-center">
            <div className="p-3 bg-white rounded-xl border border-[#EAE2D8] space-y-1">
              <ShieldCheck size={18} className="mx-auto text-amber-600" />
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#665A52]">100% Certified Handloom</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EAE2D8] space-y-1">
              <RefreshCw size={18} className="mx-auto text-amber-600" />
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#665A52]">7 Days Size Exchange</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-[#EAE2D8] space-y-1">
              <Truck size={18} className="mx-auto text-amber-600" />
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#665A52]">Bespoke Packaging</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;