"use client";
import React, { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';

const ModalOtpVerification = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);

    useEffect(() => {
        if (!show) {
            resetForm();
        }
    }, [show]);

    const resetForm = () => { 
        setOtp(Array(6).fill(""));
        setIsOtpComplete(false);
    };

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (!/^[0-9]?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setIsOtpComplete(newOtp.every((digit) => digit !== ""));

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const submitOtp = async () => {
        console.log("Submitting OTP:", otp.join(""));
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            alert("OTP Verified Successfully!");
            handleClose();
        } catch (error) {
            console.error("OTP verification failed", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter modal-login-signup pt-4">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="Close Modal" />
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
                            {Array.from({ length: 6 }).map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="otp-input form-control"
                                    maxLength={1}
                                    ref={(el) => { inputRefs.current[index] = el; }}
                                    value={otp[index]}
                                    onChange={(event) => handleChange(index, event)}
                                    onKeyDown={(event) => handleKeyDown(index, event)}
                                    required
                                />
                            ))}
                        </div>
                        <p className="resend-text m-0">Didn’t get a code? <Link href="#" className="resend-link">Send again</Link></p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className='flex-grow-1'>
                    <button className='btn btn-primary w-100' disabled={!isOtpComplete} onClick={submitOtp}>Continue</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalOtpVerification;
