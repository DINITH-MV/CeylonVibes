import React, { useState } from 'react'
import BackButton from '../../components/Tours/BackButton';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteTours = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteTour = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5560/tours/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.error(error);
            })
    }
    return (
        <div className=''>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Tour</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to delete this Tour ?</h3>

                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteTour}>
                    Yes delete it
                </button>
            </div>
        </div>
    )
}

export default DeleteTours