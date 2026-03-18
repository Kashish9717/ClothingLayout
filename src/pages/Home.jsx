import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import CategorySection from '../components/CategorySection'; // <--- Link yahan ho raha hai

const Home = () => {
  // Sirf popular products dikhane ke liye (Pehle 4)
  const popularProducts = products.slice(0, 4);

  return (
    <div>
      {/* 1. Top par Banner */}
      <HeroBanner />

      {/* 2. Banner ke thoda scroll baad Categories */}
      <CategorySection />

      {/* 3. Featured/Popular Products Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">BEST SELLERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {popularProducts.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
      
      {/* 4. Customer Trust Section (Jo aapne manga tha) */}
      <section className="bg-white py-12 border-t border-b">
        <div className="flex justify-around text-center px-6">
          <div>
            <h4 className="font-bold">10k+</h4>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>
          <div>
            <h4 className="font-bold">Premium</h4>
            <p className="text-gray-500 text-sm">Fabric Quality</p>
          </div>
          <div>
            <h4 className="font-bold">Fast</h4>
            <p className="text-gray-500 text-sm">Pan India Delivery</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;