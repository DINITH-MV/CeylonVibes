import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '../Tours/BackButton';
import { useSnackbar } from 'notistack';

const CreateBooking = ({ onCancel, tourId }) => {
    const [userId, setUserId] = useState('');
    const [count, setCount] = useState('');
    const [tour, setTour] = useState(null); // State to hold tour details
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    // Fetch tour details when the component mounts
    useEffect(() => {
        const fetchTourDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5012/tours/${tourId}`);
                setTour(response.data);
            } catch (error) {
                console.error('Error fetching tour:', error);
            }
        };

        fetchTourDetails();
    }, [tourId]);

    // Function to calculate total price based on count and tour price
    const calculateTotalPrice = () => {
        if (tour) {
            return parseInt(count) * tour.price;
        }
        return 0;
    };

    const handleSaveBooking = () => {
        const totalPrice = calculateTotalPrice(); // Calculate total price
        const data = {
            tourId,
            userId,
            count,
            totalPrice,
            date,
        };
        setLoading(true);
        axios
            .post('http://localhost:5012/bookings', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Booking created successfully', { variant: 'success' });
                onCancel(); // Close the popup after booking creation
            })
            .catch(error => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' });
                console.error(error);
            });
    }

    return (
        <div className='overflow-auto max-h-full'>
            <div className='p-4'>
                <BackButton onClick={onCancel} />
                <h1 className='text-3xl my-4'>Create Booking</h1>

                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>User ID</label>
                        <input
                            type='text'
                            value={userId}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                // Check if "@" symbol is present in the input value
                                const isValid = inputValue.includes('@');
                                // Update state only if the input is valid
                                if (isValid) {
                                    setUserId(inputValue);
                                }
                            }}
                            className={`border-2 border-gray-500 px-4 py-2 w-full ${!userId.includes('@') ? 'border-red-500' : '' // Add red border if input is invalid
                                }`}
                        />
                        {/* Display error message if input is invalid */}
                        {!userId.includes('@') && (
                            <p className="text-red-500">Enter a valid email</p>
                        )}
                    </div>


                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Count</label>
                        <input
                            type='number'
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>

                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Total Price</label>
                        <input
                            type='text'
                            value={calculateTotalPrice()} // Display calculated total price
                            readOnly
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>

                    <div className='my-4'>
                        <label className='text-xl mr-4 text-gray-500'>Date</label>
                        <input
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className='border-2 border-gray-500 px-4 py-2 w-full'
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className='p-2 bg-sky-300 mr-2' onClick={onCancel}>Cancel</button>
                        <button className='p-2 bg-sky-300' onClick={handleSaveBooking}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBooking;
