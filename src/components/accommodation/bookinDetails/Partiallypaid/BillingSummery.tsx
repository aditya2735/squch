"use client";
import React, { useState } from 'react'

const BillingSummery = () => {
    return (
        <div className='sec-billingbox'>
            <div className='cardwhite cardshadow'>
                <div className='card-billing'>
                    <h3 className='card-billing-title'>Billing Summery</h3>
                    <ul className='d-flex flex-column list-unstyled list-billing mb-0'>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                            Payment Mode
                            </div>
                            <div className='text-right'>
                            Card
                            </div>
                        </li>
                        <li className='d-flex align-items-center pt-0 py-2 border-bottom justify-content-between'>
                            <div className='text-left'>
                            Payment Type
                            </div>
                            <div className='text-right'>
                            Partial Pay 
                            </div>
                        </li>
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
                                -₵ 150
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
                                +₵ 1
                            </div>
                        </li>
                        <li className='d-flex align-items-center justify-content-between'>
                            <div className='text-left'>
                            Squch Insurance
                            </div>
                            <div className='text-right'>
                                +₵ 10
                            </div>
                        </li>
                        <li className='d-flex align-items-center border-top py-3 justify-content-between pb-0'>
                            <div className='text-left fw-bold'>
                            Total Paid
                            </div>
                            <div className='text-right fw-bold'>
                            ₵ 1750
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='btn btn-primary  w-100 mt-3'>
                    <span className='d-block textup'>Proceed to pay</span>
                </button>
                <button className="btn btn-primary w-100 btn-cancel-booking mt-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.6367C21.4688 11.957 21.8867 12.3203 22.2539 12.7266C22.6211 13.1328 22.9375 13.5781 23.2031 14.0625C23.4688 14.5469 23.6641 15.0586 23.7891 15.5977C23.9141 16.1367 23.9844 16.6875 24 17.25C24 18.1797 23.8242 19.0547 23.4727 19.875C23.1211 20.6953 22.6367 21.4102 22.0195 22.0195C21.4023 22.6289 20.6875 23.1094 19.875 23.4609C19.0625 23.8125 18.1875 23.9922 17.25 24C16.5391 24 15.8516 23.8945 15.1875 23.6836C14.5234 23.4727 13.9141 23.168 13.3594 22.7695C12.8047 22.3711 12.3125 21.8945 11.8828 21.3398C11.4531 20.7852 11.1211 20.1719 10.8867 19.5H1.5V1.5H4.5V0H6V1.5H16.5V0H18V1.5H21V11.6367ZM3 3V6H19.5V3H18V4.5H16.5V3H6V4.5H4.5V3H3ZM10.5352 18C10.5117 17.7578 10.5 17.5078 10.5 17.25C10.5 16.5781 10.5938 15.9258 10.7812 15.293C10.9688 14.6602 11.2539 14.0625 11.6367 13.5H10.5V12H12V13.0078C12.3203 12.6094 12.6758 12.2578 13.0664 11.9531C13.457 11.6484 13.8789 11.3867 14.332 11.168C14.7852 10.9492 15.2578 10.7852 15.75 10.6758C16.2422 10.5664 16.7422 10.5078 17.25 10.5C18.0312 10.5 18.7812 10.6289 19.5 10.8867V7.5H3V18H10.5352ZM17.25 22.5C17.9766 22.5 18.6562 22.3633 19.2891 22.0898C19.9219 21.8164 20.4766 21.4414 20.9531 20.9648C21.4297 20.4883 21.8047 19.9336 22.0781 19.3008C22.3516 18.668 22.4922 17.9844 22.5 17.25C22.5 16.5234 22.3633 15.8438 22.0898 15.2109C21.8164 14.5781 21.4414 14.0234 20.9648 13.5469C20.4883 13.0703 19.9336 12.6953 19.3008 12.4219C18.668 12.1484 17.9844 12.0078 17.25 12C16.5234 12 15.8438 12.1367 15.2109 12.4102C14.5781 12.6836 14.0234 13.0586 13.5469 13.5352C13.0703 14.0117 12.6953 14.5664 12.4219 15.1992C12.1484 15.832 12.0078 16.5156 12 17.25C12 17.9766 12.1367 18.6562 12.4102 19.2891C12.6836 19.9219 13.0586 20.4766 13.5352 20.9531C14.0117 21.4297 14.5664 21.8047 15.1992 22.0781C15.832 22.3516 16.5156 22.4922 17.25 22.5ZM4.5 12H6V13.5H4.5V12ZM7.5 12H9V13.5H7.5V12ZM7.5 9H9V10.5H7.5V9ZM7.5 15H9V16.5H7.5V15ZM12 10.5H10.5V9H12V10.5ZM15 10.5H13.5V9H15V10.5ZM4.5 9H6V10.5H4.5V9Z" fill="#F35940"></path><path d="M15.45 19.5L15 19.05L16.8 17.25L15 15.45L15.45 15L17.25 16.8L19.05 15L19.5 15.45L17.7 17.25L19.5 19.05L19.05 19.5L17.25 17.7L15.45 19.5Z" fill="#F35940"></path></svg>Cancel Booking
                </button>
                <button className='btn btn-primary w-100 btnpay'>
                    <span className='d-block textup'>Request Date Change</span>
                </button>
            </div>
        </div>
    )
}

export default BillingSummery
