"use client";
import Image from "next/image";
import Link from "next/link";


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"

import Dropdown from 'react-bootstrap/Dropdown';

import CloseModal from "../../../../../public/images/close-modal.png";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Grid, Navigation } from 'swiper/modules';

import './Home.css';

import Logo from '../../../public/images/LogoMainPage.png'
import Travel from '../../../public/images/travel.png'
import Food from '../../../public/images/food.png'
import Stay from '../../../public/images/stay.png'
import Grocery from '../../../public/images/Grocery.png'
import Dining from '../../../public/images/Dining.png'

import SquchLogo from '../../../public/images/squch-logo.svg'
import QRCODE from '../../../public/images/app-qr-code.png'
import GetappLogo from '../../../public/images/logo-get-app.svg'

import CardImg1 from '../../../public/images/home-card-img-1.png'
import CardImg2 from '../../../public/images/home-card-img-2.png'
import CardImg3 from '../../../public/images/home-card-img-3.png'
import CardImg4 from '../../../public/images/home-card-img-4.png'
import CardImg5 from '../../../public/images/home-card-img-5.png'


import ImageFood1 from "../../../public/images/food-img-1.png";
import ImageFood2 from "../../../public/images/food-img-2.png";
import ImageFood3 from "../../../public/images/food-img-3.png";
import ImageFood4 from "../../../public/images/food-img-4.png";
import ImageFood5 from "../../../public/images/food-img-5.png";
import ImageFood6 from "../../../public/images/food-img-6.png";
import ImageFood7 from "../../../public/images/food-img-7.png";
import ImageFood8 from "../../../public/images/food-img-8.png";
import ImageFood9 from "../../../public/images/food-img-9.png";
import ImageFood10 from "../../../public/images/food-img-10.png";
import ImageFood11 from "../../../public/images/food-img-11.png";
import ImageFood12 from "../../../public/images/food-img-12.png";
import ImageFood13 from "../../../public/images/food-img-13.png";
import ImageFood14 from "../../../public/images/food-img-14.png";
import ImageFood15 from "../../../public/images/food-img-15.png";
import ImageFood16 from "../../../public/images/food-img-16.png";

import { useState, useEffect } from "react";
import ModalLogin from "./ModalLogin";
import ModalOtpVerification from "./ModalOtpVerification";
import ModalSignupByEmail from "./ModalSignupByEmail";
import UserAuth from "./UserAuth";
import SearchBar from "./SearchBar";
import ExploreSquch from "./ExploreSquch";
import FeatureTopSlider from "./FeatureTopSlider";
import ShopGroceries from "./ShopGroceries";
import TopRatedYou from "./TopRatedYou";
import PopularHotels from "./PopularHotels";
import Footer from "@/components/Footer";

export default function Home() {
  const [showModalLogin, setModalLogin] = useState(false);
  const [showOtpVerification, setOtpVerification] = useState(false);

  const [showModalSignin, setModalSignin] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  }, [isActive]);



  return (
    <div className="home-page-main">
      <header className="header">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className="logo me-auto">
              <Link href="">
                <Image alt="" src={SquchLogo}></Image>
              </Link>
            </div>
            <div className="header-right">
              <div className="offcanvas-header d-md-none justify-content-between border-bottom" onClick={() => setIsActive(!isActive)}>
                <div className="header-close ms-auto">
                  <i className="bi bi-x-lg"></i>
                </div>
              </div>
              <nav className="flex-grow-1">
                <ul className="menu-navbar-nav m-0 list-unstyled d-flex align-items-center">
                  <li className="nav-item">
                    <Link href="" onClick={() => setModalSignin(true)}>Partner with us</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="">Squch Corporate</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="user-auth">
              <ul className="list-unstyled m-0 d-flex align-items-center">
                <li className="nav-item">
                  <Link href="" onClick={() => setOtpVerification(true)} className="btn btn-primary btn-get-app">Get the App
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5971 1.07224C1.59898 1.53247 1.97358 1.90404 2.43381 1.9022L8.67149 1.87692L0.698487 9.9148C0.374362 10.2416 0.3765 10.7692 0.703262 11.0933C1.03002 11.4174 1.55764 11.4153 1.88176 11.0885L9.85476 3.05065L9.88004 9.28833C9.88191 9.74854 10.2565 10.1201 10.7167 10.1183C11.1769 10.1164 11.5485 9.74178 11.5467 9.28158L11.5133 1.03206C11.5124 0.811075 11.4237 0.599442 11.2668 0.443806C11.1099 0.28817 10.8976 0.201207 10.6766 0.20212L2.42704 0.235547C1.96683 0.2374 1.59522 0.612026 1.5971 1.07224Z" fill="#262626" />
                    </svg>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="" className="btn btn-primary" onClick={() => setModalLogin(true)} >Sign in</Link>
                </li>
              </ul>
            </div>
            <button className="btn mobile-nav mobile-toggle d-md-none" onClick={() => setIsActive(!isActive)}>
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="d-md-none squch-home-page">
        <div className="gradient-1">
          <div className="px-40">
            <UserAuth />
            <SearchBar />
            <FeatureTopSlider />
            <ExploreSquch />
            <div className="sec-invite-frend">
              <Link href="">
                <div className="d-flex align-items-center">
                  <div className="icon-speaker">
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4631 27.158C20.187 27.158 19.9631 26.9343 19.9631 26.658V3.65845C19.9631 3.38208 20.187 3.15845 20.4631 3.15845C20.7393 3.15845 20.9631 3.38208 20.9631 3.65845V26.658C20.9631 26.9343 20.7393 27.158 20.4631 27.158Z" fill="#FB7E6A" />
                      <path d="M20.4614 4.54907V25.7691L10.4314 19.0491H7.79636C5.64636 19.0491 3.90137 17.3091 3.90137 15.1591C3.90137 14.0841 4.33636 13.1091 5.04135 12.4091C5.74637 11.7041 6.72137 11.2691 7.79636 11.2691H10.4314L20.4614 4.54907Z" fill="#FB7E6A" />
                      <path d="M20.4609 26.2693C20.3635 26.2693 20.2666 26.241 20.1826 26.1849L10.2788 19.5491H7.7959C5.37256 19.5491 3.40088 17.5799 3.40088 15.1595C3.40088 13.9817 3.85815 12.8787 4.68848 12.0545C5.51685 11.2264 6.62085 10.7693 7.7959 10.7693H10.2788L20.1826 4.13359C20.3362 4.03056 20.5337 4.02128 20.6963 4.1082C20.8591 4.19511 20.9609 4.36455 20.9609 4.54912V25.7693C20.9609 25.9539 20.8591 26.1233 20.6963 26.2102C20.6226 26.2498 20.5417 26.2693 20.4609 26.2693ZM7.7959 11.7693C6.88794 11.7693 6.03516 12.1224 5.39429 12.763C4.75317 13.3992 4.40088 14.2503 4.40088 15.1595C4.40088 17.0286 5.92383 18.5491 7.7959 18.5491H10.4309C10.53 18.5491 10.627 18.5784 10.7092 18.6336L19.9609 24.8323V5.48613L10.7092 11.6849C10.627 11.74 10.53 11.7693 10.4309 11.7693H7.7959Z" fill="#FB7E6A" />
                      <path d="M10.4314 11.2678V19.0478H7.79636C5.64636 19.0478 3.90137 17.3078 3.90137 15.1578C3.90137 14.0828 4.33636 13.1078 5.04138 12.4078C5.74637 11.7028 6.72137 11.2678 7.79636 11.2678H10.4314Z" fill="#FB7E6A" />
                      <path d="M10.4309 19.5481H7.79565C5.37231 19.5481 3.40088 17.5789 3.40088 15.158C3.40088 13.9797 3.85815 12.8772 4.68848 12.053C5.51685 11.2249 6.62085 10.7678 7.79565 10.7678H10.4309C10.707 10.7678 10.9309 10.9915 10.9309 11.2678V19.0481C10.9309 19.3245 10.707 19.5481 10.4309 19.5481ZM7.79565 11.7678C6.88794 11.7678 6.03516 12.1208 5.39429 12.7615C4.75317 13.3977 4.40088 14.2483 4.40088 15.158C4.40088 17.0271 5.92383 18.5481 7.79565 18.5481H9.93091V11.7678H7.79565Z" fill="#FB7E6A" />
                      <path d="M20.4634 19.1174C20.1873 19.1174 19.9634 18.8938 19.9634 18.6174C19.9634 18.3411 20.1873 18.1174 20.4634 18.1174C22.095 18.1174 23.4224 16.7898 23.4224 15.1584C23.4224 13.5291 22.095 12.2034 20.4634 12.2034C20.1873 12.2034 19.9634 11.9797 19.9634 11.7034C19.9634 11.427 20.1873 11.2034 20.4634 11.2034C22.6465 11.2034 24.4224 12.9778 24.4224 15.1584C24.4224 17.3416 22.6465 19.1174 20.4634 19.1174Z" fill="#FB7E6A" />
                      <path d="M26.9026 15.6575H25.4951C25.219 15.6575 24.9951 15.4338 24.9951 15.1575C24.9951 14.8811 25.219 14.6575 25.4951 14.6575H26.9026C27.1787 14.6575 27.4026 14.8811 27.4026 15.1575C27.4026 15.4338 27.1787 15.6575 26.9026 15.6575Z" fill="#FB7E6A" />
                      <path d="M25.0181 20.2126C24.8902 20.2126 24.762 20.1638 24.6643 20.0662L23.6692 19.0706C23.4742 18.8752 23.4742 18.5588 23.6695 18.3635C23.8648 18.1682 24.1814 18.1682 24.3767 18.3635L25.3719 19.3591C25.5669 19.5544 25.5669 19.8708 25.3716 20.0662C25.274 20.1638 25.146 20.2126 25.0181 20.2126Z" fill="#FB7E6A" />
                      <path d="M24.0229 12.0999C23.895 12.0999 23.7671 12.051 23.6694 11.9534C23.4741 11.7581 23.4741 11.4417 23.6694 11.2463L24.6646 10.2512C24.8599 10.0559 25.1763 10.0559 25.3716 10.2512C25.5669 10.4465 25.5669 10.7629 25.3716 10.9583L24.3765 11.9534C24.2788 12.051 24.1509 12.0999 24.0229 12.0999Z" fill="#FB7E6A" />
                      <path d="M25.1122 13.7322C24.9159 13.7322 24.7299 13.616 24.65 13.4236C24.5443 13.1682 24.6654 12.8757 24.9205 12.7703L26.2208 12.2317C26.4767 12.1262 26.7684 12.2473 26.8742 12.5022C26.9799 12.7576 26.8588 13.05 26.6037 13.1555L25.3034 13.6941C25.2406 13.72 25.1759 13.7322 25.1122 13.7322Z" fill="#FB7E6A" />
                      <path d="M26.412 18.123C26.3483 18.123 26.2836 18.1108 26.2208 18.0849L24.9205 17.5463C24.6654 17.4409 24.5443 17.1484 24.65 16.893C24.7555 16.6381 25.047 16.5166 25.3034 16.6225L26.6037 17.1611C26.8588 17.2666 26.9799 17.559 26.8742 17.8144C26.7943 18.0068 26.6083 18.123 26.412 18.123Z" fill="#FB7E6A" />
                      <path d="M9.83008 23.8551C7.74023 23.8551 6.04004 22.1549 6.04004 20.0651C6.04004 19.6105 6.12158 19.1627 6.28223 18.7345C6.37939 18.4762 6.66797 18.3459 6.92578 18.442C7.18433 18.5392 7.31543 18.8273 7.21826 19.0861C7.1001 19.4015 7.04004 19.7306 7.04004 20.0651C7.04004 21.6037 8.29175 22.8551 9.83008 22.8551C11.1213 22.8551 12.2642 21.9425 12.5474 20.6852C12.6079 20.4157 12.8779 20.2467 13.145 20.3073C13.4143 20.3678 13.5835 20.6354 13.5229 20.9049C13.1379 22.6144 11.5847 23.8551 9.83008 23.8551Z" fill="#FB7E6A" />
                      <path d="M10.4316 19.5481C10.1555 19.5481 9.93164 19.3245 9.93164 19.0481V11.2678C9.93164 10.9915 10.1555 10.7678 10.4316 10.7678C10.7078 10.7678 10.9316 10.9915 10.9316 11.2678V19.0481C10.9316 19.3245 10.7078 19.5481 10.4316 19.5481Z" fill="#FB7E6A" />
                    </svg>

                  </div>
                  <div className="flex-grow-1">
                    <p>Invite your friend using </p>
                    <h3 className="invite-code">00SUPERAPP</h3>
                  </div>
                  <div className="icon-arrow">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.40283 1.15845L9.40283 10.1584L1.40283 19.1584" stroke="#FB7E6A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="block-overlay"></div>
      <div className="banner-main">
        <div className="card-top">
          <div className="container">
            <div className="home-banner-text">
              <h1 className="banner-title">Your All-in-One App for Food,
                Travel, and Daily Essentials</h1>
            </div>
            <div className="search-container">
              <div className="location">
                <Dropdown align={'start'}>
                  <Dropdown.Toggle variant="light">
                    <span className="d-flex align-items-center">
                      <span className="icon-map">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 14.9386C9.87 14.9386 8.13 13.2086 8.13 11.0686C8.13 8.92855 9.87 7.20855 12 7.20855C14.13 7.20855 15.87 8.93855 15.87 11.0786C15.87 13.2186 14.13 14.9386 12 14.9386ZM12 8.70855C10.7 8.70855 9.63 9.76855 9.63 11.0786C9.63 12.3886 10.69 13.4486 12 13.4486C13.31 13.4486 14.37 12.3886 14.37 11.0786C14.37 9.76855 13.3 8.70855 12 8.70855Z" fill="#652669" />
                          <path d="M12 23.5286C10.52 23.5286 9.02999 22.9686 7.86999 21.8586C4.91999 19.0186 1.65999 14.4886 2.88999 9.09855C3.99999 4.20855 8.26999 2.01855 12 2.01855C12 2.01855 12 2.01855 12.01 2.01855C15.74 2.01855 20.01 4.20855 21.12 9.10855C22.34 14.4986 19.08 19.0186 16.13 21.8586C14.97 22.9686 13.48 23.5286 12 23.5286ZM12 3.51855C9.08999 3.51855 5.34999 5.06855 4.35999 9.42855C3.27999 14.1386 6.23999 18.1986 8.91999 20.7686C10.65 22.4386 13.36 22.4386 15.09 20.7686C17.76 18.1986 20.72 14.1386 19.66 9.42855C18.66 5.06855 14.91 3.51855 12 3.51855Z" fill="#652669" />
                        </svg>
                      </span>
                      <span className="m-0">Location, City & Street</span>
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="search-area">
                <div className="icon-search">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2562 17.6289C14.6285 17.6289 18.1729 14.0845 18.1729 9.71224C18.1729 5.33999 14.6285 1.79557 10.2562 1.79557C5.88395 1.79557 2.33954 5.33999 2.33954 9.71224C2.33954 14.0845 5.88395 17.6289 10.2562 17.6289Z" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.0062 18.4622L17.3395 16.7956" stroke="#171717" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <input type="text" className="form-control" placeholder="Search anything..." />
                <button className="icon-mike btn">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6729 13.0456C12.5145 13.0456 14.0062 11.5539 14.0062 9.71224V5.12891C14.0062 3.28724 12.5145 1.79557 10.6729 1.79557C8.83121 1.79557 7.33954 3.28724 7.33954 5.12891V9.71224C7.33954 11.5539 8.83121 13.0456 10.6729 13.0456Z" stroke="#FB7E6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.29785 8.17057V9.58724C4.29785 13.1039 7.15619 15.9622 10.6729 15.9622C14.1895 15.9622 17.0479 13.1039 17.0479 9.58724V8.17057" stroke="#FB7E6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.51453 5.48724C10.2645 5.21224 11.0812 5.21224 11.8312 5.48724" stroke="#FB7E6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.0062 7.2539C10.4478 7.13724 10.9062 7.13724 11.3478 7.2539" stroke="#FB7E6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.6729 15.9622V18.4622" stroke="#FB7E6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-bottom">
          <SimpleBar style={{ maxWidth: "100%", overflowX: "auto" }}>
            <ul className="d-flex list-unstyled home-card-list">
              <li><Link href="" className="card-home">
                <div className="card-text">
                  <h3 className="card-text-ttl">Cab</h3>
                  <p>Book your ride</p>
                </div>
                <div className="home-cardImg">
                  <Image src={CardImg1} alt="" />
                </div>
                <div className="icon-arrow-home">
                  <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                  </svg>

                </div>
              </Link>
              </li>
              <li>
                <Link href="/home/busbooking" className="card-home">
                  <div className="card-text">
                    <h3 className="card-text-ttl">Travel</h3>
                    <p>Book your Tickets</p>
                  </div>
                  <div className="home-cardImg">
                    <Image src={CardImg2} alt="" />
                  </div>
                  <div className="icon-arrow-home">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                    </svg>

                  </div>
                </Link>
              </li>
              <li>
                {/* <Link href="/home/accommodation/explore" className="card-home"> */}
                <Link href="https://squch-stay.vercel.app/en/home/accommodation/explore" className="card-home">
                
                  <div className="card-text">
                    <h3 className="card-text-ttl">STAY</h3>
                    <p>Book your accomodation</p>
                  </div>
                  <div className="home-cardImg">
                    <Image src={CardImg3} alt="" />
                  </div>
                  <div className="icon-arrow-home">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                    </svg>

                  </div>
                </Link>
              </li>
              <li>
                <Link href="/home/mart" className="card-home">
                  <div className="card-text">
                    <h3 className="card-text-ttl">mart</h3>
                    <p>Order your grocery</p>
                  </div>
                  <div className="home-cardImg">
                    <Image src={CardImg4} alt="" />
                  </div>
                  <div className="icon-arrow-home">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                    </svg>

                  </div>
                </Link>
              </li>
              <li>
                <Link href="" className="card-home">
                  <div className="card-text">
                    <h3 className="card-text-ttl">events</h3>
                    <p>get your entertainment </p>
                  </div>
                  <div className="home-cardImg">
                    <Image src={CardImg5} alt="" />
                  </div>
                  <div className="icon-arrow-home">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                    </svg>

                  </div>
                </Link>
              </li>
              <li>
                <Link href="" className="card-home">
                  <div className="card-text">
                    <h3 className="card-text-ttl">Squch ADS</h3>
                    <p>Feature services in a sale</p>
                  </div>
                  <div className="home-cardImg">
                    <Image src={CardImg5} alt="" />
                  </div>
                  <div className="icon-arrow-home">
                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.985107" y="0.804688" width="57.1732" height="57.1732" rx="28.5866" fill="#CD99FE" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0868 23.5209C24.0892 24.0962 24.5574 24.5607 25.1327 24.5584L32.9298 24.5268L22.9636 34.5741C22.5584 34.9826 22.5611 35.6421 22.9695 36.0473C23.378 36.4524 24.0375 36.4497 24.4427 36.0413L34.4089 25.9939L34.4405 33.7911C34.4428 34.3663 34.9111 34.8308 35.4864 34.8285C36.0616 34.8261 36.5261 34.3579 36.5238 33.7826L36.482 23.4707C36.4809 23.1945 36.3701 22.9299 36.174 22.7354C35.9778 22.5408 35.7124 22.4321 35.4362 22.4333L25.1243 22.4751C24.549 22.4774 24.0845 22.9457 24.0868 23.5209Z" fill="#211332" />
                    </svg>

                  </div>
                </Link>
              </li>
            </ul>
          </SimpleBar>
        </div>
      </div>
      <div className="sec-our-best-food slider-arrow">
        <div className="container-fluid">
          <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>Order our best food options</h2>
            </div>
          </div>

          <div className="swiper-food-container">
            <Swiper
              slidesPerView={8}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".prev-button",
                nextEl: ".next-button",
              }}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
                768: {
                  slidesPerView: 4,
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
                1024: {
                  slidesPerView: 6,
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
                1280: {
                  slidesPerView: 8,
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
              }}

              modules={[Grid, Navigation]}
              className="slider-best-food"
            >
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood1} alt="" />
                  </div>
                  <p>Pizza</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood2} alt="" />
                  </div>
                  <p>Shake</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood3} alt="" />
                  </div>
                  <p>Biryani</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood4} alt="" />
                  </div>
                  <p>Rolls</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood5} alt="" />
                  </div>
                  <p>Pasta</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood6} alt="" />
                  </div>
                  <p>Burger</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood7} alt="" />
                  </div>
                  <p>Salad</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood8} alt="" />
                  </div>
                  <p>BBQ</p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood9} alt="" />
                  </div>
                  <p>See Food</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood10} alt="" />
                  </div>
                  <p>Lamb</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood11} alt="" />
                  </div>
                  <p>Dessert</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood12} alt="" />
                  </div>
                  <p>Ice-cream</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood13} alt="" />
                  </div>
                  <p>Cake</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood14} alt="" />
                  </div>
                  <p>Pie</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood15} alt="" />
                  </div>
                  <p>Cake</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood16} alt="" />
                  </div>
                  <p>pastry</p>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood1} alt="" />
                  </div>
                  <p>Pizza</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood2} alt="" />
                  </div>
                  <p>Shake</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood3} alt="" />
                  </div>
                  <p>Biryani</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood4} alt="" />
                  </div>
                  <p>Rolls</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood5} alt="" />
                  </div>
                  <p>Pasta</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood6} alt="" />
                  </div>
                  <p>Burger</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood7} alt="" />
                  </div>
                  <p>Salad</p>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="" className="card-best-food">
                  <div className="img-thumb">
                    <Image src={ImageFood8} alt="" />
                  </div>
                  <p>BBQ</p>
                </Link>
              </SwiperSlide>

            </Swiper>
            <button className="prev-button" aria-label="Previous">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.74023 16.6582L2.22793 10.1459C1.45884 9.37682 1.45884 8.11831 2.22793 7.34922L8.74023 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="next-button" aria-label="Next">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.51709 16.6582L8.02939 10.1459C8.79848 9.37682 8.79848 8.11831 8.02939 7.34922L1.51709 0.836914" stroke="#292D32" strokeWidth="1.45163" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div className="d-md-none squch-home-page">
        <div className="px-40">
          <ShopGroceries />
          <TopRatedYou />
          <PopularHotels />
        </div>
      </div>

      <div className="sec-get-app">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="flex-grow order-md-2">
              <div className="block-get-app">
                <Image src={GetappLogo} alt="" />
                <h2 className="ttl-get-app">Get the Squch App now!</h2>
                <p>For best offers and discount curated specially for you</p>
              </div>
            </div>
            <div className="imageqr">
              <Image src={QRCODE} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sec-useful-links">
        <div className="container-fluid">
          <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>Cities with food delivery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Accra</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Kumasi</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Tamale</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Takoradi</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Cape Coast</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Show More

                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11266 1.79942C2.11455 2.25964 2.48915 2.63122 2.94937 2.62937L9.18705 2.60409L1.21405 10.642C0.889926 10.9687 0.892064 11.4963 1.21883 11.8205C1.54559 12.1446 2.0732 12.1425 2.39733 11.8157L10.3703 3.77782L10.3956 10.0155C10.3975 10.4757 10.7721 10.8473 11.2323 10.8454C11.6925 10.8436 12.0641 10.469 12.0622 10.0088L12.0288 1.75924C12.0279 1.53825 11.9393 1.32662 11.7824 1.17098C11.6255 1.01534 11.4131 0.92838 11.1921 0.929293L2.94261 0.96272C2.48239 0.964573 2.11079 1.3392 2.11266 1.79942Z" fill="#211332" />
                </svg>

              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>Cities with grocery deliver</h2>
            </div>
          </div>
          <div className="row mb-0">
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Accra</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Kumasi</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Tamale</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Takoradi</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Order food online in Cape Coast</Link>
            </div>
            <div className="col-6 col-md-4">
              <Link href="" className="link-useful-item">Show More

                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.11266 1.79942C2.11455 2.25964 2.48915 2.63122 2.94937 2.62937L9.18705 2.60409L1.21405 10.642C0.889926 10.9687 0.892064 11.4963 1.21883 11.8205C1.54559 12.1446 2.0732 12.1425 2.39733 11.8157L10.3703 3.77782L10.3956 10.0155C10.3975 10.4757 10.7721 10.8473 11.2323 10.8454C11.6925 10.8436 12.0641 10.469 12.0622 10.0088L12.0288 1.75924C12.0279 1.53825 11.9393 1.32662 11.7824 1.17098C11.6255 1.01534 11.4131 0.92838 11.1921 0.929293L2.94261 0.96272C2.48239 0.964573 2.11079 1.3392 2.11266 1.79942Z" fill="#211332" />
                </svg>

              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin show={showModalLogin} handleClose={() => setModalLogin(false)} />
      <ModalOtpVerification show={showOtpVerification} handleClose={() => setOtpVerification(false)} />
      <ModalSignupByEmail show={showModalSignin} handleClose={() => setModalSignin(false)} />
        <Footer/>
    </div>
  );
}
