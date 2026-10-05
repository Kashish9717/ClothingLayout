import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Heart, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="pt-28 pb-24 bg-[#FAF8F5]">
      
      {/* 1. Maison Hero Statement */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E3D9CE] shadow-xs"
        >
          <Sparkles size={13} className="text-amber-500" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7A6C62]">
            The Heritage & Craft Mandate
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-serif text-[#1F1916] leading-tight">
          Where Heirloom Traditions Meet <br />
          <span className="italic font-serif text-[#B83B5E]">Contemporary Silhouette</span>
        </h1>

        <p className="text-[#695B52] text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Founded on the reverence for India’s profound textile arts, Kashya creates timeless pret and haute couture. Each garment is an intimate symphony of hand-embroidery, botanical dyes, and conscious artisan luxury.
        </p>
      </section>

      {/* 2. Visual Atelier Split Story */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop" 
              alt="Artisan Craftsmanship" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#1F1916]/90 backdrop-blur-md p-5 rounded-2xl text-[#FAF8F5] border border-white/10">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-300">Preserving Karigari</p>
              <p className="font-serif text-sm mt-1">40+ Hours of Needlework In Every Chikankari Ensemble</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#8C7A6B]">Philosophy & Origins</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1F1916]">
                Rooted in Lucknow, <br />
                Celebrated Across the Globe.
              </h2>
            </div>

            <p className="text-[#695B52] text-sm md:text-base font-light leading-relaxed">
              We started with a single conviction: luxury should not only feel sublime on your skin, but honor the hands that shaped it. In our workshops, master craftsmen practice ancient shadow work, mukaish embellishments, and pure mulberry silk drapes.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#EAE2D8]">
              <div>
                <h4 className="font-serif text-2xl font-bold text-[#1F1916]">100%</h4>
                <p className="text-xs uppercase tracking-wider text-[#8C7A6B] mt-0.5">Ethical Fair Wage</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-[#1F1916]">Zero</h4>
                <p className="text-xs uppercase tracking-wider text-[#8C7A6B] mt-0.5">Mass Production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars of the Maison */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="text-center mb-14">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8C7A6B]">Our Guiding Standard</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F1916] mt-1">The Kashya Promise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#B83B5E] flex items-center justify-center">
              <Award size={22} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1F1916]">Authentic Provenance</h3>
            <p className="text-sm text-[#7A6C62] font-light leading-relaxed">
              Every fabric is lab-tested and hand-inspected — from certified pure Chanderi silks to handloom breathable linens.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Heart size={22} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1F1916]">Artisan Patronage</h3>
            <p className="text-sm text-[#7A6C62] font-light leading-relaxed">
              Directly supporting over 500 weaver families, sustaining age-old craft clusters and generational craftsmanship.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#EFE8DF] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Shield size={22} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1F1916]">Heirloom Longevity</h3>
            <p className="text-sm text-[#7A6C62] font-light leading-relaxed">
              Silhouettes designed to outlive ephemeral trends and become cherished heirlooms in your wardrobe for decades.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA banner */}
      <div className="max-w-5xl mx-auto px-6 text-center pt-8">
        <Link 
          to="/shop/all-collection" 
          className="inline-flex items-center gap-3 bg-[#1F1916] text-[#FAF8F5] px-10 py-4 rounded-full font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#B83B5E] transition-all duration-300 shadow-xl"
        >
          <span>Explore The Curations</span>
          <ArrowRight size={15} />
        </Link>
      </div>

    </div>
  );
}