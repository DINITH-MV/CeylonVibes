import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import TourismIntro from '../../components/Tours/tourismIntro';
import TourLogo from '../../components/Tours/TOURLOGO';

const TourCusHome = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/tours")
            .then((response) => {
                setTours(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleTourClick = async (id) => {
        try {
            await axios.put(`http://localhost:5555/tours/${id}/addview`);
            // Update the view count locally after successful increment
            setTours(tours.map(tour =>
                tour._id === id ? { ...tour, views: tour.views + 1 } : tour
            ));
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <div className="">
            <TourLogo />
            <div className="flex justify-between items-center">
            </div>

            <TourismIntro />
            <div>
                <h1 className="text-5xl my-8 font-bold text-center overline text-cyan-950 ">Plan your dream Tour</h1>
                <p className="text-3xl my-8 font-medium font-serif">" Each day on this island promises new experiences, discoveries, and life-long memories. With so much to do,let us help you with these itineraries created just for you! "
                </p>
                <div className=" rounded-l p-4">
                    {tours.map((tour) => (
                        <div key={tour._id} className="border border-green-700 bg-green-200 rounded-md text-center w-screen">
                            <Link
                                to={`/tours/details/${tour._id}`}
                                className="block border border-slate-700 text-center p-4 relative" // Add relative positioning
                                onClick={() => handleTourClick(tour._id)}
                            >
                                <img src={tour.imageurl} alt="Event Image" className="w-full h-60 bg-fixed object-cover" />
                                <br />
                                <p className='text-4xl mr-4 text-green-900 font-bold'>{tour.title}</p>

                                <p className='text-gray-700 font-medium w-60'>{tour.views} views</p>
                                <br />
                                <p className='text-blue-900 text-md font-medium w-60 truncate'>{tour.description}</p>
                                <p className='text-yellow-700 text-xl font-medium absolute bottom-0 right-0 mb-4 mr-4'>LKR {tour.price} per person</p> {/* Absolute positioning */}
                            </Link>

                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default TourCusHome;
