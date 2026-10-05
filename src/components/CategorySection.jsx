import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Kurtis & Chikankari',
      subtitle: 'Pure Cotton & Georgette',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop',
      path: '/shop/kurti',
      gridSpan: 'md:col-span-2 md:row-span-2',
      tag: 'Most Loved'
    },
    {
      id: 2,
      name: 'Dresses & Gowns',
      subtitle: 'Party & Festive Wear',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=700&auto=format&fit=crop',
      path: '/shop/dress',
      gridSpan: 'md:col-span-1 md:row-span-1',
      tag: 'Trending'
    },
    {
      id: 3,
      name: 'Trendy Tops',
      subtitle: 'Casual & Office Wear',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=700&auto=format&fit=crop',
      path: '/shop/top',
      gridSpan: 'md:col-span-1 md:row-span-1',
      tag: 'New'
    },
    {
      id: 4,
      name: 'Earrings & Jewelry',
      subtitle: 'Handmade statement earrings',
      image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=900&auto=format&fit=crop',
      path: '/shop/accessory',
      gridSpan: 'md:col-span-2 md:row-span-1',
      tag: 'Special'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-rose-500 uppercase mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span>Explore Categories</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 font-normal">
              Shop by <span className="italic font-serif text-rose-600">Category</span>
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs mt-3 md:mt-0 leading-relaxed">
            Find the right outfit for your everyday style, parties, and festive celebrations.
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[680px]">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              onClick={() => navigate(cat.path)}
              className={`relative group overflow-hidden cursor-pointer rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#EDE5DC] ${cat.gridSpan}`}
            >
              {/* Image with smooth zoom transition */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
              />

              {/* Ambient Scrim Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 transition-all duration-500" />

              {/* Top Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-white/90 backdrop-blur-md text-[#1F1916] text-[9px] font-bold px-3 py-1 rounded-full tracking-[0.2em] uppercase border border-white/60 shadow-sm">
                  {cat.tag}
                </span>
              </div>

              {/* Top Right Arrow Indicator */}
              <div className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight size={18} />
              </div>

              {/* Bottom Content Area */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
                <p className="text-[11px] tracking-[0.2em] text-[#E0D3C3] uppercase font-medium mb-1 opacity-90">
                  {cat.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-wide text-white group-hover:text-rose-200 transition-colors duration-300">
                  {cat.name}
                </h3>

                {/* Hidden Explore Text on Hover */}
                <div className="flex items-center gap-2 mt-4 text-[11px] font-bold tracking-[0.25em] uppercase text-rose-300 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Line</span>
                  <span className="h-[1px] w-8 bg-rose-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;