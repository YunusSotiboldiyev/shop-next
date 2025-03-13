"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F2F0F1]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6">
      
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-4">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition">
            Shop Now
          </button>
          <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-6 text-center lg:text-left">
            <div>
              <h2 className="text-xl font-bold">200+</h2>
              <p className="text-gray-600 text-sm">International Brands</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">2,000+</h2>
              <p className="text-gray-600 text-sm">High-Quality Products</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">30,000+</h2>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <Image
            src="/1.png" 
            alt="Fashion Models"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div className="bg-black text-white py-4 border-t border-white">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 text-[22px] tracking-wide font-serif">
    <span className="uppercase font-semibold">VERSACE</span>
    <span className="uppercase font-light tracking-widest">ZARA</span>
    <span className="uppercase font-medium">GUCCI</span>
    <span className="font-extrabold text-[24px] tracking-wide">PRADA</span>
    <span className="capitalize font-light italic">Calvin Klein</span>
  </div>
</div>

    </section>
  );
}
