import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {
     const [topic, settopic] = useState('');
     const [description, setdescription] = useState('');
     const [Time, setTime] = useState('');
     const [Price, setPrice] = useState('');
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();
     const {id} = useParams();
     useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5555/ayurvedicSPA/${id}`)
          .then((response) => {
            settopic(response.data.topic);
            setdescription(response.data.description);
            setTime(response.data.Time);
            setPrice(response.data.Price);

          })
          .catch((error) => {
            alert('An error occurred. Please check console')
            console.log(error);
          });
      }, []);


     const handleEditSpaMenu = () => {
     const data = {
        topic,
        description,
        Time,
        Price,
     };
     setLoading(true);
    axios
      .put(`http://localhost:5555/ayurvedicSPA/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/spa-menu-edit-service');
      })
      .catch((error) => {
        setLoading(false);
        alert ('An error happened. PLease check console');
        console.log(error);
      });
     };


    return (
        <div className = 'p-4'>
            <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Edit a 'Ayurvedic SPA Menu' Service</h1>
       
        <div className = 'flex flex-col border-2 border-[#059669] rounded-xl w-[700px] p-4 mx-auto'>
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
        <button className = 'p-2 bg-[#059669] hover:bg-[#065F46]' onClick={handleEditSpaMenu}>
         Save   
        </button>
            
        </div>
        </div>
    )
}

export default EditMenu;