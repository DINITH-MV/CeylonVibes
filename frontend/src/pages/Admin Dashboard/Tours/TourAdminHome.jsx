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
      .get("http://localhost:5555/tours")
      .then((response) => {
        setTours(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...'; // Join the first 20 words and add ellipsis
    } else {
      return description; // Return the full description if it has 20 words or fewer
    }
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={tours} />} fileName="tours_table.pdf">
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
            <button type='button' className='p-[4px] h-[50px] w-[960px] text-[#666666] font-bold text-[14pt] ml-[20px] rounded-[7px] bg-[#cbc88f]'><Link to='/admin/bookings'>View Tour Bookings</Link></button>
            <div className=" bg-blue-100 mx-[20px]">
              <div className="">
                <h1 className="text-[18pt] pt-[20px] px-96 font-bold my-8 text-center">Tours List</h1>
                <PDFDownloadLink className='ml-[1120px] mt-[-50px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={tours} />} fileName="Report-category_table.pdf">
                  {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Preparing...</button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
                </PDFDownloadLink>


              </div>
              <div className=' h-5'></div>
              <Link to="/admin/create">
                <button type='button' className='p-[4px] h-[50px] w-[840px] text-[#666666] font-bold text-[14pt] mb-[20px] mx-[60px] rounded-[7px] bg-[#fbfcff]'><Link to='/admin/create'>Add a new Tour</Link></button>
              </Link>
              <div className='h-5'></div>
              <div className="overflow-x-auto">
                <table className="mx-[60px]">
                  <thead className='bg-[#4f7c52] text-white'>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Views</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='bg-[#9de7a7]'>
                    {tours.map((tour, index) => (
                      <tr key={tour._id}>
                        <td className="border border-slate-700 rounded-md text-center w-16">{index + 1}</td>
                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <img src={tour.imageurl} alt="Event Image" className="w-64 h-30 top-0" />
                        </td>
                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <p className='text-black text-[16pt] font-bold'>{tour.title}</p>
                        </td>
                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <p className='text-yellow-500'>{tour.price}</p>
                        </td>
                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <p className='text-black'>
                            {truncateDescription(tour.description)}
                          </p>
                        </td>

                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <p className='text-black'>{tour.views}</p>
                        </td>
                        <td className="border border-slate-700 rounded-md text-center w-64">
                          <div className="flex justify-center gap-x-4 text-black">
                            <Link to={`/admin/tdetails/${tour._id}`}>
                              <BsInfoCircle className="text-2xl bg-[#eeee3d]" />
                            </Link>
                            <Link to={`/admin/tedit/${tour._id}`}>
                              <AiOutlineEdit className="text-2xl" />
                            </Link>
                            <Link to={`/admin/tdelete/${tour._id}`}>
                              <MdOutlineDelete className="text-2xl bg-[#fa4141]" />
                            </Link>
                          </div>
                        </td>
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

export default TourAdminHome;