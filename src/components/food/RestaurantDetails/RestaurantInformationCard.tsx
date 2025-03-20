import React, { useState } from 'react'
import ShowAllReviewModal from './ShowAllReviewModal';
import Link from 'next/link';
import Image from 'next/image';

interface StoreCardInformationProps {
    name: string;
    address: string;
    time: string;
    type: string;
    rating: number | undefined;
    openingHours: { [key: string]: string };
    supportDineIn: boolean;
    restaurantId: number;
}

const RestaurantInformationCard: React.FC<StoreCardInformationProps> = (props) => {

    const date = new Date();
    const day = date.toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
    const openingHoursToday = props.openingHours?.[day];
    const [showReviewModal, setShowReviewModal] = useState(false);

    return (
        <div className='sec-store-information'>
            <div className='container'>
                <div className="store-card">
                    <div className="store-info">
                        <h2 className='title-name'>{props.name}</h2>
                        <div className='d-flex align-items-center'>
                            <div className='flex-grow-1'>
                                <p className="delivery-info">
                                    {props.time} • 4.0km • {props.address}
                                </p>
                                <p className="items">{props.type}</p>
                            </div>
                            <div className="rating cursor-pointer" onClick={() => setShowReviewModal(true)}>
                                <span className="rating-badge">
                                    <Image src={"/images/rating.svg"} alt='rating icon' height={15} width={14} />
                                    {props.rating}
                                </span>
                                <p>20k+ ratings</p>
                            </div>
                        </div>
                        <div className="open-status">
                            <span className="status">
                                <span className='text-success'> {openingHoursToday ? 'Open ' : 'Closed '}</span> {openingHoursToday}
                            </span>
                            <span className="info-dropdown">
                                <i className="bi bi-chevron-down"></i>
                            </span>
                        </div>
                    </div>

                    <div className='tabs-shopmenu'>
                        <ul className='d-flex align-items-center list-unstyled m-0'>
                            <li>
                                <Link href="" className='active'>Order Online</Link>
                            </li>
                            <li>
                                {
                                    props.supportDineIn ? <Link href={`/home/dine/restaurantDetails/${props.restaurantId}`}>Dine-out</Link> : null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ShowAllReviewModal show={showReviewModal} handleClose={() => setShowReviewModal(false)} />
        </div>
    );
}

export default RestaurantInformationCard