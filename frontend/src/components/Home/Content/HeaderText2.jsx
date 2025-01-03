import React from 'react';
import tourism2 from '../../../images/Home/cars1.png'
import { notification } from 'antd';
import toast, { Toaster } from 'react-hot-toast';


const HeaderText2 = () => {

    const handleClick = () => {
        toast.error('Allowed to view ONLY Organic Store');
    }

    return (
        <div >
            <div className="font-CantoraOne ml-[15%] mt-[50pt] text-7xl absolute text-[#ffffff] z-21">
                <div>
                    <div className='mt-[-25px]' />Convenient <div className='mb-[10px]' /> Vehicle Rental<div className='mb-[10px]' /> Solutions
                    <div className="font-Abel text-2xl mt-[20px]">
                        Eat Clean, Live Green, and Feel Amazing
                    </div>
                    <button className='text-[18px] text-[#fff] font-Coda bg-[#000] p-[10px] rounded-[12px] cursor-crosshair' onClick={() => handleClick()}>View page</button>

                </div>
                <div className='absolute w-[900px] right-[-210%] top-[-90px] '>
                    <img src={tourism2} className='h-[440px]' alt="" />
                </div>
            </div>

        </div>
    );
}


export default HeaderText2;
