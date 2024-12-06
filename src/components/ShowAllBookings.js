import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegEdit, FaCalendarAlt } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ShowAllBookings() {
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [expandedBooking, setExpandedBooking] = useState(null); // Track which booking is expanded

  useEffect(() => {
    const fetchCurrentMonthBookings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/bookings?startDate=${new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            1
          ).toISOString()}&endDate=${new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          ).toISOString()}`
        );
        setBookings(response.data);
      } catch (error) {
        alert("Error fetching bookings.");
      }
    };

    fetchCurrentMonthBookings();
  }, []);

  const handleApply = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/bookings?startDate=${
          fromDate ? fromDate.toISOString() : ""
        }&endDate=${toDate ? toDate.toISOString() : ""}`
      );
      setBookings(response.data);
      setIsDatePickerOpen(false);
    } catch (error) {
      alert("Error applying date filter.");
    }
  };

  const currentDate = new Date();

  const handleEdit = (bookingId) => {
    alert(`Edit booking with ID: ${bookingId}`);
  };

  // Filter bookings based on search query
  const filteredBookings = bookings.filter((booking) =>
    booking.bookingName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClear = async () => {
    setFromDate(null);
    setToDate(null);
    setIsDatePickerOpen(false);

    // Fetch bookings for the current month after clearing the filters
    const fetchCurrentMonthBookings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/bookings?startDate=${new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            1
          ).toISOString()}&endDate=${new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          ).toISOString()}`
        );
        setBookings(response.data);
      } catch (error) {
        alert("Error fetching bookings.");
      }
    };

    fetchCurrentMonthBookings();
  };

  // Toggle the accordion (expand/collapse)
  const toggleAccordion = (bookingId) => {
    setExpandedBooking(expandedBooking === bookingId ? null : bookingId);
  };

  return (
    <div className='max-w-7xl mx-auto p-6 mt-16 mb-16'>
      <div className='flex flex-col sm:flex-row sm:justify-between items-center mb-10 space-y-4 sm:space-y-0'>
        <h2 className='text-2xl font-bold'>All Bookings</h2>
        {/* Search and Date Filter */}
        <div className='flex items-center space-x-4'>
          {/* Search Bar */}
          <div className='relative'>
            <IoSearchOutline className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
            <input
              type='text'
              placeholder='Search by name'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent w-full'
            />
          </div>

          {/* Calendar Icon */}
          <div className='relative'>
            <FaCalendarAlt
              className='text-2xl text-gray-500 cursor-pointer'
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            />
            {isDatePickerOpen && (
              <div className='absolute right-0 mt-2 bg-white shadow-lg border rounded-md z-50 w-[200px] sm:w-[200px] mt-5'>
                <div className='flex flex-col space-y-4 p-4'>
                  {/* From Date Picker */}
                  <div>
                    <label className='block text-sm font-semibold text-gray-800 mb-2'>
                      From Date
                    </label>
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      placeholderText='Select start date'
                      className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none text-sm'
                      selectsStart
                      startDate={fromDate}
                      endDate={toDate}
                    />
                  </div>

                  {/* To Date Picker */}
                  <div>
                    <label className='block text-sm font-semibold text-gray-800 mb-2'>
                      To Date
                    </label>
                    <DatePicker
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      placeholderText='Select end date'
                      className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none text-sm'
                      selectsEnd
                      startDate={fromDate}
                      endDate={toDate}
                      minDate={fromDate}
                    />
                  </div>

                  {/* Apply and Clear Buttons */}
                  <div className='flex justify-between'>
                    <button
                      className='w-[80px] bg-accent text-primary py-1 px-2 rounded hover:bg-accent hover:text-primary font-bold transform hover:scale-110 transition-transform'
                      onClick={handleApply}
                    >
                      Apply
                    </button>
                    <button
                      className='w-[80px] bg-gray-300 text-black py-1 px-2 rounded hover:bg-gray-400 hover:text-black font-bold transform hover:scale-110 transition-transform'
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        {filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => {
            const bookingDate = new Date(booking.bookingDate);
            const isExpired = bookingDate < currentDate;

            return (
              <div
                key={booking._id}
                className={`bg-gradient-to-r from-primary via-gray-100 to-white rounded-lg shadow-lg p-4 transition-transform transform ${
                  isExpired ? "bg-gray-200 text-gray-500" : "hover:scale-105"
                }`}
              >
                {/* Accordion Header */}
                <div
                  className='flex justify-between items-center cursor-pointer'
                  onClick={() => toggleAccordion(booking._id)}
                >
                  <div className='flex gap-[20px]'>
                    <h2 className='text-xl font-bold text-gray-800'>
                      {booking.bookingName}
                    </h2>
                    <p className='text-lg text-gray-600 italic'>
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>

                  <FaRegEdit
                    onClick={() => handleEdit(booking._id)}
                    disabled={isExpired}
                    className={`text-2xl ${
                      isExpired ? "opacity-50" : "cursor-pointer"
                    }`}
                  />
                </div>

                {/* Accordion Body (Details) */}
                {expandedBooking === booking._id && (
                  <div className='mt-4 text-gray-700 space-y-2'>
                    <p>
                      <span className='font-semibold'>Time:</span>{" "}
                      {booking.bookingTime}
                    </p>
                    <p>
                      <span className='font-semibold'>Function:</span>{" "}
                      {booking.functionType}
                    </p>
                    <p>
                      <span className='font-semibold'>City:</span>{" "}
                      {booking.city}
                    </p>
                    <p>
                      <span className='font-semibold'>Brides:</span>{" "}
                      {booking.noOfBrides || " -"}
                    </p>
                    <p>
                      <span className='font-semibold'>Siders:</span>{" "}
                      {booking.noOfSiders || " -"}
                    </p>
                    <p>
                      <span className='font-semibold'>Total Amount:</span> ₹
                      {booking.totalAmount}
                    </p>
                    <p>
                      <span className='font-semibold'>Advance Amount:</span>{" "}
                      {booking.advanceAmount
                        ? `₹${booking.advanceAmount}`
                        : "N/A"}
                    </p>
                    <p>
                      <span className='font-semibold'>Description:</span>{" "}
                      {booking.description || "No description"}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className='flex justify-center items-center h-64'>
            <p className='text-center text-gray-500 text-lg'>
              No bookings found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowAllBookings;
