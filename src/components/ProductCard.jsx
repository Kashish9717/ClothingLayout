import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Eye, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(1);

  const handleAdd = (e) => {
    e.stopPropagation();
    if (addToCart) addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4 }}
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:shadow-xl cursor-pointer"
    >
      {/* 1. Image Viewport with Smooth Continuous Auto-Slide / Gentle Sway on Hover */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          animate={isHovered ? { scale: [1, 1.08, 1.03], y: [0, -4, 0] } : { scale: 1, y: 0 }}
          transition={isHovered ? { repeat: Infinity, duration: 4, ease: "easeInOut" } : { duration: 0.3 }}
          className="w-full h-full object-cover object-center"
        />

        {/* Soft shadow overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Simple Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          <span className="bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase shadow-xs">
            {product.fabric || 'Cotton'}
          </span>
          {product.price >= 3000 && (
            <span className="bg-rose-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase shadow-xs">
              Premium
            </span>
          )}
        </div>

        {/* Floating Quick Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className={`p-2 rounded-full backdrop-blur-md shadow-md transition-all ${
              isWishlisted
                ? 'bg-rose-500 text-white'
                : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600'
            }`}
            aria-label="Wishlist"
          >
            <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="p-2 rounded-full bg-white text-gray-700 shadow-md hover:bg-black hover:text-white transition-all"
            aria-label="View Details"
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Quick Add To Bag Button */}
        <div className="absolute bottom-3 left-3 right-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg transition-all ${
              isAdded 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-900 hover:bg-black hover:text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check size={14} /> Added!
              </>
            ) : (
              <>
                <ShoppingBag size={14} /> Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. Product Details */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase mb-1">
            <span>{product.category}</span>
            <span className="text-amber-500 font-bold">★ 4.9</span>
          </div>
          
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>

        <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-900 font-bold text-base">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-gray-400 line-through text-xs">
              ₹{(product.price + 800).toLocaleString('en-IN')}
            </span>
          </div>

          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
            In Stock
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;