"use client";
import Image from "next/image";
import Link from "next/link";
import "simplebar-react/dist/simplebar.min.css";
import '../Home.css';
import QRCODE from '../../../public/images/app-qr-code.png';
import GetappLogo from '../../../public/images/logo-get-app.svg';

import { useState, useEffect } from "react";
import Header from "@/components/Home/Header";
import SearchBar from "@/components/Home/SearchBar";
import CategoryCards from "@/components/Home/CategoryCard";
import FoodCarousel from "@/components/Home/FoodCarousel";
import {requestNotificationPermission, getFCMToken, onMessageListener } from "@/lib/firebase";

export default function Home() {
  const [showModalLogin, setModalLogin] = useState(false);
  const [showOtpVerification, setOtpVerification] = useState(false);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("open-menu");
    } else {
      document.body.classList.remove("open-menu");
    }
  }, [isActive]);

  // useEffect(() => {
  //   // ✅ Register Firebase Service Worker
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/firebase-messaging-sw.js")
  //       .then((registration) => {
  //         console.log("✅ Service Worker Registered", registration);
  //       })
  //       .catch((err) => console.error("❌ Service Worker Registration Failed", err));
  //   }

  //   // ✅ Request Notification Permission
  //   requestNotificationPermission().then((granted) => {
  //     if (granted) {
  //       getFCMToken().then((token) => {
  //         if (token) {
  //           console.log("✅ FCM Token:", token);
  //           // 🔥 Send token to backend for push notifications
  //           fetch("/api/register-device", {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({ token }),
  //           });
  //         }
  //       });
  //     }
  //   });

  //   // ✅ Listen for incoming messages when app is in the foreground
  //   onMessageListener().then((payload: any) => {
  //     console.log("🔥 Foreground Notification Received:", payload);
  //     alert(payload.notification.body); // Display an alert with the notification
  //   });

  // }, []);

  return (
    <>
      <Header
        isActive={isActive}
        setIsActive={setIsActive}
      />

      <div className="block-overlay"></div>
      <div className="banner-main">
        <div className="card-top">
          <div className="container">
            <div className="home-banner-text">
              <h1 className="banner-title">
                Your All-in-One App for Food, Travel, and Daily Essentials
              </h1>
            </div>
            <SearchBar />
          </div>
        </div>
        <CategoryCards />
      </div>

      <div className="sec-our-best-food slider-arrow">
        <div className="container-fluid">
          <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>
                Order our best food options
              </h2>
            </div>
          </div>

          <div className="swiper-food-container">
            <FoodCarousel />

            <button className="prev-button" aria-label="Previous">
              <Image src={"/images/left-arrow.svg"} alt="arrow icon" width={10} height={18} />
            </button>

            <button className="next-button" aria-label="Next">
              <Image src={"/images/right-arrow.svg"} alt="arrow icon" height={18} width={10} />
            </button>
          </div>

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
                <Image
                  src={"/images/arrow.svg"}
                  alt="arrow icon"
                  height={13}
                  width={13}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>
                Cities with grocery deliver
              </h2>
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
                <Image
                  src={"/images/arrow.svg"}
                  alt="arrow icon"
                  height={13}
                  width={13}
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
