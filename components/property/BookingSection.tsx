// components/property/BookingSection.tsx

import { useState, useEffect } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      // Calculate the difference in time; divide by milliseconds per day
      const diffTime = endDate.getTime() - startDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 0) {
        setNights(diffDays);
        setTotalCost(diffDays * price);
      } else {
        setNights(0);
        setTotalCost(0);
      }
    }
  }, [checkIn, checkOut, price]);

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200 lg:sticky lg:top-6">
      <h3 className="text-2xl font-semibold">
        <span className="font-bold">${price}</span> / night
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">Check-in</label>
          <input
            id="check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 border p-2 w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">Check-out</label>
          <input
            id="check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 border p-2 w-full rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-6 border-t pt-4 space-y-2">
          <div className="flex justify-between text-gray-600">
            <span>${price} x {nights} nights</span>
            <span>${price * nights}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${totalCost}</span>
          </div>
        </div>
      )}

      <button className="mt-6 w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 font-semibold transition duration-300 disabled:bg-gray-400" disabled={nights <= 0}>
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;