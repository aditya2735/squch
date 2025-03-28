"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {  useAppDispatch, useAppSelector } from "@/store/hooks";
import { setHost } from "@/store/features/accommodation/slices/hostChatSlice";
import NeedHelp from "@/components/cardOptions/NeedHelp";


const Host = () => {
  const dispatch= useAppDispatch()
      const {name, avgPricePerNight, id: hotel_id , Hosts} = useAppSelector(
        (state) => state.hotelDetail.data
      );
      const hostData=Hosts?.[0]
      const {id:host_id,firstName,lastName, profilePicture,phoneNumber}= hostData
  return (
    <div className="booking-date-sec">
    <div className="bottom-booking-details bg-white mb-4">
    <h5>Meet Your Host</h5>
    <div className="host-list-details">
      <div className="host-list d-flex align-items-center gap-2">
        <div className="host-img-box">
          <Image src={profilePicture} alt="Host Image" height={81} width={81}/>
        </div>
        <div className="host-img-details">
          <h6>{firstName} {lastName}</h6>
          <p>Host, {name}</p>
          <ul className="d-flex align-items-center gap-2">
            <li>
              <Link
                href=""
                className="btn btn-light d-flex align-items-center gap-1"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.25"
                    width="16"
                    height="16"
                    rx="8"
                    stroke="#F6F6F6"
                  />
                  <path
                    d="M14.4576 11.9454C14.4576 12.1698 14.4078 12.4004 14.3018 12.6248C14.1958 12.8493 14.0587 13.0612 13.8779 13.2607C13.5724 13.5973 13.2358 13.8404 12.8555 13.9963C12.4815 14.1521 12.0763 14.2332 11.64 14.2332C11.0041 14.2332 10.3246 14.0835 9.60775 13.7781C8.89087 13.4726 8.17398 13.0612 7.46333 12.5438C6.74645 12.0202 6.06697 11.4404 5.41866 10.7984C4.77658 10.15 4.19684 9.47056 3.67944 8.75991C3.16827 8.04926 2.75684 7.33861 2.45762 6.6342C2.1584 5.92355 2.00879 5.24407 2.00879 4.59576C2.00879 4.17186 2.08359 3.76666 2.2332 3.39264C2.38281 3.01238 2.6197 2.66329 2.95009 2.3516C3.34905 1.95887 3.78541 1.76562 4.24671 1.76562C4.42126 1.76562 4.5958 1.80303 4.75165 1.87783C4.91372 1.95264 5.0571 2.06485 5.16931 2.22692L6.61554 4.26537C6.72775 4.42121 6.80879 4.56459 6.86489 4.70173C6.921 4.83264 6.95217 4.96355 6.95217 5.08199C6.95217 5.2316 6.90853 5.38121 6.82126 5.52459C6.74022 5.66796 6.62178 5.81757 6.47217 5.96718L5.9984 6.45965C5.92983 6.52822 5.89866 6.60926 5.89866 6.709C5.89866 6.75887 5.90489 6.80251 5.91736 6.85238C5.93606 6.90225 5.95476 6.93965 5.96723 6.97705C6.07944 7.18277 6.27269 7.45082 6.54697 7.77498C6.82749 8.09913 7.12671 8.42952 7.45087 8.75991C7.78749 9.0903 8.11165 9.39576 8.44204 9.67627C8.76619 9.95056 9.03424 10.1376 9.24619 10.2498C9.27736 10.2622 9.31476 10.281 9.3584 10.2997C9.40827 10.3184 9.45814 10.3246 9.51424 10.3246C9.62022 10.3246 9.70126 10.2872 9.76983 10.2186L10.2436 9.75108C10.3994 9.59524 10.549 9.47679 10.6924 9.40199C10.8358 9.31472 10.9792 9.27108 11.135 9.27108C11.2535 9.27108 11.3781 9.29602 11.5153 9.35212C11.6524 9.40822 11.7958 9.48926 11.9516 9.59524L14.015 11.0602C14.1771 11.1724 14.2893 11.3033 14.3579 11.4591C14.4202 11.615 14.4576 11.7708 14.4576 11.9454Z"
                    stroke="#262626"
                    strokeWidth="1.4026"
                    strokeMiterlimit="10"
                  />
                </svg>
                Call hotel
              </Link>
            </li>
            <li>
              <NeedHelp item={hostData} styleName={"btn btn-light d-flex align-items-center gap-1"}/>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Host