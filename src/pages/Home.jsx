import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import CategorySection from '../components/CategorySection';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => {
  // Best sellers selection
  const popularProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="bg-[#FAF8F5] overflow-hidden">
      {/* 1. Hero Lookbook Banner */}
      <HeroBanner />

      {/* 2. Infinite Banner Strip */}
      <div className="bg-[#181818] text-[#E8DFC9] py-3 border-y border-stone-800 overflow-hidden whitespace-nowrap select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="inline-flex items-center gap-10 text-xs font-semibold tracking-widest uppercase"
        >
          {Array(8).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <span>Handmade in India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>100% Pure Fabric</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>Free Delivery Across India</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span>Easy 7-Day Size Exchanges</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* 3. Category Departments Section */}
      <CategorySection />

      {/* 4. Best Sellers Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-rose-500 uppercase mb-1">
              <Sparkles size={14} />
              <span>Customer Favorites</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 font-normal">
              Our <span className="italic font-serif text-rose-600">Best Sellers</span>
            </h2>
          </div>
          <Link 
            to="/shop/all-collection" 
            className="group inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-gray-900 hover:text-rose-600 transition-colors mt-4 md:mt-0"
          >
            <span>View All Products</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {popularProducts.map(item => (
            <ProductCard key={item.id} product={item} addToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* 5. Quality & Story Section */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#1E1916] text-[#FAF8F5] grid md:grid-cols-12 items-center border border-stone-800 shadow-xl">
          <div className="md:col-span-6 p-8 md:p-14 space-y-5 z-10">
            <span className="text-[10px] font-bold tracking-wider uppercase text-amber-300 px-3 py-1 rounded-full bg-white/10">
              Made with Care
            </span>
            <h3 className="text-3xl md:text-4xl font-serif leading-tight">
              Pure Fabrics & <br />
              <span className="italic text-rose-300">Comfortable Fits</span>
            </h3>
            <p className="text-stone-300 text-sm md:text-base leading-relaxed">
              Every outfit at Kashya is hand-stitched by skilled artisans with pure cottons, georgettes, and silks to keep you feeling comfortable and confident all day.
            </p>
            <div className="pt-2">
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-7 py-3 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-rose-100 transition-all shadow-md"
              >
                <span>Read Our Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-6 h-72 md:h-full min-h-[360px] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop" 
              alt="Craftsmanship" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1E1916] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 6. Customer Review */}
      <section className="py-20 bg-stone-100/70 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <Quote size={36} className="mx-auto text-rose-400 opacity-60" />
          <p className="font-serif text-2xl text-gray-900 leading-relaxed italic">
            "The kurti quality is amazing and fits perfectly! The fabric is so soft and looks even better in real life. Loved the fast delivery too!"
          </p>
          <div className="space-y-1">
            <div className="flex justify-center gap-1 text-amber-500 mb-1">
              {Array(5).fill(null).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="font-bold text-xs uppercase text-gray-900">Ananya S.</p>
            <p className="text-[11px] text-gray-500 uppercase">Verified Buyer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;