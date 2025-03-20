"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import Form from 'react-bootstrap/Form';

const CouponsOffers = () => {
  return (
    <div className="cardwhite cardshadow p-0 coupon-card overflow-hidden mb-32">
      <div className="coupon-header">
        <div className="d-flex align-items-center">
          <p className="m-0">Save extra by applying coupons on every booking</p>
          <div className="iocn-offer ms-auto">
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none">
              <path d="M7.14816 24.4344L4.61484 21.901C3.58151 20.8677 3.58151 19.1677 4.61484 18.1343L7.14816 15.601C7.58149 15.1676 7.93149 14.3176 7.93149 13.7176V10.1343C7.93149 8.66759 9.1315 7.46763 10.5982 7.46763H14.1815C14.7815 7.46763 15.6315 7.11768 16.0648 6.68434L18.5982 4.15098C19.6315 3.11764 21.3315 3.11764 22.3648 4.15098L24.8982 6.68434C25.3315 7.11768 26.1815 7.46763 26.7815 7.46763H30.3649C31.8315 7.46763 33.0315 8.66759 33.0315 10.1343V13.7176C33.0315 14.3176 33.3815 15.1676 33.8148 15.601L36.3482 18.1343C37.3815 19.1677 37.3815 20.8677 36.3482 21.901L33.8148 24.4344C33.3815 24.8677 33.0315 25.7177 33.0315 26.3177V29.9009C33.0315 31.3676 31.8315 32.5677 30.3649 32.5677H26.7815C26.1815 32.5677 25.3315 32.9177 24.8982 33.351L22.3648 35.8844C21.3315 36.9177 19.6315 36.9177 18.5982 35.8844L16.0648 33.351C15.6315 32.9177 14.7815 32.5677 14.1815 32.5677H10.5982C9.1315 32.5677 7.93149 31.3676 7.93149 29.9009V26.3177C7.93149 25.7011 7.58149 24.8511 7.14816 24.4344Z" fill="url(#paint0_linear_3588_26081)" />
              <path d="M15.5 25L25.5 15" stroke="#FAF5FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24.6572 24.1663H24.6722" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.3242 15.8333H16.3391" stroke="white" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_3588_26081" x1="13.854" y1="32.9428" x2="59.2879" y2="-12.491" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#20A66A" />
                  <stop offset="1" stopColor="#0F4C31" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>
      <div className="coupon-content">
        <div className="coupon-item">
          <div className="d-flex align-items-center">
            <div className="iocn-check">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="18" height="18" rx="9" fill="#20A66A" />
                <path d="M13.501 6.75L8.00031 12.2507L5.5 9.75037" stroke="white" strokeWidth="1.00012" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-grow-1">
              <h3 className="coupon-ttl">You save ₵12 on online bookings</h3>
              <p>Auto-applied as you pay using squch app</p>
            </div>
          </div>
        </div>

        <div className="coupon-item">
          <div className="d-flex align-items-center">
            <div className="iocn-check">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="18" height="18" rx="9" fill="#20A66A" />
                <path d="M13.501 6.75L8.00031 12.2507L5.5 9.75037" stroke="white" strokeWidth="1.00012" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-grow-1">
              <h3 className="coupon-ttl">You saved ₵54 with ‘SQUCHM120’</h3>
            </div>
            <div className="link-remove-box">
              <button className="btn-remove-code">Remove</button>
            </div>
          </div>
        </div>

        <div className="coupon-item">
          <div className="d-flex align-items-center">
            <div className="iocn-check">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.15926 10.2739L2.14594 9.2606C1.7326 8.84727 1.7326 8.16726 2.14594 7.75393L3.15926 6.74058C3.3326 6.56725 3.4726 6.22725 3.4726 5.98725V4.5539C3.4726 3.96723 3.9526 3.48725 4.53927 3.48725H5.9726C6.2126 3.48725 6.5526 3.34727 6.72593 3.17393L7.73926 2.16059C8.15259 1.74725 8.8326 1.74725 9.24593 2.16059L10.2593 3.17393C10.4326 3.34727 10.7726 3.48725 11.0126 3.48725H12.4459C13.0326 3.48725 13.5126 3.96723 13.5126 4.5539V5.98725C13.5126 6.22725 13.6526 6.56725 13.8259 6.74058L14.8393 7.75393C15.2526 8.16726 15.2526 8.84727 14.8393 9.2606L13.8259 10.2739C13.6526 10.4473 13.5126 10.7873 13.5126 11.0273V12.4606C13.5126 13.0472 13.0326 13.5273 12.4459 13.5273H11.0126C10.7726 13.5273 10.4326 13.6673 10.2593 13.8406L9.24593 14.8539C8.8326 15.2673 8.15259 15.2673 7.73926 14.8539L6.72593 13.8406C6.5526 13.6673 6.2126 13.5273 5.9726 13.5273H4.53927C3.9526 13.5273 3.4726 13.0472 3.4726 12.4606V11.0273C3.4726 10.7806 3.3326 10.4406 3.15926 10.2739Z" stroke="#454545" strokeWidth="0.571429" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 10.5L10.5 6.5" stroke="#454545" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.1627 10.1663H10.1687" stroke="#454545" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.82967 6.83333H6.83566" stroke="#454545" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <div className="flex-grow-1">
              <h3 className="coupon-ttl">Save ₵49 with ‘SQUCHM120’</h3>
            </div>
            <div className="link-remove-box">
              <button className="btn btn-applay">Apply</button>
            </div>
          </div>
        </div>

      </div>

      <div className="coupon-footer">
        <Link href="" className="view-more-coupons">View more coupons & offers <i className="bi bi-chevron-right"></i></Link>
    </div>

    </div>
  )
}

export default CouponsOffers
