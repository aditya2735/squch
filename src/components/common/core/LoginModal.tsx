"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';
import PhoneDropdown from "./PhoneDropdown";
import { SignInWithGoogle } from '@/lib/firebase';
import "./flag.css";

const ModalLogin = ({ show, setModalLogin, setOtpVerification }: any) => {
    const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = () => {
        if (loginMethod === 'phone') {
            setOtpVerification(true);
        }
        setModalLogin(false);
    };

    return (
        <Modal
            show={show}
            onHide={() => setModalLogin(false)}
            centered
            className="modal-filter modal-login-signup pt-4"
        >
            <Modal.Header>
                <Button variant="close-btn" onClick={() => setModalLogin(false)}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="review-modal-body">
                <div className='card-modal-signin-main'>
                    <div className='heading-ttl-login-signup text-center'>
                        Log in or sign up to Squch
                    </div>

                    {loginMethod === 'phone' && (
                        <div className='form-group-single mb-16'>
                            <label>Phone number</label>
                            <div className='form-languageswitcher d-flex'>
                                <PhoneDropdown />
                                <div className='flex-grow-1'>
                                    <input
                                        type='text'
                                        placeholder='Phone number'
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <small className='d-block'>
                                We’ll call or text you to confirm your number. Standard message and data rates apply.
                            </small>
                        </div>
                    )}

                    {loginMethod === 'email' && (
                        <div className='form-group-single mb-16'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='Email'
                                className='form-control mb-3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label>Password</label>
                            <input
                                type='password'
                                placeholder='Password'
                                className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    )}

                    <div className='mb-16'>
                        <button className='btn btn-primary w-100' onClick={() => handleClick()}>Continue</button>
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
                        </div>``
                    </div>

                    <div className='sec-socail-link'>
                        <ul className='list-unstyled m-0'>
                            <li>
                                <Link href="#" onClick={() => setLoginMethod(loginMethod === 'phone' ? 'email' : 'phone')}>
                                    <span className='socail-icon'>
                                        <Image src={"/images/email.svg"} height={20} width={20} alt='email icon' />
                                    </span>
                                    {loginMethod === 'phone' ? 'Continue with Email' : 'Continue using Phone'}
                                </Link>
                            </li>

                            <li>
                                <Link href="" onClick={SignInWithGoogle}>
                                    <span className='socail-icon'>
                                        <Image src={"/images/google.svg"} height={20} width={20} alt='google icon' />
                                    </span>
                                    Continue with Google
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <Image src={"/images/apple.svg"} height={20} width={20} alt='apple icon' />
                                    </span>
                                    Continue with Apple
                                </Link>
                            </li>

                            <li>
                                <Link href="">
                                    <span className='socail-icon'>
                                        <Image src={"/images/facebook-color.svg"} height={20} width={20} alt='apple icon' />
                                    </span>
                                    Continue with Facebook
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalLogin;
