"use client";
import Image from "next/image";
import React from 'react'
import Link from 'next/link';

import DetailLogo from "../../../../public/images/logo-sm.png";

const SquchCaresDonation = () => {
    return (
        <div className='card card-traveling card-donation position-relative card-change-detail mb-40'>
            <div className='d-flex align-items-center'>
                <div className='iconlogo'>
                    <Image src={DetailLogo} alt="" />
                </div>
                <div className='flex-grow-1'>
                    <div className="ttl-donation">SQUCH Cares Donation</div>
                    <p className="m-0">Donate ₵ to support responsible truism initiatives</p>
                </div>
                <div className='ms-auto'>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" checked />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SquchCaresDonation
