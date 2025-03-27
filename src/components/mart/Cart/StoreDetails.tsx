import { StoreAddressProps } from '@/store/features/Mart/Cart/cartTypes'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';
import ImageAddCircle from "../../../../public/images/icon-add-circle.svg";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAddressList, setCurrentAddress } from '@/store/features/common/Address/addressThunk';
import { AddressProps } from "@/store/features/common/Address/addressTypes";


const StoreDetails: React.FC<{ storeDetails: StoreAddressProps }> = ({ storeDetails }) => {

    const dispatch = useAppDispatch();
    const { addresses, selectedAddress } = useAppSelector((state) => state.address);
    const [activeKey, setActiveKey] = useState<string | null>(null);

    function isAddressProps(obj: any): obj is AddressProps {
        return obj && typeof obj === "object" && "addressAlias" in obj;
    }

    const handleAddressSelect = (address: AddressProps) => {
        dispatch(setCurrentAddress({ addressId: address.id }));
        setActiveKey(null);
    };

    useEffect(() => {
        if (addresses.length <= 0) {
            dispatch(getAddressList());
        }
    }, []);

    return (
        <div className="biggie-mart-sec">
            <div className="top-biggie-mart d-flex align-items-center justify-content-between gap-2">
                <div className="left-biggie-mart">
                    <h2>{storeDetails?.name}</h2>
                    <p>{storeDetails?.address}</p>
                </div>
                <div className="right-biggie-mart">
                    <ul className="d-flex flex-wrap align-items-center justify-content-center gap-2">
                        <li>
                            <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href={`tel:${storeDetails.mobile}`}>
                                <Image src={"/images/dialer.svg"} alt="dialer icon" width={20} height={20} />
                                Call hotel
                            </Link>
                        </li>
                        <li>
                            <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href="">
                                <Image src={"/images/help.svg"} alt="help icon" width={20} height={20} />
                                Need help
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Address */}

            <div className='biggie-mart-bottom-details order-details-box'>

                <div className='biggie-mart-box d-flex justify-content-between align-items-end'>
                    <div className='biffie-left-mart'>
                        <h5>Order date</h5>
                        <p>wed, 07 Jan 2025</p>
                    </div>      
                    <h6>07:00 PM onwards</h6>
                </div>
                <Accordion activeKey={activeKey} onSelect={(eventKey) => setActiveKey(eventKey ? String(eventKey) : null)}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className='biggie-mart-box d-flex justify-content-between  align-items-end'>
                                <div className='biffie-left-mart'>
                                    <h5>Delivery Address</h5>
                                    {isAddressProps(selectedAddress) ? selectedAddress.addressAlias : "No address alias available"}
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body className='px-0'>
                            <div className='sec-saved-address'>
                                {
                                    addresses.map((address) => (
                                        <div className='card card-saved-address pointer' key={address.id} onClick={() => handleAddressSelect(address)}>
                                            <div className='d-flex'>
                                                <div className='icbox'>
                                                    <Image
                                                        src={
                                                            ["home", "work", "other", "Friend and Family"].some(type => address.adresstype?.toLowerCase().includes(type))
                                                                ? `/images/${address.adresstype}.svg`
                                                                : `/images/other.svg`
                                                        }
                                                        alt="Map Icon"
                                                        height={16}
                                                        width={17}
                                                    />
                                                </div>
                                                <div className='flex-grow-1'>
                                                    <div className="title">
                                                        <strong> {address.addressAlias} </strong>
                                                        <span className='separator'>•</span>
                                                        <span className='hours-box'>20 m</span>
                                                        {
                                                            address.isCurrent ? <span className="selected-tag"> Currently Selected </span> : <span></span>
                                                        }
                                                    </div>
                                                    <p className="m-0">
                                                        {`${address.city}, ${address.area}, ${address.state}, ${address.zipCode}, ${address.country}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='location-option'>
                                <Link href="" className='d-flex align-items-center'>
                                    <div className='icon-box'>
                                        <Image src={ImageAddCircle} alt="" />
                                    </div>
                                    <div className='text-lead'>Add new address</div>
                                </Link>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default StoreDetails