import React from 'react';
import { Link, useParams } from 'react-router-dom';
const imageUrl = JSON.parse(localStorage.getItem("image"));



const ConnectedLinkComponent = ({ link }) => {
  return (
    
    <div className="flex flex-col items-center justify-center">
     <br/>
      <div className="max-w-xl p-4 border-2 border-gray-300 rounded-lg mb-4">
        {/* Image with frame */}
        <img src={imageUrl} alt="Connected Link" className="w-full" />
      </div>
      {/* Space for the link */}
      <div className="mb-4">
        {/* You can replace the text with your actual link */}
        <a href={link} className="text-[#0000FF]">{link}</a>
      </div>
      {/* Button */}
      <Link to ="/received">
      <button className="bg-[#FF0000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
      </Link>
    </div>
  );
};

export default ConnectedLinkComponent;
