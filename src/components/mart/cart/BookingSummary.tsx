"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCartItems } from "@/store/features/Mart/Cart/cartThunk";

import DeliveryMart from "../../../../public/images/delivery-partner-mart.png";
import GreenStar from "../../../../public/images/green-star.svg";
import Dailer from "../../../../public/images/dialer.svg";
import Help from "../../../../public/images/help.svg";

import Plus from "../../../../public/images/plus.svg";
import DataLoader from "@/components/common/core/DataLoader";
import CouponOffers from "./CouponOffers";
import BillingSummary from "./BillingSummary";
import OrderedItem from "./OrderedItem";


const BookingSummary = () => {

    const dispatch = useAppDispatch();
    const [text, setText] = useState("");

    const {
        items,
        storeDetails,
        loading,
        productLoading,
        error
    } = useAppSelector((state) => state.martCart);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 200) {
            setText(e.target.value);
        }
    };



    return (
        <DataLoader loading={loading} error={error} retryFunction={() => dispatch(getCartItems())}>
            <div className="booking-summary-cart-sec">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="booking-summary-box bg-white rounded-radius">
                            {/* Discount Saved Box */}
                            <div className="top-active-box d-flex align-items-center gap-2">
                                <Image src={GreenStar} alt="star icon" />
                                <b>₵100 saved!</b> on this order!
                            </div>

                            {/* Store Details */}
                            <div className="biggie-mart-sec">
                                <div className="top-biggie-mart d-flex align-items-center justify-content-between gap-2">
                                    <div className="left-biggie-mart">
                                        <h2>{storeDetails?.name}</h2>
                                        <p>{storeDetails?.address}</p>
                                    </div>
                                    <div className="right-biggie-mart">
                                        <ul className="d-flex flex-wrap align-items-center justify-content-center gap-2">
                                            <li>
                                                <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href="">
                                                    <Image src={Dailer} alt="dialer icon" />
                                                    Call hotel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href="">
                                                    <Image src={Help} alt="help icon" />
                                                    Need help
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="biggie-mart-bottom-details">
                                    <div className="biggie-mart-box d-flex justify-content-between align-items-end">
                                        <div className="biffie-left-mart">
                                            <h5>Delivery Address</h5>
                                            <p>21 Dr Isert St, Accra, Ghana</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ordered Items Section */}
                            <div className="accordion-bigger-mart">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Ordered Items</Accordion.Header>
                                        <Accordion.Body>
                                            <DataLoader loading={productLoading} error={error} retryFunction={() => dispatch(getCartItems())}>
                                                <div className="add-more-counter">
                                                    {items?.map((item, index) => (
                                                        <OrderedItem key={index} item={item} />
                                                    ))}
                                                    <div className='add-more-button-box text-center mt-4'>
                                                        <Link className='btn-border btn d-flex align-items-center gap-2 justify-content-center' href="">
                                                            <Image src={Plus} alt="plus icon" />
                                                            Add more items
                                                        </Link>
                                                    </div>
                                                </div>
                                            </DataLoader>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Tip Delivery Partner Section */}
                            <div className="delivery-partner-mart d-flex align-items-center justify-content-between gap-3">
                                <div className="left-delivery-mart">
                                    <h5>Tip your delivery partner</h5>
                                    <p>Day & night, our delivery partners bring your favorite meals. Thank them with a tip.</p>
                                </div>
                                <div className="right-delivery-mart">
                                    <Image src={DeliveryMart} alt="delivery icon" />
                                </div>
                            </div>

                            {/* Tip Selection */}
                            <div className="most-tipped-mart">
                                <ul className="d-flex align-items-center gap-2 flex-wrap">
                                    <li className="btn-tipped text-center">₵10</li>
                                    <li className="btn-tipped text-center position-relative most-topped">₵30 <span>Most Tipped</span></li>
                                    <li className="btn-tipped text-center">₵50</li>
                                    <li className="btn-tipped text-center active-btn d-flex align-items-center justify-content-center gap-2">
                                        Other <Image src={Plus} alt="plus icon" />
                                    </li>
                                </ul>
                                <h4><span>₵</span> Enter Tip Amount</h4>
                                <div className="checkbox-box d-flex align-items-center gap-2">
                                    <Form.Check aria-label="option 1" /> Add this tip automatically to future orders.
                                </div>

                                {/* Delivery Instructions */}
                                <div className="delivery-instructions">
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>
                                                Delivery Instructions <span>(Additional)</span>
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="e.g Ring the bell on the red gate"
                                                value={text}
                                                onChange={handleChange}
                                                maxLength={200}
                                            />
                                            <span className="total-text">0/200</span>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <CouponOffers />
                        <BillingSummary />
                    </div>
                </div>
            </div>
        </DataLoader>
    );
};

export default BookingSummary;
