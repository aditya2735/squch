"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import DeliveryMart from '../../../../public/images/delivery-partner-mart.png';
import GreenStar from "../../../../public/images/green-star.svg";
import Dailer from "../../../../public/images/dialer.svg";
import Help from "../../../../public/images/help.svg";
import ButtonMinus from "../../../../public/images/minus-button.svg";
import ButtonPlus from "../../../../public/images/plus-button.svg";
import Plus from "../../../../public/images/plus.svg";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCartItems } from '@/store/features/Mart/Cart/cartThunk';


const BookingSummary = () => {

    const dispatch = useAppDispatch();
    const [item1, setItem1] = useState(1);
    const [text, setText] = useState("");

    const { items } = useAppSelector((state) => state.martCart);
    const increment = (setter: any) => setter((prev: any) => prev + 1);
    const decrement = (setter: any) => setter((prev: any) => (prev > 0 ? prev - 1 : 0));


    const handleChange = (e: any) => {
        if (e.target.value.length <= 200) {
            setText(e.target.value);
        }
    };

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch])

    return (
        <div className='booking-summary-cart-sec'>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='booking-summary-box bg-white rounded-radius'>
                        <div className='top-active-box d-flex align-items-center gap-2'>
                            <Image src={GreenStar} alt='star icon' />
                            <b> ₵100 saved!</b> on this order!
                        </div>
                        <div className='biggie-mart-sec'>
                            <div className='top-biggie-mart d-flex align-items-center justify-content-between gap-2'>
                                <div className='left-biggie-mart'>
                                    <h2>Biggie Mart</h2>
                                    <p>21 Dr Isert St, Accra, Ghana</p>
                                </div>
                                <div className='right-biggie-mart'>
                                    <ul className='d-flex flex-wrap align-items-center justify-content-center gap-2'>
                                        <li>
                                            <Link className='btn btn-light-grey d-flex align-items-center justify-content-center gap-1' href="">
                                                <Image src={Dailer} alt='dialer icon' />
                                                Call hotel
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='btn btn-light-grey d-flex align-items-center justify-content-center gap-1' href="">
                                                <Image src={Help} alt='help icon' />
                                                Need help
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='biggie-mart-bottom-details'>
                                {/* <div className='biggie-mart-box d-flex justify-content-between align-items-end'>
                                    <div className='biffie-left-mart'>
                                        <h5>Order date</h5>
                                        <p>wed, 07 Jan 2025</p>
                                    </div>
                                    <h6>07:00 PM onwards</h6>
                                </div> */}
                                <div className='biggie-mart-box d-flex justify-content-between  align-items-end'>
                                    <div className='biffie-left-mart'>
                                        <h5>Delivery Address</h5>
                                        <p>21 Dr Isert St, Accra, Ghana</p>
                                    </div>
                                </div>
                                {/* <div className='biggie-mart-box d-flex justify-content-between  align-items-end'>
                                        <div className='biffie-left-mart'>
                                            <h5>Booking id</h5>
                                            <p>F90215216</p>
                                        </div>
                                        <Link href="" className='copy-btn'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9.667C7 8.95967 7.28099 8.28131 7.78115 7.78115C8.28131 7.28099 8.95967 7 9.667 7H18.333C18.6832 7 19.03 7.06898 19.3536 7.20301C19.6772 7.33704 19.9712 7.53349 20.2189 7.78115C20.4665 8.0288 20.663 8.32281 20.797 8.64638C20.931 8.96996 21 9.31676 21 9.667V18.333C21 18.6832 20.931 19.03 20.797 19.3536C20.663 19.6772 20.4665 19.9712 20.2189 20.2189C19.9712 20.4665 19.6772 20.663 19.3536 20.797C19.03 20.931 18.6832 21 18.333 21H9.667C9.31676 21 8.96996 20.931 8.64638 20.797C8.32281 20.663 8.0288 20.4665 7.78115 20.2189C7.53349 19.9712 7.33704 19.6772 7.20301 19.3536C7.06898 19.03 7 18.6832 7 18.333V9.667Z" stroke="#6D6D6D" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.012 16.737C3.705 16.5626 3.44965 16.31 3.2719 16.0049C3.09415 15.6998 3.00034 15.3531 3 15V5C3 3.9 3.9 3 5 3H15C15.75 3 16.158 3.385 16.5 4" stroke="#6D6D6D" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </Link>
                                    </div> */}
                            </div>
                        </div>
                        <div className='accordion-bigger-mart'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Ordered Items</Accordion.Header>
                                    <Accordion.Body>
                                        {
                                            items.map((item, index) => (
                                                <div className='add-more-counter' key={index}>
                                                    <div className="bed-rooms d-flex justify-content-between align-items-center">
                                                        <div className="head-text d-flex align-items-center gap-1">
                                                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.478947" y="0.978947" width="13.0421" height="13.0421" rx="2.46842" stroke="#20A66A" stroke-width="0.957895" /><circle cx="7.00036" cy="7.49938" r="3.31579" fill="#20A66A" /></svg>
                                                            <h5>{item.product.productName} (500 gms)</h5>
                                                        </div>
                                                        <form className="d-flex align-items-center gap-3">
                                                            <div className="add-remove-btn-box position-relative d-flex align-items-center">
                                                                <button type="button" onClick={() => decrement(setItem1)} className="remove-btn-box" >
                                                                    <Image src={ButtonMinus} alt='plus icon' height={60} width={60} quality={100} />
                                                                </button>
                                                                <input type="text" value={item1} readOnly className="input-box" />
                                                                <button type="button" onClick={() => increment(setItem1)} className="add-btn-box" >
                                                                    <Image src={ButtonPlus} alt='plus icon' height={70} width={70} />
                                                                </button>
                                                            </div>
                                                            <div className='price-box'>
                                                                <span className='old-price'>₵1</span>
                                                                <span className='new-price'>₵60</span>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <div className='add-more-button-box text-center mt-4'>
                                                        <Link className='btn-border btn d-flex align-items-center gap-2 justify-content-center' href="">
                                                            <Image src={Plus} alt='plus icon' />
                                                            Add more items
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='delivery-partner-mart d-flex align-items-center justify-content-between gap-3'>
                            <div className='left-delivery-mart'>
                                <h5>Tip your delivery partner</h5>
                                <p>Day & night, our delivery partners bring your favorite meals. Thank them with a tip.</p>
                            </div>
                            <div className='right-delivery-mart'>
                                <Image src={DeliveryMart} alt="" ></Image>
                            </div>
                        </div>
                        <div className='most-tipped-mart'>
                            <ul className='d-flex align-items-center gap-2 flex-wrap'>
                                <li className='btn-tipped text-center'> ₵10 </li>
                                <li className='btn-tipped text-center position-relative most-topped'> ₵30 <span>Most Tipped</span></li>
                                <li className='btn-tipped text-center'> ₵50 </li>
                                <li className='btn-tipped text-center active-btn d-flex align-items-center justify-content-center gap-2'> Other <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.62467 1.33398C4.95134 1.33398 1.95801 4.32732 1.95801 8.00065C1.95801 11.674 4.95134 14.6673 8.62467 14.6673C12.298 14.6673 15.2913 11.674 15.2913 8.00065C15.2913 4.32732 12.298 1.33398 8.62467 1.33398ZM10.8647 9.53399C11.058 9.72732 11.058 10.0473 10.8647 10.2407C10.7647 10.3407 10.638 10.3873 10.5113 10.3873C10.3847 10.3873 10.258 10.3407 10.158 10.2407L8.62467 8.70732L7.09134 10.2407C6.99134 10.3407 6.86467 10.3873 6.73801 10.3873C6.61134 10.3873 6.48467 10.3407 6.38468 10.2407C6.19134 10.0473 6.19134 9.72732 6.38468 9.53399L7.91801 8.00065L6.38468 6.46732C6.19134 6.27398 6.19134 5.95398 6.38468 5.76065C6.57801 5.56732 6.89801 5.56732 7.09134 5.76065L8.62467 7.29398L10.158 5.76065C10.3513 5.56732 10.6713 5.56732 10.8647 5.76065C11.058 5.95398 11.058 6.27398 10.8647 6.46732L9.33134 8.00065L10.8647 9.53399Z" fill="#652669" /></svg> </li>
                            </ul>
                            <h4><span>₵</span> Enter Tip Amount</h4>
                            <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 1" /> Add this tip automatically to future orders.</div>
                            <div className='delivery-instructions'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Delivery Instructions <span>(Additional)</span></Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="e.g Ring the bell on the red gate" value={text} onChange={handleChange} maxLength={200} />
                                        <span className='total-text'>0/200</span>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div className='note-bottom'>
                            <h6>Review your order to avoid cancellations</h6>
                            <p><span>NOTE:</span> Orders cannot be cancelled and are non-refundable once packed for delivery.</p>
                            <Link className='text-cancelation' href="">Read Cancelation Policy</Link>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    {/* <CouponsOffers />
                    <BillingSummery /> */}
                </div>
            </div>
        </div>
    )
}

export default BookingSummary