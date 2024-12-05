import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "../images/svg/edit-3-svgrepo-com.svg";

function ShowAllBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/bookings`
        );
        console.log("response", response);

        setBookings(response.data);
      } catch (error) {
        alert("Error fetching bookings.");
      }
    };
    fetchBookings();
  }, []);

  const currentDate = new Date();

  const handleEdit = (bookingId) => {
    alert(`Edit booking with ID: ${bookingId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 mt-24 mb-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-textLight">
        All Bookings
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bookings.map((booking) => {
          const bookingDate = new Date(booking.bookingDate);
          const isExpired = bookingDate < currentDate; // Check if the booking is in the past

          return (
            <div
              key={booking._id}
              className={`bg-gradient-to-r from-primary via-gray-100 to-white rounded-lg shadow-lg p-6 transition-transform transform ${
                isExpired
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
              style={{ pointerEvents: isExpired ? "none" : "auto" }}
            >
              <div className="flex justify-between items-start mb-4">
                {/* Name and Date */}
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-800">
                    {booking.bookingName}
                  </h2>
                  <p className="text-lg text-gray-600 italic">
                    {new Date(booking.bookingDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Edit Button */}
                <img
                  src={EditIcon}
                  alt=""
                  onClick={() => handleEdit(booking._id)}
                  disabled={isExpired}
                  className={`text-white rounded-lg ${
                    isExpired ? "opacity-50" : "cursor-pointer"
                  }`}
                />
              </div>

              {/* Other Details */}
              <div className="text-gray-700 space-y-2">
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  {booking.bookingTime}
                </p>
                <p>
                  <span className="font-semibold">Function:</span>{" "}
                  {booking.functionType}
                </p>
                <p>
                  <span className="font-semibold">City:</span> {booking.city}
                </p>
                <p>
                  <span className="font-semibold">Brides:</span>{" "}
                  {booking.noOfBrides || " -"}
                </p>
                <p>
                  <span className="font-semibold">Siders:</span>{" "}
                  {booking.noOfSiders || " -"}
                </p>
                <p>
                  <span className="font-semibold">Total Amount:</span> ₹
                  {booking.totalAmount}
                </p>
                <p>
                  <span className="font-semibold">Advance Amount:</span>{" "}
                  {booking.advanceAmount ? `₹${booking.advanceAmount}` : "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Description:</span>{" "}
                  {booking.description || "No description"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllBookings;
