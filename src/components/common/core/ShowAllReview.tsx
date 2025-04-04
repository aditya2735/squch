"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';

const renderStars = (count: number = 0) => {
    const safeCount = Math.max(0, Math.floor(count)) || 0; // Ensure non-negative integer
    return (
        <ul className="d-flex align-items-center gap-1">
            {[...Array(safeCount)].map((_, i) => (
                <li key={i}>
                    <Image src="/images/rating.svg" alt="rating icon" height={17} width={18} />
                </li>
            ))}
        </ul>
    );
};


const ShowAllReviewModal = ({ show, handleClose }: any) => {

    const { review } = useAppSelector((state) => state.martStore);

    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter review-modal-sec pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>

            <Modal.Body className="review-modal-body">
                <div className='review-modal-sec'>

                    <div className='review-top-heading d-flex align-items-center justify-content-between gap-2'>
                        <div className='left-top-review'>
                            <h2>4.0</h2>
                            <span className='btn-light'>Very Good</span>
                        </div>
                        <div className="right-top-review">
                            {renderStars(review?.rating || 0)}
                            <span>{review?.reviews?.length || 0} ratings</span>
                        </div>
                    </div>
                    <div className='review-top-filter d-flex align-items-center justify-content-between gap-2'>
                        <div className='left-top-filter'>
                            <p>All {review?.reviews?.length} reviews</p>
                        </div>
                        <div className='right-top-filter'>
                            <ul className='d-flex align-items-center gap-2'>
                                <li>
                                    <Link href="" className='active btn btn-border'>All {review?.reviews?.length}</Link>
                                </li>
                                <li>
                                    <Link href="" className=' btn btn-border'>Squch(50)</Link>
                                </li>
                                <li>
                                    <Link href="" className=' btn btn-border'>Google(40)</Link>
                                </li>
                                <li>
                                    <Link href="" className='btn-modal d-flex align-items-center gap-2'>Sort by
                                        <Image src={"/images/dropdown.svg"} alt='sort icon' height={17} width={16} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='review-bottom-sec'>
                        {
                            review?.reviews?.map((review, index) => (
                                <div className='review-bottom-box mb-3'>
                                    <div className='review-box d-flex align-items-center gap-2'>
                                        <h5>{review.user.firstName}</h5>
                                        <ul className='d-flex align-items-center gap-1'>
                                            {
                                                [...Array(review.rating)].map((_, index) => (
                                                    <li key={index}>
                                                        <Link href="" className='raview'>
                                                            <Image src="/images/rating.svg" alt="rating icon" height={17} width={18} />
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <p>{review.review}</p>
                                    <div className='review-date-logo d-flex align-items-center gap-2 justify-content-between'>
                                        <h6>
                                            {new Date(review.createdAt).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </h6>
                                        <div className='d-flex align-items-center gap-1'>
                                            <span className='text'>reviewed on</span>
                                            <span className='icons'>
                                                <Image src={"/images/LogoSmall.svg"} height={20} width={56} alt='logo' />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ShowAllReviewModal