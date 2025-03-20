"use client";
import Image from "next/image";
import React from 'react'
import Link from 'next/link';

import DetailLogo from "../../../../public/images/logo-sm.png";

const FreeCancellation = () => {
    return (
        <div className='card card-traveling position-relative card-change-detail mb-40'>
            <div className='d-flex align-items-center card-head-box'>
                <div className='me-auto'>
                    <h2 className='ttl-traveling'>Free Cancellation</h2>
                    <p>₵4 Per Passenger</p>
                </div>
                <div className='ms-autod'>
                    <div className="logoImg-box">
                        <Image src={DetailLogo} alt=""/>
                    </div>
                </div>
            </div>
            <div className="card-body-box">
                <div className="d-md-flex gap-32">
                    <div className="flex-grow-1">
                        <div className="passenger-box-left">
                        <div className="card-gray">
                            <h2 className="green-wedge-text">100% Refund</h2>
                            <p className="m-0">on cancellation</p>
                        </div>
                        <p className="link-terms">Cancel anytime up to 6 hours before bus departure time to get a full refund. <Link href="">Terns & Conditions</Link></p>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <div className="passenger-box-right">
                            <ul className="list-unstyled m-0">
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="me-auto">
                                            <h3 className="passenger-ttl">Add  Free Cancellation</h3>
                                            <p>Only for ₵4 per passenger</p>
                                        </div>
                                        <div className="ms-auto">
                                        <label className="radio-round">
                                        <input type="radio" name="radio" />
                                        <span className="check-mark-radio"></span>
                                    </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-center">
                                        <div className="me-auto">
                                            <h3 className="passenger-ttl">I don’t Want Free Cancellation</h3>
                                        </div>
                                        <div className="ms-auto">
                                        <label className="radio-round">
                                        <input type="radio" name="radio" />
                                        <span className="check-mark-radio"></span>
                                    </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeCancellation
