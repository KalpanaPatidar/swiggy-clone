
import dineoutRestaurants  from '../Utils/DineData';
import React from "react";

import Dinecard from "./DineCard";

export default function DineOption({}) {
  return (

    <div className="w-full px-4 md:px-10 lg:px-20 mt-20">
      <h1 className="text-2xl font-bold mb-6">Discover best restaurants on Dineout</h1>

      <div className="flex flex-nowrap gap-6 overflow-x-auto no-scrollbar pb-4">
        {dineoutRestaurants.map((RestData) => (
        
            <Dinecard key={RestData?.info?.id} RestData={RestData} />
        
        ))}
      </div>
    </div>
  );
}
