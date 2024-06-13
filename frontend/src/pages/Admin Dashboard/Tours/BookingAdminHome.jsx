import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={bookings} />} fileName="Tour_Bookings_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE TOUR BOOKINGS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
            <div className="">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Bookings List</h1>
              </div>
              <PDFDownloadLink className='ml-[1120px] mt-[-50px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={bookings} />} fileName="Report-category_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Preparing...</button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>

              <div className="overflow-x-auto">
                <table className=" w-full">
                  <thead className='bg-[#4f7c52]'>
                    <tr>
                      <th>Tour ID</th>
                      <th>User ID</th>
                      <th>Count</th>
                      <th>Total Price</th>
                      <th>Date</th>
                      <th>manage</th>

                    </tr>
                  </thead>
                  <tbody className='bg-[#9de7a7]'>
                    {bookings.map((booking) => (
                      <tr>


                        <td> {booking.tourId}</td>
                        <td> {booking.userId}</td>
                        <td> {booking.count}</td>
                        <td> {booking.totalPrice}</td>
                        <td>{new Date(booking.date).toLocaleDateString()}</td>
                        <div className="flex justify-center gap-x-4">
                          <Link to={`/admin/bdetails/${booking._id}`}>
                            <BsInfoCircle className="text-2xl text-green-800" />
                          </Link>
                          <Link to={`/admin/bdelete/${booking._id}`}>
                            <MdOutlineDelete className="text-2xl text-red-600" />
                          </Link>
                        </div>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default BookingAdminHome;
