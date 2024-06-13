import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BookingAdminHome = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5012/bookings")
      .then((response) => {
        setBookings(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Bookings List</h1>
        <Link to="/bookings/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      <div className="overflow-x-auto">

        <table className="border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md text-center">ID</th>
              <th className="border border-slate-600 rounded-md text-center">Tour ID</th>
              <th className="border border-slate-600 rounded-md text-center">User ID</th>
              <th className="border border-slate-600 rounded-md text-center">Count</th>
              <th className="border border-slate-600 rounded-md text-center">Total Price</th>
              <th className="border border-slate-600 rounded-md text-center">Date</th>
              <th className="border border-slate-600 rounded-md text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="border border-slate-700 rounded-md text-center">{booking._id}</td>
                <td className="border border-slate-700 rounded-md text-center">{booking.tourId}</td>
                <td className="border border-slate-700 rounded-md text-center">{booking.userId}</td>
                <td className="border border-slate-700 rounded-md text-center">{booking.count}</td>
                <td className="border border-slate-700 rounded-md text-center">{booking.totalPrice}</td>
                <td className="border border-slate-700 rounded-md text-center">{new Date(booking.date).toLocaleDateString()}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/bookings/details/${booking._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/bookings/edit/${booking._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/bookings/delete/${booking._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingAdminHome;
