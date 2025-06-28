
import React from "react";
import { GrocerGridCard } from "../Utils/Grocery";
import Grocerycard from "./GroceryCard.jsx";

export default function GroceryOption() {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-20">
      <h1 className="text-2xl font-bold mb-6">Shop Groceries on Instamart</h1>

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
        {GrocerGridCard.map((foodData) => (
          <div
            key={foodData.id}
            className="flex-shrink-0 w-[140px] h-auto text-center"
          >
            <Grocerycard foodData={foodData} />
          </div>
        ))}
      </div>
    </div>
  );
}
