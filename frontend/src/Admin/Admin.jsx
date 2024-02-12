import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const Admin = () => {
    axios.defaults.baseURL = `http://localhost:5010`;
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get("/api/catagories");
            setItems(response.data.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteCatagory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5010/catagories/${id}`);
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

    const Navigate = useNavigate();

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
        <div>
            <iframe style={{ display: 'none' }} src="https://www.youtube.com/embed/tSc8WROtNfc?si=8k-XkJNC-b8DRTtn&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <div className="bg-yellow h-[114px] w-[100%] fixed z-20"></div>
            <div className=' h-[400px] pt-[200px]'>
                <div>

                    <table className='h-[100px] items-center mx-auto'>

                        <motion.table
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                delay: 1 / 10,
                            }}>

                            <thead>
                                <tr className='border h-[40px]'>
                                    <th className='border w-[240px]'>ID</th>
                                    <th className='border w-[210px]'>Name of the Catagory</th>
                                    <th className='border w-[190px]'>Image</th>
                                    <th className='border w-[160px]'>Name of the image</th>
                                    <th className='border w-[260px]'>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items?.length
                                    ?
                                    items.map((items) => (
                                        <tr key={items._id} className='border h-[160px] text-center'>
                                            <td className='mx-suto'>{items._id}</td>
                                            <td className='border'>{items.name}</td>
                                            <td className='border'>
                                                <img className="max-h-[120px] transition duration-300 mx-auto" src={'http://localhost:5010/catagories/' + items.image} alt='Catagories' />
                                            </td>
                                            <td className='border'>
                                                {items.image}
                                            </td>
                                            <td className='flex-row align-middle'>
                                                <button type='button' className='p-[4px] w-[170px] mt-[10px] rounded-[7px] bg-[#cbc88f]'><Link to='/AddCatagory'>Add a Catagory</Link></button><br />
                                                <button onClick={() => updateCatagory(items._id)} className='p-[4px] w-[170px] rounded-[7px] bg-[#d0e0a0] mt-[10px] mb-[10px]'>Update Catagory</button><br />
                                                <button onClick={() => deleteCatagory(items._id)} className='p-[4px] w-[170px] rounded-[7px] bg-[#ba3434] text-[#fff] mb-[10px]'>Delete Catagory</button>
                                                <button 
                                                    className='p-[4px] w-[170px] rounded-[7px] bg-[#eae1bf] text-[#000] mb-[10px]'><Link to={'/itemsCatagory/' + items.name}>Go to the Catagory</Link></button>
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
                </div>
            </div>
        </div>
    );
}

export default Admin;
