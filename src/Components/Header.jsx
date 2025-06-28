
import React, { useState } from "react";

export default function Header() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!location) {
      alert("Please enter a delivery location");
      return;
    }

    const formattedLocation = location.trim().toLowerCase().replace(/\s+/g, "-");
    let url = `https://www.swiggy.com/restaurants`;

    if (search) {
      const encodedSearch = encodeURIComponent(search.trim());
      url += `?query=${encodedSearch}`;
    }

    window.open(url, "_blank");
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-[#ff5200] shadow-md font-serif">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl ">
          <img
            className="w-[160px] h-[48px]"
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            alt="Swiggy Logo"
          />

          <nav className="flex gap-6 font-semibold text-white items-center">
            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className="hover:underline"
            >
              Swiggy Corporate
            </a>
            <a
              href="https://partner.swiggy.com/login#/swiggy"
              target="_blank"
              className="hover:underline"
            >
              Partner with us
            </a>
            <a
              href="https://www.swiggy.com/"
              target="_blank"
              className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-[#ff5200] transition"
            >
              Get the App
            </a>
            <a
              href="https://www.swiggy.com/"
              target="_blank"
              className="border border-white bg-black py-2 px-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Sign In
            </a>
          </nav>
        </div>

        <div className="pt-16 pb-8 relative ">
          <img
            className="h-110 w-60 absolute top-0 left-0 "
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          ></img>
          <img
            className="h-110 w-60 absolute top-0 right-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          ></img>

          <div className="max-w-[65%] text-5xl text-white font-bold container mx-auto text-center">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </div>

          <div className="max-w-[70%] container mx-auto flex gap-5 mt-6">
            <input
              className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl ml-7"
              placeholder="Enter your Delivery Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <input
              className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl mr-10"
              placeholder="Search for restaurant, item or more"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          {/* Optional: Add a search button */}
          {/* 
          <div className="text-center mt-4">
            <button onClick={handleSearch} className="bg-black text-white px-6 py-2 rounded-xl">
              Search on Swiggy
            </button>
          </div>
          */}

          <div className="max-w-[80%] container mx-auto flex mt-12">
            <a href="https://www.swiggy.com/restaurants">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
            </a>
            <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
            </a>
            <a href="https://www.swiggy.com/dineout">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
