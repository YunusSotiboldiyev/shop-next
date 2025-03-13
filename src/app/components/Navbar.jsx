"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "@/app/components/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const { cart } = useCart(); 

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="w-full border-b border-gray-300 relative">
      {showBanner && (
        <div className="bg-black text-white text-center text-sm p-2 flex justify-between items-center px-4">
          <span>
            Sign up and get 20% off on your first order.{" "}
            <Link href="#" className="underline">
              Sign Up Now
            </Link>
          </span>
          <button onClick={() => setShowBanner(false)}>
            <FiX className="text-white" />
          </button>
        </div>
      )}

      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <button className="lg:hidden mr-4" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu size={24} />
          </button>
          <Link href="/" className="hover:text-gray-500">
            <h1 className="text-2xl font-bold">SHOP.CO</h1>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-500">
            Shop
          </Link>
          <Link href="/sale" className="hover:text-gray-500">
            On Sale
          </Link>
          <Link href="/new-arrivals" className="hover:text-gray-500">
            New Arrivals
          </Link>
          <Link href="/brands" className="hover:text-gray-500">
            Brands
          </Link>
        </div>

        <div className="hidden lg:flex flex-grow max-w-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-gray-400"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <FiSearch className="lg:hidden text-xl" />

          <Link href="/cart" className="relative hover:text-gray-500">
            <FiShoppingCart className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <FiUser className="text-xl" />
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-300 p-4">
          <Link href="/" className="block py-2">
            Shop
          </Link>
          <Link href="/sale" className="block py-2">
            On Sale
          </Link>
          <Link href="/new-arrivals" className="block py-2">
            New Arrivals
          </Link>
          <Link href="/brands" className="block py-2">
            Brands
          </Link>
        </div>
      )}
    </nav>
  );
}
