import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const SPAEDITMENU = () => {
  const [ayurvedicSPA, setAyurvedicSpa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/ayurvedicSPA')
      .then((response) => {
        setAyurvedicSpa(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='flex justify-center text-4xl text-black my-4 mb-8 mt-10 font-mono antialiased font-medium'> Ayurvedic SPA Menu</h1>
        <Link to='/admin/ayurvedicSpaMenu/createMenu'>
          <button className = 'p-3 bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-bold py-2 px-4 rounded transition duration-200 '> Add a service </button>
        </Link>
      </div>
      
        <div className="flex justify-center">
        <table className='w-[1300px] border-collapse'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-400 px-4 py-2'>No</th>
              <th className='border border-gray-400 px-4 py-2'>Topic</th>
              <th className='border border-gray-400 px-4 py-2 max-md:hidden'>Description</th>
              <th className='border border-gray-400 px-4 py-2 max-md:hidden'>Time</th>
              <th className='border border-gray-400 px-4 py-2 max-md:hidden'>Price</th>
              <th className='border border-gray-400 px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ayurvedicSPA.map((item, index) => (
              <tr key={item._id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className='border border-gray-400 px-4 py-2 text-center'>{index + 1}</td>
                <td className='border border-gray-400 px-4 py-2'>{item.topic}</td>
                <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.description}</td>
                <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.Time}</td>
                <td className='border border-gray-400 px-4 py-2 max-md:hidden'>{item.Price}</td>
                <td className='border border-gray-400 px-4 py-2 text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/admin/ayurvedicSpaMenu/details/${item._id}`}>
                      <BsInfoCircle className='text-2xl text-[#065F46]' />
                    </Link>
                    <Link to={`/admin/ayurvedicSpaMenu/edit/${item._id}`}>
                      <button className = 'p-3 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-2 px-4 rounded transition duration-200 '> Edit </button>

                    </Link>
                    <Link to={`/ayurvedicSpaMenu/delete/${item._id}`}>
                    <button className = 'p-3 bg-[#DC2626] hover:bg-[#B91C1C] text-black font-bold py-2 px-4 rounded transition duration-200 '> Delete </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default SPAEDITMENU;
