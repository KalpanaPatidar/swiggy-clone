import React from "react";

function ButtonCity({ city, link, isExternal = false }) {
  const handleClick = () => {
    if (isExternal) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-200 font-medium text-sm text-gray-800 bg-white w-full text-left"
    >
      Order food online in {city}
    </button>
  );
}

export default ButtonCity;


