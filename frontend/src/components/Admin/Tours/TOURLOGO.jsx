import React from "react"
import SearchBar from "../Header/SearchBar"
import Buttons from "../Header/Buttons"
import Navbar from "../Header/Navbar"

export default function TourLogo() {
    return (
        <div className="bg-blue-200">
            <div><br></br>
            
            <link href="https://fonts.googleapis.com/css2?family=Coda&family=Fira+Sans&family=Dancing+Script&family=Kay+Pho+Du&family=Spirax&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
            <Buttons/>
            <SearchBar/>
            <Navbar/>
            </div>
            <div className="mt-[10px] ml-[40px] font-Sp absolute text-[30pt]">CeylonVibes</div>
            <div className="mt-[57px] ml-[112px] font-Natural absolute text-[17pt] text-green colo">Tour Homepage</div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}