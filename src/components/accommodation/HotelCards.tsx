"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { addWishlist } from "@/services/accommodation/wishlistServices";
import { useAppDispatch } from "@/store/hooks";
import {
  Hotel,
  ImageHotel,
} from "@/store/features/accommodation/types/hotelTypes";
import { getCurrencySymbol } from "@/utils/formatData";
import debounce from "lodash.debounce";

export const SwiperRows = ({
  hotelData,
  CardName,
}: {
  hotelData: Hotel;
  CardName: string;
}) => {
  const [data, setData] = useState(hotelData);
  const {
    id,
    name,
    description,
    avgPricePerNight,
    currency,
    country,
    state,
    isInWishList,
    address
  } = data;
  const router = useRouter();
  const hotelImages: ImageHotel[] = data.primaryImages;

  const updateWishlist = async (addToWishlist: boolean) => {
    try {
      await addWishlist(id, addToWishlist);
    } catch (error) {
      console.error("Error in toggle catch", error);
      // Revert state if API call fails
      setData((prev) => ({
        ...prev,
        isInWishList: !prev.isInWishList,
      }));
    }
  };

  // Debouncing to avoid spamming API
  const debouncedUpdateWishlist = useCallback(
    debounce((addToWishlist: boolean) => updateWishlist(addToWishlist), 500),
    [id]
  );

  const handleWishlistToggle = () => {
    setData((prev) => {
      const newState = !prev.isInWishList;
      debouncedUpdateWishlist(newState);
      return { ...prev, isInWishList: newState };
    });
  };

  const currencySymbol = getCurrencySymbol(currency);

  const handleHotelClick = (id: number) => {
    router.push(`/home/accommodation/details/${id}`);
  };

  return (
    <SwiperSlide key={`${CardName}-parent-${id}`} style={{ cursor: "pointer" }}>
      <div className="position-relative multislider-com-box bg-white rounded-radius">
        <div className="top-slider position-relative">
          <Swiper
            key={`${CardName}-${id}`}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              prevEl: ".inner-prev-button",
              nextEl: ".inner-next-button",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: { slidesPerView: 1 },
            }}
            modules={[Pagination, Navigation]}
            className="inner-popular-slider-first rounded-radius"
          >
            {hotelImages?.length > 0 &&
              hotelImages?.map((item) => (
                <SwiperSlide key={`${CardName}-${id}-${item.id}`}>
                  <div className="multislider-box">
                    <div className="">
                      <div className="position-relative">
                        <div className="img-box">
                          <Image
                            src={item.url}
                            alt="hotel image"
                            height={180}
                            width={293}
                            className="w-100 object-cover d-d-block"
                            onClick={() => handleHotelClick(item.id)}
                          />
                        </div>
                        <div className="position-absolute z-2  card-heart-box">
                          <ul className="d-flex align-items-center gap-1 ">
                            <li>
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9.39453"
                                  cy="9"
                                  r="9"
                                  fill="#DB8AE8"
                                />
                                <path
                                  d="M10.259 4.75482L11.139 6.51482C11.259 6.75982 11.579 6.99482 11.849 7.03982L13.444 7.30482C14.464 7.47482 14.704 8.21482 13.969 8.94482L12.729 10.1848C12.519 10.3948 12.404 10.7998 12.469 11.0898L12.824 12.6248C13.104 13.8398 12.459 14.3098 11.384 13.6748L9.889 12.7898C9.619 12.6298 9.174 12.6298 8.899 12.7898L7.404 13.6748C6.334 14.3098 5.684 13.8348 5.964 12.6248L6.319 11.0898C6.384 10.7998 6.269 10.3948 6.059 10.1848L4.819 8.94482C4.089 8.21482 4.324 7.47482 5.344 7.30482L6.939 7.03982C7.204 6.99482 7.524 6.75982 7.644 6.51482L8.524 4.75482C9.004 3.79982 9.784 3.79982 10.259 4.75482Z"
                                  fill="white"
                                />
                              </svg>
                            </li>
                            <li className="text-slider">{`${data.avg_ratings}(${data.total_ratings})`}</li>
                          </ul>
                        </div>
                        <div
                          className="position-absolute z-2 right-card-box d-flex align-items-center justify-content-center"
                          onClick={handleWishlistToggle}
                        >
                          <div className="">
                            <Image
                              src={
                                isInWishList
                                  ? "/svg/like-active.svg"
                                  : "/svg/like.svg"
                              }
                              alt={"Like"}
                              height={20}
                              width={20}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div
          className={`text-box px-3 ${
            ["detailCard", "WishList"].includes(CardName) ? "pt-3" : "py-4"
          }`}
          onClick={() => handleHotelClick(id)}
        >
          <h3 className="">
            {name}, {state}
          </h3>
          <p className="mb-3">
           {address}
          </p>
          <div className="d-flex align-items-center mb-1">
            <h6 className="d-flex align-items-center align-items-center">
              {currencySymbol} {avgPricePerNight}
              <span className="d-block text-decoration-line-through">₵30.00</span>
            </h6>
            <span className="text-sm d-block">71% off</span>
          </div>
          <p className="">+ ₵12 taxes & fees</p>
        </div>
      </div>
    </SwiperSlide>
  );
};
