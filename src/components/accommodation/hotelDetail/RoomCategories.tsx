"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from "@//store/hooks";
import { setSelectedRoom, setSelectedRooms } from "@//store/features/accommodation/slices/hotelDetailSlice";

const RoomCategories = () => {
 const { rooms,selectedRooms,selectedRoom} = useAppSelector((state) => state.hotelDetail); 
 const dispatch= useAppDispatch()
    const swiperRows=(item:any)=>{
      const{images,id,roomType,pricePerNight,currency}=item
      
      return( 
          <SwiperSlide key={id} onClick={() => dispatch(setSelectedRoom(item))}  style={{ cursor: 'pointer' }}>
          <div className="card card-room-categories">
            <div className="img-categories">
              <Image src={images[0]} height={172.01} width={280} alt="" />
            </div>
            {selectedRoom?.id===item.id 
            && (
            <div className="badge-Selected">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.87668 0.0686683C8.98302 0.0047033 9.11 -0.0155839 9.23097 0.0120645C9.35194 0.0397129 9.4575 0.113147 9.52549 0.216955L10.0006 0.941591C10.0625 1.03626 10.089 1.14975 10.0754 1.26206C10.0618 1.37436 10.009 1.47824 9.9262 1.55537L9.92476 1.55729L9.91805 1.56353L9.89069 1.58896L9.78272 1.69214C9.18528 2.27169 8.60593 2.8696 8.04551 3.48502C6.99119 4.64443 5.73915 6.16185 4.89646 7.63416C4.66131 8.04495 4.08688 8.13325 3.74616 7.77861L0.634064 4.5451C0.589465 4.49874 0.554641 4.44389 0.531663 4.38381C0.508684 4.32373 0.498019 4.25964 0.500302 4.19535C0.502586 4.13106 0.51777 4.06789 0.544953 4.00959C0.572136 3.95129 0.610763 3.89905 0.658538 3.85597L1.59913 3.00752C1.68178 2.933 1.78777 2.88953 1.89895 2.88454C2.01013 2.87955 2.11959 2.91335 2.20859 2.98017L3.79655 4.17078C6.27711 1.72477 7.68367 0.786106 8.87668 0.0686683Z" fill="white" />
              </svg>
              Selected
            </div>
            )}
            <div className="card-room-lower-content">
              <div className="d-flex justify-content-between">
                <div className="room-type">
                  <h3 className="room-name">{roomType}</h3>
                  <p>100sqf.</p>
                </div>
                <div className="ms-auto">
                  <div className="d-flex align-items-center">
                    <span className="old-price">₵150</span>
                    <span className="current-price">{currency} {pricePerNight} </span>
                  </div>
                  <p className="m-0 text-included">Included of all taxes</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> 
      )
    }

  //   const rooms=[
  //     {
  //         "id": 1,
  //         "hotelId": 1,
  //         "roomType": "Deluxe Room",
  //         "bedType": "King",
  //         "maxOccupancy": 2,
  //         "pricePerNight": "150.00",
  //         "priceInPerOccupancy": "75.00",
  //         "currency": "USD",
  //         "availability": true,
  //         "isRefundable": true,
  //         "createdAt": "2025-02-07T20:07:11.000Z",
  //         "updatedAt": "2025-02-14T17:00:55.000Z",
  //         "deletedAt": null,
  //         "bedCounts": 1,
  //         "bedroomCounts": 1,
  //         "bathroomCounts": 1,
  //         "images": [
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
  //         ]
  //     },
  //     {
  //         "id": 2,
  //         "hotelId": 1,
  //         "roomType": "Standard Room",
  //         "bedType": "Queen",
  //         "maxOccupancy": 2,
  //         "pricePerNight": "100.00",
  //         "priceInPerOccupancy": "50.00",
  //         "currency": "USD",
  //         "availability": true,
  //         "isRefundable": false,
  //         "createdAt": "2025-02-07T20:07:11.000Z",
  //         "updatedAt": "2025-02-14T17:00:55.000Z",
  //         "deletedAt": null,
  //         "bedCounts": 1,
  //         "bedroomCounts": 1,
  //         "bathroomCounts": 1,
  //         "images": [
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
  //         ]
  //     },
  //     {
  //         "id": 3,
  //         "hotelId": 1,
  //         "roomType": "Suite",
  //         "bedType": "King",
  //         "maxOccupancy": 4,
  //         "pricePerNight": "250.00",
  //         "priceInPerOccupancy": "62.50",
  //         "currency": "USD",
  //         "availability": true,
  //         "isRefundable": true,
  //         "createdAt": "2025-02-07T20:07:11.000Z",
  //         "updatedAt": "2025-02-14T16:59:02.000Z",
  //         "deletedAt": null,
  //         "bedCounts": 1,
  //         "bedroomCounts": 1,
  //         "bathroomCounts": 1,
  //         "images": [
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
  //             "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
  //         ]
  //     }
  // ]
  return (
    <div className="sec-room-categories">
      <div className="block-header">
        <div className="d-flex align-item-center">
          <h2 className="heading02 m-0">Heres your room categories</h2>
          <div className='ms-auto'>
            <Link href="" className='link'>
              See All
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.59857 1.34873C1.60045 1.80895 1.97505 2.18053 2.43527 2.17869L8.67295 2.15341L0.699952 10.1913C0.375827 10.518 0.377965 11.0457 0.704726 11.3698C1.03149 11.6939 1.5591 11.6918 1.88323 11.365L9.85623 3.32714L9.88151 9.56482C9.88337 10.025 10.258 10.3966 10.7182 10.3948C11.1784 10.3929 11.55 10.0183 11.5481 9.55807L11.5147 1.30855C11.5138 1.08756 11.4252 0.875932 11.2683 0.720295C11.1114 0.564659 10.899 0.477696 10.678 0.478609L2.42851 0.512037C1.96829 0.51389 1.59669 0.888515 1.59857 1.34873Z" fill="#652669" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Swiper
      key={"RoomCategory"}
        slidesPerView={3}
        spaceBetween={14}
        // modules={[Pagination]}
        pagination={{
          clickable: true,
          // dynamicBullets: true,
        }}
        breakpoints={{
          300: { slidesPerView: 1.2, },
          767: { slidesPerView: 2.1 },
          1024: { slidesPerView: 2.2 },
        }}
        className="slider-top-picks"
      >
        {rooms?.length > 0 &&
         rooms.map((hotel: any) => {
           return swiperRows(hotel);
           })}

        {/* <SwiperSlide>
          <Link href="" className="card card-room-categories">
            <div className="img-categories">
              <Image src={ImagesRoomCate1}  alt="" />
            </div>
            <div className="badge-Selected">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.87668 0.0686683C8.98302 0.0047033 9.11 -0.0155839 9.23097 0.0120645C9.35194 0.0397129 9.4575 0.113147 9.52549 0.216955L10.0006 0.941591C10.0625 1.03626 10.089 1.14975 10.0754 1.26206C10.0618 1.37436 10.009 1.47824 9.9262 1.55537L9.92476 1.55729L9.91805 1.56353L9.89069 1.58896L9.78272 1.69214C9.18528 2.27169 8.60593 2.8696 8.04551 3.48502C6.99119 4.64443 5.73915 6.16185 4.89646 7.63416C4.66131 8.04495 4.08688 8.13325 3.74616 7.77861L0.634064 4.5451C0.589465 4.49874 0.554641 4.44389 0.531663 4.38381C0.508684 4.32373 0.498019 4.25964 0.500302 4.19535C0.502586 4.13106 0.51777 4.06789 0.544953 4.00959C0.572136 3.95129 0.610763 3.89905 0.658538 3.85597L1.59913 3.00752C1.68178 2.933 1.78777 2.88953 1.89895 2.88454C2.01013 2.87955 2.11959 2.91335 2.20859 2.98017L3.79655 4.17078C6.27711 1.72477 7.68367 0.786106 8.87668 0.0686683Z" fill="white" />
              </svg>
              Selected
            </div>
            <div className="card-room-lower-content">
              <div className="d-flex justify-content-between">
                <div className="room-type">
                  <h3 className="room-name">Classic Room</h3>
                  <p>100sqf.</p>
                </div>
                <div className="ms-auto">
                  <div className="d-flex align-items-center">
                    <span className="old-price">₵150</span>
                    <span className="current-price">₵120 </span>
                  </div>
                  <p className="m-0 text-included">Included of all taxes</p>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide> */}
      
 
      </Swiper>
    </div>
  )
}

export default RoomCategories
