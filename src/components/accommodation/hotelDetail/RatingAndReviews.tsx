"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "react-bootstrap/ProgressBar";
import ImagesLogoReviews from "../../../../public/images/logo-reviews.svg";
import { useAppSelector } from "@/store/hooks";
import { formatDate } from "@/utils/formatData";
import { Review } from "@/store/features/accommodation/types/hotelTypes";
import ShowAllReviewModal from "./ShowAllReviewModal";
const RatingAndReviews = () => {
  const {avg_ratings: avgRating, total_ratings: totalRating,reviews, categoryRatings} = useAppSelector((state) => state.hotelDetail.data);
  const [showReviewModal, setShowReviewModal] = useState(false);

  return (
    <div className="sec-rating-reviews mb-24">
      <div className="block-header">
        <div className="d-flex align-item-center">
          <h2 className="heading02 m-0">Rating & reviews</h2>
        </div>
      </div>
      <div className="d-flex">
        <div className="rating-box">
          <h2 className="rating-rank">{avgRating}</h2>
          <span className="bedge badge-good">Good</span>
        </div>
        <div className="sec-block-rating align-self-end">
          <ul className="d-flex list-unstyled m-0">
            <li>{totalRating} ratings</li>
            <li>{reviews?.length} reviews</li>
          </ul>
        </div>
      </div>
      <div className="rating-feedbak-list">
        <ul className="row list-unstyled">
          {categoryRatings &&
            Object.entries(categoryRatings).length > 0 &&
            Object.entries(categoryRatings).map(([key, value]) => (
              <li className="col-md-6" key={key}>
                <div className="bar-progress">
                  <div className="d-flex align-items-center">
                    <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <div className="ms-auto">{Number(value).toFixed(1)}</div>
                  </div>
                  <ProgressBar variant="success" now={Number(value) * 20} />{" "}
                  {/* Assuming 5 = 100% */}
                </div>
              </li>
            ))}
        </ul>
        <div className="reviewed-card-list">
          {reviews?.length > 0 &&
            reviews.slice(0, 3).map((item: Review) => (
              <div key={item.id} className="reviewed-card-item">
                <h3 className="use-name-ttl">{item.user.firstName} {item.user.lastName}</h3>
                <p>{item.comment}</p>
                <div className="d-flex align-items-center">
                  <div className="reviewed-date">
                    {/* 10 Sep 2024 */}
                    {formatDate(item.createdAt)}
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex align-items-center">
                      <p className="m-0">Reviewed on</p>{" "}
                      <Image src={ImagesLogoReviews} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <button
          className="btn btn-white w-100 btn-view-reviewed"
          onClick={() => setShowReviewModal(true)}
        >
          Show All reviews
        </button>
      </div>
      <ShowAllReviewModal
        show={showReviewModal}
        handleClose={() => setShowReviewModal(false)}
      />
    </div>
  );
};

export default RatingAndReviews;
