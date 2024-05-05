import { SearchBar } from "../Header/SearchBar"

import Logo from "../Header/logo"
import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export default function Admin() {
    const [selectedButton, setSelectedButton] = useState("");

    // Get the current location
    const location = useLocation();

    // Function to handle button click and update selectedButton state
    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };
    return (
        <div className="bg-[#f0f0f0] h-[1400px] mt-[-20px] pb-[100px]">
            <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css" />

            <div className="flex pt-[40px] ml-[20px]">

                <div className="w-[310px] h-[2000px] mr-[10px] border border-[#d3d3d3] rounded-[14px] bg-[#ffffff]">
                    <div className="mt-[30px] ml-[55px] font-Spirax absolute text-[24pt] px-[10px] border border-[#000] rounded-[11px] py-[8px]">CeylonVibes</div>
                    <div className="border py-[6px] pb-[15px] mt-[110px] mx-[20px] rounded-[11px]">

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/search"
                                onClick={() => handleButtonClick("search")}
                                className={location.pathname === "/admin/search" ? "mt-[5px] py-[13px] pl-[20px] pr-[93px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[93px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/search" ? "fa-duotone fa-house mr-[16px]" : "fa-duotone fa-house mr-[16px] text-[#d3bf05]"} />Dashboard
                            </Link>
                        </div>

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/OrganicItems"
                                onClick={() => handleButtonClick("list")}
                                className={location.pathname === "/admin/OrganicItems" || location.pathname === "/admin/AddCatagory" || location.pathname.startsWith("/admin/ItemsCatagory") || location.pathname.startsWith("/admin/AddItemsCatagory") || location.pathname.startsWith("/admin/updateItemsCatagory") || location.pathname.startsWith("/admin/updateCatagory")? "mt-[5px] py-[13px] pl-[20px] pr-[67px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[67px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/OrganicItems" || location.pathname === "/admin/AddCatagory" || location.pathname.startsWith("/admin/ItemsCatagory") || location.pathname.startsWith("/admin/AddItemsCatagory") || location.pathname.startsWith("/admin/updateItemsCatagory") || location.pathname.startsWith("/admin/updateCatagory") ? "fa-duotone fa-leaf text-[17pt] mr-[15px]" : "fa-duotone fa-leaf text-[17pt] mr-[15px] text-[#d3bf05]"} />Organic Items
                            </Link>
                        </div>

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/spa"
                                onClick={() => handleButtonClick("spa")}
                                className={location.pathname === "/admin/spa" || location.pathname === "/admin/spa-admin-appointment" || location.pathname.startsWith("/admin/classical-spa-rituals-edit-service") || location.pathname === "/admin/ayurvedic-spa-classical" || location.pathname.startsWith("/admin/spa-menu-edit-service") || location.pathname.startsWith("/admin/ayurvedicSpaMenu") || location.pathname.startsWith("/admin/classicalSpaRituals") ? "mt-[5px] py-[13px] pl-[20px] pr-[148px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[148px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/spa" || location.pathname === "/admin/spa-admin-appointment" || location.pathname.startsWith("/admin/classical-spa-rituals-edit-service") || location.pathname === "/admin/ayurvedic-spa-classical" || location.pathname.startsWith("/admin/spa-menu-edit-service") || location.pathname.startsWith("/admin/ayurvedicSpaMenu") || location.pathname.startsWith("/admin/classicalSpaRituals")? "fa-duotone fa-spa text-[17pt] mr-[15px]" : "fa-duotone fa-spa text-[17pt] mr-[15px] text-[#d3bf05]"} />SPA
                            </Link>
                        </div>
                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/articles"
                                onClick={() => handleButtonClick("articles")}
                                className={location.pathname === "/admin/articles" || location.pathname.startsWith("/admin/update-article") || location.pathname === "/admin/add-article" ? "mt-[5px] py-[13px] pl-[20px] pr-[122px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[122px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/articles" || location.pathname.startsWith("/admin/update-article") || location.pathname === "/admin/add-article" ? "fa-duotone fa-newspaper text-[17pt] mr-[15px]" : "fa-duotone fa-newspaper text-[17pt] mr-[15px] text-[#d3bf05]"} />Articles
                            </Link>
                        </div>
                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/rentals"
                                onClick={() => handleButtonClick("rentals")}
                                className={location.pathname === "/admin/rentals" || location.pathname === "/admin/add-car" || location.pathname.startsWith("/admin/update-car") ? "mt-[5px] py-[13px] pl-[20px] pr-[116px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[116px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/rentals" || location.pathname === "/admin/add-car" || location.pathname.startsWith("/admin/update-car") ? "fa-duotone fa-cars text-[17pt] mr-[15px]" : "fa-duotone fa-cars text-[17pt] mr-[15px] text-[#d3bf05]"} />Rentals
                            </Link>
                        </div>
                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/events"
                                onClick={() => handleButtonClick("events")}
                                className={location.pathname === "/admin/events" || location.pathname === "/admin/add-car" || location.pathname.startsWith("/admin/update-car") ? "mt-[5px] py-[13px] pl-[20px] pr-[116px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[116px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/events" || location.pathname === "/admin/add-car" || location.pathname.startsWith("/admin/update-car") ? "fa-duotone fa-cars text-[17pt] mr-[15px]" : "fa-duotone fa-cars text-[17pt] mr-[15px] text-[#d3bf05]"} />Rentals
                            </Link>
                        </div>

                        <div className="mx-auto mt-[5px] py-[11px] pl-[20px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"><i class="fa-duotone fa-envelope mr-[18px] ml-[-1px] pt-[5px] text-[17pt]" style={{ "--fa-primary-color": "#d3bf05", "--fa-secondary-color": "#d3bf05", }} />Notifications</div>

                        <div className="mx-auto mt-[5px] py-[11px] pl-[20px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"><i class="fa-duotone fa-gear mr-[18px] ml-[4px]" style={{ "--fa-primary-color": "#d3bf05", "--fa-secondary-color": "#d3bf05", }} />Settings</div>
                        <Outlet />
                    </div>
                </div>

                <div className="w-[1120px] ml-[20px]">
                    <div className="h-[90px] flex bg-[#ffffff] rounded-[14px] border border-[#cfcfcf]">
                        <div className="pt-[20px] pl-[30px] text-[12pt]">
                            <div className="w-[170px] ">ADMIN DASHBOARD</div>
                            {/* <div className="font-bold">DASHBOARD</div> */}
                        </div>
                        <div className="pt-[20px] pl-[380px]"><SearchBar /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}