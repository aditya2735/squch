"use client";
import React from 'react'
import Image from "next/image";
import ImageBulding from "../../../../../public/images/bulding-frame.png";

const SquchStayTitle = () => {
  return (
    <div>
        <div className='section-block position-relative'>
            <Image src={ImageBulding} alt="Image" />
            <div className='sectiont-text d-flex justify-content-center text-center px-40 position-absolute'>
                <h2 className='section-heading m-0'>My Bookings</h2>
            </div>
        </div>

    </div>
  )
}

export default SquchStayTitle