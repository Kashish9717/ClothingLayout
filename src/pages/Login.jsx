import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Login = () => {
  // Hinglish: State check karegi ki user "Login" page dekh raha hai ya "Register"
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-[#faf8f6] px-6">
      
      {/* Animation Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl shadow-rose-100 border border-gray-50"
      >
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 uppercase tracking-tighter">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-400 text-sm mt-2 tracking-widest uppercase">
            {isLogin ? 'Login to your Kashya account' : 'Join the Kashya family'}
          </p>
        </div>

        {/* Login/Signup Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Name Field (Hinglish: Ye sirf tab dikhega jab user Register kar raha ho) */}
          {!isLogin && (
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm"
              />
            </div>
          )}

          {/* Email Field */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={18} />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-500 transition-colors" size={18} />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-rose-200 outline-none transition-all text-sm"
            />
          </div>

          {/* Forgot Password (Hinglish: Sirf Login mode mein dikhega) */}
          {isLogin && (
            <p className="text-right text-xs text-rose-500 font-bold cursor-pointer hover:underline uppercase tracking-widest">
              Forgot Password?
            </p>
          )}

          {/* Action Button */}
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-200 mt-6">
            {isLogin ? 'SIGN IN' : 'REGISTER NOW'} <ArrowRight size={16} />
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-black font-bold border-b border-black hover:text-rose-500 hover:border-rose-500 transition-all"
            >
              {isLogin ? 'Create One' : 'Login Here'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;