import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import React from "react";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI =
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer + swiggyAPI);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", JSON.stringify(data, null, 2));

        if (data.statusCode !== 0 || data.statusMessage) {
          console.error("API Error:", data.statusMessage || "Unknown error");
          window.location.href = "https://www.swiggy.com/restaurants-near-me";
          return;
        }

        const restaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (!restaurants || restaurants.length === 0) {
          console.error("No restaurant data found in API response");
          window.location.href = "https://www.swiggy.com/restaurants-near-me";
          return;
        }

        setRestData(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
        window.location.href = "https://www.swiggy.com/restaurants-near-me";
      }
    }

    fetchData();
  }, []);

  if (RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {RestData.map((restInfo) => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
      ))}
    </div>
  );
}