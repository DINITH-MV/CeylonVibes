import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '@/components/Admin/Tours/BackButton';

import CreateBooking from '../../../components/Admin/Tours/CreateBooking';

const ShowTours = () => {
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(false);
  const [showCreateBooking, setShowCreateBooking] = useState(false); // State to control the visibility of CreateBooking popup
  const { id } = useParams();

  const fetchTourDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5012/tours/${id}`);
      setTour(response.data);
    } catch (error) {
      console.error('Error fetching tour:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTourDetails();
  }, [id]);

  const handleBookNow = () => {
    setShowCreateBooking(true); // Show the CreateBooking popup when "Book now" button is clicked
  };

  const handleCloseCreateBooking = () => {
    setShowCreateBooking(false); // Close the CreateBooking popup
  };

  return (
    <div className="absolute ml-[320px] top-[110px] w-[1120px]">
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card className=''>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-8">
            <Typography variant="h5" color="white">

              VIEW TOURS
            </Typography>
          </CardHeader>
          <CardBody className="px-0 pt-0 pb-2 mx-[60px]">
            <div className=' bg-teal-950'>
              <BackButton />
              <br />

              <div className='flex flex-col border-2 border-sky-400 rounded-xl p-4 mx-[160px] bg-green-400'>
                <div className='my-4 text-5xl font-bold font-mono text-center tracking-wider text-lime-400'>
                  {tour.title}
                </div>
                {/* Render all tour details */}
                <div className='my-4'>
                  <img src={tour.imageurl} alt="Event Image" className="w-screen h-96	" />
                </div>

                <div className='my-4'>
                  <span className='text-xl mr-4 text-amber-100'>Description:</span>
                  <span className='text-white'>{tour.description}</span>
                </div>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-amber-100'>Category:</span>
                  <span className='text-white'>{tour.category} Hikes</span>
                </div>
                <div className='my-4'>
                  <span className='text-xl mr-4 text-amber-100'>Price:</span>
                  <span className='text-white'>{tour.price}/= per person</span>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="mr-4">
                    <button onClick={handleBookNow} className='bg-emerald-600 text-white w-28 h-10 rounded-md'>Book now</button>
                  </div>
                </div>
                {/* Render CreateBooking component as a popup */}
                {showCreateBooking && (
                  <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-20 bg-white p-8 rounded-xl">
                      <CreateBooking onCancel={handleCloseCreateBooking} tourId={id} />
                    </div>
                  </div>
                )}
                {/* Display tour ID */}
                <div className="mt-4 text-white text-center">Tour ID: {id}</div>
              </div>

            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
};

export default ShowTours;
