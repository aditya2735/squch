"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ImagesLogoReviews from "../../../../public/images/logo-reviews.svg"
import ShowAllReviewModal from './ShowAllReview';


const RatingAndReviews = () => {
        const [showReviewModal, setShowReviewModal] = useState(false);
    return (
        <div className='sec-rating-reviews mb-24'>
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">Rating & reviews</h2>
                </div>
            </div>
            <div className='d-flex'>
                <div className='rating-box'>
                    <h2 className='rating-rank'>4.0</h2>
                    <span className='bedge badge-good'>Good</span>
                </div>
                <div className='sec-block-rating align-self-end'>
                    <ul className='d-flex list-unstyled m-0'>
                        <li>4 ratings</li>
                        <li>5 reviews</li>
                    </ul>
                </div>
            </div>
            <div className='rating-feedbak-list'>
                <ul className='row list-unstyled'>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Sanitisation</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Facilities</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Breakfast</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Location</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Hotel Staff</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                    <li className='col-md-6'>
                        <div className='bar-progress'>
                            <div className='d-flex align-items-center'>
                                <label>Check-in rating</label>
                                <div className='ms-auto'>
                                    4.0
                                </div>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </li>
                </ul>
                <div className='reviewed-card-list'>
                    <div className='reviewed-card-item'>
                        <h3 className='use-name-ttl'>User name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className='d-flex align-items-center'>
                            <div className='reviewed-date'>
                                10 Sep 2024
                            </div>
                            <div className='ms-auto'>
                                <div className='d-flex align-items-center'>
                                    <p className='m-0'>Reviewed on</p> <Image src={ImagesLogoReviews} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviewed-card-item'>
                        <h3 className='use-name-ttl'>User name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className='d-flex align-items-center'>
                            <div className='reviewed-date'>
                                10 Sep 2024
                            </div>
                            <div className='ms-auto'>
                                <div className='d-flex align-items-center'>
                                    <p className='m-0'>Reviewed on</p> <Image src={ImagesLogoReviews} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviewed-card-item'>
                        <h3 className='use-name-ttl'>User name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <div className='d-flex align-items-center'>
                            <div className='reviewed-date'>
                                10 Sep 2024
                            </div>
                            <div className='ms-auto'>
                                <div className='d-flex align-items-center'>
                                    <p className='m-0'>Reviewed on</p> <Image src={ImagesLogoReviews} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn btn-white w-100 btn-view-reviewed'  onClick={() => setShowReviewModal(true)}>Show All reviews</button>
            </div>

            
            <ShowAllReviewModal show={showReviewModal} handleClose={() => setShowReviewModal(false)} />

        </div>
    )
}

export default RatingAndReviews
