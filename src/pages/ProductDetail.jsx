import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, RefreshCw, Star } from 'lucide-react';
import { products } from '../data/products'; // Importing the database

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];
  const [selectedSize, setSelectedSize] = useState('M');
  const [pincode, setPincode] = useState('');
  const [deliveryMsg, setDeliveryMsg] = useState('');

  const checkDelivery = () => {
    if(pincode.length === 6) {
      setDeliveryMsg("Estimated delivery by Thursday, 28th Jan");
    } else {
      setDeliveryMsg("Please enter a valid 6-digit pincode");
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Left: Product Images with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="overflow-hidden bg-gray-100 rounded-xl">
            <motion.img 
              whileHover={{ scale: 1.2 }} 
              transition={{ duration: 0.5 }}
              src={product.image} 
              alt={product.name} 
              className="w-full h-[600] object-cover cursor-zoom-in"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <img key={i} src={product.image} className="h-24 w-full object-cover rounded-md opacity-70 hover:opacity-100 cursor-pointer border hover:border-rose-500" />
             ))}
          </div>
        </motion.div>

        {/* Right: Product Specs & Actions */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4 text-yellow-500">
            <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/>
            <span className="text-gray-400 text-sm">(42 Reviews)</span>
          </div>
          
          <p className="text-3xl text-rose-600 font-bold mb-6">₹{product.price} <span className="text-sm text-gray-400 line-through ml-2">₹{product.price + 1000}</span></p>

          <div className="bg-rose-50 p-4 rounded-lg mb-8 border border-rose-100">
            <p className="text-sm font-semibold text-rose-800 italic">"Luxury Hand-stitched {product.fabric} for the ultimate comfort."</p>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <h4 className="font-bold mb-3 uppercase text-xs tracking-widest">Select Size</h4>
            <div className="flex gap-3">
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border-2 transition-all ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-rose-300'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart & Wishlist */}
          <div className="flex gap-4 mb-10">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 bg-black text-white py-5 font-bold hover:bg-rose-600 transition-all transform active:scale-95"
            >
              ADD TO BAG
            </button>
            <button className="px-6 border-2 border-gray-200 hover:bg-rose-50 transition">
              ♡
            </button>
          </div>

          {/* Delivery Check */}
          <div className="border-t border-b py-6 mb-8">
            <h4 className="font-bold mb-4 flex items-center gap-2"><Truck size={18}/> Check Delivery</h4>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter Pincode" 
                className="bg-gray-100 p-3 rounded-md outline-none focus:ring-1 focus:ring-rose-500"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <button onClick={checkDelivery} className="text-rose-500 font-bold">CHECK</button>
            </div>
            {deliveryMsg && <p className="mt-2 text-sm text-green-600">{deliveryMsg}</p>}
          </div>

          {/* Product USP Icons */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-1 text-[10px] uppercase font-bold text-gray-500">
              <ShieldCheck size={24} className="text-gray-400"/> 100% Authentic
            </div>
            <div className="flex flex-col items-center gap-1 text-[10px] uppercase font-bold text-gray-500">
              <RefreshCw size={24} className="text-gray-400"/> 7 Days Return
            </div>
            <div className="flex flex-col items-center gap-1 text-[10px] uppercase font-bold text-gray-500">
              <Truck size={24} className="text-gray-400"/> Free Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;