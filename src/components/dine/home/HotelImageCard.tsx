import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Rating from "../../../../public/images/rating.svg";
import Heart from "../../../../public/images/heart.svg";

interface ImageCardProps {
    image: StaticImageData;
    rating: string
}

// TODO: Need to change the Static Data.

const HotelImageCard: React.FC<ImageCardProps> = ({ image, rating }) => {
    return (
        <div className="multislider-box">
            <div >
                <div className="position-relative">

                    <div className="img-box">
                        <Image
                            src={image}
                            alt=""
                            className="w-100 object-cover d-d-block"
                        />
                    </div>

                    <div className="position-absolute z-2  card-heart-box">
                        <ul className="d-flex align-items-center gap-1 ">
                            <li>
                                <Image src={Rating} alt="rating icon" />
                            </li>
                            <li className="text-slider">
                                {rating}
                            </li>
                        </ul>
                    </div>

                    <div className="position-absolute z-2 right-card-box">
                        <Link href="">
                            <Image src={Heart} alt="favourite icon" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default HotelImageCard;