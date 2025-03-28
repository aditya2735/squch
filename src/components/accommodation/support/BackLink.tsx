"use client";
import React from 'react'
import Link from 'next/link';


const BackLink = () => {
  return (
    <div className='back-toolbar'>
      <div className='d-flex align-items-center'>
        <Link href="" className='btn btn-back'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.97461L3.5 12.0446L9.57 18.1146" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.4999 12.0449H3.66992" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default BackLink
