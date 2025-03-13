"use client";
import Customers from "./components/Customers";
import HeroSection from "./components/Hero";
import Layout from "./components/Layout";
import ProductSection from "./components/ProductSection";
import ProductSection2 from "./components/ProductSection2";
export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <HeroSection/>
      <ProductSection/>
      <ProductSection2/>
      <Customers/>
    </Layout>
  );
}
