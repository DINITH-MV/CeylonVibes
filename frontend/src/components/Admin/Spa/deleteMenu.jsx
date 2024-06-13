import React, { useState } from "react";
import {
    CardHeader,
    Typography,
    Card
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const DeleteMenu = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteSpaMenu = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5012/ayurvedicSPA/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/admin/spa-menu-edit-service');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. PLease check console');
                console.log(error);
            });
    };


    return (
        <div className="absolute ml-[320px] top-[110px] w-[1120px]">

            <Card className='mt-[50px]'>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        UPDATE THE EXISTING CATAGORIES
                    </Typography>
                </CardHeader>
                <div className='p-4'>
                    <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Delete a 'Ayurvedic SPA Menu' Service</h1>

                    <div className='flex flex-col border-2 border-[#059669] rounded-xl w-[600px] p-4 mx-auto'>
                        <h3 className='text-2xl'> Are you sure you want to delete this service?</h3>
                        <button className='p-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white m-8 '
                            onClick={handleDeleteSpaMenu}>
                            Yes, Delete it !
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default DeleteMenu;