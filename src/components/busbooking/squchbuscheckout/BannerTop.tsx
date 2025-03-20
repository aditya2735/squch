"use client";
import Image from "next/image";
import React from 'react'
import Link from 'next/link';

import Building from "../../../../public/images/bulding-img.png";

export default function BannerTop() {
  return (
    <div className='checkout-banner'>
      <Image src={Building} alt=""/>
    </div>
  )
}
