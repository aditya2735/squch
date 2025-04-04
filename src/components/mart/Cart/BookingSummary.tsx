"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getCancellationReson, getCartItems, getCartOffers } from "@/store/features/Mart/Cart/cartThunk";

import GreenStar from "../../../../public/images/green-star.svg";

import DataLoader from "@/components/common/core/DataLoader";
import CouponOffers from "./CouponOffers";
import BillingSummary from "./BillingSummary";
import StoreDetails from "./StoreDetails";
import OrderedItem from "./OrderedItem";
import TipSection from "./TipSection";
import Link from "next/link";
import ConfirmError from "./ConfirmError";


const BookingSummary = () => {

    const dispatch = useAppDispatch();
    const [showConfirmError, setShowConfirmError] = useState(false);
    const { items, storeDetails, loading, error } = useAppSelector((state) => state.martCart);

    useEffect(() => {
        dispatch(getCartItems());
        dispatch(getCancellationReson());
    }, []);

    useEffect(() => {
        if (items?.length > 0) {
            dispatch(getCartOffers(items[0].cartId))
        }
    }, [items])

    return (
        <div className="booking-summary-cart-sec">

            <DataLoader loading={loading.storeLoading} error={error} data={items} retryFunction={() => dispatch(getCartItems())}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="booking-summary-box bg-white rounded-radius">
                            {/* Discount Saved Box */}
                            <div className="top-active-box d-flex align-items-center gap-2">
                                <Image src={GreenStar} alt="star icon" />
                                <b>₵100 saved!</b> on this order!
                            </div>

                            {/* Store Details */}
                            <DataLoader loading={loading.storeLoading} error={error} retryFunction={() => dispatch(getCartItems())} data={storeDetails}>
                                <StoreDetails storeDetails={storeDetails} />
                            </DataLoader>

                            {/* Ordered Items */}
                            <DataLoader loading={loading.storeLoading} error={error} data={items} retryFunction={() => dispatch(getCartItems())}>
                                <OrderedItem items={items} storeDetails={storeDetails} />
                            </DataLoader>

                            {/* Tip section */}
                            <TipSection />

                            <div className='note-bottom'>
                                <h6>Review your order to avoid cancellations</h6>
                                <p><span>NOTE:</span> Orders cannot be cancelled and are non-refundable once packed for delivery.</p>
                                <Link className='text-cancelation' href="" onClick={() => setShowConfirmError(true)}>Read Cancelation Policy</Link>

                                <ConfirmError show={showConfirmError} handleClose={() => setShowConfirmError(false)} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <CouponOffers />
                        <BillingSummary />
                    </div>
                </div>
                {/* )
            } */}
            </DataLoader>
        </div>
    );
};

export default BookingSummary;
