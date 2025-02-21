"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import green from "../../../../public/images/green-tick.svg";
import CartOffer from "../../../../public/images/cart-offer.svg";
import OfferGreen from "../../../../public/images/offer-green.svg"

const CouponOffers: React.FC = () => {
    return (
        <div className="cardwhite cardshadow p-0 coupon-card overflow-hidden mb-32">
            <div className="coupon-header">
                <div className="d-flex align-items-center">
                    <p className="m-0">
                        Save extra by applying coupons on every booking
                    </p>
                    <div className="iocn-offer ms-auto">
                        <Image src={OfferGreen} alt='offfer icon' />
                    </div>
                </div>
            </div>
            <div className="coupon-content">
                <div className="coupon-item">
                    <div className="d-flex align-items-center">
                        <div className="iocn-check">
                            <Image src={green} alt='green tick icon' />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="coupon-ttl">
                                You save ₵12 on online bookings'
                            </h3>
                            <p>Auto-applied as you pay using squch app</p>
                        </div>
                    </div>
                </div>

                <div className="coupon-item">
                    <div className="d-flex align-items-center">
                        <div className="iocn-check">
                            <Image src={green} alt='green tick icon' />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="coupon-ttl">You saved ₵54 with ‘SQUCHM120’</h3>
                        </div>
                        <div className="link-remove-box">
                            <button className="btn-remove-code">Remove</button>
                        </div>
                    </div>
                </div>

                <div className="coupon-item">
                    <div className="d-flex align-items-center">
                        <div className="iocn-check">
                            <Image src={CartOffer} alt='offer icon' />
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="coupon-ttl">Save ₵49 with ‘SQUCHM120’</h3>
                        </div>
                        <div className="link-remove-box">
                            <button className="btn btn-applay">Apply</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="coupon-footer">
                <Link href="" className="view-more-coupons">
                    View more coupons & offers
                    <i className="bi bi-chevron-right"></i>
                </Link>
            </div>

        </div>
    )
}

export default CouponOffers