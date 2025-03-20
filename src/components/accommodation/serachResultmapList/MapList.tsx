"use client";
import Image from "next/image";
import Link from "next/link";

import popularH1 from "../../../../public/images/PopularH01.png";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getHotelDetails } from "@/store/features/accommodation/slices/hotelDetailSlice";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const MapList = () => {
  const dispatch = useAppDispatch();
  const router= useRouter();
  const { hotel_id: hotelId } = useParams();
 
  const { name, longitude, latitude, avg_ratings, total_ratings } =
    useAppSelector((state) => state.hotelDetail?.data);
  const { status } = useAppSelector((state) => state.hotelDetail);
 

  useEffect(() => {
    if (!name && status === "idle") { 
      dispatch(getHotelDetails(Number(hotelId)));
    }
  }, [hotelId, name, status, dispatch]);

  return (
    <div className="map-box position-relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4039564.4004512704!2d-1.808970619497727!3d8.606836244323807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185419%3A0xfaae5b301ad19360!2sTogo!5e0!3m2!1sen!2sin!4v1739261996851!5m2!1sen!2sin"
        width="100%"
        height="650"
        loading="lazy"
      ></iframe>

      <div className="btn-fixed-position">
        <div className="details-map-box-show mb-3">
          <div className="details-map-box d-flex align-items-center justify-content-center gap-2">
            <div className="img-box">
              <Image src={popularH1} alt=""></Image>
            </div>
            <div className="text-box">
              <h3>{name}</h3>
              <Link
                className="bg-light-rating d-flex align-items-center gap-2"
                href=""
              >
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9.5" cy="9" r="9" fill="#FFD500" />
                  <path
                    d="M10.3645 4.75531L11.2445 6.51531C11.3645 6.76031 11.6845 6.99531 11.9545 7.04031L13.5495 7.30531C14.5695 7.47531 14.8095 8.21531 14.0745 8.94531L12.8345 10.1853C12.6245 10.3953 12.5095 10.8003 12.5745 11.0903L12.9295 12.6253C13.2095 13.8403 12.5645 14.3103 11.4895 13.6753L9.99447 12.7903C9.72447 12.6303 9.27947 12.6303 9.00447 12.7903L7.50947 13.6753C6.43947 14.3103 5.78947 13.8353 6.06947 12.6253L6.42447 11.0903C6.48947 10.8003 6.37447 10.3953 6.16447 10.1853L4.92447 8.94531C4.19447 8.21531 4.42947 7.47531 5.44947 7.30531L7.04447 7.04031C7.30947 6.99531 7.62947 6.76031 7.74947 6.51531L8.62947 4.75531C9.10947 3.80031 9.88947 3.80031 10.3645 4.75531Z"
                    fill="white"
                  />
                </svg>
                {avg_ratings} ({total_ratings})
              </Link>
              <p className="mb-0 pb-0">71% off</p>
            </div>
          </div>
        </div>
        <Link
          href={`/home/accommodation/seeAll/search`}
          className="btn btn-black d-flex justify-content-center align-items-center gap-2"
         >
          List View
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.79102 7.77998V17.51C2.79102 19.41 4.14102 20.19 5.78102 19.25L8.13102 17.91C8.64102 17.62 9.49102 17.59 10.021 17.86L15.271 20.49C15.801 20.75 16.651 20.73 17.161 20.44L21.491 17.96C22.041 17.64 22.501 16.86 22.501 16.22V6.48998C22.501 4.58998 21.151 3.80998 19.511 4.74998L17.161 6.08998C16.651 6.37998 15.801 6.40998 15.271 6.13998L10.021 3.51998C9.49102 3.25998 8.64102 3.27998 8.13102 3.56998L3.80102 6.04998C3.24102 6.36998 2.79102 7.14998 2.79102 7.77998Z"
              fill="white"
              stroke="#262626"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.06055 3.99805V16.998"
              stroke="#262626"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.2305 6.61914V19.9991"
              stroke="#262626"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MapList;
