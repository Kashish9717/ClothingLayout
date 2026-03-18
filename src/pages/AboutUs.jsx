import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">
          About Kashya.in
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          Kashya.in is your go-to destination for trendy fashion, traditional wear, and stylish accessories. 
          We are passionate about curating the perfect collection of clothing and accessories that celebrate 
          individuality and culture.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          Our mission is to make fashion accessible, fun, and sustainable. 
          Whether you're looking for modern tops, elegant kurtis, or unique earrings, 
          Kashya.in has something special for everyone.
        </p>
        <div className="flex justify-center gap-6">
          <div className="bg-pink-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To bring style and tradition together, helping everyone express their personality through fashion.
            </p>
          </div>
          <div className="bg-pink-100 p-6 rounded-lg shadow-md w-64">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Our Values</h3>
            <p className="text-gray-600">
              Quality, authenticity, and customer satisfaction are at the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}