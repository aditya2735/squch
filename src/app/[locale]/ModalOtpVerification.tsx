"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../public/images/close-modal.png";
import Link from 'next/link';

const ModalOtpVerification = ({ show, handleClose }: any) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter modal-login-signup  pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="review-modal-body">
                <div className='card-modal-signin-main'>
                    <div className='heading-ttl-login-signup text-center'>
                        Confirm your number
                    </div>
                    <div className='form-group-single mb-16'>
                        <label>Enter the code we sent over SMS to 1 (222) 900-5585:</label>
                        <div className="otp-inputs d-flex align-items-center justify-content-between mb-24">
                            <input type="text" className="otp-input form-control" />
                            <input type="text" className="otp-input form-control" />
                            <input type="text" className="otp-input form-control" />
                            <input type="text" className="otp-input form-control" />
                            <input type="text" className="otp-input form-control" />
                            <input type="text" className="otp-input form-control" />
                        </div>


                        <p className="resend-text m-0">Didn’t get a code? <Link href="#" className="resend-link">Send again</Link></p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                    <div className='flex-grow-1'>
                        <button className='btn btn-primary w-100' disabled>Continue</button>
                    </div>
                </Modal.Footer>
        </Modal>
    )
}

export default ModalOtpVerification
