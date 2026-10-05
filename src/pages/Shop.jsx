import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronRight, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = ({ cart, setCart }) => {
  const { category } = useParams();
  
  const [activeTab, setActiveTab] = useState(category || 'all-collection');
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high'
  const [filterFabric, setFilterFabric] = useState('all');
  const [priceRange, setPriceRange] = useState(6000);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const tabs = [
    { name: 'All Curations', slug: 'all-collection' },
    { name: 'Kurtis & Chikankari', slug: 'kurti' },
    { name: 'Silks & Gowns', slug: 'dress' },
    { name: 'Modern Tops', slug: 'top' },
    { name: 'Fine Jewelry', slug: 'accessory' }
  ];

  useEffect(() => {
    setActiveTab(category || 'all-collection');
  }, [category]);

  const addToCartHandler = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...exists, qty: (exists.qty || 1) + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Filter & Sort Pipeline
  let processedProducts = products.filter(p => {
    const matchesCategory = activeTab === 'all-collection' || p.category.toLowerCase() === activeTab.toLowerCase();
    const matchesFabric = filterFabric === 'all' || (p.fabric && p.fabric.toLowerCase().includes(filterFabric.toLowerCase()));
    const matchesPrice = p.price <= priceRange;
    return matchesCategory && matchesFabric && matchesPrice;
  });

  if (sortBy === 'price-low') {
    processedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    processedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="pt-28 min-h-screen bg-[#FAF8F5]">
      
      {/* Breadcrumbs Navigation */}
      <div className="bg-white/60 border-b border-[#EAE2D8] py-3.5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-rose-600 transition">Maison</Link>
          <ChevronRight size={13} className="mx-2 text-gray-400" />
          <span className="text-[#1F1916]">{activeTab.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Sticky Department Tabs Bar */}
      <div className="sticky top-20 z-30 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E8E0D5] overflow-x-auto shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex space-x-10 py-4 whitespace-nowrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.slug;
            return (
              <Link
                key={tab.slug}
                to={`/shop/${tab.slug}`}
                className={`relative text-xs font-bold uppercase tracking-[0.22em] transition-colors pb-1 ${
                  isActive ? 'text-[#B83B5E]' : 'text-[#695B52] hover:text-[#1A1816]'
                }`}
              >
                {tab.name}
                {isActive && (
                  <motion.div 
                    layoutId="shopTabLine"
                    className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#B83B5E]" 
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Catalog View */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        
        {/* Header with Title and Sorting Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EAE2D8] gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-[#8C7A6B] uppercase">Curated Catalog</span>
            <h1 className="text-3xl md:text-5xl font-serif text-[#1F1916] capitalize mt-1">
              {activeTab.replace('-', ' ')}
            </h1>
            <p className="text-[#7A6C62] text-sm mt-1.5 font-light">
              Displaying {processedProducts.length} certified heirloom creations
            </p>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#DED4C7] shadow-xs text-xs font-semibold uppercase tracking-wider text-[#4A403A]">
              <ArrowUpDown size={14} className="text-stone-400" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Filter Toggle Button */}
            <button 
              onClick={() => setShowFilterDrawer(!showFilterDrawer)}
              className="flex items-center gap-2 bg-[#1F1916] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#B83B5E] transition-all shadow-sm cursor-pointer"
            >
              <SlidersHorizontal size={14} /> Filter Studio
            </button>
          </div>
        </div>

        {/* Collapsible Filter Studio Drawer */}
        <AnimatePresence>
          {showFilterDrawer && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12 bg-white rounded-3xl p-6 md:p-8 border border-[#E8DFC9] shadow-lg"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <h4 className="font-serif text-lg font-bold text-[#1F1916]">Refine Atelier Selection</h4>
                <button 
                  onClick={() => setShowFilterDrawer(false)}
                  className="p-1 hover:bg-gray-100 rounded-full text-gray-500"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Fabric Selector */}
                <div>
                  <label className="text-[11px] font-bold tracking-widest text-[#7A6C62] uppercase block mb-3">
                    Heritage Fabric
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'Cotton', 'Silk', 'Georgette', 'Linen', 'Chanderi'].map((fab) => (
                      <button
                        key={fab}
                        onClick={() => setFilterFabric(fab)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition ${
                          filterFabric === fab 
                            ? 'bg-[#1F1916] text-white font-bold' 
                            : 'bg-[#FAF8F5] text-gray-600 hover:bg-rose-50'
                        }`}
                      >
                        {fab === 'all' ? 'All Fabrics' : fab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex justify-between text-[11px] font-bold tracking-widest text-[#7A6C62] uppercase mb-3">
                    <span>Max Price</span>
                    <span className="text-rose-600 font-bold">₹{priceRange.toLocaleString('en-IN')}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="6000" 
                    step="200"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-rose-600"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>₹500</span>
                    <span>₹6,000+</span>
                  </div>
                </div>

                {/* Reset Filters */}
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setFilterFabric('all');
                      setPriceRange(6000);
                      setSortBy('featured');
                    }}
                    className="w-full py-3 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-widest hover:border-black transition"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {processedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {processedProducts.map((item) => (
              <ProductCard 
                key={item.id} 
                product={item} 
                addToCart={addToCartHandler} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-[#EAE2D8] p-8 max-w-lg mx-auto shadow-sm">
            <Sparkles size={36} className="mx-auto text-amber-500 mb-4 opacity-70" />
            <h3 className="text-2xl font-serif text-[#1F1916] mb-2">No matching silhouettes</h3>
            <p className="text-sm text-[#8C7A6B] leading-relaxed mb-6 font-light">
              We couldn't find items with your selected filters. Try broadening your price range or selected fabric.
            </p>
            <button 
              onClick={() => {
                setFilterFabric('all');
                setPriceRange(6000);
              }}
              className="bg-[#1F1916] text-[#FAF8F5] px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-rose-600 transition shadow-md"
            >
              Clear Refinements
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;