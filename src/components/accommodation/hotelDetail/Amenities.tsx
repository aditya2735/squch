"use client";
import { Amenity } from "@/store/features/accommodation/types/hotelTypes";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

 
const Amenities = () => {
 const { data:hotelData } = useAppSelector((state) => state.hotelDetail);
const {amenitiesUsedArray:amenities}=hotelData
    return (
        <div className='sec-amenities'>
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">Amenities</h2>
                </div>
            </div>
            <ul className="amenities-list list-unstyled">
                {amenities?.length>0 &&
                amenities.filter((item:Amenity) => item.status === "Active").map((item)=>(
                    <li key={item.id}>
                    <div className="btn" style={{ cursor: 'default' }}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4853 11.6803V2.51367M10.4853 11.6803C9.10359 11.6803 7.98276 12.8762 7.98276 13.8678C7.98276 15.3262 9.10359 17.5137 10.4853 17.5137C11.8669 17.5137 12.9878 15.3262 12.9878 13.8678C12.9878 12.8762 11.8669 11.6803 10.4853 11.6803ZM4.64859 8.37034V17.5137M3.57109 2.62201L2.91943 2.68617C2.80668 2.6973 2.69739 2.73131 2.59823 2.78611C2.49907 2.84091 2.41212 2.91535 2.34271 3.00489C2.27329 3.09443 2.22286 3.19718 2.1945 3.30687C2.16614 3.41656 2.16044 3.53087 2.17776 3.64284L2.73526 7.2395C2.82943 7.84867 3.35443 8.35617 3.97193 8.35617H5.32443C5.94109 8.35617 6.46609 7.84867 6.56109 7.2395L7.11943 3.64284C7.13674 3.53087 7.13105 3.41656 7.10269 3.30687C7.07432 3.19718 7.0239 3.09443 6.95448 3.00489C6.88506 2.91535 6.79812 2.84091 6.69896 2.78611C6.5998 2.73131 6.49051 2.6973 6.37776 2.68617L5.72776 2.62117C5.01066 2.54944 4.28819 2.54944 3.57109 2.62117M15.4961 11.5287V2.53534C16.4619 2.80201 18.0678 3.80784 18.3336 6.28701L18.8111 10.0487C18.8944 10.7095 18.7269 11.3687 18.0694 11.482C17.5194 11.5762 16.6853 11.607 15.4961 11.5287ZM15.4961 11.5287V17.5137" stroke="#3D3D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item.name}
                    </div>
                </li>
                ))
                }
             
            </ul>
        </div>
    )
}

export default Amenities
