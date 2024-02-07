import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#000] pt-[20px] pl-[40px] font-Spirax text-[30pt] text-[#fff]">CeylonVibes
                <i class="fa-sharp fa-thin fa-copyright text-[6px] ml-[4px]" style={{ color: '#ffffff' }}></i>
                <div className='h-[300px] ml-[-39px] bg-[#fff] grid grid-cols-2 border border-[#fff]'>
                    <div className='border-white grid grid-cols-2 w-[60%]'>
                        <div className='bg-[#fff] border-white pl-[40px] text-[#000] font-Barlow text-[16px]'>
                            <button className='mt-[10px] font-bold' href="#" >Organic Shop</button>
                        </div>
                        <div className="bg-[#c97b7b]"></div>
                    </div>
                    <div className="bg-[#834141] w-[60%]"></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
