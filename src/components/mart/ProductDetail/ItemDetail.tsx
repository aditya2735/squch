import React, { useRef, useState } from 'react'
import Plus from "../../../../public/images/plus.svg";
import Image from 'next/image';
import { SellerProps } from '@/store/features/Mart/MartProduct/productTypes';

interface ItemDetailProps {
    name: string;
    description: string;
    sellerDetails: SellerProps;
};

const ItemDetail: React.FC<ItemDetailProps> = ({ name, description, sellerDetails }) => {

    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const contentRef1 = useRef<HTMLDivElement | null>(null);
    const contentRef2 = useRef<HTMLDivElement | null>(null);

    const toggleExpand = (
        ref: React.RefObject<HTMLDivElement | null>,
        setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
        expanded: boolean
    ) => {
        if (ref.current) {
            ref.current.style.height = expanded ? "22px" : `${ref.current.scrollHeight}px`;
        }
        setExpanded(!expanded);
    };

    return (
        <div className='sec-item-detail-main pb-5'>
            <div className='card card-simple'>
                <h3 className="card-section-title">Highlights</h3>
                <ul className='d-flex list-unstyled m-0 highlights-item'>
                    <li className='col-6 item-type'>Type</li>
                    <li className='col-6 highlights-item-name'>{name}</li>
                </ul>
            </div>
            <div className='card card-simple'>
                <h3 className="card-section-title">Storage instruction </h3>
                <ul className='d-flex flex-column list-unstyled m-0 list-bullets'>
                    <li>Room Temperature</li>
                    <li>Away from Sunlight</li>
                    <li>Refrigeration for Storage</li>
                    <li>Avoid Moisture </li>
                    <li>Separate from Other Produce</li>
                </ul>
            </div>
            <div className='card card-simple'>
                <h3 className="card-section-title">Nutritional Information </h3>
                <ul className='d-flex flex-column list-unstyled m-0 list-bullets'>
                    <li>Vitamin C : Supports immune health and collagen production.</li>
                    <li>Potassium : Important for heart health and muscle function.</li>
                    <li>Lycopene : A powerful antioxidant linked to heart health and cancer prevention.</li>
                    <li>Fiber : Supports digestion and helps regulate bowel movements.</li>
                    <li>Low in Calories : Ideal for weight management and overall health.</li>
                    <li>Hydration : High water content helps maintain hydration levels.</li>
                </ul>
            </div>
            <div className='card card-simple'>
                <h3 className="card-section-title">Description</h3>
                <div ref={contentRef1} style={{ height: "34px", overflow: "hidden", transition: "height 0.5s ease-in-out", }}>
                    <p className='m-0 description-text'>
                        {description}
                    </p>
                </div>

                <button onClick={() => toggleExpand(contentRef1, setExpanded1, expanded1)} className="btn show-more-btn">
                    <Image src={Plus} alt='plus icon' />
                    {expanded1 ? "Show Less" : "Show More"}
                </button>
            </div>

            {/* <div className='card card-simple'>
                <h3 className="card-section-title">Important Information</h3>
                <div ref={contentRef2} style={{ height: "34px", overflow: "hidden", transition: "height 0.5s ease-in-out", }}>
                    <p className='m-0 description-text'>Lorem ipsum dolor sit amet consectetur. Vitae euismod donec nunc fermentum ipsum mauris facilisis. Vitae pretium etiam sed aenean nulla blandit facilisi est mauris. Ac nunc risus sit integer est suspendisse nam. Donec egestas vel egestas integer et. Cursus non ut ipsum malesuada id diam amet. Odio pulvinar nulla mi volutpat velit mauris dolor.
                        Lorem ipsum dolor sit amet consectetur. Vitae euismod donec nunc fermentum ipsum mauris facilisis. Vitae pretium etiam sed aenean nulla blandit facilisi est mauris. Ac nunc risus sit integer est suspendisse nam. Donec egestas vel egestas integer et. Cursus non ut ipsum malesuada id diam amet. Odio pulvinar nulla mi volutpat velit mauris dolor.
                    </p>
                </div>

                <button onClick={() => toggleExpand(contentRef2, setExpanded2, expanded2)} className="btn show-more-btn">
                    <Image src={Plus} alt='plus icon' />
                    {expanded2 ? "Show Less" : "Show More"}
                </button>
            </div> */}
            <div className='card card-simple'>
                <h3 className="card-section-title">Seller Information</h3>
                <ul className='d-flex flex-column list-unstyled m-0 list-bullets'>
                    <li>name - {sellerDetails.name}</li>
                    <li><i>fssai</i>{sellerDetails.fssaiNumber}</li>
                    <li>GST - {sellerDetails.gstNumber}</li>
                    <li>address - {sellerDetails.address}</li>
                    <li>email - {sellerDetails.email}</li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetail