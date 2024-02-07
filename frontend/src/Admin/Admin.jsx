import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
    axios.defaults.baseURL = `http://localhost:5010`;
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get("/api/catagories");
            setItems(response.data.data);
            console.log(response);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const deleteCatagory = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5010/upload/${id}`);
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
   
    useEffect(() => {
        fetchItems()
    }, [])


    return (
        <div>
            <div className="bg-yellow h-[114px] w-[100%] fixed z-20"></div>
            <div className=' h-[400px] pt-[300px]'>
                <div>

                    <table className='border h-[100px] items-center mx-auto'>
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
                                    <tr className='border h-[160px]'>
                                        <th className='mx-suto'>{items._id}</th>
                                        <th className='border'>{items.name}</th>
                                        <th className='border'>
                                            <img className="max-h-[120px] transition duration-300 mx-auto" src={'http://localhost:5010/catagories/' + items.image} />
                                        </th>
                                        <th className='border'>
                                            {items.image}
                                        </th>
                                        <th>
                                            <Link to='/AddCatagory' className='border p-[4px] rounded-[7px]'>Add a Catagory</Link>
                                            <button onClick={() => updateCatagory(items._id)} className='border p-[4px] rounded-[7px]'>Update Catagory</button><br />
                                            <button  onClick={() => deleteCatagory(items._id)} className='border p-[4px] rounded-[7px]'>Delete Catagory</button>
                                        </th>
                                    </tr>
                                )) :
                                <td className="border px-4 py-2 text-center " rowSpan={10} colSpan={10}>No Data Found</td>
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin;
