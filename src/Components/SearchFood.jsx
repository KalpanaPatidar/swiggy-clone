import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import React from "react";

export default function SearchFood() {
  let { id } = useParams();
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Restaurant ID:", id);
        if (!id) {
          console.error("Restaurant ID is undefined");
          window.location.href = "https://www.swiggy.com/restaurants/599399/dineout/menu";
          return;
        }

        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`; // Adjust API URL for search
        const response = await fetch(proxyServer + swiggyAPI);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", JSON.stringify(data, null, 2));

        if (data.statusCode !== 0 || data.statusMessage) {
          console.error("API Error:", data.statusMessage || "Unknown error");
          window.location.href = "https://www.swiggy.com/restaurants/599399/dineout/menu";
          return;
        }

        let tempData = null;
        if (data?.data?.cards) {
          const possibleCardIndices = [0, 1, 2, 3, 4, 5];
          for (const index of possibleCardIndices) {
            if (data.data.cards[index]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
              tempData = data.data.cards[index].groupedCard.cardGroupMap.REGULAR.cards;
              console.log(`Found search data at cards[${index}]`);
              break;
            }
          }
        }

        if (!tempData && data?.data?.cards) {
          tempData = data.data.cards.flatMap((card) =>
            card?.card?.card?.itemCards ||
            card?.card?.card?.categories?.flatMap((category) => category.itemCards || []) ||
            card?.groupedCard?.cardGroupMap?.MENU?.cards ||
            []
          ).filter(Boolean);
        }

        if (!tempData || tempData.length === 0) {
          console.error("No search data found in API response");
          window.location.href = "https://www.swiggy.com/restaurants/599399/dineout/menu";
          return;
        }

        const filterData = tempData.filter((items) => items?.card?.card && "title" in items.card.card);
        console.log("Filtered Data:", filterData);
        setSearchData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
        window.location.href = "https://www.swiggy.com/restaurants/599399/dineout/menu";
      }
    }

    fetchData();
  }, [id, navigate]);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {searchData.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          {searchData.map((searchItem) => (
            <div key={searchItem?.card?.card?.title} className="mb-4">
              <h3 className="text-xl font-bold">{searchItem?.card?.card?.title}</h3>
              {/* Add rendering logic for search items, e.g., MenuCard or custom component */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}