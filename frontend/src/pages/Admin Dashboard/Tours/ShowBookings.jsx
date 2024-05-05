import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/Tours/BackButton';

import Footer from '../../components/Footer/Footer';
import TourLogo from '../../components/Tours/TOURLOGO';

const ShowBookings = () => {
  const [booking, setBooking] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchBookingDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5560/bookings/${id}`);
      setBooking(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching booking:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingDetails();
  }, [id]);

  return (
    <div className=' bg-teal-950'>
      <BackButton />
      <br />
      
        <div className='flex flex-col border-2 border-sky-400 rounded-xl p-4'>
          <div className='my-4 text-5xl font-bold font-mono text-center tracking-wider text-lime-400'>
            Booking Details
          </div>
          {/* Render all booking details */}
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-100'>Tour ID:</span>
            <span className='text-white'>{booking.tourId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-100'>User ID:</span>
            <span className='text-white'>{booking.userId}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-100'>Count:</span>
            <span className='text-white'>{booking.count}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-100'>Total Price:</span>
            <span className='text-white'>{booking.totalPrice}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-100'>Date:</span>
            <span className='text-white'>{new Date(booking.date).toLocaleDateString()}</span>
          </div>
        </div>
    </div>
  );
};

export default ShowBookings;
