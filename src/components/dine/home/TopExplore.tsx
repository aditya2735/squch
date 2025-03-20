"use client";
import Image from "next/image";
import Link from "next/link";
import ImageCardExplore1 from "../../../../public/images/card-explore-img-1.png";
import Arrow from "../../../../public/images/arrow.svg";
import HotelCard from "./HotelCard";


interface hotelProps {
    image: string;
    name: string;
    price: string;
    time: string;
    cuisine: string;
    location: string;
}

interface TopExloreProps {
    hotelData: hotelProps[]
}

const TopExplore: React.FC<TopExloreProps> = ({ hotelData }) => {
    return (
        <div className="sec-gap sec-top-explore">
            <div className="px-40">
                <div className='block-header'>
                    <div className='d-flex align-item-center'>
                        <h2 className='heading02 m-0'>
                            Top 100 to explore
                        </h2>
                        <div className='ms-auto'>
                            <Link href="" className='link'>
                                See All <Image src={Arrow} alt="Arrow icon" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {hotelData.map((hotel, index) => (
                        <HotelCard hotel={hotel} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default TopExplore;
