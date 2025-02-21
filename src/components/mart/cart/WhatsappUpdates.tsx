"use client";
import React from 'react';
import Image from 'next/image';
import Whatsapp from "../../../../public/images/whatsapp.svg";

const WhatsappUpdates: React.FC = () => {
    return (
        <div className='whatsapp-updates'>
            <div className='d-flex align-items-center'>
                <div className='w-icon'>
                    <Image src={Whatsapp} alt='whatapp icon' />
                </div>
                <div className='flex-grow-1'>
                    <div className='ttl-w-updates'>
                        WhatsApp Updates
                    </div>
                    <p className='m-0'>
                        Get all booking related updates on WhatsApp
                    </p>
                </div>
                <div className='swithc-toggle ms-auto'>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatsappUpdates