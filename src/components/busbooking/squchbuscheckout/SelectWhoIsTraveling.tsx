"use client";
import Image from "next/image";
import React from 'react'
import Link from 'next/link';

import passenger1 from "../../../../public/images/passenger-img-1.png";
import passenger2 from "../../../../public/images/passenger-img-2.png";


const SelectWhoIsTraveling = () => {
    return (
        <div className='card card-traveling position-relative mb-40'>
            <div className='wedge-white'>Select Who is Traveling?</div>
            <div className='d-md-flex'>
                <div className='flex-grow-1'>
                    <div className='add-passenger-list'>
                        <div className='add-passenger-list-item'>
                            <div className='d-flex align-items-center'>
                                <div className='image-passenger'>
                                    <Image src={passenger1} alt="" />
                                </div>
                                <div className='flex-grow-1'>
                                    <p>John Doe (You)</p>
                                    <span className='d-block'> Male, 30 Yrs</span>
                                </div>
                                <div className="ms-auto">
                                    <label className="radio-round">
                                        <input type="radio" name="radio" />
                                        <span className="check-mark-radio"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='add-passenger-list'>
                        <div className='add-passenger-list-item'>
                            <div className='d-flex align-items-center'>
                                <div className='image-passenger'>
                                    <Image src={passenger2} alt="" />
                                </div>
                                <div className='flex-grow-1'>
                                    <p>Mufasa</p>
                                    <span className='d-block'> Male, 23 Yrs</span>
                                </div>
                                <div className="ms-auto">
                                    <label className="radio-round">
                                        <input type="radio" name="radio" />
                                        <span className="check-mark-radio"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ms-auto align-self-end'>
                    <div className="sec-add-passenger">
                        <Link href="" className="btn btn-primary btn-purple">
                            <span className="icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99992 10.6253C7.35825 10.6253 5.20825 8.47533 5.20825 5.83366C5.20825 3.19199 7.35825 1.04199 9.99992 1.04199C12.6416 1.04199 14.7916 3.19199 14.7916 5.83366C14.7916 8.47533 12.6416 10.6253 9.99992 10.6253ZM9.99992 2.29199C8.04992 2.29199 6.45825 3.88366 6.45825 5.83366C6.45825 7.78366 8.04992 9.37533 9.99992 9.37533C11.9499 9.37533 13.5416 7.78366 13.5416 5.83366C13.5416 3.88366 11.9499 2.29199 9.99992 2.29199Z" fill="#652669"/>
<path d="M13.1833 18.9588C12.8666 18.9588 12.5666 18.8421 12.35 18.6254C12.0916 18.3671 11.975 17.9921 12.0333 17.6005L12.1916 16.4755C12.2333 16.1838 12.4083 15.8421 12.6166 15.6255L15.5666 12.6755C16.75 11.4922 17.7916 12.1672 18.3 12.6755C18.7333 13.1088 18.9583 13.5754 18.9583 14.0421C18.9583 14.5171 18.7416 14.9588 18.3 15.4005L15.3499 18.3505C15.1416 18.5588 14.7916 18.7338 14.5 18.7755L13.375 18.9338C13.3083 18.9504 13.25 18.9588 13.1833 18.9588ZM16.925 13.2671C16.775 13.2671 16.6416 13.3672 16.45 13.5588L13.5 16.5088C13.475 16.5338 13.4333 16.6171 13.4333 16.6505L13.2833 17.6921L14.325 17.5421C14.3583 17.5338 14.4416 17.4922 14.4666 17.4672L17.4166 14.5171C17.55 14.3838 17.7083 14.1921 17.7083 14.0421C17.7083 13.9171 17.6083 13.7422 17.4166 13.5588C17.2166 13.3588 17.0666 13.2671 16.925 13.2671Z" fill="#652669"/>
<path d="M17.4333 16.0168C17.375 16.0168 17.3167 16.0085 17.2667 15.9918C16.1667 15.6835 15.2917 14.8085 14.9833 13.7085C14.8917 13.3751 15.0833 13.0335 15.4167 12.9418C15.75 12.8502 16.0917 13.0418 16.1833 13.3751C16.375 14.0585 16.9167 14.6001 17.6 14.7918C17.9333 14.8835 18.125 15.2335 18.0334 15.5585C17.9584 15.8335 17.7083 16.0168 17.4333 16.0168Z" fill="#652669"/>
<path d="M2.8418 18.9583C2.50013 18.9583 2.2168 18.675 2.2168 18.3333C2.2168 14.775 5.70849 11.875 10.0002 11.875C10.9085 11.875 11.8085 12.0084 12.6501 12.2584C12.9835 12.3584 13.1668 12.7083 13.0668 13.0333C12.9668 13.3667 12.6168 13.55 12.2918 13.45C11.5585 13.2333 10.7918 13.1167 10.0002 13.1167C6.40015 13.1167 3.4668 15.45 3.4668 18.325C3.4668 18.675 3.18346 18.9583 2.8418 18.9583Z" fill="#652669"/>
</svg>

                            </span>
                                Add New Passenger
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectWhoIsTraveling
