import React, { useState } from 'react';
import { Trash2, CreditCard, Smartphone, CheckCircle, ArrowRight, ShieldCheck, Tag, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cart, setCart }) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.qty || 1)), 0);
  const total = Math.max(0, subtotal - discount);

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = (item.qty || 1) + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const applyCouponHandler = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'KASHYA20' || coupon.trim().toUpperCase() === 'FIRSTLUXE') {
      const disc = Math.round(subtotal * 0.20);
      setDiscount(disc);
      setCouponApplied(true);
    } else {
      alert('Invalid Promo Code. Try "KASHYA20" for 20% off!');
    }
  };

  const handleCheckout = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setOrderSuccess(true);
      setCart([]);
    }, 1800);
  };

  if (orderSuccess) {
    return (
      <div className="pt-36 pb-24 max-w-2xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl p-10 md:p-14 border border-[#EAE2D8] shadow-xl space-y-6"
        >
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle size={36} />
          </div>
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">Order Confirmed</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F1916]">Thank you for shopping Kashya.</h2>
          <p className="text-sm text-[#7A6C62] leading-relaxed font-light">
            Your heirloom order <strong>#KS-{Math.floor(100000 + Math.random() * 900000)}</strong> has been booked for bespoke packaging and express dispatch. A concierge confirmation has been dispatched to your email.
          </p>
          <div className="pt-4">
            <Link
              to="/shop/all-collection"
              className="inline-flex items-center gap-3 bg-[#1F1916] text-[#FAF8F5] px-8 py-3.5 rounded-full font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#B83B5E] transition-all shadow-md"
            >
              Continue Exploring
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 md:px-12 bg-[#FAF8F5]">
      
      <div className="mb-10 pb-4 border-b border-[#EAE2D8] flex items-baseline justify-between">
        <div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-[#8C7A6B] uppercase">Boutique Bag</span>
          <h1 className="text-3xl md:text-4xl font-serif text-[#1F1916]">Your Curated Selection</h1>
        </div>
        <p className="text-xs font-semibold text-[#8C7A6B] tracking-wider uppercase">
          {cart.length} {cart.length === 1 ? 'Creation' : 'Creations'}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#EAE2D8] p-12 max-w-lg mx-auto shadow-sm space-y-6">
          <ShoppingBag size={48} className="mx-auto text-stone-400 opacity-60" />
          <h3 className="text-2xl font-serif text-[#1F1916]">Your shopping bag is currently empty</h3>
          <p className="text-sm text-[#7A6C62] font-light leading-relaxed">
            Discover our bespoke Chikankari kurtis, mulberry silk gowns, and handcrafted jewels.
          </p>
          <Link
            to="/shop/all-collection"
            className="inline-flex items-center gap-3 bg-[#1F1916] text-[#FAF8F5] px-8 py-3.5 rounded-full font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#B83B5E] transition-all shadow-md"
          >
            <span>Explore Collections</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Cart Item List (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <AnimatePresence>
              {cart.map(item => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-2xl p-5 border border-[#EFE8DF] shadow-xs flex items-center gap-5 relative group"
                >
                  {/* Thumbnail Image */}
                  <div className="w-24 h-32 rounded-xl overflow-hidden bg-stone-100 flex-shrink-0 border border-stone-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold tracking-widest text-[#8C7A6B] uppercase">{item.category}</span>
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className="text-gray-300 hover:text-rose-600 transition p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#1F1916] truncate mt-0.5">{item.name}</h3>
                    <p className="text-xs text-[#8C7A6B] mt-1 font-light">
                      Fabric: {item.fabric || 'Pure Cotton Silk'} • Size: Standard M
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      {/* Price */}
                      <span className="font-bold text-base text-[#1F1916]">
                        ₹{(item.price * (item.qty || 1)).toLocaleString('en-IN')}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E0D5C7] rounded-full bg-[#FAF8F5] px-2 py-0.5">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="p-1 text-gray-500 hover:text-black transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold px-3 text-[#1F1916]">{item.qty || 1}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="p-1 text-gray-500 hover:text-black transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Promo Code Strip */}
            <form onSubmit={applyCouponHandler} className="bg-white rounded-2xl p-4 border border-[#EFE8DF] flex gap-3">
              <div className="relative flex-1">
                <Tag size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Enter Promo Code (e.g. KASHYA20)" 
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs uppercase tracking-wider bg-[#FAF8F5] rounded-xl outline-none focus:ring-1 focus:ring-rose-400"
                />
              </div>
              <button 
                type="submit" 
                className="bg-[#1F1916] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#B83B5E] transition cursor-pointer"
              >
                Apply
              </button>
            </form>
          </div>

          {/* Order Summary Checkout Drawer (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-3xl border border-[#EFE8DF] shadow-md space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#1F1916] pb-3 border-b border-[#F0EBE3]">Order Mandate</h3>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between text-[#695B52]">
                <span>Atelier Subtotal</span>
                <span className="font-semibold text-[#1F1916]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Exclusive Courtesy (20%)</span>
                  <span>- ₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#695B52]">
                <span>Bespoke Pan-India Shipping</span>
                <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">Complimentary</span>
              </div>
              <div className="pt-4 border-t border-[#F0EBE3] flex justify-between items-baseline">
                <span className="font-serif text-lg font-bold text-[#1F1916]">Grand Total</span>
                <span className="font-serif text-2xl font-bold text-[#B83B5E]">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C7A6B]">Payment Gateway</p>
              
              <button 
                type="button"
                onClick={() => setSelectedPayment('card')}
                className={`w-full flex items-center justify-between p-3.5 border rounded-2xl transition cursor-pointer ${
                  selectedPayment === 'card' 
                    ? 'border-[#B83B5E] bg-rose-50/40 text-[#1F1916]' 
                    : 'border-[#EAE2D8] bg-white text-gray-600'
                }`}
              >
                <span className="flex items-center gap-3 text-xs font-semibold">
                  <CreditCard size={18} className="text-stone-700" /> All Cards, NetBanking & EMI
                </span>
                {selectedPayment === 'card' && <CheckCircle size={16} className="text-[#B83B5E]" />}
              </button>

              <button 
                type="button"
                onClick={() => setSelectedPayment('upi')}
                className={`w-full flex items-center justify-between p-3.5 border rounded-2xl transition cursor-pointer ${
                  selectedPayment === 'upi' 
                    ? 'border-[#B83B5E] bg-rose-50/40 text-[#1F1916]' 
                    : 'border-[#EAE2D8] bg-white text-gray-600'
                }`}
              >
                <span className="flex items-center gap-3 text-xs font-semibold">
                  <Smartphone size={18} className="text-emerald-600" /> Instant UPI (GPay / PhonePe / Paytm)
                </span>
                {selectedPayment === 'upi' && <CheckCircle size={16} className="text-[#B83B5E]" />}
              </button>
            </div>

            {/* Checkout Action Button */}
            <button 
              onClick={handleCheckout}
              disabled={isOrdering}
              className="w-full bg-[#1F1916] text-[#FAF8F5] py-4 rounded-2xl font-bold text-xs tracking-[0.25em] uppercase hover:bg-[#B83B5E] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50"
            >
              {isOrdering ? 'Securing Your Order...' : 'Confirm & Complete Payment'}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C7A6B]">
              <ShieldCheck size={14} className="text-amber-600" />
              <span>256-Bit Encrypted Secure Boutique Checkout</span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;