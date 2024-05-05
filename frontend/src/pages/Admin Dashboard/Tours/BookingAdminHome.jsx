import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './ToursBookingReport';

const BookingAdminHome = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5560/bookings")
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
      </div>
      <PDFDownloadLink className='ml-[1120px] mt-[-50px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={bookings} />} fileName="Report-category_table.pdf">
        {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Preparing...</button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
      </PDFDownloadLink>
      {/* {loading ? (
        < />
      ) : ( */}
      <div className="overflow-x-auto">
        <table className="border-separate border-spacing-2">
          <thead>
            <tr>
              {bookings.map((booking, index) => (
                <th key={index} className="border border-slate-600 rounded-md text-center">
                  {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {bookings.map((booking) => (
                <td key={booking._id} className="border border-slate-700 rounded-md text-center">
                  <div>
                    <p>Tour ID: {booking.tourId}</p>
                    <p>User ID: {booking.userId}</p>
                    <p>Count: {booking.count}</p>
                    <p>Total Price: {booking.totalPrice}</p>
                    <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/bookings/details/${booking._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/bookings/delete/${booking._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      {/* )} */}
    </div>
  );
};

export default BookingAdminHome;
