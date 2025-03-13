"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "../components/Layout";
import { FaFilter, FaTimes } from "react-icons/fa";
import Image from "next/image";

const products = [
  {
    id: 10,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    oldPrice: 300,
    discount: "40%",
    image: "/category1.png",
    rating: 4.5,
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ["#4a4a2f", "#232323", "#d6d6d6"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 11,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "10%",
    image: "/category2.png",
    rating: 4.5,
    description:
      "Premium skinny fit jeans for a comfortable yet fashionable style.",
    colors: ["#1c1c1c", "#535353"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 12,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "20%",
    image: "/category3.png",
    rating: 5.0,
    description:
      "A stylish black striped t-shirt that combines comfort and elegance.",
    colors: ["#000000", "#333333", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 13,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "20%",
    image: "/category4.png",
    rating: 3.6,
    description:
      "A pair of classic skinny-fit jeans that are both flexible and durable.",
    colors: ["#1c1c1c", "#595959"],
    sizes: ["28", "30", "32", "34", "36"],
  },
  {
    id: 14,
    name: "Checkered Shirt",
    price: 180,
    image: "/category5.png",
    rating: 4.5,
    description:
      "A fashionable checkered shirt that pairs well with casual and formal outfits.",
    colors: ["#ff0000", "#000000"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 15,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "20%",
    image: "/category6.png",
    rating: 4.4,
    description:
      "A comfortable t-shirt with sleeve stripes for a sporty look.",
    colors: ["#001f3f", "#ff851b"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "10%",
    image: "/category7.png",
    rating: 4.0,
    description:
      "A vertical striped shirt designed to add a modern touch to your outfit.",
    colors: ["#003366", "#ffffff"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 17,
    name: "Courage Graphic T-shirt",
    price: 145,
    image: "/category8.png",
    rating: 4.3,
    description:
      "A bold graphic t-shirt that stands out in any crowd with its unique design.",
    colors: ["#1a1a1a", "#ffcc00"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "Loose Fit Bermuda Shorts",
    price: 180,
    image: "/category9.png",
    rating: 4.5,
    description:
      "Casual and stylish loose-fit Bermuda shorts for maximum comfort.",
    colors: ["#000000", "#707070"],
    sizes: ["30", "32", "34", "36", "38"],
  },
];

const colors = ["#008000", "#ff0000", "#ffcc00", "#ff851b", "#0000ff", "#000000", "#ffffff", "#ff00ff"];
const sizes = ["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large"];

const ProductSection = () => {
  const router = useRouter();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleProductClick = (id) => {
    router.push(`/info/${id}`);
  };

  return (
    <Layout>
      <div className="w-full p-5 flex">
      
        <div className="hidden md:block w-64 p-4 bg-white rounded-lg shadow-md">
          <FilterSidebar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>

        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full"
          onClick={() => setMobileFilterOpen(true)}
        >
          <FaFilter size={20} />
        </button>

        {mobileFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="w-80 bg-white p-4 h-auto shadow-lg overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Filters</h3>
                <button onClick={() => setMobileFilterOpen(false)}>
                  <FaTimes size={20} />
                </button>
              </div>
              <FilterSidebar
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
              <button className="w-full mt-4 py-2 bg-black text-white rounded-md">
                Apply Filter
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-3 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <Image
              width={300}
              height={300}
                src={product.image}
                alt={product.name}
                className=""
              />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <div className="text-sm text-gray-500">{product.rating}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const FilterSidebar = ({ priceRange, setPriceRange, selectedSize, setSelectedSize, selectedColor, setSelectedColor }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-3">Filters</h3>

      <div className="mb-4">
        <p className="font-semibold">Price</p>
        <input
          type="range"
          min="50"
          max="200"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([50, e.target.value])}
          className="w-full"
        />
        <div className="text-sm flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Colors</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-black" : "border-gray-300"}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold">Size</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {sizes.map((size, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-md ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mt-4 py-2 bg-black text-white rounded-md">
        Apply Filter
      </button>
    </div>
  );
};

export default ProductSection;
