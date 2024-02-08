import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='h-[300px] bg-[#fff] grid grid-cols-3 grid-flow-col border border-[#fff]'>
                <div className="bg-[#000] text-center row-span-3 text-[#fff]">
                    <div className="border border-[#fff] pt-[100px] font-Spirax text-[30pt]">CeylonVibes
                        <i class="fa-sharp fa-thin fa-copyright text-[6px] ml-[4px] border-white" style={{ color: '#ffffff' }}></i>
                    </div>
                    <div className='font-Abel'>To Enrich your Life</div>
                    <div className="pd"></div>
                </div>
                <div className="bg-[#834141] col-span-2"></div>
                <div className="bg-[#d4b7b7] row-span-2 "></div>
            </div>
        </div>

    );
}

export default Footer;
