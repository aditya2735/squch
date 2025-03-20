"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import LogoIcons from "../../../../public/images/afrikonekta.png";
import LogoIcons2 from "../../../../public/images/eurLines.png";
import ModalBusBookingFilter from "./ModalBusBookingFilter";

const PastBooking = () => {
  const [showBusBookingFilter, setBusBookingFilter] = useState(false);
  return (
    <div className='up-next-sidebar-trip-sec'>
        <h2>Past Bookings</h2>
        <div className='btn-box'>
            <ul className='d-flex align-items-center gap-2'>
                <li>
                    <Link href="" onClick={() => setBusBookingFilter(true)} className="btn btn-border d-flex align-items-center justify-content-center gap-2">
                        <span className="icons">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.775 4.16676C9.60283 3.67881 9.28355 3.25628 8.86117 2.95741C8.43878 2.65854 7.93409 2.49805 7.41667 2.49805C6.89924 2.49805 6.39455 2.65854 5.97217 2.95741C5.54978 3.25628 5.2305 3.67881 5.05833 4.16676H4.08333C3.86232 4.16676 3.65036 4.25455 3.49408 4.41083C3.3378 4.56711 3.25 4.77908 3.25 5.00009C3.25 5.2211 3.3378 5.43306 3.49408 5.58934C3.65036 5.74562 3.86232 5.83342 4.08333 5.83342H5.05833C5.2305 6.32137 5.54978 6.74389 5.97217 7.04277C6.39455 7.34164 6.89924 7.50213 7.41667 7.50213C7.93409 7.50213 8.43878 7.34164 8.86117 7.04277C9.28355 6.74389 9.60283 6.32137 9.775 5.83342H17.4167C17.6377 5.83342 17.8496 5.74562 18.0059 5.58934C18.1622 5.43306 18.25 5.2211 18.25 5.00009C18.25 4.77908 18.1622 4.56711 18.0059 4.41083C17.8496 4.25455 17.6377 4.16676 17.4167 4.16676H9.775ZM4.08333 9.16676H11.725C11.8972 8.67881 12.2164 8.25628 12.6388 7.95741C13.0612 7.65854 13.5659 7.49805 14.0833 7.49805C14.6008 7.49805 15.1054 7.65854 15.5278 7.95741C15.9502 8.25628 16.2695 8.67881 16.4417 9.16676H17.4167C17.6377 9.16676 17.8496 9.25455 18.0059 9.41083C18.1622 9.56711 18.25 9.77908 18.25 10.0001C18.25 10.2211 18.1622 10.4331 18.0059 10.5893C17.8496 10.7456 17.6377 10.8334 17.4167 10.8334H16.4417C16.2695 11.3214 15.9502 11.7439 15.5278 12.0428C15.1054 12.3416 14.6008 12.5021 14.0833 12.5021C13.5659 12.5021 13.0612 12.3416 12.6388 12.0428C12.2164 11.7439 11.8972 11.3214 11.725 10.8334H4.08333C3.86232 10.8334 3.65036 10.7456 3.49408 10.5893C3.3378 10.4331 3.25 10.2211 3.25 10.0001C3.25 9.77908 3.3378 9.56711 3.49408 9.41083C3.65036 9.25455 3.86232 9.16676 4.08333 9.16676ZM5.05833 14.1668H4.08333C3.86232 14.1668 3.65036 14.2546 3.49408 14.4108C3.3378 14.5671 3.25 14.7791 3.25 15.0001C3.25 15.2211 3.3378 15.4331 3.49408 15.5893C3.65036 15.7456 3.86232 15.8334 4.08333 15.8334H5.05833C5.2305 16.3214 5.54978 16.7439 5.97217 17.0428C6.39455 17.3416 6.89924 17.5021 7.41667 17.5021C7.93409 17.5021 8.43878 17.3416 8.86117 17.0428C9.28355 16.7439 9.60283 16.3214 9.775 15.8334H17.4167C17.6377 15.8334 17.8496 15.7456 18.0059 15.5893C18.1622 15.4331 18.25 15.2211 18.25 15.0001C18.25 14.7791 18.1622 14.5671 18.0059 14.4108C17.8496 14.2546 17.6377 14.1668 17.4167 14.1668H9.775C9.60283 13.6788 9.28355 13.2563 8.86117 12.9574C8.43878 12.6585 7.93409 12.498 7.41667 12.498C6.89924 12.498 6.39455 12.6585 5.97217 12.9574C5.54978 13.2563 5.2305 13.6788 5.05833 14.1668Z" fill="#410E44"/></svg>
                        </span>
                        <span className="text">Filters</span>
                    </Link>
                </li>
                <li className="d-md-block d-none">
                    <Link href="" className="btn btn-border d-flex align-items-center  justify-content-center gap-2">
                        <span className="icons">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.58334 15C3.34723 15 3.14945 14.92 2.99 14.76C2.83056 14.6 2.75056 14.4022 2.75 14.1667C2.74945 13.9311 2.82945 13.7333 2.99 13.5733C3.15056 13.4133 3.34834 13.3333 3.58334 13.3333H6.91667C7.15278 13.3333 7.35084 13.4133 7.51084 13.5733C7.67084 13.7333 7.75056 13.9311 7.75 14.1667C7.74945 14.4022 7.66945 14.6003 7.51 14.7608C7.35056 14.9214 7.15278 15.0011 6.91667 15H3.58334ZM3.58334 10.8333C3.34723 10.8333 3.14945 10.7533 2.99 10.5933C2.83056 10.4333 2.75056 10.2356 2.75 10C2.74945 9.76444 2.82945 9.56667 2.99 9.40667C3.15056 9.24667 3.34834 9.16667 3.58334 9.16667H11.9167C12.1528 9.16667 12.3508 9.24667 12.5108 9.40667C12.6708 9.56667 12.7506 9.76444 12.75 10C12.7494 10.2356 12.6694 10.4336 12.51 10.5942C12.3506 10.7547 12.1528 10.8344 11.9167 10.8333H3.58334ZM3.58334 6.66667C3.34723 6.66667 3.14945 6.58667 2.99 6.42667C2.83056 6.26667 2.75056 6.06889 2.75 5.83333C2.74945 5.59778 2.82945 5.4 2.99 5.24C3.15056 5.08 3.34834 5 3.58334 5H16.9167C17.1528 5 17.3508 5.08 17.5108 5.24C17.6708 5.4 17.7506 5.59778 17.75 5.83333C17.7494 6.06889 17.6694 6.26694 17.51 6.4275C17.3506 6.58806 17.1528 6.66778 16.9167 6.66667H3.58334Z" fill="#410E44"/></svg>
                        </span>
                        <span className="text">Sort</span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="filter-booking-list">
            
          <Link href="" className="card-trips mb-3">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Kumasi</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Tamale</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons} alt="" />
            </div>
          </Link>

          
          <Link href="" className="card-trips mb-3">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
          </Link>

          
          <Link href="" className="card-trips mb-3">
            <h3 className="trip-link-purple d-flex align-items-center">
              <span>Albany, NY</span>
              <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></span>
              <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
              <Image src={LogoIcons2} alt="" />
            </div>
        </Link>

          
        <Link href="" className="card-trips mb-3">
            <h3 className="trip-link-purple d-flex align-items-center">
                <span>Albany, NY</span>
                <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg></span>
                <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
                <Image src={LogoIcons2} alt="" />
            </div>
        </Link>

          
        <Link href="" className="card-trips mb-3">
            <h3 className="trip-link-purple d-flex align-items-center">
                <span>Albany, NY</span>
                <span><svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.4194 6.47314L34.9463 13L28.4194 19.5269" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16113 13L34.8386 13" stroke="#410E44" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg></span>
                <span>Boston, NY</span>
            </h3>
            <p>23 December, 2024</p>
            <div className="cardlogiImg">
                <Image src={LogoIcons2} alt="" />
            </div>
        </Link>

        
    
        </div>
        <ModalBusBookingFilter show={showBusBookingFilter} handleClose={() => setBusBookingFilter(false)}/>
    </div>
  )
}

export default PastBooking