"use client";
import Image from "next/image";
import ImageMap from "../../../../public/images/icon-map.svg";
import ImageUserPic from "../../../../public/images/user-pic.png";
import ImageWallet from "../../../../public/images/icon-wallet.svg";
import DownArrow from "../../../../public/images/down-arrow.svg";

import { useEffect, useState } from "react";
import { getUserLocation } from "@/services/common/service";

interface LocationData {
    address?: {
        county?: string;
    };
    display_name?: string;
}

const UserAuth = () => {
    const [location, setLocation] = useState<LocationData | string>("Fetching location...");

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            setLocation("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await getUserLocation(latitude, longitude);
                    setLocation(response || "Location not found");
                } catch (error) {
                    setLocation("Failed to fetch location");
                }
            },
            (error) => {
                setLocation("Location access denied");
            }
        );
    }, []);

    return (
        <div className='sec-user-auth'>
            <div className='d-flex align-items-center'>
                <div className='location-area'>
                    <div className="d-flex align-items-center">
                        <Image src={ImageMap} alt="Map Icon" />
                        {typeof location === "string"
                            ? location
                            : location?.address?.county || "Location not found"}
                        <Image src={DownArrow} alt="Down Arrow" />
                    </div>
                    <p className="m-0">
                        {typeof location === "string" ? "" : location?.display_name}
                    </p>
                </div>
                <div className='ms-auto'>
                    <div className="user-auth-area">
                        <div className="d-flex align-items-center">
                            <div className="d-flex d-md-none align-items-center wallet-box">
                                <span className="wallet-circle">
                                    <Image src={ImageWallet} alt="Wallet Icon" />
                                </span>
                                $300
                            </div>
                            <div className="userauth">
                                <Image src={ImageUserPic} alt="User Profile" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
