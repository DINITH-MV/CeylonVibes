import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

const ShowMenu = () => {
  const [ayurvedicSPA, setAyurvedicSpa] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/ayurvedicSPA/${id}`)
      .then((response) => {
        setAyurvedicSpa(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

    return (
        <div className='p-4'>
        <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Show Ayurvedic SPA Menu Service</h1>
        {loading ? (
            <Spinner/>
        ) : (
            <div className ='flex flex-col border-2 border-[#059669] rounded-xl w-fit p-4'>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>ID</span>
                <span>{ayurvedicSPA._id}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Topic</span>
                <span>{ayurvedicSPA.topic}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Description</span>
                <span>{ayurvedicSPA.description}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Time</span>
                <span>{ayurvedicSPA.Time}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Price</span>
                <span>{ayurvedicSPA.Price}</span>
            </div>
            </div>
        )}
        </div>
    )
}

export default ShowMenu;