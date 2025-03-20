"use client";
import React from 'react'
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
 

const BackLink = () => {
    const { data:hotelData } = useAppSelector((state) => state.hotelDetail);
   const{name, address,city}=hotelData
   const router=useRouter()
  return (
    <div className='back-toolbar'>
    <div className='d-flex align-items-center'>
      <div className='btn btn-back' onClick={()=>router.back()}>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.57 5.97461L3.5 12.0446L9.57 18.1146" stroke="#652669" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.4999 12.0449H3.66992" stroke="#652669" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="toolbar-title d-none d-md-block">
        <h2 className="heading02 m-0">{name}</h2>
        <p className='m-0'>{address}, {city}</p>
      </div>
      <div className='ms-auto'>
        <div className='d-flex social-auth'>
          <ul className='d-flex align-items-center list-unstyled m-0'>
            <li>
              <Link href="">
                <i className="bi bi-share"></i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="bi bi-heart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BackLink
