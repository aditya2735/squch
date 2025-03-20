"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import Form from 'react-bootstrap/Form';

import ImageStay1 from "../../../../../public/images/logo-half-fav.png"


const CustomiseYourStay = () => {
    return (
        <div className="sec-Customise-stay">
            <div className="block-header">
                <div className="d-flex align-items-center">
                    <h2 className="heading02 font-14 m-0">Customisation (if any)</h2>
                </div>
            </div>

            <div className="customise-stay-list">
                <div className="customise-stay-list-item">
                    <div className="d-flex align-items-center">
                        <div className="logoIocn">
                            <Image src={ImageStay1} alt="" />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="stay-ttl">SQUCH Cares Donation</h3>
                            <p className="m-0">Donate ₵1 to support responsible truism initiatives</p>
                        </div>
                        <div className="stay-price">
                            ₵1
                        </div>
                        <div className="customise-status">
                            <Form.Check
                                type="checkbox"
                                checked
                                defaultChecked
                                id="custom-checkbox"
                            />
                        </div>
                    </div>
                </div>
                <div className="customise-stay-list-item">
                    <div className="d-flex align-items-center">
                        <div className="logoIocn">
                            <Image src={ImageStay1} alt="" />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="stay-ttl">SQUCH Cares Donation</h3>
                            <p className="m-0">Donate ₵1 to support responsible truism initiatives</p>
                        </div>
                        <div className="stay-price">
                            ₵1
                        </div>
                        <div className="customise-status">
                            <Form.Check
                                type="checkbox"
                                checked
                                defaultChecked
                                id="custom-checkbox"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomiseYourStay
