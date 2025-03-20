import React from 'react';
import Imageveg from "../../../../public/images/veg-img.png";
import ImageRatingstart from "../../../../public/images/rating-star.png";
import Heart from "../../../../public/images/heart.svg";
import Image, { StaticImageData } from 'next/image';

interface HotelProps {
    image: string;
    name: string;
    price: string;
    time: string;
    cuisine: string;
    location: string;
}

interface HotelCardProps {
    hotel: HotelProps;
}

// TODO: Need to change tha static data
const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className='card-explore'>
                <div className='d-flex'>
                    <div className='imgthumb'>
                        <div className='imgthumb-inner'>
                            <Image src={hotel.image} alt="" height={500} width={500}/>
                            <div className='position-absolute'>
                                <div className="deal-title">
                                    FLAT DEAL 50% OFF
                                </div>
                                <div className="deal-description">
                                    Above  ₵249
                                </div>
                            </div>
                            <div className='overlay'></div>
                            <button className="favorite-button">
                                <Image src={Heart} alt="favourite icon" />
                            </button>
                        </div>
                    </div>
                    <div className='flex-grow-1'>
                        <div className='restaurant-type'>
                            <Image src={Imageveg} alt="" />
                        </div>
                        <div className='restaurant-name'>
                            {hotel.name}
                        </div>
                        <div className='restaurant-price'>
                            {hotel.price}
                        </div>
                        <div className='restaurant-rating'>
                            <span className="rating-value">
                                <Image src={ImageRatingstart} alt="" />
                            </span>
                            <span>4.2</span>
                            <span className="separator">•</span>
                            <span className="delivery-time">
                                {hotel.time}
                            </span>
                        </div>
                        <div className='restaurant-area'>
                            {hotel.cuisine}
                        </div>
                        <p>
                            {hotel.location}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard;   