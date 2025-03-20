"use client";
import React, { useState } from 'react'
import ModalPaymentDetails from './ModalPaymentDetails';

const BillingSummery = () => {
    const [show, setShow] = useState(false);
    const [showPaymentDetails, setShowPaymentDetails] = useState(false);
    return (
        <div className='sec-billingbox'>
            <div className='cardwhite cardshadow'>
                <div className='card-billing'>
                    <h3 className='card-billing-title'>Pay now to save time during check-in</h3>
                    <ul className='d-flex flex-column list-unstyled list-billing'>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Classic Room charges for  1 night * 1 Guest
                            </div>
                            <div className='text-right'>
                                ₵ 2050
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                instant discount
                            </div>
                            <div className='text-right'>
                                -₵ 2050
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Coupon Discount
                            </div>
                            <div className='text-right'>
                                -₵ 100
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Squch Donation
                            </div>
                            <div className='text-right'>
                                + -₵ 1
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                                Squch Insurance
                            </div>
                            <div className='text-right'>
                                + -₵ 10
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left fw-bold'>
                                Total Payable
                            </div>
                            <div className='text-right fw-bold'>
                                1750
                            </div>
                        </li>
                    </ul>
                    <button className='btn btn-primary btn-pay w-100' onClick={() => setShowPaymentDetails(true)}>
                        <span className='d-block textup'>Pay now</span>
                        <span className='d-block textbtm'>to book</span>
                        <span className='down'>
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </button>

                    <ModalPaymentDetails show={showPaymentDetails} handleClose={() => setShowPaymentDetails(false)} />
                
                </div>
            </div>
        </div>
    )
}

export default BillingSummery
