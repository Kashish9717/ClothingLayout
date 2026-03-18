import React from 'react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <section className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden bg-[#f3e9e2] pt-20">
      
      {/* Text Content (Left Side) */}
      <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 items-center h-full">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-20"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-rose-500 font-bold tracking-[0.4em] text-sm mb-4 uppercase"
          >
            Summer  Collection 2026
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl font-serif text-gray-900 leading-[1.1] mb-6">
            Elevate Your <br /> 
            <span className="italic font-normal text-rose-400">Style!</span>
          </h1>
          
          <p className="text-gray-500 text-lg max-w-sm mb-10 leading-relaxed">
            Discover the latest trends in luxury ethnic and western wear. Made for the modern woman.
          </p>

          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 font-bold tracking-widest text-xs hover:bg-rose-600 transition-all shadow-xl"
            >
              SHOP COLLECTION
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="border-2 border-black text-black px-10 py-4 font-bold tracking-widest text-xs hover:bg-black hover:text-white transition-all"
            >
              VIEW LOOKBOOK
            </motion.button>
          </div>
        </motion.div>

        {/* Image Content (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-full flex items-end justify-center"
        >
          {/* Main Banner Image */}
          <img 
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800" 
            alt="Kashya Model" 
            className="h-[80%] md:h-[90%] object-cover z-10 drop-shadow-2xl"
          />
          
          {/* Background Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500] h-[500] bg-rose-200/30 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Floating Offer Tag */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 right-10 bg-white p-6 shadow-2xl rounded-full border border-rose-100 z-30"
      >
        <p className="text-center font-bold text-rose-500">
          30% OFF <br />
          <span className="text-[10px] text-gray-400 font-normal">On First Order</span>
        </p>
      </motion.div>
    </section>
  );
};

export default HeroBanner;