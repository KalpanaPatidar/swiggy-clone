// src/components/Checkout.jsx
import { useSelector } from "react-redux";
import React from "react";

export default function Checkout() {
  const items = useSelector(state => state.cartslice.items);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="border-b py-2 text-xl">
            {item.name} — Quantity: {item.quantity}
          </div>
        ))
      )}
    </div>
  );
}

