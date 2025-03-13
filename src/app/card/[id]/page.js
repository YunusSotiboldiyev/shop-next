"use client";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/components/CartContext"; 
import Customers from "@/app/components/Customers";

const products = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    oldPrice: 300,
    discount: "40%",
    image: "/card-info1.png",
    rating: 4.5,
    description: "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    colors: ["#4a4a2f", "#232323", "#d6d6d6"],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "10%",
    image: "/card-info2.png",
    rating: 4.5,
    description: "Premium skinny fit jeans for a comfortable yet fashionable style.",
    colors: ["#1c1c1c", "#535353"],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    image: "/card-info3.png",
    rating: 4.6,
    description: "A classic checkered shirt for a casual and stylish outfit.",
    colors: ["#b22222", "#005f73", "#8b5e3c"],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "20%",
    image: "/card-info4.png",
    rating: 4.3,
    description: "A comfortable T-shirt with stylish sleeve stripes.",
    colors: ["#000000", "#ff4500"],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "8%",
    image: "/card-info5.png",
    rating: 4.5,
    description: "A fashionable vertical striped shirt, perfect for any casual outing.",
    colors: ["#005f73", "#b22222"],
    sizes: ["Small", "Medium", "Large", "X-Large"]
  },
  {
    id: 6,
    name: "Graphic Print T-shirt",
    price: 145,
    image: "/card-info6.png",
    rating: 4.0,
    description: "A trendy graphic print T-shirt made from high-quality cotton fabric.",
    colors: ["#232323", "#d6d6d6"],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: 7,
    name: "Casual Bermuda Shorts",
    price: 80,
    image: "/card-info7.png",
    rating: 3.8,
    description: "Lightweight and comfortable Bermuda shorts for everyday wear.",
    colors: ["#8b5e3c", "#232323"],
    sizes: ["Small", "Medium", "Large"]
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    image: "/card-info8.png",
    rating: 4.4,
    description: "Classic faded skinny jeans with a modern fit and durable fabric.",
    colors: ["#535353", "#1c1c1c"],
    sizes: ["28", "30", "32", "34", "36"]
  },{
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
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart(); 
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[2] || "Large");

  if (!product) return <p className="text-center mt-10 text-xl">Product not found.</p>;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 my-12 bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div>
              <Image src={product.image} alt={product.name} width={400} height={400} className="rounded-md" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400 text-lg">⭐ {product.rating}</span>
              <span className="text-gray-500 text-sm">(451 reviews)</span>
            </div>
            
            <div className="flex items-center gap-4 text-2xl font-bold mt-4">
              <span>${product.price}</span>
            </div>

            <p className="text-gray-700 mt-4 font-semibold">Choose Size</p>
            <div className="flex space-x-3 mt-2">
              {product.sizes.map((size) => (
                <button
                key={size}
                className={`px-4 py-2 border rounded-md ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"}`}
                onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <button className="px-6 py-3 bg-black text-white rounded-full text-lg flex-1" 
                onClick={() => addToCart(product, selectedSize)}
                >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
<Customers/>
    </Layout>
  );
}
