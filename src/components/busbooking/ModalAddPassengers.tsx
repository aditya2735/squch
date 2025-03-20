"use client";
import React from 'react'
import Image from "next/image";

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CloseModal from "../../../public/images/close-modal.png";

const ModalAddPassengers = ({show,handleClose}:any) => {
        const [checkInDate, setCheckInDate] = useState(null);
        const [checkOutDate, setCheckOutDate] = useState(null);
        // const [show, setShow] = useState(false);
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
  return (
    <div>
    <Modal show={show} onHide={handleClose} centered className="modal-filter modal-passenger details pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="filter-modal-body">

            <div className='modal-block-header text-center'>
                <h2 className='modal-title'>Passenger Details</h2>
                <p>Please provide additional information about the travellers, it will help us to serve you the best.</p>
            </div>

            <div className='row'>
                <div className='col-md-4'>
                    <div className='form-group modal-form-group'>
                        <div className='flex-grow-1'>
                            <label className='label'>Adults</label>
                            <p>(18 years or above) </p>
                        </div>
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
                <div className='col-md-4'>
                    <div className='form-group modal-form-group'>
                        <div className='flex-grow-1'>
                            <label className='label'>Children</label>
                            <p>2 to 15 years </p>
                        </div>

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
                <div className='col-md-4'>
                    <div className='form-group modal-form-group'>
                        <div className='flex-grow-1'>
                            <label className='label'>Needs Special Care</label>
                            <p>Senior Citizens or People with Wheelchair</p>
                        </div>

                        <div className='form-fild'>
                            <button className='btn minus'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.93343 18.3334C14.5168 18.3334 18.2668 14.5834 18.2668 10C18.2668 5.41669 14.5168 1.66669 9.93343 1.66669C5.3501 1.66669 1.6001 5.41669 1.6001 10C1.6001 14.5834 5.3501 18.3334 9.93343 18.3334Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.6001 10H13.2668" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                            <input type="text" className="form-control text-center" placeholder="00" />
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

        </Modal.Body>
        <Modal.Footer className="modal-footer-box">
            <button className='btn btn-primary w-100'>Save & Proceed</button>
        </Modal.Footer>
    </Modal>
</div>
  )
}

export default ModalAddPassengers
