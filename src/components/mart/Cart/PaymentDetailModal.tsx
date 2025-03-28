"use client";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

import CloseModal from "../../../../public/images/close-modal.png";
import PaymentLogo1 from "../../../../public/images/payment-logo-1.png";
import PaymentLogo2 from "../../../../public/images/payment-logo-2.png";
import PaymentLogo3 from "../../../../public/images/payment-logo-3.png";
import PaymentLogo4 from "../../../../public/images/payment-logo-4.png";
import PaymentSuccessfullModal from './PaymentSuccessfullModal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { placeMartOrder } from '@/store/features/Mart/Cart/cartThunk';


interface PaymentDetailProps {
    show: boolean;
    handleClose: () => void;
}

const PaymentDetailModal: React.FC<PaymentDetailProps> = ({ show, handleClose }) => {

    const dispatch = useAppDispatch();
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    const { items, tipAmount } = useAppSelector((state) => state.martCart);
    const { selectedAddress } = useAppSelector((state) => state.address);
    const { paymentSuccess } = useAppSelector((state) => state.martCart);

    const address = JSON.parse(JSON.stringify(selectedAddress));

    const handlePayment = () => {
        dispatch(placeMartOrder({
            cartId: items[0].cartId,
            addressId: address.id,
            deliveryInstruction: "No Instruction",
            tipAmount: tipAmount,
            deliveryFee: 10
        }))

        handleClose();
    };

    useEffect(() => {
        setShowSuccessModal(paymentSuccess);
    }, [paymentSuccess])

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="modal-filter modal-conform-payment details pt-4"
            >
                <Modal.Header>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>
                
                <Modal.Body className="filter-modal-body">
                    <div className='modal-block-header'>
                        <h2 className='modal-title'>Payment</h2>
                        <p>
                            We recommended to pay before you checking to get extra discount and offers, also on prepaid bookings if you were late on check-in we won’t allot your room to someone else.
                        </p>
                    </div>

                    <div className='sec-credit-card-details'>
                        <div className='payment-mode'>

                            <div className='payment-mode-ttl'>
                                Payment Mode
                            </div>

                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <label className='payment-label p-0 d-flex align-items-center'>
                                            <div className='payment-icon'>
                                                <Image src={PaymentLogo1} alt='' />
                                            </div>
                                            <div className='flex-grow-1'>
                                                <b className='payment-ttl d-block'>Credit card / Debit card</b>
                                                <small className='bank-name d-block'>bank name</small>
                                            </div>
                                        </label>
                                    </Accordion.Header>
                                    <Accordion.Body className='p-0'>
                                        <ul className='d-flex flex-column list-payment list-unstyled m-0'>
                                            <li>
                                                <label className='payment-label d-flex align-items-center'>
                                                    <input type='radio' name="radio" />
                                                    <div className='payment-icon'>
                                                        <Image src={PaymentLogo1} alt='' />
                                                    </div>
                                                    <div className='flex-grow-1'>
                                                        <b className='payment-ttl d-block'>Credit card / Debit card</b>
                                                        <small className='bank-name d-block'>bank name</small>
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='payment-label d-flex align-items-center'>
                                                    <input type='radio' name="radio" />
                                                    <div className='payment-icon'>
                                                        <Image src={PaymentLogo2} alt='' />
                                                    </div>
                                                    <div className='flex-grow-1'>
                                                        <b className='payment-ttl d-block'>Paypal</b>
                                                        <small className='bank-name d-block'>pay using PayPal account or credit card /Debit card</small>
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='payment-label d-flex align-items-center'>
                                                    <input type='radio' name="radio" />
                                                    <div className='payment-icon'>
                                                        <Image src={PaymentLogo3} alt='' />
                                                    </div>
                                                    <div className='flex-grow-1'>
                                                        <b className='payment-ttl d-block'>Flutterwave </b>
                                                        <small className='bank-name d-block'>Pay Using Flutterwave  account</small>
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='payment-label d-flex align-items-center'>
                                                    <input type='radio' name="radio" />
                                                    <div className='payment-icon'>
                                                        <Image src={PaymentLogo4} alt='' />
                                                    </div>
                                                    <div className='flex-grow-1'>
                                                        <b className='payment-ttl d-block'>Paystack </b>
                                                        <small className='bank-name d-block'>Pay Using Paystack account</small>
                                                    </div>
                                                </label>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>

                        <div className='form-block-head'>
                            <div className='form-ttl'>Credit card details</div>
                            <p className='m-0'>Select and instant payment using your credit or debit card</p>
                        </div>
                        <div className='row'>
                            <div className='col-12 form-group'>
                                <div className='form-fild'>
                                    <input type="text" className="form-control" placeholder="Name on Card" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 form-group'>
                                <div className='form-fild'>
                                    <input type="text" className="form-control" placeholder="Card Number" />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <div className='form-fild'>
                                    <input type="text" className="form-control" placeholder="Exp" />
                                </div>
                            </div>
                            <div className='col-md-6 form-group'>
                                <div className='form-fild'>
                                    <input type="text" className="form-control" placeholder="CVV" />
                                </div>
                            </div>
                        </div>
                        <Form.Check
                            type="checkbox"
                            id="custom-checkbox"
                            className="custom-checkbox"
                            label="By selecting the button below , i agree to the Host’s House Rules , Ground rules for guests."
                        />

                    </div>

                </Modal.Body>
                <Modal.Footer className="modal-footer-box">
                    <button
                        className='btn btn-primary w-100'
                        onClick={() => handlePayment()}
                    >
                        Confirm & Pay  ₵ 1750
                    </button>
                </Modal.Footer>
            </Modal>

            <PaymentSuccessfullModal
                show={showSuccessModal}
                handleClose={() => setShowSuccessModal(false)}
            />
        </div>
    )
}

export default PaymentDetailModal