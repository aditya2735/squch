"use client";
import React, { useRef } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useState } from 'react';

import Steering from "../../../../public/images/steering-wheel.svg";


const Buslayout = () => {
  return (
    <div className='card-seat-info'>
      <div className='bus-layout-container'>
        <div className='d-flex align-items-center entrance-head'>
          <div className='entrance'>
          <p className='m-0'>Entrance 1</p>
          </div>
          <div className='ms-auto'>
            <Image src={Steering} alt=''/>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat booked-women">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat booked-for-women">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat">
            <div className='seat-box available'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked-men">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
          <div className="seat available selected">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 172</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 168</p>
          </div>
          <div className='mx-auto'></div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 168</p>
          </div>
          <div className="seat available">
            <div className='seat-box'></div>
            <p className='m-0'>₵ 168</p>
          </div>
        </div>
        <div className="seat-row d-flex justify-content-between">
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked-men">
            <div className="seat-box"></div>
            <p className="m-0">₵ 165</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
          <div className="seat booked">
            <div className='seat-box'></div>
            <p className='m-0'>Sold</p>
          </div>
        </div>
      </div>

      <div className="legend">
        <div className='seat-info'>
          <span className="seat available"></span>
          <p>Available For Booking</p>
        </div>
        <div className='seat-info'>
          <span className="seat booked"></span>
          <p>Booked Not Available</p>
        </div>
        <div className='seat-info'>
          <span className="seat booked-women"></span>
          <p>Booked By Women</p>
        </div>
        <div className='seat-info'>
          <span className="seat booked-for-women"></span>
          <p>Only For Women</p>
        </div>
        <div className='seat-info'>
          <span className="seat booked-men"></span>
          <p>Only For Men</p>
        </div>
        <div className='seat-info'>
          <span className="seat selected"></span>
          <p>Your Selection</p>
        </div>
      </div>
    </div>
  )
}

export default Buslayout
