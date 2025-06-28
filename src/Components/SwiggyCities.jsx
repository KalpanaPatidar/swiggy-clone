import React from "react";

const SwiggyCities = () => {
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:mx-[15%] py-10">
      {/* Food Delivery Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
          <i className="fas fa-hamburger text-orange-500"></i>
          Cities with food delivery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Bangalore",
            "Gurgaon",
            "Hyderabad",
            "Delhi",
            "Mumbai",
            "Pune",
            "Kolkata",
            "Chennai",
            "Ahmedabad",
            "Chandigarh",
            "Jaipur",
          ].map((city) => (
            <a
              key={city}
              href={`https://www.swiggy.com/city/${city.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-4 px-3 text-center text-sm font-medium hover:shadow-md transition-shadow"
            >
              <i className="fas fa-utensils text-orange-400"></i>
              Order food in {city}
            </a>
          ))}

          {/* Show More Button */}
          <a
            href="https://www.swiggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-orange-500 rounded-xl py-4 px-3 text-center text-sm font-bold text-orange-600 hover:shadow-md transition-shadow"
          >
            Show More
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>

      {/* Grocery Delivery Section */}
      <section>
        <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
          <i className="fas fa-shopping-basket text-green-500"></i>
          Cities with grocery delivery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
           
            "Gurgaon",
            "Hyderabad",
            "Delhi",
            "Mumbai",
            "Pune",
            "Kolkata",
            "Chennai",
            "Ahmedabad",
            "Chandigarh",
            "Jaipur",
            "Surat",
          ].map((city) => (
            <a
              key={city}
              href={`https://www.swiggy.com/city/${city.toLowerCase()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-4 px-3 text-center text-sm font-medium hover:shadow-md transition-shadow"
            >
              <i className="fas fa-apple-alt text-green-500"></i>
              Grocery in {city}
            </a>
          ))}

          {/* Show More Button */}
          <a
            href="https://www.swiggy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-green-500 rounded-xl py-4 px-3 text-center text-sm font-bold text-green-600 hover:shadow-md transition-shadow"
          >
            Show More
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </section>
    </main>
  );
};

export default SwiggyCities;
