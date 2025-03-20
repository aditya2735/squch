"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BookingTop from "../../../../../public/images/detail-imags-1.jpg";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/formatData";
import getDateNGuest from '../../DateNGuest';


const ActiveTab = () => {
     const router = useRouter();
      const { active} = useAppSelector((state) => state.myBookings.data);
      const handleHotelNav = (hotelId: number) => {
        router.push(`details/${hotelId}`);
      };
  return (
    <div className="row">
    {active?.length > 0 &&
      active.map((item) => {
        const {
          name,
          address,
          city,
          state,
          country,
          latitude,
          longitude,
        } = item.hotel;
       
        return (
          <div key={item.id} className="col-lg-4 col-md-6 mb-3">
            <div className="mybooking-tab bg-white rounded-radius">
              <div
                className="my-booking-top-details d-flex align-items-center gap-2"
                onClick={() => handleHotelNav(item.hotelId)}
                style={{ cursor: "pointer" }}
              >
                <div className="img-left-box">
                  <Image src={BookingTop} alt=""></Image>
                </div>
                <div className="text-right-box">
                  <h2>{city}</h2>
                  <h3>
                  {getDateNGuest(item.startDate, item.endDate, item.adultsCount, item.childrenCount, item.specialCareCount)}
                  </h3>
                  <p>
                    {address} {city}, {state}, {country}
                  </p>
                </div>
              </div>
              <div className="text-room-category">
                <h4>Classic Rooms x 2</h4>
              </div>
              <div className="list-contact grid-view-contact">
                <ul className="d-flex align-items-center gap-2 justify-content-center">
                  <li>
                    <Link
                      href=""
                      className="list-contect-box d-flex align-items-center gap-2"
                    >
                      <span className="list-icons">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.1879 17.919C21.1879 18.2556 21.1131 18.6016 20.9541 18.9382C20.7952 19.2749 20.5895 19.5928 20.3183 19.892C19.8601 20.3969 19.3552 20.7616 18.7848 20.9954C18.2237 21.2292 17.6159 21.3507 16.9614 21.3507C16.0076 21.3507 14.9884 21.1263 13.9131 20.6681C12.8378 20.2099 11.7624 19.5928 10.6965 18.8167C9.62114 18.0312 8.60192 17.1616 7.62945 16.1985C6.66634 15.226 5.79673 14.2068 5.02062 13.1408C4.25387 12.0749 3.63673 11.0089 3.1879 9.95227C2.73906 8.8863 2.51465 7.86708 2.51465 6.89461C2.51465 6.25876 2.62686 5.65097 2.85127 5.08993C3.07569 4.51954 3.43101 3.99591 3.9266 3.52838C4.52504 2.93928 5.17958 2.64941 5.87153 2.64941C6.13335 2.64941 6.39517 2.70552 6.62893 2.81773C6.87205 2.92993 7.08712 3.09825 7.25543 3.34136L9.42478 6.39902C9.59309 6.63279 9.71465 6.84786 9.7988 7.05357C9.88296 7.24993 9.92971 7.4463 9.92971 7.62396C9.92971 7.84838 9.86426 8.07279 9.73335 8.28786C9.61179 8.50292 9.43413 8.72734 9.20971 8.95175L8.49906 9.69045C8.39621 9.79331 8.34945 9.91487 8.34945 10.0645C8.34945 10.1393 8.3588 10.2047 8.37751 10.2795C8.40556 10.3543 8.43361 10.4105 8.45231 10.4666C8.62062 10.7751 8.91049 11.1772 9.32192 11.6634C9.7427 12.1497 10.1915 12.6453 10.6778 13.1408C11.1827 13.6364 11.6689 14.0946 12.1645 14.5154C12.6508 14.9268 13.0528 15.2073 13.3708 15.3756C13.4175 15.3943 13.4736 15.4224 13.5391 15.4505C13.6139 15.4785 13.6887 15.4879 13.7728 15.4879C13.9318 15.4879 14.0534 15.4318 14.1562 15.3289L14.8669 14.6276C15.1006 14.3938 15.325 14.2162 15.5401 14.104C15.7552 13.9731 15.9702 13.9076 16.204 13.9076C16.3817 13.9076 16.5687 13.945 16.7744 14.0292C16.9801 14.1133 17.1952 14.2349 17.4289 14.3938L20.524 16.5912C20.7671 16.7595 20.9354 16.9559 21.0383 17.1897C21.1318 17.4234 21.1879 17.6572 21.1879 17.919Z"
                            stroke="#262626"
                            strokeWidth="1.4026"
                            strokeMiterlimit="10"
                          />
                        </svg>
                      </span>
                      <span className="list-text">Call hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="list-contect-box d-flex align-items-center gap-2"
                    >
                      <span className="list-icons">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.625 22.3194C8.345 22.3194 8.05498 22.2494 7.79498 22.1094C7.22498 21.8094 6.875 21.2094 6.875 20.5694V19.1495C3.855 18.8395 1.875 16.6194 1.875 13.4394V7.43945C1.875 3.99945 4.185 1.68945 7.625 1.68945H17.625C21.065 1.68945 23.375 3.99945 23.375 7.43945V13.4394C23.375 16.8794 21.065 19.1894 17.625 19.1894H13.855L9.59497 22.0295C9.30497 22.2195 8.965 22.3194 8.625 22.3194ZM7.625 3.17944C5.045 3.17944 3.375 4.84944 3.375 7.42944V13.4295C3.375 16.0095 5.045 17.6795 7.625 17.6795C8.035 17.6795 8.375 18.0195 8.375 18.4295V20.5595C8.375 20.6895 8.455 20.7495 8.505 20.7795C8.55501 20.8095 8.65501 20.8395 8.76501 20.7695L13.215 17.8095C13.335 17.7295 13.485 17.6795 13.635 17.6795H17.635C20.215 17.6795 21.885 16.0095 21.885 13.4295V7.42944C21.885 4.84944 20.215 3.17944 17.635 3.17944H7.625Z"
                            fill="#262626"
                          />
                          <path
                            d="M12.6248 12.1104C12.2148 12.1104 11.8748 11.7704 11.8748 11.3604V11.1504C11.8748 9.99039 12.7248 9.42038 13.0448 9.20038C13.4148 8.95038 13.5348 8.78039 13.5348 8.52039C13.5348 8.02039 13.1248 7.61035 12.6248 7.61035C12.1248 7.61035 11.7148 8.02039 11.7148 8.52039C11.7148 8.93039 11.3748 9.27039 10.9648 9.27039C10.5548 9.27039 10.2148 8.93039 10.2148 8.52039C10.2148 7.19039 11.2948 6.11035 12.6248 6.11035C13.9548 6.11035 15.0348 7.19039 15.0348 8.52039C15.0348 9.66039 14.1948 10.2304 13.8848 10.4404C13.4948 10.7004 13.3748 10.8704 13.3748 11.1504V11.3604C13.3748 11.7804 13.0348 12.1104 12.6248 12.1104Z"
                            fill="#262626"
                          />
                          <path
                            d="M12.625 14.5996C12.205 14.5996 11.875 14.2596 11.875 13.8496C11.875 13.4396 12.215 13.0996 12.625 13.0996C13.035 13.0996 13.375 13.4396 13.375 13.8496C13.375 14.2596 13.045 14.5996 12.625 14.5996Z"
                            fill="#262626"
                          />
                        </svg>
                      </span>
                      <span className="list-text">Need help</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pay-now-get">
                <div className="right-upcoming-box">
                  <ul className="total-pay-sec mt-2">
                    <li className="d-flex align-items-center top-total-pay justify-content-between">
                      <span className="total-text">Total amount</span>
                      <div className="d-flex align-items-center gap-2">
                        <span className="text-total-small">₵12.00</span>
                        <span className="text-total-big">₵8.00</span>
                      </div>
                    </li>
                    <li className="d-flex align-items-center top-pay-using justify-content-between">
                      <span className="pay-using-text">Pay using</span>
                      <div className="d-flex align-items-center gap-1">
                        <span className="cardIcons">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6754 4.54004H4.11539C3.56109 4.54004 3.02949 4.76023 2.63754 5.15219C2.24559 5.54414 2.02539 6.07574 2.02539 6.63004V13.38C2.02802 13.9335 2.24906 14.4636 2.64044 14.855C3.03183 15.2464 3.5619 15.4674 4.11539 15.47H16.6754C17.2289 15.4674 17.759 15.2464 18.1503 14.855C18.5417 14.4636 18.7628 13.9335 18.7654 13.38V6.63004C18.7654 6.07574 18.5452 5.54414 18.1532 5.15219C17.7613 4.76023 17.2297 4.54004 16.6754 4.54004ZM4.11539 5.38004H16.6754C17.0069 5.38004 17.3249 5.51174 17.5593 5.74616C17.7937 5.98058 17.9254 6.29852 17.9254 6.63004V11.51H2.86539V6.63004C2.86539 6.29852 2.99709 5.98058 3.23151 5.74616C3.46593 5.51174 3.78387 5.38004 4.11539 5.38004ZM16.6754 14.63H4.11539C3.78387 14.63 3.46593 14.4983 3.23151 14.2639C2.99709 14.0295 2.86539 13.7116 2.86539 13.38H17.9254C17.9254 13.7116 17.7937 14.0295 17.5593 14.2639C17.3249 14.4983 17.0069 14.63 16.6754 14.63Z"
                              fill="#454545"
                            />
                            <path
                              d="M5.24422 9.08023H15.5442C15.6556 9.08023 15.7624 9.03598 15.8412 8.95722C15.92 8.87845 15.9642 8.77163 15.9642 8.66023C15.9642 8.54884 15.92 8.44202 15.8412 8.36325C15.7624 8.28448 15.6556 8.24023 15.5442 8.24023H5.24422C5.13283 8.24023 5.026 8.28448 4.94723 8.36325C4.86847 8.44202 4.82422 8.54884 4.82422 8.66023C4.82422 8.77163 4.86847 8.87845 4.94723 8.95722C5.026 9.03598 5.13283 9.08023 5.24422 9.08023Z"
                              fill="#454545"
                            />
                          </svg>
                        </span>
                        <span className="card-pay-text">Card pay</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pay-btn-box">
                  <ul>
                    <li>
                      <Link href="" className="btn btn-light-pink mb-0">
                        Request Early Checkout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
  )
}

export default ActiveTab