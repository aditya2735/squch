"use client";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

import ImageSearch from "../../../public/images/icon-search.svg";
import ImageMicro from "../../../public/images/icon-microphone.svg";

import IconFilterPurple from "../../../public/images/icon-filter-purple.svg";
import CloseModal from "../../../public/images/close-modal.png";
import kitchenIcon from "../../../public/images/kitchen.png";
import wifiIcon from "../../../public/images/iconswifi.png";
import swimmingIcon from "../../../public/images/iconsswimming.png";
import CarParkingIcon from "../../../public/images/iconsCarParking.png";
import SharedIcon from "../../../public/images/iconsSharedIcon.png";
import AlarmIcon from "../../../public/images/iconsAlarmIcon.png";
import HouseIcons from "../../../public/images/house-icons.png";
import FlateTcons from "../../../public/images/flate-icons.png";
import GuestHouseIcons from "../../../public/images/guestHouseIcons.png";



import { Range } from "react-range";

import { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { UseStateNumber } from "@/store/features/accommodation/types/hotelTypes";
 

const SearchBar = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [activeTab, setActiveTab] = useState("any");
  const [values, setValues] = useState([850, 15000]);

  
    // State for adults, children, infants, and pets
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

      // Functions for incrementing and decrementing the counter values
      const increment = (setter:UseStateNumber, value:number) => setter(value + 1);
      const decrement = (setter:UseStateNumber, value:number) => setter(value > 0 ? value - 1 : 0);
    
  


      const [showAll, setShowAll] = useState(false);

      const items = [
        { id: 1, name: "kitchen", icon: (<Image src={kitchenIcon} alt="kitchen Icon" />), },
        { id: 2, name: "Wi-Fi", icon: (<Image src={wifiIcon} alt="wifi Icon" />), },
        { id: 3, name: "Swimming Pool", icon: (<Image src={swimmingIcon} alt="Swimming Pool Icon" />), },
        { id: 4, name: "Car Parking", icon: (<Image src={CarParkingIcon} alt="Car Parking Icon" />), },
        { id: 5, name: "Shared Hot Tub", icon: (<Image src={SharedIcon} alt="Shared Hot Tub Icon" />), },
        { id: 6, name: "Smoke Alarm", icon: (<Image src={AlarmIcon} alt="Smoke Alarm Icon" />), },
        { id: 7, name: "kitchen", icon: (<Image src={kitchenIcon} alt="kitchen Icon" />), },
        { id: 8, name: "Wi-Fi", icon: (<Image src={wifiIcon} alt="wifi Icon" />), },
        { id: 9, name: "Swimming Pool", icon: (<Image src={swimmingIcon} alt="Swimming Pool Icon" />), },
        { id: 10, name: "Car Parking", icon: (<Image src={CarParkingIcon} alt="Car Parking Icon" />), },
        { id: 11, name: "Shared Hot Tub", icon: (<Image src={SharedIcon} alt="Shared Hot Tub Icon" />), },
        { id: 12, name: "Smoke Alarm", icon: (<Image src={AlarmIcon} alt="Smoke Alarm Icon" />), },
      ];

      const handleToggle = () => setShowAll(!showAll);


      /********checkbox*******/

      const topRatedOptions = [
        { id: "star3", label: "3 Star" },
        { id: "star4", label: "4 Star" },
      ];
    
      const userRatingOptions = [
        { id: "rating4.5", label: "Excellent :- 4.5+" },
        { id: "rating3.5", label: "Very Good :- 3.5+" },
      ];
      
      const userGuestOptions = [
        { id: "Guest-01", label: "step free access" },
        { id: "Guest-02", label: "Disabled parking spot" },
        { id: "Guest-03", label: "Guest entrance wider than 32 inches (81 centimetres)" },
      ];

      const userBedroomOptions = [
        { id: "Bedroom-01", label: "Step-free bedroom access" },
        { id: "Bedroom-02", label: "Bedroom entrance wider than 32 inches (81 centimetres)" },
      ];

      const userBathroomOptions = [
        { id: "Bathroom-01", label: "Step-free bathroom access" },
        { id: "Bathroom-02", label: "Bathroom entrance wider than 32 inches (81 centimetres)" },
        { id: "Bathroom-03", label: "Toilet grab bar" },
        { id: "Bathroom-04", label: "Shower grab bar" },
        { id: "Bathroom-05", label: "Step-free shower" },
        { id: "Bathroom-06", label: "Shower or bath chair" },
      ];
      
      const userAdaptiveOptions = [
        { id: "Adaptive-01", label: "Ceiling or mobile hoist" },
      ];


    return (
            <div className='accommodation-search searchbar d-md-none d-block'>
                <div className="position-relative d-flex align-items-center gap-2">
                    <div className="search-box position-relative">
                        <div className="position-absolute search-btn">
                            <button className="icon-button icon-search">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z" stroke="#652669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 22.5L20 20.5" stroke="#652669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </button>
                        </div>
                        <input type="email" className="form-control w-100" placeholder="Search places" />
                    </div>
                    <div className="filter-box d-md-none d-block">          
                        <div className="filter-btn-box">
                            <button
                            className="filter-btn-box"
                            onClick={handleShow}
                            >
                            <Image src={IconFilterPurple} alt="" />
                            </button>

                            <Modal show={show} onHide={handleClose} centered className="modal-filter pt-4">
                            <Modal.Header>
                                <Button variant="close-btn" onClick={handleClose}>
                                    <Image src={CloseModal} alt=""/>
                                </Button>
                            </Modal.Header>
                            <Modal.Body className="filter-modal-body">
                                <div className="top-filter-modal">
                                <h2>Filters</h2>
                                <p>Type of place</p>
                                </div>
                                <div className="tabs-filter">
                                
                                <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify>
                                    <Tab eventKey="home" title="Any Type">
                                    <div className="top-range-slider">
                                        
                                    <div className="top-filter-slider mt-4 ">
                                        <h6>Price range</h6>
                                        <p className="mb-0">Nightly prices before fees and taxes</p>
                                        </div>

                                        {/* Range Slider */}
                                        <Range
                                            step={50}
                                            min={850}
                                            max={15000}
                                            values={values}
                                            onChange={(values) => setValues(values)}
                                            renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                className="range-box"
                                                style={{
                                                position: "relative",
                                                margin: "1.5rem 0",
                                                height: "6px",
                                                background: "#e5e7eb",
                                                borderRadius: "4px",
                                                display: "flex",
                                                alignItems: "center",
                                                }}
                                            >
                                                <div
                                                style={{
                                                    position: "absolute",
                                                    backgroundColor: "#6B21A8",
                                                    height: "100%",
                                                    borderRadius: "4px",
                                                    left: `${((values[0] - 850) / (15000 - 850)) * 100}%`,
                                                    right: `${100 - ((values[1] - 850) / (15000 - 850)) * 100}%`,
                                                }}
                                                />
                                                {children}
                                            </div>
                                            )}
                                            renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                height: "20px",
                                                width: "20px",
                                                borderRadius: "50%",
                                                backgroundColor: "#fff",
                                                // display: "flex",
                                                // justifyContent: "center",
                                                // alignItems: "center",
                                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                                                position: "relative",
                                                top: "5px",
                                                }}
                                                className="thumb-slide-btn"
                                            />
                                            )}
                                        />

                                        {/* Minimum and Maximum Price Display */}
                                        <div className="d-flex align-items-center justify-content-between range-content-box mt-3">
                                            <div>
                                            <span className="text-top">Minimum</span>
                                            <div className="text-bottom">₡ {values[0]}</div>
                                            </div>
                                            <div>
                                            <span className="text-top">Maximum</span>
                                            <div className="text-bottom">₡ {values[1]}</div>
                                            </div>
                                        </div>
                                        </div>
                                    <hr />
                                    <div className="rooms-beds-box">
                                        <h6>Rooms and beds</h6>
                                        <div className="bed-rooms d-flex justify-content-between align-items-center">
                                            <div className="head-text">
                                            <h5>Bedrooms</h5>
                                            </div>
                                            <form className="">
                                                <div className="add-remove-btn-box position-relative d-flex align-items-center">
                                                    {/* Decrement Button */}
                                                    <button type="button" onClick={() => decrement(setAdults, adults)} className="remove-btn-box" >
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9134 18.3337C15.4967 18.3337 19.2467 14.5837 19.2467 10.0003C19.2467 5.41699 15.4967 1.66699 10.9134 1.66699C6.33008 1.66699 2.58008 5.41699 2.58008 10.0003C2.58008 14.5837 6.33008 18.3337 10.9134 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.58008 10H14.2467" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                    {/* Input Field */}
                                                    <input type="text" value={adults} readOnly className="input-box"
                                                    />
                                                    {/* Increment Button */}
                                                    <button type="button" onClick={() => increment(setAdults, adults)} className="add-btn-box" >
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3939 18.3337C14.9772 18.3337 18.7272 14.5837 18.7272 10.0003C18.7272 5.41699 14.9772 1.66699 10.3939 1.66699C5.81055 1.66699 2.06055 5.41699 2.06055 10.0003C2.06055 14.5837 5.81055 18.3337 10.3939 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.06055 10H13.7272" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.3945 13.3337V6.66699" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bed-rooms d-flex justify-content-between align-items-center">
                                        <div className="head-text">
                                            <h5 >Beds</h5>
                                            </div>
                                            <form className="">
                                                <div className="add-remove-btn-box position-relative d-flex align-items-center">
                                                    {/* Decrement Button */}
                                                    <button type="button" onClick={() => decrement(setChildren, children)} className="remove-btn-box" >
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9134 18.3337C15.4967 18.3337 19.2467 14.5837 19.2467 10.0003C19.2467 5.41699 15.4967 1.66699 10.9134 1.66699C6.33008 1.66699 2.58008 5.41699 2.58008 10.0003C2.58008 14.5837 6.33008 18.3337 10.9134 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.58008 10H14.2467" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                    {/* Input Field */}
                                                    <input type="text" value={children} readOnly className="input-box"
                                                    />
                                                    {/* Increment Button */}
                                                    <button type="button"  onClick={() => increment(setChildren, children)} className="remove-btn-box" >
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3939 18.3337C14.9772 18.3337 18.7272 14.5837 18.7272 10.0003C18.7272 5.41699 14.9772 1.66699 10.3939 1.66699C5.81055 1.66699 2.06055 5.41699 2.06055 10.0003C2.06055 14.5837 5.81055 18.3337 10.3939 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.06055 10H13.7272" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.3945 13.3337V6.66699" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="bed-rooms d-flex justify-content-between align-items-center">
                                        <div className="head-text">
                                                <h5 >Bathrooms</h5>
                                            </div>
                                            <form className="">
                                                <div className="add-remove-btn-box position-relative d-flex align-items-center">
                                                    {/* Decrement Button */}
                                                    <button type="button" onClick={() => decrement(setInfants, infants)} className="remove-btn-box" >
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9134 18.3337C15.4967 18.3337 19.2467 14.5837 19.2467 10.0003C19.2467 5.41699 15.4967 1.66699 10.9134 1.66699C6.33008 1.66699 2.58008 5.41699 2.58008 10.0003C2.58008 14.5837 6.33008 18.3337 10.9134 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.58008 10H14.2467" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                    {/* Input Field */}
                                                    <input type="text" value={infants} readOnly className="input-box"
                                                    />
                                                    {/* Increment Button */}
                                                    <button type="button"  onClick={() => increment(setInfants, infants)} className="remove-btn-box">
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3939 18.3337C14.9772 18.3337 18.7272 14.5837 18.7272 10.0003C18.7272 5.41699 14.9772 1.66699 10.3939 1.66699C5.81055 1.66699 2.06055 5.41699 2.06055 10.0003C2.06055 14.5837 5.81055 18.3337 10.3939 18.3337Z" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.06055 10H13.7272" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.3945 13.3337V6.66699" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="amenities-box">
                                        <h6>Amenities</h6>
                                        <div className="d-flex items-center flex-wrap gap-md-2 gap-1">
                                        {(showAll ? items : items.slice(0, 6)).map((item) => (
                                            <div key={item.id} >
                                                <div className="card">
                                                <div className="card-body d-flex align-items-center gap-2 justify-center text-center">
                                                    {item.icon}
                                                    <p className="card-text">{item.name}</p>
                                                </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>

                                    {/* Toggle Button */}
                                    <div className="text-center btn-show-less mt-4">
                                        <button
                                        onClick={handleToggle}
                                        className="btn btn-primary d-flex align-items-center justify-content-center"
                                        >
                                        <i
                                            className={`${
                                            showAll ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
                                            } me-2`}
                                        ></i>
                                        {showAll ? "Less More" : "Show More"}
                                        </button>
                                    </div>
                                    <hr />
                                    <div className="booking-box">
                                        <h6>Booking options</h6>
                                        <div className="booking-bottom">
                                        <ul className="d-flex items-center flex-wrap gap-md-2 gap-1 p-0 m-0">
                                            <li>
                                            <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                <span><Image src={kitchenIcon} alt="kitchen Icon" /></span>
                                                <span>kitchen</span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                <span><Image src={wifiIcon} alt="wifiIcon Icon" /></span>
                                                <span>Wi-Fi</span>
                                            </Link>
                                            </li>
                                            <li>
                                            <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                <span><Image src={swimmingIcon} alt="swimmingIcon Icon" /></span>
                                                <span>Swimming Pool</span>
                                            </Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="booking-box">
                                        <h6>Top rated</h6>
                                        <p className="heading-small-text mt-3 mb-3">Star Category</p>
                                        <div className="booking-bottom">
                                        <form action="">
                                            {topRatedOptions.map((option) => (
                                                <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                <Form.Check type="checkbox" label={option.label} />
                                                </Form.Group>
                                            ))}
                                        </form>
                                        </div>
                                        <p className="heading-small-text mt-3 mb-3">User Rating</p>
                                        <div className="booking-bottom">
                                        <form action="">
                                            {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Excellent :- 4.5+" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Very Good :- 3.5+" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Very Good :- 3.5+" />
                                            </Form.Group> */}

                                                {userRatingOptions.map((option) => (
                                                <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                    <Form.Check type="checkbox" label={option.label} />
                                                </Form.Group>
                                                ))}
                                        </form>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="accordion-box">
                                        <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Property type</Accordion.Header>
                                            <Accordion.Body>
                                            <div className="booking-bottom">
                                                <ul className="d-flex items-center flex-wrap gap-md-2 gap-1 p-0 m-0">
                                                <li>
                                                <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                    <span><Image src={HouseIcons} alt="HouseIcons Icon" /></span>
                                                    <span>House</span>
                                                </Link>
                                                </li>
                                                <li>
                                                <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                    <span><Image src={FlateTcons} alt="Flate Icon" /></span>
                                                    <span>Flate</span>
                                                </Link>
                                                </li>
                                                <li>
                                                <Link href="" className="btn btn-primery d-flex items-center gap-2">
                                                    <span><Image src={GuestHouseIcons} alt="GuestHouse Icon" /></span>
                                                    <span>Guest House</span>
                                                </Link>
                                                </li>
                                                </ul>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    </div>
                                    <hr />
                                    <div className="accordion-box">
                                        <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accessibility features</Accordion.Header>
                                            <Accordion.Body>
                                            <div className="booking-bottom">
                                                <div className="mb-3">
                                                <span className="heading-box">Guest entrance and parking</span>
                                                <form action="">
                                                    {userGuestOptions.map((option) => (
                                                    <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                        <Form.Check type="checkbox" label={option.label} />
                                                    </Form.Group>
                                                    ))}
                                                </form>
                                                </div>
                                                <div className="mb-3">
                                                <span className="heading-box">Bedroom</span>
                                                <form action="">
                                                    {userBedroomOptions.map((option) => (
                                                    <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                        <Form.Check type="checkbox" label={option.label} />
                                                    </Form.Group>
                                                    ))}
                                                </form>
                                                </div>
                                                <div className="mb-3">
                                                <span className="heading-box">Bathroom</span>
                                                <form action="">
                                                    {userBathroomOptions.map((option) => (
                                                    <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                        <Form.Check type="checkbox" label={option.label} />
                                                    </Form.Group>
                                                    ))}
                                                </form>
                                                </div>
                                                <div className="mb-3">
                                                <span className="heading-box">Adaptive equipment</span>
                                                <form action="">
                                                    {userAdaptiveOptions.map((option) => (
                                                    <Form.Group className="mb-2" controlId={option.id} key={option.id}>
                                                        <Form.Check type="checkbox" label={option.label} />
                                                    </Form.Group>
                                                    ))}
                                                </form>
                                                </div>
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    </div>


                                    </Tab>
                                    <Tab eventKey="profile" title="Room">
                                    Tab content for Profile
                                    </Tab>
                                    <Tab eventKey="longer-tab" title="Entire Home">
                                    Tab content for Loooonger Tab
                                    </Tab>
                                </Tabs>

                                </div>
                            </Modal.Body>
                            <Modal.Footer className="modal-footer-box">
                                <hr className="w-100"/>
                                <ul className="d-flex flex-wrap align-items-center justify-content-between w-100">
                                <li>
                                    <Button variant="btn-left-text" >
                                    Clear All
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="btn-right-box" >
                                    Show 1,00 + Rooms
                                    </Button>
                                </li>
                                </ul>
                            </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SearchBar
