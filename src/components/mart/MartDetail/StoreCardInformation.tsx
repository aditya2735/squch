import React from 'react'
import Rating from "../../../../public/images/rating.svg";
import Image from 'next/image';

interface StoreCardInformationProps {
    name: string;
    address: string;
    time: string;
    type: string;
    rating: number | undefined;
    openingHours: { [key: string]: string };
    showModal: boolean;
    setShowModal: (value: boolean) => void;
};

const StoreCardInformation: React.FC<StoreCardInformationProps> = (props) => {

    const date = new Date();
    const day = date.toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
    const openingHoursToday = props.openingHours?.[day];

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
                            <div className="rating" onClick={() => props.setShowModal(true)} style={{ cursor: "pointer" }}>
                                <span className="rating-badge">
                                    <Image src={Rating} alt='rating icon' />
                                    {props.rating}
                                </span>
                                <p>{props.rating}ratings</p>
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
                </div>
            </div>
        </div>
    )
};

export default StoreCardInformation;