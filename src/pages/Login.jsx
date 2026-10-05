import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(isLogin ? `Welcome back to Kashya Maison!` : `Account created successfully! Welcome to the family.`);
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-[#FAF8F5] px-6">
      
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-lg p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#EFE8DF] relative overflow-hidden"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />

        {/* Title Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DFC9] text-[9px] font-bold tracking-[0.25em] text-[#8C7A6B] uppercase mb-1">
            <Sparkles size={11} className="text-amber-500" />
            <span>Maison Patron Portal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F1916]">
            {isLogin ? 'Welcome Back' : 'Create Private Account'}
          </h2>
          <p className="text-xs text-[#7A6C62] font-light leading-relaxed">
            {isLogin ? 'Access your bespoke wishlist, concierge requests, and orders.' : 'Join our private client circle for early access and concierge services.'}
          </p>
        </div>

        {/* Form Mode Toggle Tabs */}
        <div className="flex bg-[#FAF8F5] p-1 rounded-2xl border border-[#EFE8DF] mb-6">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              isLogin ? 'bg-white text-[#1F1916] shadow-sm' : 'text-[#8C7A6B] hover:text-[#1F1916]'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              !isLogin ? 'bg-white text-[#1F1916] shadow-sm' : 'text-[#8C7A6B] hover:text-[#1F1916]'
            }`}
          >
            Register
          </button>
        </div>

        {/* Auth Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          <AnimatePresence>
            {!isLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative group"
              >
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-600 transition-colors" size={17} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl focus:border-[#B83B5E] outline-none transition-all text-xs text-gray-800 placeholder:text-gray-400"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Email Field */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-600 transition-colors" size={17} />
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl focus:border-[#B83B5E] outline-none transition-all text-xs text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-600 transition-colors" size={17} />
            <input 
              type="password" 
              placeholder="Password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#FAF8F5] border border-[#EAE2D8] rounded-2xl focus:border-[#B83B5E] outline-none transition-all text-xs text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Forgot Password */}
          {isLogin && (
            <div className="flex justify-end">
              <span className="text-[11px] text-[#B83B5E] font-semibold cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>
          )}

          {/* Submit CTA */}
          <button 
            type="submit"
            disabled={submitted}
            className="w-full bg-[#1F1916] text-[#FAF8F5] py-4 rounded-2xl font-bold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:bg-[#B83B5E] transition-all duration-300 shadow-xl cursor-pointer disabled:opacity-50 mt-2"
          >
            <span>{submitted ? 'Authenticating...' : (isLogin ? 'Sign In To Account' : 'Create Member Profile')}</span>
            <ArrowRight size={15} />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#F0EBE3] flex items-center justify-center gap-2 text-[11px] text-[#8C7A6B]">
          <ShieldCheck size={14} className="text-amber-600" />
          <span>Encrypted Confidential Patron Verification</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;