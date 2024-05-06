import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import PDFFile from '../Create Report/OrganicCatagoryTable';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import SpaAdminHP from '@/components/Admin/Spa/SPAADMINHP';


function SpaCategory() {

  var items = 0;

  return (
    <>
      <div className="absolute ml-[320px] top-[160px] w-[1120px]">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={items} />} fileName="SPA_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE SPA
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
                <SpaAdminHP />

              </motion.div>
            </div>
          </CardBody>
        </Card>

      </div>
    </>
  );
}

export default SpaCategory;
