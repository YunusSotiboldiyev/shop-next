"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = {
  newArrivals: [
    { id: 1, name: "T-shirt with Tape Details", price: 120, image: "/card-info1.png", rating: 4.6 },
    { id: 2, name: "Skinny Fit Jeans", price: 240, oldPrice: 260, image: "/card-info2.png", rating: 4.5 },
    { id: 3, name: "Checkered Shirt", price: 180, image: "/card-info3.png", rating: 4.6 },
    { id: 4, name: "Sleeve Striped T-shirt", price: 130, oldPrice: 160, image: "/card-info4.png", rating: 4.3 }
  ],
  topSelling: [
    { id: 5, name: "Vertical Striped Shirt", price: 212, oldPrice: 232, image: "/card-info5.png", rating: 4.5 },
    { id: 6, name: "Courage Graphic T-shirt", price: 145, image: "/card-info6.png", rating: 4.0 },
    { id: 7, name: "Loose Fit Bermuda Shorts", price: 80, image: "/card-info7.png", rating: 3.8 },
    { id: 8, name: "Faded Skinny Jeans", price: 210, image: "/card-info8.png", rating: 4.4 }
  ]
};

export default function ProductSection() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-4 my-12">
      {["New Arrivals", "Top Selling"].map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">{section.toUpperCase()}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(section === "New Arrivals" ? products.newArrivals : products.topSelling).map((product) => (
              <div
                key={product.id}
                className=" p-4 rounded-lg cursor-pointer hover:shadow-xl transition"
                onClick={() => router.push(`/card/${product.id}`)}
              >
                <Image src={product.image} alt={product.name} width={200} height={200} className="rounded-md mx-auto" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-sm">⭐ {product.rating}</span>
                </div>
                <div className="mt-2 text-lg font-bold">
                  ${product.price}{" "}
                  {product.oldPrice && <span className="text-gray-500 line-through text-sm">${product.oldPrice}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center mt-4">
        <button className="px-4 py-2 bg-black text-white rounded-full">View All</button>
      </div>
    </div>
  );
}
