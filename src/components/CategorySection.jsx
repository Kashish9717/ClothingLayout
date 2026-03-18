import React from 'react';
import { motion } from 'framer-motion'; // Animation ke liye library
import { useNavigate } from 'react-router-dom'; // Page change karne ke liye hook

const CategorySection = () => {
  const navigate = useNavigate(); // Iska use karke hum button click par user ko doosre page pe bhejenge

  // Categories ka data array
  // Hinglish: Yahan humne saari details likh di hain jaise photo, naam aur grid ka size
  const categories = [
    {
      id: 1,
      name: 'Ethnic Kurtis',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600',
      path: '/shop/kurti',
      gridSpan: 'md:col-span-2 md:row-span-2', // Hinglish: Ye box bada dikhega (2 columns aur 2 rows lega)
      tag: 'Trending Now'
    },
    {
      id: 2,
      name: 'Elegant Dresses',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600',
      path: '/shop/dress',
      gridSpan: 'md:col-span-1 md:row-span-1' // Hinglish: Ye normal chota box rahega
    },
    {
      id: 3,
      name: 'Western Tops',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=600',
      path: '/shop/top',
      gridSpan: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=600',
      path: '/shop/accessory',
      gridSpan: 'md:col-span-2 md:row-span-1' // Hinglish: Ye box width mein lamba hoga (2 columns wide)
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading: "Shop by Category" wala title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 tracking-tight uppercase">
            Shop by Category
          </h2>
          {/* Hinglish: Heading ke niche ek choti gulabi line decoration ke liye */}
          <div className="h-1 w-20 bg-rose-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Categories Grid */}
        {/* Hinglish: md:h-[650px] matlab laptop screen pe fixed height taaki grid set rahe */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[650px]">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 0.99 }} // Hinglish: Mouse laane par box halka sa andar dabega (Premium feel)
              onClick={() => navigate(cat.path)} // Click karte hi category page khul jayega
              className={`relative group overflow-hidden cursor-pointer rounded-lg shadow-sm ${cat.gridSpan}`}
            >
              {/* Category Ki Image */}
              {/* Hinglish: group-hover:scale-110 se image dheere se zoom-in hogi */}
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Black Overlay: Image ko thoda dark karne ke liye */}
              {/* Hinglish: Taki white text saaf dikhe, hover karne pe thoda andhera badh jayega */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>

              {/* Text aur Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                {/* Agar tag (Trending) hai toh hi dikhao */}
                {cat.tag && (
                  <span className="bg-rose-500 text-[10px] font-bold px-3 py-1 rounded-sm mb-2 tracking-widest uppercase">
                    {cat.tag}
                  </span>
                )}
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-widest uppercase text-center">
                  {cat.name}
                </h3>

                {/* Animated Line: Hover pe line left to right badhegi */}
                <div className="mt-3 h-[1px] w-0 bg-white group-hover:w-20 transition-all duration-500"></div>
                
                {/* Explore Button: Sirf hover pe niche se upar aayega */}
                <button className="mt-6 border border-white px-6 py-2 text-[10px] font-bold tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  EXPLORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
// ska Look & Feel:
// Irregular Grid: Isme Kurtis wala box bada hai aur baaki chote (Pinterest style), jo design ko modern banata hai.

// Smooth Animations: framer-motion aur Tailwind ka zoom effect milkar ise bahut luxury feel dete hain.

// Navigation: Iske kisi bhi box par click karne se user seedha Shop.jsx ke filter page par pahunch jayega.