import React from 'react';
import article from '../../../images/Home/articles.webp'
import toast from 'react-hot-toast';

const HeaderText4 = () => {

    const handleClick = () => {
        toast.error('Allowed to VIEW ONLY Organic Store');
    }

    return (
        <div >
            <div className="font-CantoraOne ml-[15%] mt-[50pt] text-7xl absolute text-[#ffffff] z-21">
                <div>
                    <div className='mt-[-25px]' />Collection of <div className='mb-[10px]' /> Articles on<div className='mb-[10px]' /> Our places
                    <div className="font-Abel text-2xl mt-[20px]">
                        Eat Clean, Live Green, and Feel Amazing
                    </div>
                    <button className='text-[18px] text-[#fff] font-Coda bg-[#000] p-[10px] rounded-[12px] cursor-crosshair' onClick={() => handleClick()}>View page</button>
                </div>
                <div className='absolute w-[900px] right-[-270%] top-[-20px] '>
                    <img src={article} className='h-[370px] rounded-[14px] border-[8px] border-[#a0ff6d68]' alt="" />
                </div>
            </div>

        </div>
    );
}


export default HeaderText4;
