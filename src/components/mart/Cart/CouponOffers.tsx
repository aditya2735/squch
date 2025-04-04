"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import green from "../../../../public/images/green-tick.svg";
import CartOffer from "../../../../public/images/cart-offer.svg";
import OfferGreen from "../../../../public/images/offer-green.svg";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { applyCartOffer, removeCartOffer } from '@/store/features/Mart/Cart/cartThunk';

const CouponOffers: React.FC = () => {
    const dispatch = useAppDispatch();
    const { offers, items } = useAppSelector((state) => state.martCart);

    const handleApplyOffer = (offerId: number, cartId: number) => {
        dispatch(applyCartOffer({ offerId, cartId }));
    };

    const handleRemoveOffer = (offerId: number, cartId: number) => {
        dispatch(removeCartOffer({ offerId, cartId }));
    }

    return (
        <div className="cardwhite cardshadow p-0 coupon-card overflow-hidden mb-32">
            <div className="coupon-header">
                <div className="d-flex align-items-center">
                    <p className="m-0">
                        Save extra by applying coupons on every booking
                    </p>
                    <div className="iocn-offer ms-auto">
                        <Image src={OfferGreen} alt='offer icon' />
                    </div>
                </div>
            </div>
            <div className="coupon-content">
                {offers.map((offer, index) => (
                    <div
                        className={`coupon-item ${!offer.eligible ? "inactive-offer" : ""}`}
                        key={index}
                    >
                        <div className="d-flex align-items-center">
                            <div className="iocn-check">
                                {offer.applied ? (
                                    <Image src={green} alt='green tick icon' />
                                ) : (
                                    <Image src={CartOffer} alt='cart offer icon' />
                                )}
                            </div>
                            <div className="flex-grow-1">
                                <h3 className="coupon-ttl">
                                    {offer.title}
                                </h3>
                                <p>{`Use Code ${offer.offerCode}`}</p>
                                {!offer.eligible && (
                                    <p className="text-danger">Add items worth of {offer.requiredAmount} to avail offer</p>
                                )}
                            </div>
                            {offer.applied ? (
                                <div className="link-remove-box">
                                    <button
                                        className="btn-remove-code"
                                        onClick={() => handleRemoveOffer(offer.offerId, items[0].cartId)}
                                    >Remove</button>
                                </div>
                            ) : (
                                <div className="link-remove-box">
                                    <button
                                        className="btn btn-applay"
                                        onClick={() => handleApplyOffer(offer.offerId, items[0].cartId)}
                                        disabled={!offer.eligible}
                                    >
                                        {offer.eligible ? "Apply" : "Not Eligible"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="coupon-footer">
                <Link href="" className="view-more-coupons">
                    View more coupons & offers
                    <i className="bi bi-chevron-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default CouponOffers;
