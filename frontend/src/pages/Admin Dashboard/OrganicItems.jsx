import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PDFFile from './Products/Create Report/pdfCatagoryTable';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';

export function OrganicItems() {
  axios.defaults.baseURL = `http://localhost:5012`;
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/catagories");
      setItems(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const Navigate = useNavigate();

  useEffect(() => {
    fetchItems()
  }, [])

  const notify = () => toast.success('Successfully deleted!');

  const deleteCatagory = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5012/catagories/${id}`);
      fetchItems()
      console.log(response);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  }

  const updateCatagory = (id) => {
    Navigate(`/updateCatagory/${id}`)
  }

  const itemsCatagory = () => {
    Navigate('/itemsCatagory')
  }

  const SnacksCatagory = () => {
    Navigate('/itemsCatagory')
  }

  useEffect(() => {
    fetchItems()
  }, [])



  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            <PDFDownloadLink className='ml-[810px] mt-[-5px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={items} />} fileName="Report-category_table.pdf">
              {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[7px] font-bold text-[14px]'><motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1 / 10,
                }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[7px] font-CantoraOne font-bold text-[14px]'>Monthly Report</button>)}
            </PDFDownloadLink>
            MANAGE CATAGORIES & PRODUCTS
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[550px] table-auto ml-[50px]">
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 5,
                delay: 4 / 10,
              }}>
              <thead>
                <tr className="">
                  {["Catagory", "ID", "Name", "Img", "Options"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left text-[16px]"
                    >
                      <Typography
                        variant="small"
                        className="text-[14px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items?.length
                  ?
                  items.map((items) => (
                    <tr key={items._id} className='border h-[160px] text-center text-[10.7pt]'>
                      <td className='border w-[140px]'>
                        <img className="max-h-[120px] transition duration-300 mx-auto" src={'http://localhost:5012/catagories/' + items.image} alt='Catagories' />
                      </td>
                      <td className='w-[230px]'>{items._id}</td>
                      <td className='border w-[140px]'>{items.name}</td>
                      <td className='border w-[210px]'>
                        {items.image}
                      </td>
                      <td className='flex-row align-middle w-[190px]'>
                        <button type='button' className='p-[4px] w-[150px] mt-[10px] rounded-[7px] bg-[#cbc88f]'><Link to='/AddCatagory'>Add a Catagory</Link></button><br />
                        <button onClick={() => updateCatagory(items._id)} className='p-[4px] w-[150px] rounded-[7px] bg-[#d0e0a0] mt-[10px] mb-[10px]'>Update Catagory</button><br />
                        <div>
                          <button onClick={() => {
                            notify();
                            deleteCatagory(items._id)
                          }} className='p-[4px] w-[150px] rounded-[7px] bg-[rgb(168,42,42)] text-[#fff] mb-[10px]'>Delete Catagory</button>
                          <Toaster position="top-center"
                            reverseOrder={false}
                            gutter={13}
                            containerClassName=""
                            containerStyle={{}}
                            toastOptions={{
                              // Define default options
                              className: '',
                              duration: 5000,
                              style: {
                                background: '#882222',
                                color: '#fff',
                                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
                                padding: '4px 4px 4px 8px',
                              },

                              // Default options for specific types
                              success: {
                                duration: 3000,
                                theme: {
                                  primary: '#446f21',
                                  secondary: 'red',
                                },
                              },
                            }}
                          />
                        </div>
                        <button
                          className='p-[4px] w-[150px] rounded-[7px] bg-[#eae1bf] text-[#000] mb-[10px]'><Link to={'/ItemsCatagory/' + items.name}>VIEW ITEMS</Link></button>
                      </td>
                    </tr>
                  )) :
                  <tr>
                    <td className="border px-4 py-2 text-center " rowSpan={10} colSpan={10}>No Data Found</td>
                  </tr>
                }
              </tbody>
            </motion.table>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default OrganicItems;