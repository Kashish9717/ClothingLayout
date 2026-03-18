import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components link karein
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages link karein
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';


function App() {
  // Global State for Cart (Hinglish: Yahan se cart data manage hoga)
  const [cart, setCart] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    // Check if item already exists
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(cart.map((item) => 
        item.id === product.id ? { ...exists, qty: (exists.qty || 1) + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    alert(`${product.name} added to bag! 🛍️`);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar hamesha top par rahega, cartCount prop ke saath */}
        <Navbar cartCount={cart.length} />

        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home addToCart={addToCart} />} />

            {/* Shop Page with Dynamic Categories (Kurti, Dress etc.) */}
            <Route path="/shop/:category" element={<Shop cart={cart} setCart={setCart} />} />

            {/* Product Detail Page (Individual Item) */}
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />

            {/* Cart & Checkout Page */}
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

            {/* Login & Register */}
            <Route path="/login" element={<Login />} />

            {/* Contact & Support */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer hamesha niche rahega */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Is file mein kya ho raha hai? (Step-by-Step)
/* <Router>: Ye react-router-dom ka main part hai jo URL badalne par bina page reload kiye naya content dikhata hai.

addToCart logic: Ye function humne yahan isliye banaya taaki hum ise Home, Shop, aur ProductDetail teeno pages par bhej saken. Isse user kahin se bhi item add kare, cart update ho jayega.

cart.length: Ye count Navbar ko pass kiya gaya hai taaki wo cart icon ke upar red circle mein number dikha sake.

flex-grow: Main tag mein ye class isliye lagayi hai taaki agar kisi page par content kam ho, tab bhi Footer screen ke sabse niche hi rahe. */