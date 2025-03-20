"use client";
import Image from "next/image";
import React from 'react'

import ImageBuldingBanner from "../../../../public/images/bulding-img.png";
import ImageSos1 from "../../../../public/images/sos-logo-1.png";
import ImageSos2 from "../../../../public/images/sos-logo-2.png";
import ImageSos3 from "../../../../public/images/sos-logo-3.png";
import ImageSos4 from "../../../../public/images/sos-logo-4.png";
import ImageSos5 from "../../../../public/images/sos-logo-5.png";
import ImageSos6 from "../../../../public/images/sos-logo-6.png";
import Link from "next/link";



const EmergencyCard = () => {
    return (
        <div className="sec-emergency-main pb-2 pb-md-5">
            <div className='booking-banner'>
                <Image src={ImageBuldingBanner} alt='' />
            </div>
            <div className="position-relative">
                <div className="block-header text-center">
                    <h2 className="h2"><span className="d-block">What’s</span> Your Emergency?</h2>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos1} alt="" />
                            </div>
                            <p className="m-0">Contact Admin</p>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos2} alt="" />
                            </div>
                            <p className="m-0">Police Station</p>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos3} alt="" />
                            </div>
                            <p className="m-0">Connect Driver</p>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos4} alt="" />
                            </div>
                            <p className="m-0">Connect Traveller</p>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos5} alt="" />
                            </div>
                            <p className="m-0">Fire Department</p>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4">
                        <Link href="" className="card card-emergency text-center">
                            <div className="image-thumb">
                                <Image src={ImageSos6} alt="" />
                            </div>
                            <p className="m-0">Ambulance</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmergencyCard
