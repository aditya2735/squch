"use client";
import React from 'react'
import Link from 'next/link';


const BackLink = () => {
  return (
    <div className='back-toolbar page-title-back'>
      <div className='d-flex align-items-center'>
        <Link href="" className='btn btn-back'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.57 5.97461L3.5 12.0446L9.57 18.1146" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.4999 12.0449H3.66992" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Link>
        <div className="toolbar-title">
          <h2 className="heading02 m-0 text-white">Checkout</h2>
        </div>
        <div className='ms-auto'>
          <div className='head-busdetails d-flex flex-column align-items-end'>
            <p>30 Dec, 2024</p>
            <div className="d-flex align-items-center">
              <span className="route">
                Kumasi
              </span>
              <button className='btn'>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1149 2.96484L17.1499 5.99984L14.1149 9.03484" stroke="#E8B6F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.2998 6L17.0998 6" stroke="#E8B6F1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>
              <span className="route">
                Tamale
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackLink
