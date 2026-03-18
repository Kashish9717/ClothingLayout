import React from 'react';
import { Trash2, CreditCard, Smartphone, CheckCircle } from 'lucide-react';

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-serif mb-8">Your Shopping Bag ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your bag is empty. Start shopping!</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-6 border-b py-6">
              <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">Fabric: {item.fabric} | Size: M</p>
                <p className="mt-2 font-bold text-rose-600">₹{item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Payment Section */}
      <div className="bg-gray-50 p-8 rounded-lg h-fit">
        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
        <div className="space-y-4 border-b pb-6">
          <div className="flex justify-between"><span>Subtotal</span><span>₹{total}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">FREE</span></div>
          <div className="flex justify-between font-bold text-lg"><span>Total</span><span>₹{total}</span></div>
        </div>

        <h4 className="mt-8 mb-4 font-semibold uppercase text-xs tracking-widest">Select Payment Method</h4>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 border bg-white hover:border-rose-500 rounded transition">
            <span className="flex items-center gap-2"><CreditCard size={18}/> Card / NetBanking</span>
            <CheckCircle size={16} className="text-rose-500"/>
          </button>
          <button className="w-full flex items-center gap-2 p-4 border bg-white hover:border-rose-500 rounded transition">
            <Smartphone size={18}/> UPI (GPay / PhonePe)
          </button>
        </div>
        <button className="w-full bg-black text-white mt-8 py-4 font-bold hover:bg-rose-600 transition">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;