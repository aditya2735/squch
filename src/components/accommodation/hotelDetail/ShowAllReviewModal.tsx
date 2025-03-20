"use client";
import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseModal from "../../../../public/images/close-modal.png";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { formatDate } from "@/utils/formatData";

const ShowAllReviewModal = ({ show, handleClose }: any) => {

  const {
    avg_ratings: avgRating,
    total_ratings: totalRating,
    reviews,
    categoryRatings,
  } = useAppSelector((state) => state.hotelDetail.data);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <ul className="d-flex align-items-center gap-1">
      <ul className="d-flex align-items-center gap-1">
  {Array.from({ length: 5 }, (_, index) => {
    const wholePart = Math.floor(rating);
    const decimalPart = rating - wholePart;
    const isFull = index < wholePart;
    const isHalf = index === wholePart && decimalPart >= 0.5;

    return (
      <li key={index}>
        <Link href="" className="raview">
          <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`halfGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" stopColor="#652669" />
                <stop offset="50%" stopColor="#E7E7E7" />
              </linearGradient>
            </defs>
            <path
              d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
              fill={isFull ? "#652669" : isHalf ? `url(#halfGradient-${index})` : "#E7E7E7"}
            />
          </svg>
        </Link>
      </li>
    );
  })}
</ul>

    </ul>
    
    );
  };
  // const [reviews, setReviews] = useState<any[]>([]);
  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const [loading, setLoading] = useState(false);
  
  // const fetchReviews = async (pageNum: number) => {
  //   if (!hasMore || loading) return; // Stop if no more reviews or already fetching
  
  //   setLoading(true);
  //   try {
  //     const response = await fetchFilterHotels({ data: pageNum });
  
  //     if (response.data.length === 0) {
  //       setHasMore(false); // No more pages
  //     } else {
  //       setReviews((prev) => [...prev, ...response.data]); // Append new data
  //     }
  //   } catch (error) {
  //     console.error("Error fetching reviews", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // // Load first page only when the modal opens
  // useEffect(() => {
  //   if (modalOpen && reviews.length === 0) {
  //     fetchReviews(1);
  //   }
  // }, [modalOpen]);
  
  // // Function to load more reviews (Pagination)
  // const loadMore = () => {
  //   if (!loading && hasMore) {
  //     const nextPage = page + 1;
  //     setPage(nextPage);
  //     fetchReviews(nextPage);
  //   }
  // };

  
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="modal-filter review-modal-sec pt-4"
    >
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          <Image src={CloseModal} alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body className="review-modal-body">
        <div className="review-modal-sec">
          <div className="review-top-heading d-flex align-items-center justify-content-between gap-2">
            <div className="left-top-review">
              <h2>4.0</h2>
              <span className="btn-light">Very Good</span>
            </div>
            <div className="right-top-review">
              <ul className="d-flex align-items-center gap-1">
                <li>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.0683594L11.0206 6.28721H17.5595L12.2694 10.1307L14.2901 16.3495L9 12.5061L3.70993 16.3495L5.73056 10.1307L0.440492 6.28721H6.97937L9 0.0683594Z"
                      fill="#DB8AE8"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.0683594L11.0206 6.28721H17.5595L12.2694 10.1307L14.2901 16.3495L9 12.5061L3.70993 16.3495L5.73056 10.1307L0.440492 6.28721H6.97937L9 0.0683594Z"
                      fill="#DB8AE8"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.0683594L11.0206 6.28721H17.5595L12.2694 10.1307L14.2901 16.3495L9 12.5061L3.70993 16.3495L5.73056 10.1307L0.440492 6.28721H6.97937L9 0.0683594Z"
                      fill="#DB8AE8"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.0683594L11.0206 6.28721H17.5595L12.2694 10.1307L14.2901 16.3495L9 12.5061L3.70993 16.3495L5.73056 10.1307L0.440492 6.28721H6.97937L9 0.0683594Z"
                      fill="#DB8AE8"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.0683594L11.0206 6.28721H17.5595L12.2694 10.1307L14.2901 16.3495L9 12.5061L3.70993 16.3495L5.73056 10.1307L0.440492 6.28721H6.97937L9 0.0683594Z"
                      fill="#D1D1D1"
                    />
                  </svg>
                </li>
              </ul>
              <span>150 ratings</span>
            </div>
          </div>
          <div className="review-top-filter d-flex align-items-center justify-content-between gap-2">
            <div className="left-top-filter">
              <p>All 90 reviews</p>
            </div>
            <div className="right-top-filter">
              <ul className="d-flex align-items-center gap-2">
                <li>
                  <Link href="" className="active btn btn-border">
                    All (90)
                  </Link>
                </li>
                <li>
                  <Link href="" className=" btn btn-border">
                    Squch(50)
                  </Link>
                </li>
                <li>
                  <Link href="" className=" btn btn-border">
                    Google(40)
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="btn-modal d-flex align-items-center gap-2"
                  >
                    Sort by
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask id="path-1-inside-1_3646_25641" fill="white">
                        <path d="M13.28 5.53465C13.1533 5.53465 13.0267 5.58132 12.9267 5.68131L8.58001 10.028C8.26001 10.348 7.74001 10.348 7.42001 10.028L3.07335 5.68131C2.88001 5.48798 2.56001 5.48798 2.36668 5.68131C2.17335 5.87465 2.17335 6.19465 2.36668 6.38798L6.71335 10.7346C7.42001 11.4413 8.57335 11.4413 9.28668 10.7346L13.6333 6.38798C13.8267 6.19465 13.8267 5.87465 13.6333 5.68131C13.5333 5.58798 13.4067 5.53465 13.28 5.53465Z" />
                      </mask>
                      <path
                        d="M13.28 5.53465C13.1533 5.53465 13.0267 5.58132 12.9267 5.68131L8.58001 10.028C8.26001 10.348 7.74001 10.348 7.42001 10.028L3.07335 5.68131C2.88001 5.48798 2.56001 5.48798 2.36668 5.68131C2.17335 5.87465 2.17335 6.19465 2.36668 6.38798L6.71335 10.7346C7.42001 11.4413 8.57335 11.4413 9.28668 10.7346L13.6333 6.38798C13.8267 6.19465 13.8267 5.87465 13.6333 5.68131C13.5333 5.58798 13.4067 5.53465 13.28 5.53465Z"
                        fill="#6D6D6D"
                      />
                      <path
                        d="M12.9267 5.68131L12.2196 4.97421L12.9267 5.68131ZM8.58001 10.028L9.28712 10.7351V10.7351L8.58001 10.028ZM7.42001 10.028L8.12712 9.32087L7.42001 10.028ZM3.07335 5.68131L2.36624 6.38842H2.36624L3.07335 5.68131ZM2.36668 6.38798L3.07379 5.68087L2.36668 6.38798ZM6.71335 10.7346L6.00624 11.4418V11.4418L6.71335 10.7346ZM9.28668 10.7346L9.99379 11.4418L9.99046 11.4451L9.28668 10.7346ZM13.6333 6.38798L12.9262 5.68087L13.6333 6.38798ZM13.6333 5.68131L14.3157 4.95026L14.3283 4.96202L14.3405 4.97421L13.6333 5.68131ZM13.28 6.53465C13.4043 6.53465 13.5364 6.48584 13.6338 6.38842L12.2196 4.97421C12.517 4.67679 12.9024 4.53465 13.28 4.53465V6.53465ZM13.6338 6.38842L9.28712 10.7351L7.87291 9.32087L12.2196 4.97421L13.6338 6.38842ZM9.28712 10.7351C8.5766 11.4456 7.42343 11.4456 6.71291 10.7351L8.12712 9.32087C8.0566 9.25035 7.94343 9.25035 7.87291 9.32087L9.28712 10.7351ZM6.71291 10.7351L2.36624 6.38842L3.78045 4.97421L8.12712 9.32087L6.71291 10.7351ZM2.36624 6.38842C2.56343 6.58561 2.8766 6.58561 3.07379 6.38842L1.65957 4.97421C2.24343 4.39035 3.1966 4.39035 3.78045 4.97421L2.36624 6.38842ZM3.07379 6.38842C3.27098 6.19123 3.27098 5.87807 3.07379 5.68087L1.65957 7.09509C1.07572 6.51123 1.07572 5.55807 1.65957 4.97421L3.07379 6.38842ZM3.07379 5.68087L7.42045 10.0275L6.00624 11.4418L1.65957 7.09509L3.07379 5.68087ZM7.42045 10.0275C7.73477 10.3419 8.25748 10.3466 8.5829 10.0242L9.99046 11.4451C8.88922 12.536 7.10525 12.5408 6.00624 11.4418L7.42045 10.0275ZM8.57957 10.0275L12.9262 5.68087L14.3405 7.09509L9.99379 11.4418L8.57957 10.0275ZM12.9262 5.68087C12.729 5.87807 12.729 6.19123 12.9262 6.38842L14.3405 4.97421C14.9243 5.55807 14.9243 6.51123 14.3405 7.09509L12.9262 5.68087ZM12.951 6.41237C13.0155 6.4725 13.1264 6.53465 13.28 6.53465V4.53465C13.687 4.53465 14.0512 4.70346 14.3157 4.95026L12.951 6.41237Z"
                        fill="#6D6D6D"
                        mask="url(#path-1-inside-1_3646_25641)"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="review-bottom-sec">
            {reviews?.length > 0 &&
              reviews.map((item) => (
                <div key={item.id} className="review-bottom-box mb-3">
                  <div className="review-box d-flex align-items-center gap-2">
                    <h5>User name</h5>
                    <StarRating rating={item.rating} />
                  </div>
                  <p>{item?.comment}</p>
                  <div className="review-date-logo d-flex align-items-center gap-2 justify-content-between">
                    <h6> {formatDate(item.createdAt)}</h6>
                    <div className="d-flex align-items-center gap-1">
                      <span className="text">reviewed on</span>
                      <span className="icons">
                        <svg
                          width="56"
                          height="20"
                          viewBox="0 0 56 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.87278 2.50391C1.7344 2.50391 0.000976562 4.23733 0.000976562 6.37571C0.000976562 8.51409 1.7344 10.2475 3.87278 10.2475H7.74459V6.37571C7.74459 4.23733 6.01116 2.50391 3.87278 2.50391Z"
                            fill="#6200DD"
                          />
                          <path
                            d="M0.000976562 14.1189C0.000976562 16.2573 1.7344 17.9907 3.87278 17.9907C6.01116 17.9907 7.74459 16.2573 7.74459 14.1189V10.2471H3.87278C1.7344 10.2471 0.000976562 11.9805 0.000976562 14.1189Z"
                            fill="#FF8211"
                          />
                          <path
                            d="M15.4858 6.37571C15.4858 4.23733 13.7524 2.50391 11.614 2.50391C9.47561 2.50391 7.74219 4.23733 7.74219 6.37571V10.2475H11.614C13.7524 10.2475 15.4858 8.51409 15.4858 6.37571Z"
                            fill="#02CAB5"
                          />
                          <path
                            d="M11.414 16.0564C12.6975 16.0564 13.7381 15.0159 13.7381 13.7323C13.7381 12.4487 12.6975 11.4082 11.414 11.4082C10.1304 11.4082 9.08984 12.4487 9.08984 13.7323C9.08984 15.0159 10.1304 16.0564 11.414 16.0564Z"
                            fill="#CD99FE"
                          />
                          <path
                            d="M22.2783 10.4661C22.4023 11.3593 23.0494 11.9179 24.1198 11.9179C25.0905 11.9179 25.5884 11.4587 25.5884 10.8388C25.5884 10.3304 25.1772 9.93353 24.518 9.77181L23.0373 9.40003C21.482 9.00316 20.723 8.2215 20.723 6.91936C20.723 5.34396 22.0293 4.32715 23.7347 4.32715C25.539 4.32715 26.808 5.45642 27.0448 7.10618H25.4019C25.2154 6.25016 24.655 5.71666 23.7217 5.71666C22.9627 5.71666 22.3902 6.11353 22.3902 6.79574C22.3902 7.35433 22.7883 7.67685 23.4606 7.84973L24.9292 8.23452C26.559 8.65648 27.2565 9.40004 27.2565 10.7031C27.2565 12.1791 26.0248 13.3083 24.1077 13.3083C22.2037 13.3083 20.7855 12.1549 20.6484 10.468H22.2783V10.4661Z"
                            fill="#CD99FE"
                          />
                          <path
                            d="M33.5027 15.763V12.575C32.9302 13.0463 32.2206 13.3316 31.4374 13.3316C29.5213 13.3316 28.0024 11.8185 28.0024 9.95773C28.0024 8.10908 29.5203 6.58386 31.4374 6.58386C32.2216 6.58386 32.9432 6.8692 33.5158 7.35251V6.74466H35.1335V15.763H33.5027ZM31.5735 7.99754C30.5031 7.99754 29.6201 8.87865 29.6201 9.95773C29.6201 11.0489 30.504 11.9049 31.5735 11.9049C32.6561 11.9049 33.5269 11.0489 33.5269 9.95773C33.5269 8.87772 32.6561 7.99754 31.5735 7.99754Z"
                            fill="#CD99FE"
                          />
                          <path
                            d="M37.8822 6.74463V10.5033C37.8822 11.297 38.4175 11.8798 39.2137 11.8798C40.01 11.8798 40.5573 11.3212 40.5573 10.5033V6.74463H42.1872V13.1578H40.5573V12.5871C40.1089 13.0462 39.4869 13.3065 38.7904 13.3065C37.2846 13.3065 36.2514 12.2144 36.2514 10.8258V6.74463H37.8822Z"
                            fill="#CD99FE"
                          />
                          <path
                            d="M46.6172 11.8919C47.3016 11.8919 47.862 11.5694 48.2349 11.0609L49.3921 11.9049C48.745 12.7488 47.8741 13.3186 46.6172 13.3186C44.6265 13.3186 43.0833 11.8054 43.0833 9.94469C43.0833 8.08395 44.6265 6.58291 46.6172 6.58291C47.8741 6.58291 48.745 7.15358 49.3921 7.99658L48.2349 8.84052C47.862 8.33211 47.3016 8.0096 46.6172 8.0096C45.5598 8.0096 44.7011 8.86561 44.7011 9.94469C44.7011 11.0238 45.5598 11.8919 46.6172 11.8919Z"
                            fill="#CD99FE"
                          />
                          <path
                            d="M51.6942 13.1578H50.0643V4.47493H51.6942V7.30321C52.1427 6.83199 52.7767 6.57081 53.4863 6.57081C54.9791 6.57081 56.0001 7.67499 56.0001 9.07659V13.1578H54.3702V9.3991C54.3702 8.56818 53.835 8.0226 53.0387 8.0226C52.2545 8.0226 51.6942 8.54401 51.6942 9.3991V13.1578Z"
                            fill="#CD99FE"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="review-bottom-box mb-3">
              <div className="review-box d-flex align-items-center gap-2">
                <h5>User name</h5>
                <ul className="d-flex align-items-center gap-1">
                  <li>
                    <Link href="" className="raview">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
                          fill="#652669"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="raview">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
                          fill="#652669"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="raview">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
                          fill="#652669"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="raview">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
                          fill="#652669"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="raview">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.0683594L9.79611 5.59622H15.6085L10.9062 9.01263L12.7023 14.5405L8 11.1241L3.29772 14.5405L5.09383 9.01263L0.391548 5.59622H6.20389L8 0.0683594Z"
                          fill="#E7E7E7"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="review-date-logo d-flex align-items-center gap-2 justify-content-between">
                <h6>10 Sep 2024</h6>
                <div className="d-flex align-items-center gap-1">
                  <span className="text">reviewed on</span>
                  <span className="icons">
                    <svg
                      width="56"
                      height="20"
                      viewBox="0 0 56 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.87278 2.50391C1.7344 2.50391 0.000976562 4.23733 0.000976562 6.37571C0.000976562 8.51409 1.7344 10.2475 3.87278 10.2475H7.74459V6.37571C7.74459 4.23733 6.01116 2.50391 3.87278 2.50391Z"
                        fill="#6200DD"
                      />
                      <path
                        d="M0.000976562 14.1189C0.000976562 16.2573 1.7344 17.9907 3.87278 17.9907C6.01116 17.9907 7.74459 16.2573 7.74459 14.1189V10.2471H3.87278C1.7344 10.2471 0.000976562 11.9805 0.000976562 14.1189Z"
                        fill="#FF8211"
                      />
                      <path
                        d="M15.4858 6.37571C15.4858 4.23733 13.7524 2.50391 11.614 2.50391C9.47561 2.50391 7.74219 4.23733 7.74219 6.37571V10.2475H11.614C13.7524 10.2475 15.4858 8.51409 15.4858 6.37571Z"
                        fill="#02CAB5"
                      />
                      <path
                        d="M11.414 16.0564C12.6975 16.0564 13.7381 15.0159 13.7381 13.7323C13.7381 12.4487 12.6975 11.4082 11.414 11.4082C10.1304 11.4082 9.08984 12.4487 9.08984 13.7323C9.08984 15.0159 10.1304 16.0564 11.414 16.0564Z"
                        fill="#CD99FE"
                      />
                      <path
                        d="M22.2783 10.4661C22.4023 11.3593 23.0494 11.9179 24.1198 11.9179C25.0905 11.9179 25.5884 11.4587 25.5884 10.8388C25.5884 10.3304 25.1772 9.93353 24.518 9.77181L23.0373 9.40003C21.482 9.00316 20.723 8.2215 20.723 6.91936C20.723 5.34396 22.0293 4.32715 23.7347 4.32715C25.539 4.32715 26.808 5.45642 27.0448 7.10618H25.4019C25.2154 6.25016 24.655 5.71666 23.7217 5.71666C22.9627 5.71666 22.3902 6.11353 22.3902 6.79574C22.3902 7.35433 22.7883 7.67685 23.4606 7.84973L24.9292 8.23452C26.559 8.65648 27.2565 9.40004 27.2565 10.7031C27.2565 12.1791 26.0248 13.3083 24.1077 13.3083C22.2037 13.3083 20.7855 12.1549 20.6484 10.468H22.2783V10.4661Z"
                        fill="#CD99FE"
                      />
                      <path
                        d="M33.5027 15.763V12.575C32.9302 13.0463 32.2206 13.3316 31.4374 13.3316C29.5213 13.3316 28.0024 11.8185 28.0024 9.95773C28.0024 8.10908 29.5203 6.58386 31.4374 6.58386C32.2216 6.58386 32.9432 6.8692 33.5158 7.35251V6.74466H35.1335V15.763H33.5027ZM31.5735 7.99754C30.5031 7.99754 29.6201 8.87865 29.6201 9.95773C29.6201 11.0489 30.504 11.9049 31.5735 11.9049C32.6561 11.9049 33.5269 11.0489 33.5269 9.95773C33.5269 8.87772 32.6561 7.99754 31.5735 7.99754Z"
                        fill="#CD99FE"
                      />
                      <path
                        d="M37.8822 6.74463V10.5033C37.8822 11.297 38.4175 11.8798 39.2137 11.8798C40.01 11.8798 40.5573 11.3212 40.5573 10.5033V6.74463H42.1872V13.1578H40.5573V12.5871C40.1089 13.0462 39.4869 13.3065 38.7904 13.3065C37.2846 13.3065 36.2514 12.2144 36.2514 10.8258V6.74463H37.8822Z"
                        fill="#CD99FE"
                      />
                      <path
                        d="M46.6172 11.8919C47.3016 11.8919 47.862 11.5694 48.2349 11.0609L49.3921 11.9049C48.745 12.7488 47.8741 13.3186 46.6172 13.3186C44.6265 13.3186 43.0833 11.8054 43.0833 9.94469C43.0833 8.08395 44.6265 6.58291 46.6172 6.58291C47.8741 6.58291 48.745 7.15358 49.3921 7.99658L48.2349 8.84052C47.862 8.33211 47.3016 8.0096 46.6172 8.0096C45.5598 8.0096 44.7011 8.86561 44.7011 9.94469C44.7011 11.0238 45.5598 11.8919 46.6172 11.8919Z"
                        fill="#CD99FE"
                      />
                      <path
                        d="M51.6942 13.1578H50.0643V4.47493H51.6942V7.30321C52.1427 6.83199 52.7767 6.57081 53.4863 6.57081C54.9791 6.57081 56.0001 7.67499 56.0001 9.07659V13.1578H54.3702V9.3991C54.3702 8.56818 53.835 8.0226 53.0387 8.0226C52.2545 8.0226 51.6942 8.54401 51.6942 9.3991V13.1578Z"
                        fill="#CD99FE"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ShowAllReviewModal;
