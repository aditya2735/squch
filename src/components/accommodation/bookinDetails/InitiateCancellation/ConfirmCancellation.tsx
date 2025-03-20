"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import CancelBookingModal from './CancelBookingModal'

const ConfirmCancellation = () => {
    const [showCancelBooking, setShowCancelBooking] = useState(false);
  return (
    <div className='bg-white rounded-radius confirmCancellation-sec'>
        <div className='cancellation-box'>
            <h6>Confirm Cancellation</h6>
            <ul>
                <li className='d-flex align-items-center justify-content-between gap-3'>
                    <span className='left-text'>Total Paid</span>
                    <span className='right-text'>₵ 1750</span>
                </li>
                <li className='d-flex align-items-center justify-content-between gap-3'>
                    <span className='left-text'>Cancellation Charges</span>
                    <span className='right-text'> - ₵ 1750</span>
                </li>
                <li className='d-flex align-items-center justify-content-between gap-3'>
                    <span className='left-text'>Total Refund</span>
                    <span className='right-text'> ₵ 0</span>
                </li>
            </ul>
            <Link href="" className='btn btn-danger-cancellation' onClick={() => setShowCancelBooking(true)}>Cancel My Booking</Link>
        </div>
        <CancelBookingModal show={showCancelBooking} handleClose={() => setShowCancelBooking(false)} />
    </div>
    
  )
}

export default ConfirmCancellation