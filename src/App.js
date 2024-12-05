import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NewBooking from "./components/NewBooking";
import ShowAllBookings from "./components/ShowAllBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar />
        <main className='flex-grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new-booking' element={<NewBooking />} />
            <Route path='/show-all-bookings' element={<ShowAllBookings />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
