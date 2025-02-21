"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const AboutSquch = () => {
    return (

        <div className='sec-about-detail mb-24'>
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">About Squch</h2>
                </div>
            </div>


            <div className='card-about-detail'>
                <p className='m-0'>Lorem Ipsum</p>
            </div>

            <button className='btn show-more-btn'>View More</button>
        </div>
    )
}

export default AboutSquch
