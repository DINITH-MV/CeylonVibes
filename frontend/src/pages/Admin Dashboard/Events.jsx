import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";  
  import axios from 'axios';
  import PDFFile from './Products/Create Report/pdfCatagoryTable';
  import { PDFDownloadLink } from "@react-pdf/renderer";
  import { Link, useNavigate } from 'react-router-dom';
  import { motion } from "framer-motion";
  import { Toaster } from 'react-hot-toast';

const Events = () => {
    const [items, setItems] = useState([]);
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
            MANAGE EVENTS 
          </Typography>
        </CardHeader>

        {/* to here */}

        </Card>
    </div>
    );
}

export default Events;
