import React, { useState } from "react";
import Spamenu from "../../../images/SPA/ayurvedic-spa-menu.png";
import Classicalspa from "../../../images/SPA/classical-spa-rituals.png";
import { Link } from "react-router-dom";

function SpaAdminHP() {
  const [showReportButton, setShowReportButton] = useState(false);

  const handleReportClick = () => {
    // Implement report functionality here
    console.log("Report button clicked");
  };

  return (
    <div className="bg-[#FDE68A] ml-[140px]">
      <div className="spa-menu p-12 max-w-7.5xl mx-auto text-center">
        <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
          <div className="ayurvedic-spa bg-white p-6 rounded-lg shadow-md mb-8">
            <img src={Spamenu} alt="Ayurvedic-spa-menu" className="w-full h-64 object-cover mb-4" />
            <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2 font-weight-700">AYURVEDIC SPA MENU</h4>
            <div className="button-container flex justify-between">
              <Link to="/ayurvedic-spa-menu">
                <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
                  View for More
                </button>
              </Link>
              <Link to="/admin/spa-menu-edit-service">
                <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
                  Edit Services
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center spa-categories grid grid-cols-1 gap-8">
          <div className="classical-spa-rituals bg-white p-6 rounded-lg shadow-md mb-8">
            <img src={Classicalspa} alt="classical-spa-rituals" className="w-full h-64 object-cover mb-4" />
            <h4 className="text-3xl font-mono antialiased text-gray-800 mb-2">CLASSICAL SPA RITUALS</h4>
            <div className="button-container flex justify-between">
              <Link to="/ayurvedic-spa-classical">
                <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
                  View for More
                </button>
              </Link>
              <Link to="/admin/classical-spa-rituals-edit-service">
                <button className="bg-[#059669] hover:bg-[#065F46] text-white font-bold py-2 px-4 rounded transition duration-200">
                  Edit Services
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <Link to ="/admin/spa-admin-appointment">
        <button className="bg-[#fbc40f] hover:bg-[#F59E0B] text-black font-bold py-2 px-4 rounded transition duration-200 mt-4" onClick={handleReportClick}>
            Check SPA Appointments 
          </button>
          </Link>
         <br/>

        <Link to="/generate-report">
          <button className="bg-[#EF4444] hover:bg-[#B91C1C] text-white font-bold py-2 px-4 rounded transition duration-200 mt-4" onClick={handleReportClick}>
            Check SPA Report
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SpaAdminHP;
