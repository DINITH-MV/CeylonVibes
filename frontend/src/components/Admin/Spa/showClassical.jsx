import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

const ShowClassical = () => {
  const [classicalSPA, setClassicalSpa] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/classicalSPA/${id}`)
      .then((response) => {
        setClassicalSpa(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

    return (
        <div className='p-4'>
        <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Show Classical SPA Ritual Service</h1>
        {loading ? (
            <Spinner/>
        ) : (
            <div className ='flex flex-col border-2 border-[#059669] rounded-xl w-fit p-4'>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>ID</span>
                <span>{classicalSPA._id}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Topic</span>
                <span>{classicalSPA.topic}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Description</span>
                <span>{classicalSPA.description}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Time</span>
                <span>{classicalSPA.Time}</span>
            </div>
            <div className='my-4'>
                <span className = 'text-xl mr-4 text-[#059669]'>Price</span>
                <span>{classicalSPA.Price}</span>
            </div>
            </div>
        )}
        </div>
    )
}

export default ShowClassical;