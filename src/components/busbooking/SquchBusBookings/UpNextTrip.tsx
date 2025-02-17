"use client";
import Image from "next/image";
import Link from "next/link";

import tripUpNext from "../../../../public/images/upnextTrip.png";
import UpComingBg from '../../../../public/images/upnexttripImgBg.png'

const UpNextTrip = () => {
  return (
    <div className="up-next-trip-sec position-relative">
        <div className="img-bg-box">
            <Image alt="" src={UpComingBg}></Image>
        </div>
        <div className="up-next-trip-space">
            <h2>Up next Trip</h2>
            <div className="full-box-up-next-trip">
                <div className="img-top">
                    <div className="img-box">
                        <Image src={tripUpNext} alt=""></Image>
                    </div>
                    <div className="text-box">
                        <h3>18:00</h3>
                        <h4>23 December, 2024</h4>
                    </div>
                </div>
                <div className="text-bottom">
                    <h5>Bus to Tamale, Ghana</h5>
                    <ul className="listing-up-next d-flex align-items-center gap-3">
                        <li className="d-flex align-items-center gap-2">
                            <span>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.0901 22C21.0901 18.13 17.2402 15 12.5002 15C7.76015 15 3.91016 18.13 3.91016 22" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                            <span>1 Passenger</span>
                        </li>
                    </ul>
                    <div className="footer-location ">
                        <Link className="btn-link d-flex align-items-center justify-content-center gap-2" href="">
                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1287_1335)"><path d="M4.55859 16.2969C5.19482 17.1078 5.77391 17.9619 6.29168 18.8531C6.73372 19.6912 6.91799 20.2596 7.24103 21.2695C7.43915 21.8275 7.61821 21.994 8.00318 21.994C8.42268 21.994 8.61301 21.7107 8.76005 21.2726C9.06542 20.3188 9.30502 19.591 9.68303 18.9032C10.4248 17.5754 11.3465 16.3955 12.2522 15.2615C12.4974 14.9406 14.0826 13.0708 14.7962 11.5955C14.7962 11.5955 15.6733 9.97486 15.6733 7.7115C15.6733 5.59434 14.8083 4.12598 14.8083 4.12598L12.3179 4.79293L10.8055 8.77637L10.4313 9.32565L10.3565 9.42516L10.257 9.54973L10.0823 9.74868L9.83266 9.99824L8.48586 11.0955L5.11872 13.0396L4.55859 16.2969Z" fill="#34A853"/><path d="M1.08301 11.3228C1.9048 13.1998 3.48952 14.8499 4.56171 16.2979L10.2566 9.55203C10.2566 9.55203 9.45428 10.6013 7.99892 10.6013C6.37781 10.6013 5.06819 9.30679 5.06819 7.67448C5.06819 6.55511 5.74161 5.78613 5.74161 5.78613L1.87579 6.82199L1.08301 11.3228Z" fill="#FBBC04"/><path d="M10.3206 0.34668C12.212 0.956505 13.8308 2.23676 14.8101 4.12463L10.2587 9.54837C10.2587 9.54837 10.9321 8.76549 10.9321 7.65308C10.9321 5.98276 9.52562 4.73493 8.00618 4.73493C6.56935 4.73493 5.74414 5.78248 5.74414 5.78248V2.36558L10.3206 0.34668Z" fill="#4285F4"/><path d="M2.12646 2.74341C3.25614 1.39181 5.24393 0 7.9844 0C9.31399 0 10.3157 0.349063 10.3157 0.349063L5.73968 5.7857H2.49753L2.12646 2.74341Z" fill="#1A73E8"/><path d="M1.08318 11.323C1.08318 11.323 0.327148 9.84245 0.327148 7.6976C0.327148 5.67042 1.11519 3.89843 2.12641 2.74316L5.74221 5.78594L1.08318 11.323Z" fill="#EA4335"/></g><defs><clipPath id="clip0_1287_1335"><rect width="15.346" height="22" fill="white" transform="translate(0.327148)"/></clipPath></defs></svg>
                            <span>Navigate to Boarding Point</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpNextTrip