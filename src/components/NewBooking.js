import React, { useState } from "react";
import axios from "axios";

function NewBooking() {
  const [formData, setFormData] = useState({
    bookingName: "",
    bookingDate: "",
    bookingTime: "",
    functionType: "",
    noOfBrides: "",
    noOfSiders: "",
    city: "",
    totalAmount: "",
    advanceAmount: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/bookings`, formData);
      alert("Booking added successfully!");
      setFormData({
        bookingName: "",
        bookingDate: "",
        bookingTime: "",
        functionType: "",
        noOfBrides: "",
        noOfSiders: "",
        city: "",
        totalAmount: "",
        advanceAmount: "",
        description: "",
      });
    } catch (error) {
      alert("Error adding booking.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-primary text-textLight p-6 rounded shadow-md mt-24 mb-24"
    >
      <h2 className="text-2xl font-bold mb-4">New Booking</h2>

      <div className="mb-4">
        <label className="block mb-2">Booking Name:</label>
        <input
          type="text"
          placeholder="Enter the booking name"
          value={formData.bookingName}
          onChange={(e) =>
            setFormData({ ...formData, bookingName: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Booking Date:</label>
        <input
          type="date"
          placeholder="Select booking date"
          value={formData.bookingDate}
          onChange={(e) =>
            setFormData({ ...formData, bookingDate: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Booking Time:</label>
        <select
          placeholder="Select booking time"
          value={formData.bookingTime}
          onChange={(e) =>
            setFormData({ ...formData, bookingTime: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        >
          <option value="">Select Time</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Function Type:</label>
        <select
          placeholder="Select function type"
          value={formData.functionType}
          onChange={(e) =>
            setFormData({ ...formData, functionType: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        >
          <option value="">Select Function Type</option>
          <option value="Mangni">Mangni</option>
          <option value="Darees">Darees</option>
          <option value="Sharbat">Sharbat</option>
          <option value="Mehendi">Mehendi</option>
          <option value="Mamera">Mamera</option>
          <option value="Shitabi">Shitabi</option>
          <option value="Birthday">Birthday</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">No of Brides:</label>
        <input
          type="number"
          placeholder="Enter the number of brides"
          value={formData.noOfBrides}
          onChange={(e) =>
            setFormData({ ...formData, noOfBrides: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">No of Siders:</label>
        <input
          type="number"
          placeholder="Enter the number of siders"
          value={formData.noOfSiders}
          onChange={(e) =>
            setFormData({ ...formData, noOfSiders: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">City:</label>
        <select
          placeholder="Select city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        >
          <option value="">Select City</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Indore">Indore</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Total Amount:</label>
        <input
          type="number"
          placeholder="Enter the total amount"
          value={formData.totalAmount}
          onChange={(e) =>
            setFormData({ ...formData, totalAmount: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Advance Amount:</label>
        <input
          type="number"
          placeholder="Enter the advance amount"
          value={formData.advanceAmount}
          onChange={(e) =>
            setFormData({ ...formData, advanceAmount: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description:</label>
        <textarea
          placeholder="Enter any additional details or notes"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-2 rounded bg-white border border-gray-300 text-textLight"
          rows="4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-primary py-2 px-4 rounded hover:bg-accent hover:text-primary font-bold transform hover:scale-105 transition-transform"
      >
        Submit
      </button>
    </form>
  );
}

export default NewBooking;
