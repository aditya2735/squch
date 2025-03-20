import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import OrderedItemCard from './OrderedItemCard';
import Link from 'next/link';
import Image from 'next/image';
import { CartItemProps, StoreAddressProps } from '@/store/features/Mart/Cart/cartTypes';

interface OrderedItemProps {
    items: CartItemProps[];
    storeDetails: StoreAddressProps
}

const OrderedItem: React.FC<OrderedItemProps> = ({ items,storeDetails  }) => {
    console.log('storeDetails: ', storeDetails);

    return (
        <div className="accordion-bigger-mart">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ordered Items</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-more-counter">
                            {items?.map((item, index) => (
                                <OrderedItemCard key={index} item={item} />
                            ))}
                            <div className='add-more-button-box text-center mt-4'>
                                <Link className='btn-border btn d-flex align-items-center gap-2 justify-content-center' href={`/home/mart/store-detail/${storeDetails.storeId}`}>
                                    <Image src={"/images/plus.svg"} alt="plus icon" height={16} width={17}/>
                                    Add more items
                                </Link>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default OrderedItem;