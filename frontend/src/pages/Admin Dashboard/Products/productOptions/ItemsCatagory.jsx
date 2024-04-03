import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import PDFFile from '../Create Report/pdfItemTable';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
} from "@/widgets/layout";
import routes from "@/Admin Panel/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/Admin Panel/context";

const ItemsCatagory = () => {
    axios.defaults.baseURL = `http://localhost:5012`;
    const [items, setItems] = useState([]);
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;

    const catagoryName = useParams().id;
    let value;
    if (catagoryName === "Nuts & Seeds") {
        value = "nuts&seeds";
    } else if (catagoryName === "Snacks") {
        value = "Snacks";
    } else if (catagoryName === "Sweetners") {
        value = "Sweetners";
    }
    console.log(value);

    const fetchItems = async () => {
        try {
            const response = await axios.get(`/api/${value}`);
            setItems(response.data.data);
        } catch (error) {
            console.error("Error fetching Nuts catagory:", error);
        }
    };

    const deleteItemsCatagory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5012/products/${id}`);
            fetchItems()
            console.log(response);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2x
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

    const Navigate = useNavigate();

    const updateItemsCatagory = (id) => {
        Navigate(`/updateItemsCatagory/${id}`)
    }

    useEffect(() => {
        fetchItems()
    }, [])


    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidenav
                routes={routes}
                brandImg={
                    sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
                }
            />
            <div className="p-4 xl:ml-80">
                <DashboardNavbar />
                <Configurator />
                <IconButton
                    size="lg"
                    color="white"
                    className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                    ripple={false}
                    onClick={() => setOpenConfigurator(dispatch, true)}
                >
                    <Cog6ToothIcon className="h-5 w-5" />
                </IconButton>

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
                                            {["Item", "ID", "Name", "Img", "Options"].map((el) => (
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
                                                <tr key={items._id} className='border h-[160px] text-center'>
                                                    <td className='border w-[110px]'>
                                                        <img className="max-h-[120px] transition duration-300 mx-auto" src={`http://localhost:5012/products/` + items.image} alt='Catagories' />
                                                    </td>
                                                    <td className='w-[240px]'>{items._id}</td>
                                                    <td className='border w-[180px]'>{items.name}</td>
                                                    <td className='border w-[200px]'>
                                                        {items.image}
                                                    </td>
                                                    <td className='flex-row align-middle w-[200px]'>
                                                        <button type='button' className='p-[4px] w-[170px] mt-[10px] rounded-[7px] bg-[#cbc88f]'><Link to='/AddItemsCatagory'>Add Item</Link></button><br />
                                                        <button onClick={() => updateItemsCatagory(items._id)} className='p-[4px] w-[170px] rounded-[7px] bg-[#d0e0a0] mt-[10px] mb-[10px]'>Update Item</button><br />
                                                        <button onClick={() => deleteItemsCatagory(items._id)} className='p-[4px] w-[170px] rounded-[7px] bg-[#ba3434] text-[#fff] mb-[10px]'>Delete Item</button>
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
                <div className="text-blue-gray-600">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default ItemsCatagory;
