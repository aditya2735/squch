"use client";
import React from 'react'
import Image from "next/image";

import ImageBuldingBanner from "../../../public/images/bulding-img.png";
import ImageBookinLogo from "../../../public/images/logo-card.svg";
import ImageBus from "../../../public/images/bus-img.png";


import ImageTab1 from "../../../public/images/icon-tab-1.png";
import ImageTab2 from "../../../public/images/icon-tab-2.png";
import ImageTab3 from "../../../public/images/icon-tab-3.png";
import ImageTab4 from "../../../public/images/icon-tab-4.png";



import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ModalAddPassengers from './ModalAddPassengers';



const SearchBooking = () => {

    const [checkInDate, setCheckInDate] = useState<any>(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div className='bannerbooking'>
            <div className='sec-booking-main position-relative'>
                <div className='booking-banner'>
                    <Image src={ImageBuldingBanner} alt='' />
                </div>
            </div>

            <div className='card-booking-inner'>
                <div className='card-booking'>
                    <div className='card-logo'>
                        <Image src={ImageBookinLogo} alt='' />
                    </div>
                    <Nav className="d-flex booking-tabs">
                        <Nav.Item>
                            <Nav.Link href="/home/busbooking/squchbuslistofsubwaystation" eventKey="first">
                                <div className='Tabbox'>
                                    <Image src={ImageTab1} alt='' />
                                    <p className='m-0'>To Airport</p>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/home/busbooking/squchbuslistofsubwaystation"eventKey="second">
                                <div className='Tabbox'>
                                    <Image src={ImageTab2} alt='' />
                                    <p className='m-0'>Daily Transport</p>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/home/busbooking/squchbuslistofsubwaystation" eventKey="third">
                                <div className='Tabbox'>
                                    <Image src={ImageTab3} alt='' />
                                    <p className='m-0'>To Subway</p>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="" eventKey="four">
                                <div className='Tabbox'>
                                    <Image src={ImageTab4} alt='' />
                                    <p className='m-0'>Plan A Trip</p>
                                </div>
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    <div className='busImagecard'>
                        <Image src={ImageBus} alt='' />
                    </div>
                    <div className='search-wrapper'>
                        <div className='d-lg-flex gap-20'>
                            <div className='flex-grow-1'>
                                <div className='form-group'>
                                    <label className='label'>From</label>
                                    <div className='form-fild'>
                                        <input type="text" className="form-control" placeholder="city / current location" />
                                        <div className='iconbox'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.9999 11.8083C8.2249 11.8083 6.7749 10.3666 6.7749 8.5833C6.7749 6.79997 8.2249 5.36664 9.9999 5.36664C11.7749 5.36664 13.2249 6.80831 13.2249 8.59164C13.2249 10.375 11.7749 11.8083 9.9999 11.8083ZM9.9999 6.61664C8.91657 6.61664 8.0249 7.49997 8.0249 8.59164C8.0249 9.6833 8.90824 10.5666 9.9999 10.5666C11.0916 10.5666 11.9749 9.6833 11.9749 8.59164C11.9749 7.49997 11.0832 6.61664 9.9999 6.61664Z" fill="#838383" />
                                                <path d="M9.9999 18.9667C8.76657 18.9667 7.5249 18.5 6.55824 17.575C4.0999 15.2084 1.38324 11.4334 2.40824 6.94169C3.33324 2.86669 6.89157 1.04169 9.9999 1.04169C9.9999 1.04169 9.9999 1.04169 10.0082 1.04169C13.1166 1.04169 16.6749 2.86669 17.5999 6.95002C18.6166 11.4417 15.8999 15.2084 13.4416 17.575C12.4749 18.5 11.2332 18.9667 9.9999 18.9667ZM9.9999 2.29169C7.5749 2.29169 4.45824 3.58335 3.63324 7.21669C2.73324 11.1417 5.1999 14.525 7.43324 16.6667C8.8749 18.0584 11.1332 18.0584 12.5749 16.6667C14.7999 14.525 17.2666 11.1417 16.3832 7.21669C15.5499 3.58335 12.4249 2.29169 9.9999 2.29169Z" fill="#838383" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='btn-flip-icon'>
                                        <button className='flip-btn'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.3335 2L2.66683 4.66667M2.66683 4.66667L5.3335 7.33333M2.66683 4.66667H13.3335M10.6668 14L13.3335 11.3333M13.3335 11.3333L10.6668 8.66667M13.3335 11.3333H2.66683" stroke="#652669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-grow-1'>
                                <div className='form-group'>
                                    <label className='label'>To</label>
                                    <div className='form-fild'>
                                        <input type="text" className="form-control" placeholder="Destination" />
                                        <div className='iconbox'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.9835 17.6083C16.8169 17.6083 16.6585 17.5417 16.5419 17.425L11.2252 12.1083C10.9835 11.8666 10.9835 11.4667 11.2252 11.225L17.6669 4.78332C17.8252 4.62499 18.0669 4.56665 18.2835 4.62499C18.5002 4.69165 18.6669 4.86666 18.7169 5.08332C18.8752 5.79166 18.9585 6.58332 18.9585 7.49998V12.5C18.9585 14.8083 18.4752 16.3667 17.4252 17.425C17.3085 17.5417 17.1335 17.5667 16.9835 17.6083ZM12.5502 11.6666L16.9335 16.05C17.4585 15.2416 17.7085 14.0916 17.7085 12.5V7.49998C17.7085 7.15832 17.7002 6.84166 17.6752 6.54166L12.5502 11.6666Z" fill="#838383" />
                                                <path d="M5.22483 18.7334C5.17483 18.7334 5.13318 18.725 5.08318 18.7167C2.32484 18.0834 1.0415 16.1084 1.0415 12.5V7.50002C1.0415 2.97502 2.97484 1.04169 7.49984 1.04169H12.4998C16.1082 1.04169 18.0832 2.32503 18.7165 5.08336C18.7665 5.29169 18.6998 5.51669 18.5498 5.66669L5.66649 18.55C5.54983 18.6667 5.3915 18.7334 5.22483 18.7334ZM7.49984 2.29169C3.65817 2.29169 2.2915 3.65835 2.2915 7.50002V12.5C2.2915 15.3917 3.09151 16.8417 5.03318 17.4167L17.4082 5.04169C16.8415 3.10002 15.3832 2.30002 12.4915 2.30002H7.49984V2.29169Z" fill="#838383" />
                                                <path d="M12.4998 18.9583H7.49982C6.58316 18.9583 5.79983 18.8834 5.08316 18.7167C4.85816 18.6667 4.68315 18.5 4.62481 18.2833C4.55815 18.0667 4.62482 17.8333 4.78315 17.6667L11.2248 11.225C11.4665 10.9833 11.8665 10.9833 12.1082 11.225L17.4248 16.5417C17.5415 16.6583 17.6082 16.8167 17.6082 16.9833C17.6082 17.15 17.5415 17.3083 17.4248 17.425C16.3665 18.475 14.8082 18.9583 12.4998 18.9583ZM6.5415 17.675C6.8415 17.7 7.15816 17.7083 7.49982 17.7083H12.4998C14.0998 17.7083 15.2415 17.4584 16.0498 16.9334L11.6665 12.55L6.5415 17.675Z" fill="#838383" />
                                                <path d="M7.60011 11.0916C7.07511 11.0916 6.55011 10.9 6.13344 10.5083C4.80844 9.24996 4.27513 7.86663 4.59179 6.51663C4.90846 5.1333 6.11678 4.19995 7.60011 4.19995C9.08345 4.19995 10.2918 5.1333 10.6085 6.51663C10.9168 7.87496 10.3834 9.24996 9.05845 10.5083C8.65011 10.8916 8.12511 11.0916 7.60011 11.0916ZM5.80845 6.79162C5.54179 7.92495 6.30845 8.94163 7.00011 9.59996C7.34178 9.92496 7.86678 9.92496 8.20011 9.59996C8.88345 8.94996 9.65011 7.93328 9.39178 6.79162C9.16677 5.79995 8.28345 5.44162 7.60011 5.44162C6.91678 5.44162 6.04179 5.79995 5.80845 6.79162Z" fill="#838383" />
                                                <path d="M7.62484 7.9083C7.1665 7.9083 6.7915 7.5333 6.7915 7.07497C6.7915 6.61664 7.15817 6.24164 7.62484 6.24164H7.63318C8.09151 6.24164 8.46651 6.61664 8.46651 7.07497C8.46651 7.5333 8.08317 7.9083 7.62484 7.9083Z" fill="#838383" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto field-small'>
                                <div className='form-group'>
                                    <label className='label'>Date</label>
                                    <div className='form-fild'>
                                        <DatePicker
                                            selected={checkInDate}
                                            onChange={(date) => setCheckInDate(date)}
                                            placeholderText="DD/MM/YYYY"
                                            className="calendar-picker form-control"
                                        />

                                        <div className='iconbox'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.6665 1.66669V4.16669" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M13.3335 1.66669V4.16669" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M2.9165 7.57501H17.0832" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M16.0085 13.1417L13.0585 16.0917C12.9419 16.2084 12.8335 16.425 12.8085 16.5834L12.6502 17.7084C12.5919 18.1167 12.8752 18.4 13.2835 18.3417L14.4085 18.1834C14.5669 18.1584 14.7919 18.05 14.9002 17.9334L17.8502 14.9834C18.3585 14.475 18.6002 13.8834 17.8502 13.1334C17.1085 12.3917 16.5169 12.6334 16.0085 13.1417Z" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.5835 13.5667C15.8335 14.4667 16.5335 15.1667 17.4335 15.4167" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08335C2.5 4.58335 3.75 2.91669 6.66667 2.91669H13.3333C16.25 2.91669 17.5 4.58335 17.5 7.08335V10" stroke="#838383" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M9.99607 11.4167H10.0036" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.91209 11.4167H6.91957" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.91209 13.9167H6.91957" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto field-small'>
                                <div className='form-group'>
                                    <label className='label'>Passengers</label>
                                    <div className='form-fild'>
                                        <button className='btn minus'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.93343 18.3334C14.5168 18.3334 18.2668 14.5834 18.2668 10C18.2668 5.41669 14.5168 1.66669 9.93343 1.66669C5.3501 1.66669 1.6001 5.41669 1.6001 10C1.6001 14.5834 5.3501 18.3334 9.93343 18.3334Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.6001 10H13.2668" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                        <input type="text" className="form-control text-center" placeholder="01" />
                                        <button className='btn plus'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0003 18.3334C14.5837 18.3334 18.3337 14.5834 18.3337 10C18.3337 5.41669 14.5837 1.66669 10.0003 1.66669C5.41699 1.66669 1.66699 5.41669 1.66699 10C1.66699 14.5834 5.41699 18.3334 10.0003 18.3334Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.66699 10H13.3337" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10 13.3334V6.66669" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-lg-flex align-items-center start-searching'>
                        <div className='flex-grow-1'>
                            <Form.Check
                                type="checkbox"
                                id="custom-checkbox"
                                label="Traveling with children, senior citizens, Specially Abled Person or  a person with wheelchair."
                            />
                        </div>
                        <div className='ms-auto'>
                            <button className='btn btn-primary' onClick={handleShow} >Start Searching </button>
                        </div>
                    </div>

                </div>
            </div>

            <ModalAddPassengers show={show} handleClose={handleClose} />

        </div>
    )
}

export default SearchBooking
