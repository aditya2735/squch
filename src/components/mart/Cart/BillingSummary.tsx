"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { useState } from 'react';
import Timer from "../../../../public/images/timer.svg";
import Bill from "../../../../public/images/bill.svg";
import Calender from "../../../../public/images/calender.svg";
import WhatsappUpdates from './WhatsappUpdates';
import PaymentDetailModal from './PaymentDetailModal';
import CancelBookingModal from './CancelBookingModal';
import { useAppSelector } from '@/store/hooks';

const BillingSummary: React.FC = () => {

    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    const [showCancelBooking, setShowCancelBooking] = useState(false);
    const { totalPrice, discountAmount, finalAmount, cartAmount, currency, tipAmount } = useAppSelector((state) => state.martCart);

    return (
        <div className='sec-billingbox'>
            <div className='cardwhite cardshadow'>
                <div className='card-billing'>
                    <h3 className='card-billing-title'>Billing Summery</h3>
                    <ul className='d-flex flex-column list-unstyled list-billing'>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Payment Mode
                            </div>
                            <div className='text-right'>
                                Card
                            </div>
                        </li>
                        {/* <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                table booking * 2 Guest
                            </div>
                            <div className='text-right'>
                                -₵ 2050
                            </div>
                        </li> */}
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Total amount
                            </div>
                            <div className='text-right'>
                                {cartAmount}
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Coupon Discount
                            </div>
                            <div className='text-right'>
                                {discountAmount}
                            </div>
                        </li>
                        {/* <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Squch Donation
                            </div>
                            <div className='text-right'>
                                + ₵ 1
                            </div>
                        </li> */}
                        {tipAmount !== null && tipAmount > 0 && (
                            <li className='d-flex align-items-center justify-content-between'>
                                <div className='text-left'>
                                    Tip
                                </div>
                                <div className='text-right'>
                                    + ₵ {tipAmount}
                                </div>
                            </li>
                        )}

                        <li className='d-flex align-items-center justify-content-between border-top py-3'>
                            <div className='text-left fw-bold'>
                                Total Paid
                            </div>
                            <div className='text-right fw-bold'>
                                {finalAmount} {currency}
                            </div>
                        </li>
                    </ul>
                    <div className='summary-container'>
                        <div className="summary-item">
                            <Link href="">
                                <span className='d-flex align-items-center'>
                                    <span className="summary-icon">
                                        <Image src={Timer} alt='timer icon' />
                                    </span>
                                    <span className="text flex-grow-1">Delivery in 30 mins</span>
                                    <span className="arrow ms-auto"><i className="bi bi-chevron-right"></i></span>
                                </span>
                            </Link>
                        </div>
                        <div className="summary-item">
                            <Link href="">
                                <span className='d-flex align-items-center'>
                                    <span className="summary-icon">
                                        <Image src={Bill} alt='bill icon' />
                                    </span>
                                    <span className="text flex-grow-1">Total Bill
                                        <span className='price-original'> {totalPrice} </span>
                                        {finalAmount}
                                    </span>
                                    <span className="arrow ms-auto">
                                        <i className="bi bi-chevron-right"></i>
                                    </span>
                                </span>
                                <div className='ps-box'>
                                    <div className='saved-text'>
                                        you saved {discountAmount}
                                    </div>
                                    <p className='m-0 incl-changes'>
                                        Incl. taxes and changes
                                    </p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <button className='btn btn-primary w-100 btn-cancel-booking' onClick={() => setShowCancelBooking(true)}>
                        <Image src={Calender} alt="calender icon" />
                        Cancel Booking
                    </button>
                    <button className='btn btn-primary w-100' onClick={() => setShowPaymentDetails(true)}>
                        Proceed to Pay
                    </button>
                    <WhatsappUpdates />
                    <PaymentDetailModal show={showPaymentDetails} handleClose={() => setShowPaymentDetails(false)} />
                    <CancelBookingModal show={showCancelBooking} handleClose={() => setShowCancelBooking(false)} />
                </div>
            </div>
        </div>
    )
}

export default BillingSummary