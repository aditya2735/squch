"use client";
import React, { useRef } from 'react'
import Link from 'next/link';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeaderRouteInfo = () => {

    const [checkInDate, setCheckInDate] = useState<any>(null);
    const datePickerRef = useRef(null); // Reference for DatePicker

    return (
        <div className='back-toolbar route-header'>
            <div className='d-flex align-items-center'>
                <Link href="" className='btn btn-back'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.57 5.97461L3.5 12.0446L9.57 18.1146" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.4999 12.0449H3.66992" stroke="#652669" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
                <div className='toolbar-title flex-grow-1'>
                    <div className='d-flex bg-white'>
                        <div className='route-info'>
                            <div className="d-flex align-items-center">
                                <span className="route">
                                    Kumasi
                                </span>
                                <button className='btn'>
                                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7148 3.00977L16.7498 6.04477L13.7148 9.07976" stroke="#410E44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.8999 6.04492L16.6999 6.04492" stroke="#410E44" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <span className="route">
                                    Tamale
                                </span>
                            </div>
                        </div>
                        <div className='date-info ms-auto'>
                            <div className='d-flex align-items-center'>
                                <DatePicker
                                    selected={checkInDate}
                                    onChange={(date) => setCheckInDate(date)}
                                    placeholderText="23 December, 2024"
                                    className="calendar-picker"
                                    ref={datePickerRef} // Assign ref to DatePicker
                                />
                                <button className='btn'>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.3779H3C2.65833 18.3779 2.375 18.0946 2.375 17.7529C2.375 17.4113 2.65833 17.1279 3 17.1279H18C18.3417 17.1279 18.625 17.4113 18.625 17.7529C18.625 18.0946 18.3417 18.3779 18 18.3779Z" fill="#652669" />
                                        <path d="M16.35 2.94497C14.7333 1.3283 13.15 1.28664 11.4916 2.94497L10.4833 3.95331C10.4 4.03664 10.3666 4.16997 10.4 4.28664C11.0333 6.49497 12.8 8.26164 15.0083 8.89497C15.0416 8.9033 15.075 8.91164 15.1083 8.91164C15.2 8.91164 15.2833 8.8783 15.35 8.81164L16.35 7.80331C17.175 6.98664 17.575 6.19497 17.575 5.39497C17.5833 4.56997 17.1833 3.76997 16.35 2.94497Z" fill="#652669" />
                                        <path d="M13.5084 9.65358C13.2668 9.53691 13.0334 9.42025 12.8084 9.28691C12.6251 9.17858 12.4501 9.06191 12.2751 8.93691C12.1334 8.84525 11.9668 8.71191 11.8084 8.57858C11.7918 8.57025 11.7334 8.52025 11.6668 8.45358C11.3918 8.22025 11.0834 7.92025 10.8084 7.58691C10.7834 7.57025 10.7418 7.51191 10.6834 7.43691C10.6001 7.33691 10.4584 7.17025 10.3334 6.97858C10.2334 6.85358 10.1168 6.67025 10.0084 6.48691C9.8751 6.26191 9.75844 6.03691 9.64177 5.80358C9.4888 5.4758 9.05859 5.37842 8.80282 5.6342L4.11677 10.3202C4.00844 10.4286 3.90844 10.6369 3.88344 10.7786L3.43344 13.9702C3.3501 14.5369 3.50844 15.0702 3.85844 15.4286C4.15844 15.7202 4.5751 15.8786 5.0251 15.8786C5.1251 15.8786 5.2251 15.8702 5.3251 15.8536L8.5251 15.4036C8.6751 15.3786 8.88344 15.2786 8.98344 15.1702L13.6772 10.4765C13.9279 10.2258 13.8337 9.79453 13.5084 9.65358Z" fill="#652669" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderRouteInfo
