import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import axios from 'axios';
import BackButton from '@/components/Admin/Tours/BackButton';

import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditTours = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('hikes'); // Default category
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5012/tours/${id}`)
            .then((response) => {
                setPrice(response.data.price);
                setDescription(response.data.description);
                setTitle(response.data.title);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error happened. Please check the console.');
                console.log(error);
            });
    }, []);

    const handleEditTour = () => {
        const data = {
            title,
            price,
            description,
            category, // Include category in the data object
        };
        setLoading(true);
        axios
            .put(`http://localhost:5012/tours/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Tour edited successfully', { variant: 'success' });
                navigate('/admin/tours');
            })
            .catch(error => {
                setLoading(false);
                enqueueSnackbar('Error editing tour', { variant: 'error' });
                console.error(error);
            });
    };

    return (
        <div className="absolute ml-[320px] top-[110px] w-[1120px]">
            <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card>
                    <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
                        <Typography variant="h5" color="white">

                            MANAGE RENTALS
                        </Typography>
                    </CardHeader>
                    <CardBody className="px-0 pt-0 pb-2 mx-[60px]">
                        <div className=' bg-sky-500'>
                            <BackButton />
                            <h1 className='text-4xl font-Satisfy text-center font-bold mb-4 text-white'>Edit Tour</h1>

                            <div className='flex flex-col border-2 bg-blue-200 rounded-xl w-[600px] p-4 mx-auto'>
                                <div className='my-4'>
                                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                                    <input
                                        type='text'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='border-2 border-gray-500 px-4 py-2 w-full'
                                    />
                                </div>

                                <div className='my-4'>
                                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                                    <input
                                        type='text'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className='border-2 border-gray-500 px-4 py-2 w-full'
                                    />
                                </div>

                                <div className='my-4'>
                                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                                    <input
                                        type='text'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className='border-2 border-gray-500 px-4 py-2 w-full'
                                    />
                                </div>

                                <div className='my-4'>
                                    <label className='text-xl mr-4 text-gray-500'>Category</label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className='border-2 border-gray-500 px-4 py-2 w-full'
                                    >
                                        <option value='hikes'>Hikes</option>
                                        <option value='beaches'>Beaches</option>
                                        <option value='wild'>Wild</option>
                                        <option value='camping'>Camping</option>
                                        <option value='heritages'>Heritages</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </div>

                                <button className='p-2 bg-sky-500 m-8' onClick={handleEditTour}>Save</button>
                            </div>
                        </div>
                    </CardBody>
                </Card>

            </div>
        </div>
    );
};

export default EditTours;
