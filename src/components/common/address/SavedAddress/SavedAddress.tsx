"use client";
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';


const SavedAddress = () => {

    const { addresses } = useAppSelector((state) => state.address);

    return (
        <>

            <div className='location-main'>
                <div className='location-option'>
                    <Link href="" className='d-flex align-items-center'>
                        <div className='icon-box'>
                            <Image src={"/images/icon-plane.svg"} alt="" width={22} height={23}/>
                        </div>
                        <div className='text-lead'>User my current location</div>
                        <div className='arrow-icon ms-auto'>
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </Link>
                </div>
                <div className='location-option'>
                    <Link href="" className='d-flex align-items-center'>
                        <div className='icon-box'>
                            <Image src={"/images/icon-add-circle.svg"} alt="" width={22} height={23}/>
                        </div>
                        <div className='text-lead'>Add new address</div>
                    </Link>
                </div>
            </div>

            <div className='sec-saved-address'>
                <h3 className='card-heading'>Saved Address</h3>

                {addresses?.map((address, index) => (
                    <div className='card card-saved-address' key={index}>
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
                                    <span className="selected-tag"> Currently Selected </span>
                                </div>
                                <p className="m-0">
                                    {`${address.city}, ${address.area}, ${address.state}, ${address.zipCode}, ${address.country}`}
                                </p>
                            </div>
                            <div className="menu">
                                <Dropdown align={'end'}>
                                    <Dropdown.Toggle variant="light">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SavedAddress