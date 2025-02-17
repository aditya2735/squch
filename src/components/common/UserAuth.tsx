"use client";
import Image from "next/image";
import ImageMap from "../../../public/images/icon-map.svg";
import ImageUserPic from "../../../public/images/user-pic.png";
import ImageWallet from "../../../public/images/icon-wallet.svg";
import DownArrow from "../../../public/images/down-arrow.svg";

import { useEffect, useState } from "react";
import { getUserLocation } from "@/services/martService";

const UserAuth = () => {

    const [location, setLocation] = useState<string>("Fetching location...");

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await getUserLocation(latitude, longitude)
                        setLocation(response || "Location not found");
                    } catch (error) {
                        setLocation("Failed to fetch location");
                    }
                },
                () => {
                    setLocation("Location access denied");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    return (
        <div className='sec-user-auth'>
            <div className='d-flex align-items-center'>
                <div className='location-area'>
                    <div className="d-flex align-items-center">
                        <Image src={ImageMap} alt="" />
                        Osu Castle
                        <Image src={DownArrow} alt="Down Arrow" />
                    </div>
                    <p className="m-0">{location}</p>
                </div>
                <div className='ms-auto'>
                    <div className="user-auth-area">
                        <div className="d-flex align-items-center">
                            <div className="d-flex d-md-none align-items-center wallet-box">
                                <span className="wallet-circle">
                                    <Image src={ImageWallet} alt="" />
                                </span>
                                $300
                            </div>
                            <div className="userauth">
                                <Image src={ImageUserPic} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserAuth;
