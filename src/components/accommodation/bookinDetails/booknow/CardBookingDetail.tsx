"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ImagesDetail1 from "../../../../../public/images/detail-imags-1.jpg";
import { useAppSelector } from "@/store/hooks";
import { formatDate, formatTime } from "@/utils/formatData";

const CardBookingDetail = () => {
  const { data: hotelData , selectedRoom} = useAppSelector((state) => state.hotelDetail);
 const {guests, checkIn, checkOut}=useAppSelector((state)=>state.housePolicy)
  const { name, address, city, checkInTime, checkOutTime, primaryImages } = hotelData;
  return (
    <div className="sec-booking-detail">
      <div className="row">
        <div className="col-md-6">
          <div className="detailImg">
            <Image src={primaryImages[0]?.url} alt="" height={266} width={276} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-detail-info">
            <div className="top-title">
              <h2 className="top-head-ttl">{name}</h2>
              <p>{address}</p>
            </div>

            <div className="card-call-section">
              <ul className="d-flex m-0 justify-content-between list-unstyled">
                <li>
                  <Link href="" className="btn">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        width="20"
                        height="20"
                        rx="10"
                        stroke="#F6F6F6"
                      />
                      <path
                        d="M18.2612 14.9327C18.2612 15.2132 18.1989 15.5015 18.0664 15.782C17.934 16.0626 17.7625 16.3275 17.5366 16.5768C17.1547 16.9976 16.734 17.3015 16.2586 17.4963C15.7911 17.6911 15.2846 17.7924 14.7392 17.7924C13.9444 17.7924 13.095 17.6054 12.1989 17.2236C11.3028 16.8418 10.4067 16.3275 9.51838 15.6807C8.62227 15.0262 7.77292 14.3015 6.96253 13.4989C6.15994 12.6885 5.43526 11.8392 4.78851 10.9509C4.14955 10.0626 3.63526 9.17424 3.26123 8.29372C2.88721 7.40541 2.7002 6.55606 2.7002 5.74567C2.7002 5.2158 2.7937 4.70931 2.98071 4.24177C3.16773 3.76645 3.46383 3.33009 3.87682 2.94048C4.37552 2.44957 4.92097 2.20801 5.4976 2.20801C5.71578 2.20801 5.93396 2.25476 6.12877 2.34827C6.33136 2.44177 6.51059 2.58203 6.65085 2.78463L8.45864 5.33268C8.5989 5.52749 8.7002 5.70671 8.77033 5.87814C8.84046 6.04177 8.87942 6.20541 8.87942 6.35346C8.87942 6.54048 8.82487 6.72749 8.71578 6.90671C8.61448 7.08593 8.46643 7.27294 8.27942 7.45996L7.68721 8.07554C7.60149 8.16126 7.56253 8.26255 7.56253 8.38723C7.56253 8.44957 7.57033 8.50411 7.58591 8.56645C7.60929 8.62879 7.63266 8.67554 7.64825 8.72229C7.78851 8.97944 8.03007 9.3145 8.37292 9.7197C8.72357 10.1249 9.0976 10.5379 9.50279 10.9509C9.92357 11.3639 10.3288 11.7457 10.7418 12.0963C11.1469 12.4392 11.482 12.6729 11.7469 12.8132C11.7859 12.8288 11.8327 12.8522 11.8872 12.8755C11.9495 12.8989 12.0119 12.9067 12.082 12.9067C12.2145 12.9067 12.3158 12.86 12.4015 12.7742L12.9937 12.1898C13.1885 11.995 13.3755 11.847 13.5547 11.7535C13.734 11.6444 13.9132 11.5898 14.108 11.5898C14.256 11.5898 14.4119 11.621 14.5833 11.6911C14.7547 11.7613 14.934 11.8626 15.1288 11.995L17.708 13.8262C17.9106 13.9665 18.0508 14.1301 18.1366 14.3249C18.2145 14.5197 18.2612 14.7145 18.2612 14.9327Z"
                        stroke="#262626"
                        strokeWidth="1.4026"
                        strokeMiterlimit="10"
                      />
                    </svg>
                    Call hotel
                  </Link>
                </li>
                <li>
                  <Link href="" className="btn">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.16699 18.5998C6.93366 18.5998 6.69198 18.5415 6.47531 18.4249C6.00031 18.1749 5.70866 17.6748 5.70866 17.1415V15.9582C3.19199 15.6999 1.54199 13.8498 1.54199 11.1998V6.19987C1.54199 3.3332 3.46699 1.4082 6.33366 1.4082H14.667C17.5337 1.4082 19.4587 3.3332 19.4587 6.19987V11.1998C19.4587 14.0665 17.5337 15.9915 14.667 15.9915H11.5253L7.9753 18.3582C7.73363 18.5166 7.45033 18.5998 7.16699 18.5998ZM6.33366 2.64986C4.18366 2.64986 2.79199 4.04153 2.79199 6.19153V11.1916C2.79199 13.3416 4.18366 14.7332 6.33366 14.7332C6.67533 14.7332 6.95866 15.0166 6.95866 15.3582V17.1332C6.95866 17.2416 7.02533 17.2916 7.067 17.3166C7.10866 17.3416 7.192 17.3666 7.28367 17.3082L10.992 14.8416C11.092 14.7749 11.217 14.7332 11.342 14.7332H14.6753C16.8253 14.7332 18.217 13.3416 18.217 11.1916V6.19153C18.217 4.04153 16.8253 2.64986 14.6753 2.64986H6.33366Z"
                        fill="#262626"
                      />
                      <path
                        d="M10.4995 10.0918C10.1579 10.0918 9.87452 9.80846 9.87452 9.4668V9.29183C9.87452 8.32516 10.5828 7.85015 10.8495 7.66682C11.1578 7.45849 11.2578 7.31683 11.2578 7.10016C11.2578 6.68349 10.9162 6.3418 10.4995 6.3418C10.0829 6.3418 9.74121 6.68349 9.74121 7.10016C9.74121 7.44183 9.45788 7.72516 9.11621 7.72516C8.77454 7.72516 8.49121 7.44183 8.49121 7.10016C8.49121 5.99183 9.39119 5.0918 10.4995 5.0918C11.6079 5.0918 12.5078 5.99183 12.5078 7.10016C12.5078 8.05016 11.8079 8.52514 11.5495 8.70014C11.2245 8.91681 11.1245 9.0585 11.1245 9.29183V9.4668C11.1245 9.8168 10.8412 10.0918 10.4995 10.0918Z"
                        fill="#262626"
                      />
                      <path
                        d="M10.5 12.167C10.15 12.167 9.875 11.8837 9.875 11.542C9.875 11.2003 10.1583 10.917 10.5 10.917C10.8417 10.917 11.125 11.2003 11.125 11.542C11.125 11.8837 10.85 12.167 10.5 12.167Z"
                        fill="#262626"
                      />
                    </svg>
                    Need Help
                  </Link>
                </li>
              </ul>
            </div>

            <div className="list-policy-container">
              <div className="list-policy-container-item">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="col-policy">
                    <h4 className="policy-ttl">Check-In</h4>
                    <p className="policy-day">{checkIn && formatDate(checkIn, true)}</p>
                    <p className="policy-time">
                      {formatTime(checkInTime)} onwards
                    </p>
                  </div>
                  <span className="wedge">1N</span>
                  <div className="col-policy">
                    <h4 className="policy-ttl">Check-Out</h4>
                    <p className="policy-day">{checkOut && formatDate(checkOut, true)}</p>
                    <p className="policy-time">
                      Before {formatTime(checkOutTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-room-guest">
              <h4 className="ttl-room">Rooms & Guests</h4>
              <ul className="d-flex align-items-center list-unstyled m-0">
                <li>{selectedRoom?.roomType}</li>
                <li>{guests} Guest{guests !== 1 ? "s" : ""}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBookingDetail;
