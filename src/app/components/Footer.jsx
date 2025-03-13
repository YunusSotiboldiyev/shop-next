import Link from "next/link";
import { CiTwitter,CiInstagram } from "react-icons/ci";
import { FaFacebook,FaGithub,FaCcVisa,FaCcPaypal, FaCcApplePay,FaPaypal  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="my-14 bg-gray-100 text-gray-800 absolute ">
      <div className=" bg-black text-white p-8 relative top-[-70px] rounded-2xl w-3/4 mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full text-black pl-10"
            />
            <span className="absolute top-3 left-4 text-gray-500">✉️</span>
          </div>
          <button className="bg-white text-black font-bold py-3 px-6 rounded-full w-full md:w-auto">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h4 className="text-xl font-bold">SHOP.CO</h4>
          <p className="text-sm mt-2">
            We have clothes that suit your style and that you’re proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
          <CiTwitter />
          <FaFacebook />
          <CiInstagram />
          <FaGithub />
          </div>
        </div>

        <div>
          <h5 className="font-semibold">COMPANY</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">Features</Link></li>
            <li><Link href="#" className="hover:underline">Works</Link></li>
            <li><Link href="#" className="hover:underline">Career</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">HELP</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Customer Support</Link></li>
            <li><Link href="#" className="hover:underline">Delivery Details</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">FAQ</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Account</Link></li>
            <li><Link href="#" className="hover:underline">Manage Deliveries</Link></li>
            <li><Link href="#" className="hover:underline">Orders</Link></li>
            <li><Link href="#" className="hover:underline">Payments</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">RESOURCES</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Free eBooks</Link></li>
            <li><Link href="#" className="hover:underline">Development Tutorial</Link></li>
            <li><Link href="#" className="hover:underline">How to - Blog</Link></li>
            <li><Link href="#" className="hover:underline">YouTube Playlist</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
        <FaCcVisa />
          <FaPaypal/>
          <FaCcPaypal />
          <FaCcApplePay />
        </div>
      </div>
    </footer>
  );
}
