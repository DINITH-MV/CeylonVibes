import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./RentalReport";
import { motion } from "framer-motion";


const AdminRentList = () => {
  const [rents1, setRents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/rents");
        if (!response.ok) {
          throw new Error("Failed to fetch rent data");
        }
        const responseData = await response.json();
        setRents(responseData.rents);
        console.log(responseData.rents)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rent data:", error);
      }
    };

    fetchRents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/rents/${id}`);
      setRents((prevRents) => prevRents.filter((rent) => rent._id !== id));
    } catch (error) {
      console.error("Error deleting rent:", error);
    }
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
            <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={rents1} />} fileName="Rentals_table.pdf">
                {({ loading }) => (loading ? <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'><motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 1 / 10,
                  }}>Preparing...</motion.button></button> : <button className='bg-BrownLi rounded-md p-[11px] font-CantoraOne font-bold text-[17px]'>Monthly Report</button>)}
              </PDFDownloadLink>
              MANAGE RENTALS
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
            <div className="container mx-auto p-5 ">
              <div className="flex items-center justify-between">
                <h2 className="text-[18pt] font-bold mb-4 text-center w-[1200px]">RENT LIST</h2>

              </div>

             
              <table className="min-w-full rounded-xl overflow-hidden">
                <thead className="bg-yellowDr">
                  <tr>
                    <th className="border px-4 py-2 text-left">RentID</th>
                    <th className="border px-4 py-2 text-left">UserID</th>
                    <th className="border px-4 py-2 text-left">Date</th>
                    <th className="border px-4 py-2 text-left">Start Time</th>
                    <th className="border px-4 py-2 text-left">End Time</th>
                    <th className="border px-4 py-2 text-left">Price</th>
                  </tr>
                </thead>
                <tbody className="">
                  {rents1.map((rent) => (
                    <tr key={rent._id} className="bg-white hover:bg-yellow">

                      <td className="border px-4 py-2 ">{rent._id}</td>
                      <td className="border px-4 py-2 ">{rent.User_ID}</td>
                      <td className="border px-4 py-2 ">{rent.date}</td>
                      <td className="border px-4 py-2 ">{rent.starttime}</td>
                      <td className="border px-4 py-2 ">{rent.endtime}</td>
                      <td className="border px-4 py-2 ">${rent.price}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default AdminRentList;
