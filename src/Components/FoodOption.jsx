import { imageGridCards } from "../Utils/foodData.jsx";
import FoodCard from "./FoodCard.jsx";
import React, { useRef, useEffect } from "react";

export default function FoodOption() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const updateScroll = () => {
        // Optional: You can still use this for debugging or features
      };
      el.addEventListener("scroll", updateScroll);
      return () => el.removeEventListener("scroll", updateScroll);
    }
  }, []);

  return (
    <div className="w-full mt-10 px-[8.33%]"> {/* 1/3 margin on both sides */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll scroll-smooth no-scrollbar"
      >
        <div
          className="grid grid-flow-col auto-cols-max grid-rows-2 gap-6 py-4"
          style={{ minHeight: "400px", maxHeight: "420px" }}
        >
          {imageGridCards.map((foodData) => (
            <div key={foodData.id} className="w-[150px] h-[180px] text-center">
              <FoodCard foodData={foodData} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
