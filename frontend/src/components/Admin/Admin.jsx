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
        <div className="bg-[#f0f0f0] h-[3600px] mt-[-20px] pb-[100px]">
            <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css" />

            <div className="flex pt-[40px] ml-[20px]">

                <div className="w-[310px] h-[2000px] mr-[10px] border border-[#d3d3d3] rounded-[14px] bg-[#ffffff]">
                    <div className="mt-[30px] ml-[55px] font-Spirax absolute text-[24pt] px-[10px] border border-[#000] rounded-[11px] py-[8px]">CeylonVibes</div>
                    <div className="border bg-[#e2e2e2] py-[6px] pb-[15px] mt-[110px] mx-[20px] rounded-[11px]">

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/dashboard"
                                onClick={() => handleButtonClick("dashboard")}
                                className={location.pathname === "/admin/dashboard" ? "mt-[5px] py-[13px] pl-[20px] pr-[96px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[96px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/dashboard" ? "fa-duotone fa-house mr-[16px]" : "fa-duotone fa-house mr-[16px] text-[#d3bf05]"} />Dashboard
                            </Link>
                        </div>

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/OrganicItems"
                                onClick={() => handleButtonClick("items")}
                                className={location.pathname === "/admin/OrganicItems" || location.pathname === "/admin/AddCatagory" || location.pathname.startsWith("/admin/ItemsCatagory") || location.pathname.startsWith("/admin/addItemsCatagory/") || location.pathname.startsWith("/admin/updateItemsCatagory") || location.pathname.startsWith("/admin/updateCatagory")? "mt-[5px] py-[13px] pl-[20px] pr-[70px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[70px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/OrganicItems" || location.pathname === "/admin/AddCatagory" || location.pathname.startsWith("/admin/ItemsCatagory") || location.pathname.startsWith("/admin/AddItemsCatagory") || location.pathname.startsWith("/admin/updateItemsCatagory") || location.pathname.startsWith("/admin/updateCatagory")|| location.pathname.startsWith("/admin/addItemsCatagory/") ? "fa-duotone fa-leaf text-[17pt] mr-[16px]" : "fa-duotone fa-leaf text-[17pt] mr-[16px] text-[#d3bf05]"} />Organic Items
                            </Link>
                        </div>

                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/spa"
                                onClick={() => handleButtonClick("spa")}
                                className={location.pathname === "/admin/spa" || location.pathname === "/admin/spa-admin-appointment"|| location.pathname === "/admin/generate-report" || location.pathname.startsWith("/admin/classical-spa-rituals-edit-service") || location.pathname === "/admin/ayurvedic-spa-classical" || location.pathname.startsWith("/admin/spa-menu-edit-service") || location.pathname.startsWith("/admin/ayurvedicSpaMenu") || location.pathname.startsWith("/admin/classicalSpaRituals") ? "mt-[5px] py-[13px] pl-[20px] pr-[153px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[153px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/spa" || location.pathname === "/admin/spa-admin-appointment" || location.pathname === "/admin/generate-report" || location.pathname.startsWith("/admin/classical-spa-rituals-edit-service") || location.pathname === "/admin/ayurvedic-spa-classical" || location.pathname.startsWith("/admin/spa-menu-edit-service") || location.pathname.startsWith("/admin/ayurvedicSpaMenu") || location.pathname.startsWith("/admin/classicalSpaRituals")? "fa-duotone fa-spa text-[17pt] mr-[13px]" : "fa-duotone fa-spa text-[17pt] mr-[13px] text-[#d3bf05]"} />SPA
                            </Link>
                        </div>
                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/articles"
                                onClick={() => handleButtonClick("articles")}
                                className={location.pathname === "/admin/articles" || location.pathname.startsWith("/admin/update-article") || location.pathname === "/admin/add-article" ? "mt-[5px] py-[13px] pl-[20px] pr-[123px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[123px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/articles" || location.pathname.startsWith("/admin/update-article") || location.pathname === "/admin/add-article" ? "fa-duotone fa-newspaper text-[17pt] mr-[17px]" : "fa-duotone fa-newspaper text-[17pt] mr-[17px] text-[#d3bf05]"} />Articles
                            </Link>
                        </div>
                        <div className="ml-[0px] mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/rentals"
                                onClick={() => handleButtonClick("rentals")}
                                className={location.pathname === "/admin/rentals" || location.pathname === "/admin/add-car" || location.pathname === "/admin/admin-rent"|| location.pathname.startsWith("/admin/update-car") ? "mt-[5px] py-[13px] pl-[20px] pr-[125px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[125px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/rentals" || location.pathname === "/admin/add-car"|| location.pathname === "/admin/admin-rent" || location.pathname.startsWith("/admin/update-car") ? "fa-duotone fa-cars ml-[-2px] text-[17pt] mr-[13px]" : "fa-duotone fa-cars text-[17pt] ml-[-2px] mr-[13px] text-[#d3bf05]"} />Rentals
                            </Link>
                        </div>
                        <div className="ml-0 mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/events"
                                onClick={() => handleButtonClick("events")}
                                className={location.pathname === "/admin/events" || location.pathname === "/admin/addevent" || location.pathname.startsWith("/admin/editevent/") ? "mt-[5px] py-[13px] pl-[20px] pr-[133px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[133px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/events" || location.pathname === "/admin/addevent" || location.pathname.startsWith("/admin/editevent/") ? "fa-duotone fa-calendar-week text-[17pt] mr-[18px]" : "fa-duotone fa-calendar-week text-[17pt] mr-[18px] text-[#d3bf05]"} />Events
                            </Link>
                        </div>
                        <div className="ml-[0px] mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/tours"
                                onClick={() => handleButtonClick("tours")}
                                className={location.pathname === "/admin/tours" || location.pathname === "/admin/create" || location.pathname === "/admin/bookings"|| location.pathname.startsWith("/admin/tedit/") || location.pathname.startsWith("/admin/tdetails/")|| location.pathname.startsWith("/admin/bdetails/")|| location.pathname.startsWith("/admin/tdelete/")|| location.pathname.startsWith("/admin/bdelete/")? "mt-[5px] py-[13px] pl-[20px] pr-[141px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[141px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/tours" || location.pathname === "/admin/create" || location.pathname === "/admin/bookings"|| location.pathname.startsWith("/admin/tedit/") || location.pathname.startsWith("/admin/tdetails/")|| location.pathname.startsWith("/admin/bdetails/")|| location.pathname.startsWith("/admin/tdelete/")|| location.pathname.startsWith("/admin/bdelete/") ? "fa-duotone fa-location-dot text-[17pt] ml-[2px] mr-[19px]" : "fa-duotone fa-location-dot text-[17pt] ml-[2px] mr-[19px] text-[#d3bf05]"} />Tours
                            </Link>
                        </div>
                       
                        <div className="ml-[0px] mr-0 mt-[5px] py-[13px] pl-[10px] w-[265px] rounded-[8px] text-[14pt] ">
                            <Link
                                to="/admin/payment"
                                onClick={() => handleButtonClick("payment")}
                                className={location.pathname === "/admin/payment" || location.pathname === "/admin/paymentss" || location.pathname === "/admin/acceptedslips" || location.pathname === "/admin/received"|| location.pathname === "/admin/viewslip"? "mt-[5px] py-[13px] pl-[20px] pr-[114px] w-[240px] rounded-[8px] bg-[#333333] text-[#ffffff] text-[14pt] hover:bg-[#000]" : "mt-[5px] py-[13px] pl-[20px] pr-[114px] w-[240px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"} >
                                <i class={location.pathname === "/admin/payment" || location.pathname === "/admin/paymentss" || location.pathname === "/admin/acceptedslips" || location.pathname === "/admin/received"|| location.pathname === "/admin/viewslip" ? "fa-duotone fa-credit-card text-[17pt] mr-[12px]" : "fa-duotone fa-credit-card text-[17pt] mr-[12px] text-[#d3bf05]"} />Payment
                            </Link>
                        </div>
                       
                        <div className="mx-auto ml-[10px] mt-[5px] py-[11px] pl-[20px] w-[243px] rounded-[8px] bg-[#ffffff] text-[#414141] text-[14pt] hover:bg-[#dedede]"><i class="fa-duotone fa-gear mr-[18px] ml-[2px]" style={{ "--fa-primary-color": "#d3bf05", "--fa-secondary-color": "#d3bf05", }} />Settings</div>
                        <Outlet />
                    </div>
                </div>

                <div className="w-[1120px] ml-[20px]">
                    <div className="h-[90px] flex bg-[#ffffff] rounded-[14px] border border-[#cfcfcf]">
                        <div className="pt-[27px] pl-[30px] text-[16pt] font-bold">
                            <div className="w-[240px] font-semibold ">ADMIN DASHBOARD</div>
                            {/* <div className="font-bold">DASHBOARD</div> */}
                        </div>
                        <div className="pt-[20px] pl-[310px]"><SearchBar /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}