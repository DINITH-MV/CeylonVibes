import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const DeleteClassical = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteClassical = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/classicalSPA/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/classical-spa-rituals-edit-service');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. PLease check console');
                console.log(error);
            });
    };


    return (
        <div className='p-4'>
            <h1 className='text-3xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Delete a 'Classical SPA Ritual' Service</h1>

            <div className='flex flex-col border-2 border-[#059669] rounded-xl w-[600px] p-4 mx-auto'>
                <h3 className='text-2xl'> Are you sure you want to delete this service?</h3>
                <button className='p-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white m-8 '
                    onClick={handleDeleteClassical}>
                    Yes, Delete it !
                </button>
            </div>
        </div>
    )
}

export default DeleteClassical;