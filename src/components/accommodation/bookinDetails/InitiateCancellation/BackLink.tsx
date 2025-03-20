"use client";
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const BackLink = () => {
  const router=useRouter()
  return (
    <div className='back-toolbar'>
      <div className='d-flex align-items-center'>
        <button className='btn btn-back' onClick={()=> router.back()}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.97461L3.5 12.0446L9.57 18.1146" stroke="#652669" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.4999 12.0449H3.66992" stroke="#652669" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="toolbar-title">
          <h2 className="heading02 m-0">Cancle Booking</h2>
        </div>
      </div>
    </div>
  )
}

export default BackLink
