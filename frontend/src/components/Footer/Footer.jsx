import React from 'react';
import { Button, Input, Space } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const Component = <SocialIcon url="https://twitter.com" />
    return (
        <div>
            <StyleProvider hashPriority="high">
                <div className='h-[330px] bg-[#000] grid grid-cols-3 grid-rows-3 grid-flow-col border '>
                    <div className=" mt-[25px] ml-[10px] h-[280px] pt-[20px] bg-[#000000] text-center row-span-3 text-[#fff] w-[400px] ">
                        <div className='border-[2px] w-[3px] h-[290px] mt-[-25px] ml-[402px] rounded-[6px] absolute'></div>
                        <div className=" font-Spirax text-[33pt] pl-[10px]">CeylonVibes
                            <i class="fa-sharp fa-thin fa-copyright text-[6px] ml-[4px]" style={{ color: '#ffffff' }}></i>
                        </div>
                        <div className='font-BadScript mt-[4px] text-[16px] w-[290px] text-justify mx-[auto]'>Discover Sri Lanka, a land of cultural richness and vibrancy, where you can experience its diverse heritage, traditions, arts, cuisine, and natural wonders
                        </div>
                        <div className="mt-[40px] pd font-Barlow ">GIVE TO CEYLON-VIBES<i class="ml-[7px] fa-duotone fa-arrow-right" style={{ "--fa-primary-color": "#a0f1ac", "--fa-secondary-color": "#a0f1ac" }}></i></div>
                    </div>
                    <div className=" ml-[-34px] w-[920px] bg-[#000000] col-span-3 text-center font-Barlow text-[12pt]">
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Contact Us</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>About Us</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Articles</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Organic Shop</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px] border-r-[2px]'>Spa</button>
                        <button className='pl-[45px] pr-[45px] text-white mt-[25px]'>Library</button>
                    </div>

                    <div className="bg-[#000000] row-span-2 ">
                        <div className='text-[14pt] ml-[20px] text-white font-Barlow'>
                            <i class="fa-sharp fa-light fa-phone-arrow-up-right mb-[10px]" style={{ color: "#f7c973" }}></i>
                            <span>0762174400</span><br/>
                            <i class="fa-light fa-envelope" style={{color: "#f7c973"}}></i><span>ceylonvibes@gmail.com</span>
                        </div>
                        {/* <button className='text-[16pt]'><i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i></button> */}
                    </div>

                    <div className='bg-[#000]  w-[100%] h-[200%] mt-[-15px] ml-[-20px]'>
                        <div className=' p-[40px] pt-[25px] p text-center m-auto w-[420px] h-[195px] border border-[#fff] rounded-[4px]'>
                            <div className='text-[#fff] text-left font-Barlow'>
                                <p>Get the freshest CEYLON-VIBES News</p>
                            </div>
                            <Space className='pt-[15px]' direction="vertical" size="middle">
                                <Space.Compact className='' style={{ width: '100%' }}>
                                    <Input placeholder="Your email here" className='rounded-[0px] w-[240px] h-[40px] text-[12pt] font-Barlow' />
                                    <Button className='pl-[0px] bg-BrownLi2 text-[#000] rounded-[0px] h-[40px] text-[12pt] font-Barlow' type="primary">Subscribe</Button>
                                </Space.Compact>
                            </Space>
                            <div className='text-white font-Barlow flex mt-[10px]'>
                                <input type="checkbox" className='text-[9pt]' /> <div className='text-left text-[10pt] mt-[17px] ml-[15px]'>By checking this box, you agree that you are at <br />least 18 years of age.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyleProvider>
        </div>

    );
}

export default Footer;
