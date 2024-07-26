import React from 'react';
import tourism2 from '../../../images/Home/cars1.png'
import { notification } from 'antd';
import toast, { Toaster } from 'react-hot-toast';


const HeaderText2 = () => {

    const handleClick = () => {
        toast.error('Allowed to view only Organic Store page');
    }

    return (
        <div >
            <div className="font-CantoraOne ml-[15%] mt-[50pt] text-7xl absolute text-[#ffffff] z-21">
                <div>
                    <div className='mt-[-25px]' />Convenient <div className='mb-[10px]' /> Vehicle Rental<div className='mb-[10px]' /> Solutions
                    <div className="font-Abel text-2xl mt-[20px]">
                        Eat Clean, Live Green, and Feel Amazing
                    </div>
                    <button className='text-[18px] text-[#fff] font-Coda bg-[#000] p-[10px] rounded-[12px] cursor-not-allowed' onClick={() => handleClick()}>View page</button>
                    <Toaster position="top-center"
                        reverseOrder={false}
                        gutter={13}
                        containerClassName=""
                        containerStyle={{}}
                        toastOptions={{
                            // Define default options
                            className: '',
                            duration: 5000,
                            style: {
                                fontSize: '12pt',
                                background: '#363636',
                                color: '#fff',
                                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)',
                                position: 'relative',
                                
                            },

                            // Default options for specific types
                            success: {
                                duration: 5555,
                                theme: {
                                    primary: 'green',
                                    secondary: 'black',
                                },
                            },
                        }}
                    />
                </div>
                <div className='absolute w-[900px] right-[-210%] top-[-90px] '>
                    <img src={tourism2} className='h-[440px]' alt="" />
                </div>
            </div>

        </div>
    );
}


export default HeaderText2;
