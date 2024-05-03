import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import PDFFile from '../Create Report/pdfCatagoryTable';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import SpaAdminHP from '@/components/Admin/Spa/SPAADMINHP';


function SpaCategory() {
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
    Navigate(`/admin/updateCatagory/${id}`)
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
    <>
      <div className="absolute ml-[320px] top-[160px] w-[1120px]">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={items} />} fileName="Report-category_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE CATAGORIES & PRODUCTS
            </Typography>
          </CardHeader>
          <CardBody className="ml-[-40px] pt-0 pb-2">
            <div className="w-full max-w-[950px]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 5,
                  delay: 4 / 10,
                }}>
               <SpaAdminHP/>
               
              </motion.div>
            </div>
          </CardBody>
        </Card>

      </div>
    </>
  );
}

export default SpaCategory;
