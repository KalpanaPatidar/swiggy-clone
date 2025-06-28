import React from "react";

// Card Component
export default function DineCard({ RestData }) {
  // Extract data with fallback
  const name = RestData?.info?.name || "Unknown Restaurant";
  const costText = RestData?.info?.costText || "₹1200 for two";
  const distance = RestData?.info?.distance || "0";
  const location = RestData?.info?.location || "Unknown";
  const imageUrl = RestData?.info?.mediaFiles?.[0]?.url
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${RestData.info.mediaFiles[0].url}`
    : "https://via.placeholder.com/160"; // fallback image
  const link = RestData?.cta?.link || "#";

  return (
    <div className="max-w-sm w-80 flex-none bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      {/* Image */}
      <a target="_blank" rel="noreferrer" href={link}>
        <div className="w-full h-48">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={name}
          />
        </div>
      </a>

      {/* Info */}
      <div className="p-4 space-y-2">
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">📍 {location}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <p>{costText}</p>
          <p>{distance} km</p>
        </div>

        <div>
          <span className="inline-flex items-center text-sm px-2 py-1 rounded-md bg-gray-100 text-gray-700">
            📅 Table booking
          </span>
        </div>

        {/* Offer Buttons */}
        <div className="flex flex-col space-y-2">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="text-sm font-medium px-3 py-1 rounded-md w-full text-white cursor-pointer bg-green-700">
              Flat 15% off on pre-booking + 1 more
            </div>
          </a>

          <a href={link} target="_blank" rel="noreferrer">
            <div className="text-sm px-3 py-1 rounded-md w-full cursor-pointer bg-green-100 text-green-700">
              Up to 10% off with bank offers
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// Slider Component
function DineoutCards({ restaurants }) {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
      <div className="inline-flex space-x-4 p-4">
        {restaurants && restaurants.length > 0 ? (
          restaurants.map((rest, index) => (
            <DineCard key={index} RestData={rest} />
          ))
        ) : (
          <p className="text-red-500">No restaurants available.</p>
        )}
      </div>
      
    </div>
  );
}

// Sample Data
const restaurantData = [
  {
    info: {
      name: "Chopstick City",
      costText: "₹2200 for two",
      distance: "8.1",
      location: "Palasia",
      mediaFiles: [{ url: "fl_something1" }],
    },
    cta: { link: "https://www.swiggy.com" },
  },
  {
    info: {
      name: "Cravings",
      costText: "₹2000 for two",
      distance: "6.5",
      location: "Vijay Nagar",
      mediaFiles: [{ url: "fl_something2" }],
    },
    cta: { link: "https://www.swiggy.com" },
  },
  {
    info: {
      name: "Mamamoto",
      costText: "₹1000 for two",
      distance: "14.7",
      location: "Rajwada",
      mediaFiles: [{ url: "fl_something3" }],
    },
    cta: { link: "https://www.swiggy.com" },
  },
];

// Main App
export function App() {
  return <DineoutCards restaurants={restaurantData} />;
}
