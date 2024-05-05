import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./RentalReport";
import { motion } from "framer-motion";

const AdminCarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }
        const responseData = await response.json();
        setCars(responseData.cars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/cars/${id}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

 
  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">
              <PDFDownloadLink className='ml-[880px] mt-[-10px] rounded-[7px] mx-auto absolute bg-[#a0803b]' document={<PDFFile items={cars} />} fileName="Report-category_table.pdf">
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
          <button type='button' className='p-[4px] h-[50px] w-[960px] text-[#666666] font-bold text-[14pt] mb-[20px] ml-[20px] rounded-[7px] bg-[#cbc88f]'><Link to='/admin/admin-rent'>View Rentals</Link></button>
            <div className="container mx-auto p-5 ">
                <h2 className="text-[18pt] font-bold mb-4 text-center">VEHICLE LIST</h2>
                <Link to="/admin/add-car">
                <button type='button' className='p-[4px] h-[37px] w-[960px] text-[#fff] mb-[20px] rounded-[7px] bg-[#69992f]'>
                    Add a Vehicle
                  </button>
                </Link>
              
              <table className="min-w-full mt-[3px] rounded-xl overflow-hidden">
                <thead className="bg-yellowDr">
                  <tr>
                    <th className="border px-4 py-2 text-left">Image</th>
                    <th className="border px-4 py-2 text-left">Brand</th>
                    <th className="border px-4 py-2 text-left">Price</th>
                    <th className="border px-4 py-2 text-left">Fuel Type</th>
                    <th className="border px-4 py-2 text-left">Max Persons</th>
                    <th className="border px-4 py-2 text-left">Category</th>
                    <th className="border px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="">
                  {cars.map((car) => (
                    <tr key={car._id} className="bg-white hover:bg-yellow">
                      <td className="border px-4 py-2 ">
                        <img
                          src={car.imageUrl}
                          alt={car.brand}
                          className="w-24 h-auto rounded-md"
                        />
                      </td>
                      <td className="border px-4 py-2 ">{car.brand}</td>
                      <td className="border px-4 py-2 ">${car.price.toFixed(2)}</td>
                      <td className="border px-4 py-2 ">{car.fuelType}</td>
                      <td className="border px-4 py-2 ">{car.maxPersons}</td>
                      <td className="border px-4 py-2 ">{car.category}</td>
                      <td
                        className="border px-4 py-2  flex flex-col h-fit
              "
                      >
                        <button
                          className="pl-2 pr-2 pt-2 pb-2 border-none font-semibold mb-2 transition-colors w-full duration-300 rounded-xl  bg-red hover:bg-lightRed"
                          onClick={() => handleDelete(car._id)}
                        >
                          Delete
                        </button>
                        <Link to={`/admin/update-car/${car._id}`}>
                          <button className="pl-2 pr-2 pt-2 pb-2 text-[#fff] border-none rounded-xl w-full font-semibold bg-greenNa hover:bg-green">
                            Update
                          </button>
                        </Link>
                      </td>
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

export default AdminCarList;
