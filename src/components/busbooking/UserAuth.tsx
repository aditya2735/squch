"use client";
import Image from "next/image";
import Link from "next/link";

import ImageMap from "../../../public/images/icon-map.svg";
import ImageUserPic from "../../../public/images/user-pic.png";
import ImageWallet from "../../../public/images/icon-wallet.svg";


const UserAuth = () => {
    return (
        <div className='sec-user-auth'>
            <div className='d-flex align-items-center'>
                <div className='location-area'>
                    <div className="d-flex align-items-center">
                        <Image src={ImageMap} alt="" /> Osu Castle <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 10.5449L12 15.5449L7 10.5449" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <p className="m-0">Osu, Accra, Ghana</p>
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
}

export default UserAuth
