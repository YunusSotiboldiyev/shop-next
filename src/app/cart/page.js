"use client";
import React from "react";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import { useCart } from "@/app/components/CartContext";

const CartPage = () => {
  const { cart, setCart } = useCart();

  const removeFromCart = (id, selectedSize) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (id, selectedSize, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.selectedSize === selectedSize
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const calculateSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = calculateSubtotal() * 0.2; 
  const deliveryFee = 15;
  const total = calculateSubtotal() - discount + deliveryFee;

  if (cart.length === 0) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-screen text-3xl font-bold">Your cart is empty. Add some products before enter!</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0">
        <h1 className="text-3xl font-extrabold mb-6">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                    <p className="text-sm text-gray-500">Color: White</p>
                    <p className="text-lg font-bold mt-2">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                    className="bg-gray-200 text-black px-3 py-1 rounded-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                    className="bg-gray-200 text-black px-3 py-1 rounded-lg"
                  >
                    +
                  </button>
                  <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-red-500 text-xl">
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500 mb-2">
              <span>Discount (-20%)</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Add promo code"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
              <button className="bg-gray-300 px-4 py-2 rounded-lg ml-2">Apply</button>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-lg text-lg flex justify-center items-center">
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
