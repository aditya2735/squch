"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/LogoMainPage.png'
import Travel from '../../../public/images/travel.png'
import Food from '../../../public/images/food.png'
import Stay from '../../../public/images/stay.png'
import Grocery from '../../../public/images/Grocery.png'
import Dining from '../../../public/images/Dining.png'




export default function Home() {
  return (
    <div className="main-page-sec">
      <div className="menu-box-main">
        <div className="container">
          <div className="menu-header-top d-flex align-items-center justify-content-between gap-2">
            <div className="logo-box">
              <Link href="" className="logo">
                <Image alt="" src={Logo}></Image>
              </Link>
            </div>
            <div className="menu-right-box">
              <div className="menu-sec d-flex align-items-center gap-2">
                <ul className="menu-box d-flex align-content-center gap-2">
                  <li>
                    <Link href="">Partner with us</Link>
                  </li>
                  <li>
                    <Link href="">Partner with us</Link>
                  </li>
                </ul>
                <ul className="btn-box-menu  d-flex align-items-center gap-2">
                  <li>
                    <Link href="" className="btn btn-white">Get the App</Link>
                  </li>
                  <li>
                    <Link href="" className="btn btn-dark">Get the App</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="banner-main-page-sec">
            <div className="main-page-banner">
              <h1>Your All-in-One App for Food, <span> Travel, and Daily Essentials</span> </h1>
              <ul className="d-flex align-items-center justify-content-center gap-2">
                <li>
                  <Link className="btn-location d-flex align-items-center gap-2 justify-content-center" href="">
                    <span>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 14.6704C9.86988 14.6704 8.12988 12.9404 8.12988 10.8004C8.12988 8.66043 9.86988 6.94043 11.9999 6.94043C14.1299 6.94043 15.8699 8.67043 15.8699 10.8104C15.8699 12.9504 14.1299 14.6704 11.9999 14.6704ZM11.9999 8.44043C10.6999 8.44043 9.62988 9.50043 9.62988 10.8104C9.62988 12.1204 10.6899 13.1804 11.9999 13.1804C13.3099 13.1804 14.3699 12.1204 14.3699 10.8104C14.3699 9.50043 13.2999 8.44043 11.9999 8.44043Z" fill="#52307F" /><path d="M12.0002 23.26C10.5202 23.26 9.03018 22.7 7.87018 21.59C4.92018 18.75 1.66018 14.22 2.89018 8.83C4.00018 3.94 8.27018 1.75 12.0002 1.75C12.0002 1.75 12.0002 1.75 12.0102 1.75C15.7402 1.75 20.0102 3.94 21.1202 8.84C22.3402 14.23 19.0802 18.75 16.1302 21.59C14.9702 22.7 13.4802 23.26 12.0002 23.26ZM12.0002 3.25C9.09018 3.25 5.35018 4.8 4.36018 9.16C3.28018 13.87 6.24018 17.93 8.92018 20.5C10.6502 22.17 13.3602 22.17 15.0902 20.5C17.7602 17.93 20.7202 13.87 19.6602 9.16C18.6602 4.8 14.9102 3.25 12.0002 3.25Z" fill="#52307F" /></svg>
                    </span>
                    <span>
                      Location, City & Street
                    </span>
                    <span>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 10.5L12 15.5L7 10.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn-location d-flex align-items-center gap-2 justify-content-center" href="">
                    <span>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9999 14.6704C9.86988 14.6704 8.12988 12.9404 8.12988 10.8004C8.12988 8.66043 9.86988 6.94043 11.9999 6.94043C14.1299 6.94043 15.8699 8.67043 15.8699 10.8104C15.8699 12.9504 14.1299 14.6704 11.9999 14.6704ZM11.9999 8.44043C10.6999 8.44043 9.62988 9.50043 9.62988 10.8104C9.62988 12.1204 10.6899 13.1804 11.9999 13.1804C13.3099 13.1804 14.3699 12.1204 14.3699 10.8104C14.3699 9.50043 13.2999 8.44043 11.9999 8.44043Z" fill="#52307F" /><path d="M12.0002 23.26C10.5202 23.26 9.03018 22.7 7.87018 21.59C4.92018 18.75 1.66018 14.22 2.89018 8.83C4.00018 3.94 8.27018 1.75 12.0002 1.75C12.0002 1.75 12.0002 1.75 12.0102 1.75C15.7402 1.75 20.0102 3.94 21.1202 8.84C22.3402 14.23 19.0802 18.75 16.1302 21.59C14.9702 22.7 13.4802 23.26 12.0002 23.26ZM12.0002 3.25C9.09018 3.25 5.35018 4.8 4.36018 9.16C3.28018 13.87 6.24018 17.93 8.92018 20.5C10.6502 22.17 13.3602 22.17 15.0902 20.5C17.7602 17.93 20.7202 13.87 19.6602 9.16C18.6602 4.8 14.9102 3.25 12.0002 3.25Z" fill="#52307F" /></svg>
                    </span>
                    <span>
                      Search for Food, Travel, stays and more...
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-item-sec">
        <div className="container">
          <div className="bottom-menu-slider-main">
            <div className="bottom-menu-slider d-flex align-items-center gap-3">
              <div className="menu-item-box">
                <Link href="/home/busbooking" className="menu-link">
                  <h6>Travel</h6>
                  <Image src={Travel} alt=""></Image>
                  <span className="btn-bottom">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#972EEF" /><path d="M26.6514 17.3779L33.2732 23.9997L26.6514 30.6216" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.7275 24H33.0875" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </Link>
              </div>
              <div className="menu-item-box">
                <Link href="" className="menu-link">
                  <h6>Food</h6>
                  <Image src={Food} alt=""></Image>
                  <span className="btn-bottom">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#972EEF" /><path d="M26.6514 17.3779L33.2732 23.9997L26.6514 30.6216" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.7275 24H33.0875" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </Link>
              </div>
              <div className="menu-item-box">
                <Link href="" className="menu-link">
                  <h6>Stay</h6>
                  <Image src={Stay} alt=""></Image>
                  <span className="btn-bottom">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#972EEF" /><path d="M26.6514 17.3779L33.2732 23.9997L26.6514 30.6216" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.7275 24H33.0875" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </Link>
              </div>
              <div className="menu-item-box">
                <Link href="/home/mart" className="menu-link">
                  <h6>Mart</h6>
                  <Image src={Grocery} alt=""></Image>
                  <span className="btn-bottom">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#972EEF" /><path d="M26.6514 17.3779L33.2732 23.9997L26.6514 30.6216" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.7275 24H33.0875" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </Link>
              </div>
              <div className="menu-item-box">
                <Link href="" className="menu-link">
                  <h6>Dining</h6>
                  <Image src={Dining} alt=""></Image>
                  <span className="btn-bottom">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="24" fill="#972EEF" /><path d="M26.6514 17.3779L33.2732 23.9997L26.6514 30.6216" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /><path d="M14.7275 24H33.0875" stroke="white" stroke-width="1.63636" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
