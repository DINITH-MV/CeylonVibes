import React, { useState } from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
import BackButton from '@/components/Admin/Tours/BackButton';
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
        <div className="absolute ml-[320px] top-[110px] w-[1120px]">
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>
            <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
              <Typography variant="h5" color="white">
              
                MANAGE RENTALS
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 mx-[60px]">
        <div className=''>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Tour</h1>

            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h3 className='text-2xl'>Are you sure you want to delete this Tour ?</h3>

                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteTour}>
                    Yes delete it
                </button>
            </div>
        </div>
        </CardBody>
        </Card>

      </div>
    </div>
    )
}

export default DeleteTours