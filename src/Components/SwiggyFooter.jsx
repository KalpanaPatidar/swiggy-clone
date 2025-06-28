import React, { useState } from "react";

const SwiggyFooter = () => {
  const [showMoreGrocery, setShowMoreGrocery] = useState(false);

  return (
    <footer className="bg-[#f2f3f7] text-gray-700 px-6 md:px-24 pt-12 pb-20 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-start gap-y-10 md:gap-x-20">
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center md:items-start"
          >
            <img
              alt="Swiggy logo"
              className="w-[160px] h-[48px]"
              src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            />
            <span className="text-gray-500 text-sm select-none">© 2025 Swiggy Limited</span>
          </a>
        </div>

        <div className="flex flex-col space-y-4 w-36">
          <h3 className="font-semibold text-black">Company</h3>
          <a href="https://www.swiggy.com/about" target="_blank" rel="noopener noreferrer" className="hover:underline">About Us</a>
          <a href="https://corporate.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Swiggy Corporate</a>
          <a href="https://careers.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Careers</a>
          <a href="https://www.swiggy.com/team" target="_blank" rel="noopener noreferrer" className="hover:underline">Team</a>
          <a href="https://www.swiggy.com/swiggy-one" target="_blank" rel="noopener noreferrer" className="hover:underline">Swiggy One</a>
          <a href="https://www.swiggy.com/instamart" target="_blank" rel="noopener noreferrer" className="hover:underline">Swiggy Instamart</a>
          <a href="https://www.swiggy.com/dineout" target="_blank" rel="noopener noreferrer" className="hover:underline">Swiggy Dineout</a>
          <a href="https://www.swiggy.com/minis" target="_blank" rel="noopener noreferrer" className="hover:underline">Minis</a>
          <a href="https://www.swiggy.com/pyng" target="_blank" rel="noopener noreferrer" className="hover:underline">Pyng</a>
        </div>

        <div className="flex flex-col space-y-4 w-36">
          <h3 className="font-semibold text-black">Contact us</h3>
          <a href="https://www.swiggy.com/help" target="_blank" rel="noopener noreferrer" className="hover:underline">Help & Support</a>
          <a href="https://partner.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Partner With Us</a>
          <a href="https://ride.swiggy.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Ride With Us</a>
          <h3 className="font-semibold text-black mt-8">Legal</h3>
          <a href="https://www.swiggy.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:underline">Terms & Conditions</a>
          <a href="https://www.swiggy.com/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">Cookie Policy</a>
          <a href="https://www.swiggy.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
        </div>

        <div className="flex flex-col space-y-4 w-36">
          <h3 className="font-semibold text-black">Available in:</h3>
          <a href="https://www.swiggy.com/bangalore" className="hover:underline">Bangalore</a>
          <a href="https://www.swiggy.com/gurgaon" className="hover:underline">Gurgaon</a>
          <a href="https://www.swiggy.com/hyderabad" className="hover:underline">Hyderabad</a>
          <a href="https://www.swiggy.com/delhi" className="hover:underline">Delhi</a>
          <a href="https://www.swiggy.com/mumbai" className="hover:underline">Mumbai</a>
          <a href="https://www.swiggy.com/pune" className="hover:underline">Pune</a>
          <select className="mt-2 rounded-md border border-gray-300 text-sm px-3 py-1.5 cursor-pointer">
            <option>685 cities</option>
          </select>
        </div>

        <div className="flex flex-col space-y-4 w-36">
          <h3 className="font-semibold text-black">Life at Swiggy</h3>
          <a href="https://www.swiggy.com/explore" className="hover:underline">Explore With Swiggy</a>
          <a href="https://www.swiggy.com/news" className="hover:underline">Swiggy News</a>
          <a href="https://www.swiggy.com/snackables" className="hover:underline">Snackables</a>
        </div>

     
      
      </div>

      <hr className="border-gray-400 border mt-16 mb-10" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 max-w-5xl mx-auto">
        <h2 className="font-semibold text-gray-900 text-lg text-center md:text-left">
          For better experience, download the Swiggy app now
        </h2>
        <div className="flex space-x-6">
          <a href="https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
            <img
              alt="App Store"
              className="h-12 w-auto"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1">
            <img
              alt="Google Play"
              className="h-12 w-auto"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SwiggyFooter;