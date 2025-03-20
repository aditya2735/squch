"use client";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import Heart from "../../../../public/images/heart.svg";
import Rating from "../../../../public/images/rating.svg";

interface OfferCardProps {
    image: StaticImageData | string;
    discountText: string;
    deliveryText: string;
    dealTitle: string;
    dealDescription: string;
    offerName: string;
    estimatedTime: string;
    location: string;
}

const OfferCard: React.FC<OfferCardProps> = (props) => {
    return (
        <div className="col-auto">
            <div className="card-box-offer">
                <div className="cardthumbimg">
                    <div className="position-relative">

                        <div className="card-stickers">
                            <span className="text-discount d-block">
                                {props.discountText}
                            </span>
                            <span className="text-delivery-free d-block">{
                                props.deliveryText}
                            </span>
                        </div>

                        <button className="favorite-button">
                            <Image src={Heart} alt='favourite icon' />
                        </button>

                        <Image src={props.image} alt="offer image" />

                        <div className="position-absolute">
                            <div className="deal-title">
                                {props.dealTitle}
                            </div>
                            <div className="deal-description">
                                {props.dealDescription}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="cardlower-box">

                    <div className="offer-name">
                        {props.offerName}
                    </div>

                    <ul className="d-flex align-items-center list-unstyled m-0">
                        <li><Image src={Rating} alt='rating icon' /></li>
                        <li className="separator">•</li>
                        <li>{props.estimatedTime}</li>
                    </ul>

                    <Link href="#">
                        <p className="m-0">{props.location}</p>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default OfferCard