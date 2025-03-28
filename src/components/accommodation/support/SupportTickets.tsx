"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

import LogoIcons from "../../../../public/images/logo-support.png";
import BackLink from "./BackLink";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SupportTickets = () => {
    return (
        <div className='sec-support-tickets chat-support-main'>
            <div className="support-tickets-content">
                <div className='chat-support-body'>
                    <SimpleBar style={{ maxHeight: '100%' }}>
                        <div className='chat-support-head text-center'>
                            <Image src={LogoIcons} alt="" />
                            <h2 className='ttl-support-tickets'>Support Tickets</h2>
                            <p className='m-0'>Please describe your concern</p>
                        </div>
                        <div className='d-flex mb-1'>
                            <div className='flex-grow-1'>
                                <div className='w-100'>
                                    <div className='d-flex flex-column align-items-start mesge-you'>
                                        <div className='bg-light chat-message'>Hii john! 👋</div>
                                        <div className='bg-light chat-message'>Share your destination, check-in date, and duration of stay—we will create the perfect stay plan for you! 👋</div>

                                        <div className='bg-light chat-message w-100'>
                                            <ul className="list-unstyled m-0">
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report a Scam
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Something about the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report Hotel Staff
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Report Service Partner
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="small">
                                            <Image src={LogoIcons} alt="" />
                                            12:54 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Something about the booking</div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mb-1'>
                            <div className='flex-grow-1'>
                                <div className='w-100'>
                                    <div className='d-flex flex-column align-items-start mesge-you'>
                                        <div className='bg-light chat-message'>Oh! We are sorry that you are facing issues with your booking, please select the booking you are facing the issue with</div>

                                        <div className='bg-light chat-message w-100'>
                                            <ul className="list-unstyled m-0">
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Booking cancelled after confirmation
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Demanded extra cash during check-in
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Booked room not available
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Want to cancel the booking
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radio-round d-flex align-items-center">
                                                        Other
                                                        <input type="radio" name="radio" />
                                                        <span className="check-mark-radio"></span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="small">
                                            <Image src={LogoIcons} alt="" />
                                            12:54 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Other</div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                </div>

                <div className='chat-support-footer'>
                    <div className='position-relative d-flex align-items-center w-100'>
                        <textarea className="form-control" data-autoresize="true" placeholder="Enter message here"></textarea>
                        <button className="btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="..." fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportTickets;
