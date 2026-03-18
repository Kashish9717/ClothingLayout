import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      // Hinglish: "whileHover" se wo loud glow aur scale effect aayega
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0px 20px 40px rgba(244, 63, 94, 0.25)" 
      }}
      className="relative bg-white group cursor-pointer border border-transparent hover:border-rose-100 transition-all duration-500 rounded-sm overflow-hidden"
    >
      {/* 1. Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <motion.img
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* 2. Overlays (Badges) */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold px-3 py-1 tracking-widest uppercase shadow-sm">
            New Arrival
          </span>
          {product.price > 3000 && (
            <span className="bg-black text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
              Luxury
            </span>
          )}
        </div>

        {/* 3. Right Side Quick Icons (Hinglish: Ye icons hover par side se slide honge) */}
        <div className="absolute top-3 -right-12 group-hover:right-3 transition-all duration-300 space-y-2">
          <button className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white shadow-md transition">
            <Heart size={18} />
          </button>
          <button 
            onClick={() => navigate(`/product/${product.id}`)}
            className="p-2 bg-white rounded-full hover:bg-rose-500 hover:text-white shadow-md transition"
          >
            <Eye size={18} />
          </button>
        </div>

        {/* 4. "Add to Bag" Slide-up Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Card click event ko rokne ke liye
            addToCart(product);
          }}
          className="absolute bottom-0 w-full bg-black/90 text-white py-4 font-bold text-sm tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-rose-600"
        >
          <ShoppingBag size={16} /> ADD TO BAG
        </button>
      </div>

      {/* 5. Product Info */}
      <div className="p-4 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">
          {product.category}
        </p>
        <h3 className="text-gray-800 font-medium font-serif text-lg group-hover:text-rose-500 transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="text-rose-600 font-bold text-lg">₹{product.price}</span>
          <span className="text-gray-300 line-through text-sm">₹{product.price + 999}</span>
        </div>

        {/* Color Indicators */}
        <div className="flex justify-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E5D1D0] border border-gray-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#2D2D2D]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#7B8E8E]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;



// Layering: Image ke upar humne "Side Icons" aur "Bottom Button" lagaye hain jo sirf mouse le jaane par dikhte hain.

// Colors: Soft pinks aur black ka use kiya hai jo premium brands (jaise Zara ya Nykaa Fashion) use karte hain.

// Animation: framer-motion ka use karke humne card ko ek "Loud Glow" diya hai taaki jab user touch kare toh usse lage ki website responsive aur high-quality hai.