import React, { useState, useEffect } from "react";
import {
    CardHeader,
    Typography,
    Card
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateMenu = () => {
    const [topic, settopic] = useState('');
    const [description, setdescription] = useState('');
    const [Time, setTime] = useState('');
    const [Price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSaveSpaMenu = () => {
        const data = {
            topic,
            description,
            Time,
            Price,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/ayurvedicSPA', data)
            .then(() => {
                navigate('/admin/spa-menu-edit-service');
            })
            .catch((error) => {
                alert('An error happened. PLease check console');
                console.log(error);
            });
    };


    return (
        <div className="absolute ml-[320px] top-[110px] w-[1120px]">

            <Card className='mt-[50px]'>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        CREATE A NEW SPA MENU SERVICE
                    </Typography>
                    </CardHeader>
                    <div className='p-4'>
                        <h1 className='text-3xl text-center text-black mb-8 font-mono antialiased font-medium'> Create a New 'Ayurvedic SPA Menu' Service</h1>

                        <div className='flex flex-col border-2 border-[#059669] rounded-xl w-[600px] p-4 mx-auto'>
                            <div className='my-4'>
                                <label className='text-xl mr-4 text-[#374151]'> Topic </label>
                                <input
                                    type='text'
                                    value={topic}
                                    onChange={(e) => settopic(e.target.value)}
                                    className='border-2 border-[#374151] px-4 py-2 w-full'
                                />
                            </div>

                            <div className='my-4'>
                                <label className='text-xl mr-4 text-[#374151]'> Description </label>
                                <input
                                    type='text'
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                    className='border-2 border-[#374151] px-4 py-2 w-full'
                                />
                            </div>

                            <div className='my-4'>
                                <label className='text-xl mr-4 text-[#374151]'> Time </label>
                                <input
                                    type='text'
                                    value={Time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className='border-2 border-[#374151] px-4 py-2 w-full'
                                />
                            </div>

                            <div className='my-4'>
                                <label className='text-xl mr-4 text-[#374151]'> Price </label>
                                <input
                                    type='text'
                                    value={Price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className='border-2 border-[#374151] px-4 py-2 w-full'
                                />
                            </div>
                            <button className='p-2 bg-[#059669] hover:bg-[#065F46]' onClick={handleSaveSpaMenu}>
                                Save
                            </button>

                        </div>
                    </div>
            </Card>
        </div>
    )
}

export default CreateMenu;