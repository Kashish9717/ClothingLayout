import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products'; // Product data yahan se aayega
import ProductCard from '../components/ProductCard';
import { Filter, ChevronRight } from 'lucide-react';

const Shop = ({ cart, setCart }) => {
  // useParams() url se category nikalta hai (e.g. /shop/kurti)
  const { category } = useParams(); 
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeTab, setActiveTab] = useState(category || 'all-collection');

  // Categories list for the mini-bar
  const tabs = [
    { name: 'All Collection', slug: 'all-collection' },
    { name: 'Kurti', slug: 'kurti' },
    { name: 'Dress', slug: 'dress' },
    { name: 'Top', slug: 'top' },
    { name: 'Accessory', slug: 'accessory' }
  ];

  // Jab bhi category change hogi, list update hogi
  useEffect(() => {
    const currentCat = category || 'all-collection';
    setActiveTab(currentCat);

    if (currentCat === 'all-collection') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => p.category.toLowerCase() === currentCat.toLowerCase());
      setFilteredProducts(filtered);
    }
  }, [category]);

  return (
    <div className="pt-24 min-h-screen bg-[#faf8f6]">
      
      {/* 1. Breadcrumbs (Small navigation bar at top) */}
      <div className="bg-white border-b border-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center text-xs font-medium text-gray-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-rose-500">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-900">{activeTab.replace('-', ' ')}</span>
        </div>
      </div>

      {/* 2. Mini Category Bar (Jo aapne manga tha) */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex space-x-8 py-4 whitespace-nowrap">
          {tabs.map((tab) => (
            <Link
              key={tab.slug}
              to={`/shop/${tab.slug}`}
              className={`text-sm font-bold uppercase tracking-tighter transition-all ${
                activeTab === tab.slug 
                ? 'text-rose-500 border-b-2 border-rose-500' 
                : 'text-gray-400 hover:text-black'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Product Grid Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-4xl font-serif capitalize">{activeTab.replace('-', ' ')}</h1>
            <p className="text-gray-500 text-sm mt-2">Showing {filteredProducts.length} premium pieces</p>
          </div>
          
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 hover:bg-black hover:text-white transition rounded-full text-sm">
            <Filter size={16} /> Filter & Sort
          </button>
        </div>

        {/* 4. The Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((item) => (
              <ProductCard 
                key={item.id} 
                product={item} 
                addToCart={() => setCart([...cart, item])} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-400 font-serif">Arriving Soon! No products found in this category.</h3>
            <Link to="/shop/all-collection" className="mt-4 inline-block text-rose-500 underline underline-offset-4">Browse All Collections</Link>
          </div>
        )}
      </main>

    </div>
  );
};

export default Shop;

// Is code mein kya-kya hai? (Hinglish Highlights)
// Mini Category Bar: Screen ke upar ek choti bar hai jo "Sticky" hai. Jab aap niche scroll karenge, wo bar top par chipki rahegi taaki user kisi bhi waqt category change kar sake.

// Dynamic Filtering: Isme useParams use hua hai. Matlab agar aap link bhejenge kashya.in/shop/kurti, toh page automatically sirf Kurtis load karega.

// Responsive Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ka matlab hai mobile par 1, tablet par 2, aur laptop par 4 products dikhenge.

// Empty State: Agar kisi category mein product nahi hai, toh ek sundar sa "Arriving Soon" message dikhega.