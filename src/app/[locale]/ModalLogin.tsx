"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../public/images/close-modal.png";
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import "./flags.css"; // Import flag styles


const ModalLogin = ({ show, handleClose }: any) => {

    const [showOtpVerification, setOtpVerification] = useState(false);


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
                        Log in or sign up to Squch
                    </div>
                    <div className='form-group-single mb-16'>
                        <label>Phone number</label>
                        <div className='form-languageswitcher d-flex'>
                         <LanguageSwitcher/>
                            <div className='flex-grow-1'>
                            <input type='text' placeholder='Phone number' className='form-control' />
                            </div>
                        </div>
                        <small className='d-block'>We’ll call or text you to confirm your number. Standard message and data rates apply.</small>
                    </div>
                    <div className='mb-16'>
                        <button className='btn btn-primary w-100'>Continue</button>
                    </div>
                    <div className='sec-or mb-16'>
                        <div className='d-flex align-items-center'>
                            <div className='divider-col flex-grow-1'>
                                <div className="dropdown-divider"></div>
                            </div>
                            <div className='px-2'>Or</div>
                            <div className='divider-col flex-grow-1'>
                                <div className="dropdown-divider"></div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-socail-link'>
                        <ul className='list-unstyled m-0'>
                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1667 17.7084H5.83335C2.79169 17.7084 1.04169 15.9584 1.04169 12.9167V7.08335C1.04169 4.04169 2.79169 2.29169 5.83335 2.29169H14.1667C17.2084 2.29169 18.9584 4.04169 18.9584 7.08335V12.9167C18.9584 15.9584 17.2084 17.7084 14.1667 17.7084ZM5.83335 3.54169C3.45002 3.54169 2.29169 4.70002 2.29169 7.08335V12.9167C2.29169 15.3 3.45002 16.4584 5.83335 16.4584H14.1667C16.55 16.4584 17.7084 15.3 17.7084 12.9167V7.08335C17.7084 4.70002 16.55 3.54169 14.1667 3.54169H5.83335Z" fill="#292D32" />
                                            <path d="M9.99979 10.725C9.29979 10.725 8.59146 10.5083 8.0498 10.0666L5.44146 7.98331C5.17479 7.76664 5.1248 7.37497 5.34146 7.10831C5.55813 6.84164 5.9498 6.79164 6.21647 7.00831L8.82479 9.09164C9.45812 9.59998 10.5331 9.59998 11.1665 9.09164L13.7748 7.00831C14.0415 6.79164 14.4415 6.83331 14.6498 7.10831C14.8665 7.37497 14.8248 7.77498 14.5498 7.98331L11.9415 10.0666C11.4081 10.5083 10.6998 10.725 9.99979 10.725Z" fill="#292D32" />
                                        </svg>

                                    </span>
                                    Continue with Email
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7920_20739)">
                                                <path d="M9.99988 8.18176V12.0545H15.3817C15.1454 13.2999 14.4362 14.3545 13.3726 15.0636L16.618 17.5818C18.5089 15.8364 19.5998 13.2728 19.5998 10.2273C19.5998 9.51824 19.5362 8.83636 19.418 8.18187L9.99988 8.18176Z" fill="#4285F4" />
                                                <path d="M4.39555 11.9033L3.66358 12.4636L1.07263 14.4818C2.71808 17.7454 6.09056 20 9.99962 20C12.6996 20 14.9632 19.1091 16.6177 17.5818L13.3723 15.0636C12.4814 15.6636 11.345 16.0273 9.99962 16.0273C7.39963 16.0273 5.19061 14.2728 4.39964 11.9091L4.39555 11.9033Z" fill="#34A853" />
                                                <path d="M1.07265 5.51819C0.390868 6.86359 0 8.38179 0 9.99994C0 11.6181 0.390868 13.1363 1.07265 14.4817C1.07265 14.4907 4.39998 11.8999 4.39998 11.8999C4.19998 11.2999 4.08177 10.6636 4.08177 9.99984C4.08177 9.33612 4.19998 8.69979 4.39998 8.0998L1.07265 5.51819Z" fill="#FBBC05" />
                                                <path d="M9.99982 3.98182C11.4726 3.98182 12.7816 4.49089 13.8271 5.47272L16.6907 2.60912C14.9543 0.990971 12.6999 0 9.99982 0C6.09076 0 2.71808 2.24545 1.07263 5.51819L4.39986 8.10001C5.19072 5.73635 7.39984 3.98182 9.99982 3.98182Z" fill="#EA4335" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7920_20739">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                    </span>
                                    Continue with Google
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7920_20745)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4896 1.66669C12.6562 2.58335 12.2396 3.50002 11.7396 4.16669C11.2396 4.83335 10.3229 5.41669 9.40622 5.33335C9.23956 4.41669 9.65623 3.58335 10.1562 2.91669C10.7396 2.25002 11.6562 1.75002 12.4896 1.66669ZM15.1562 16.1667C15.5729 15.5 15.8229 15.0834 16.1562 14.3334C13.5729 13.3334 13.1562 9.66669 15.7396 8.33335C14.9896 7.33335 13.9062 6.83335 12.8229 6.83335C12.0729 6.83335 11.5729 7.00002 11.0729 7.16669C10.6562 7.33335 10.3229 7.41669 9.90623 7.41669C9.40623 7.41669 9.07289 7.25002 8.57289 7.08335C8.07289 6.91669 7.57289 6.75002 6.98956 6.75002C5.82289 6.75002 4.57289 7.41669 3.82289 8.66669C2.73956 10.3334 2.90623 13.5834 4.65623 16.25C5.40623 17.25 6.23956 18.3334 7.32289 18.3334C7.82289 18.3334 8.07289 18.1667 8.40623 18.0834C8.82289 17.9167 9.23956 17.75 9.90623 17.75C10.6562 17.75 10.9896 17.9167 11.4062 18.0834C11.7396 18.25 11.9896 18.3334 12.4896 18.3334C13.6562 18.3334 14.4896 17.0834 15.1562 16.1667Z" fill="black" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7920_20745">
                                                    <rect width="20" height="20" rx="10" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>


                                    </span>
                                    Continue with Apple

                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7920_20753)">
                                                <path d="M20 10C20 4.4772 15.5228 0 10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10H20Z" fill="#0866FF" />
                                                <path d="M13.9168 13.056L14.478 10H11.2116V8.91923C11.2116 7.30443 11.8452 6.68323 13.4848 6.68323C13.994 6.68323 14.404 6.69563 14.64 6.72043V3.95043C14.1928 3.82603 13.0996 3.70203 12.466 3.70203C9.12437 3.70203 7.58397 5.27963 7.58397 8.68323V10H5.52197V13.056H7.58397V19.7056C8.35757 19.8976 9.16677 20 9.99957 20C10.4096 20 10.814 19.9748 11.2112 19.9268V13.056H13.9164H13.9168Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7920_20753">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    Continue with Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        
    )
}

export default ModalLogin
