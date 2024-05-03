import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const CreateClassical = () => {
     const [topic, settopic] = useState('');
     const [description, setdescription] = useState('');
     const [Time, setTime] = useState('');
     const [Price, setPrice] = useState('');
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     

     const handleSaveClassical = () => {
     const data = {
        topic,
        description,
        Time,
        Price,
     };
     setLoading(true);
    axios
      .post('http://localhost:5555/classicalSPA', data)
      .then(() => {
        setLoading(false);
        navigate('/classical-spa-rituals-edit-service');
      })
      .catch((error) => {
        setLoading(false);
        alert ('An error happened. PLease check console');
        console.log(error);
      });
     };


    return (
        <div className = 'p-4'>
            <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Create a New 'Classical SPA Ritual' Service</h1>
        {loading ? <Spinner/> : ''}
        <div className = 'flex flex-col border-2 border-[#059669] rounded-xl w-[600px] p-4 mx-auto'>
        <div className= 'my-4'>
            <label className = 'text-xl mr-4 text-[#374151]'> Topic </label>
            <input
            type='text'
            value={topic}
            onChange={(e) => settopic(e.target.value)}
            className= 'border-2 border-[#374151] px-4 py-2 w-full'
            />
        </div>

        <div className= 'my-4'>
            <label className = 'text-xl mr-4 text-[#374151]'> Description </label>
            <input
            type='text'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className= 'border-2 border-[#374151] px-4 py-2 w-full'
            />
        </div>

        <div className= 'my-4'>
            <label className = 'text-xl mr-4 text-[#374151]'> Time </label>
            <input
            type='text'
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            className= 'border-2 border-[#374151] px-4 py-2 w-full'
            />
        </div>

        <div className= 'my-4'>
            <label className = 'text-xl mr-4 text-[#374151]'> Price </label>
            <input
            type='text'
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            className= 'border-2 border-[#374151] px-4 py-2 w-full'
            />
        </div>
        <button className = 'p-2 bg-[#059669] hover:bg-[#065F46]' onClick={handleSaveClassical}>
         Save   
        </button>
            
        </div>
        </div>
    )
}

export default CreateClassical;