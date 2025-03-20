import React from 'react'
import ImagesOffter1 from '../../../../public/images/offer-img-1.jpg';
import OfferCard from './OfferCard';

const Offer: React.FC = () => {

    const offers = [
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        }, 
        {
            image: ImagesOffter1,
            discountText: 'Extra 10% off',
            deliveryText: 'Free delivery',
            dealTitle: '50% oFF',
            dealDescription: 'UPTO₵100',
            offerName: 'Biggie Mart',
            estimatedTime: '25-30 mins de...',
            location: 'Star Oil Filling Station, Og...'
        },
    ];

    return (
        <div className="sec-offter-main pb-4 pb-md-5">
            <div className="container">
                <div className="row">
                    {offers.map((offer, index) => (
                        <OfferCard key={index} {...offer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Offer