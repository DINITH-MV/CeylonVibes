import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './ToursReport';
import { motion } from 'framer-motion';

const TourAdminHome = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5560/tours")
      .then((response) => {
        setTours(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  var userID = "jhbjhbkb51651"

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
          <Typography variant="h5" color="white">
          <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={tours} />} fileName="Report-category_table.pdf">
              {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1 / 10,
                }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
            </PDFDownloadLink>
            MANAGE TOURS
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
        <button type='button' className='p-[4px] h-[50px] w-[960px] text-[#666666] font-bold text-[14pt] mb-[20px] ml-[20px] rounded-[7px] bg-[#cbc88f]'><Link to='/admin/bookings'>View Tour Bookings</Link></button>
    <div className=" bg-blue-100">
      <div className="flex justify-between items-center">
        <h1 className="text-[18pt] px-96 font-bold my-8 text-center">Tours List</h1>
        
      </div>
        <Link to="/admin/create">
           <button type='button' className='p-[4px] h-[50px] w-[960px] text-[#666666] font-bold text-[14pt] mb-[20px] ml-[20px] rounded-[7px] bg-[#fbfcff]'><Link to='/admin/admin-rent'>Add a new Tour</Link></button>
        </Link>

      <div className="overflow-x-auto">
        <table className="border-separate border-spacing-2 w-full">
          <thead>
            <tr>
              {tours.map((tour, index) => (
                <th key={index} className="border border-slate-600 rounded-sm text-center bg-blue-200 w-16">
                  {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='bg-blue-200'>
            <tr>
              {tours.map((tour) => (
                <td key={tour._id} className="border border-slate-700 rounded-md text-center w-64">
                  <div>
                    <img src={tour.imageurl} alt="Event Image" className="w-64 h-52 top-0 " />
                    <p className='w-64 text-black text-[20pt] font-bold '>Title: {tour.title}</p>
                    <p className='w-64 text-yellow-500'>Price: {tour.price}</p>
                    <p className='w-64 text-black '>Description: {tour.description.substring(0, 100)}</p>
                    <p className='w-64 text-black'>Views: {tour.views}</p>
                    <div className="flex justify-center gap-x-4 text-black">
                      <Link to={`/admin/tdetails/${tour._id}`}>
                        <BsInfoCircle className="text-2xl text-green-300" />
                      </Link>
                      <Link to={`/admin/tedit/${tour._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/admin/tdelete/${tour._id}`}>
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
    </div>
    </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default TourAdminHome;