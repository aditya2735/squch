"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import { useState, useEffect } from "react";
import { Tab, Tabs, Accordion } from "react-bootstrap";

import BusIocn1 from "../../../../public/images/bus-icon-1.png";
import BusIocn2 from "../../../../public/images/bus-icon-2.png";
import BusIocn3 from "../../../../public/images/bus-icon-3.png";
import BusIocn4 from "../../../../public/images/bus-icon-4.png";


import BusIocn5 from "../../../../public/images/bus-icon-5.png";
import BusIocn6 from "../../../../public/images/bus-icon-6.png";
import BusIocn7 from "../../../../public/images/bus-icon-7.png";
import BusIocn8 from "../../../../public/images/bus-icon-8.png";
import BusIocn9 from "../../../../public/images/bus-icon-9.png";
import BusIocn10 from "../../../../public/images/bus-icon-10.png";
import BusIocn11 from "../../../../public/images/bus-icon-11.png";
import BusIocn12 from "../../../../public/images/bus-icon-12.png";
import BusIocn13 from "../../../../public/images/bus-icon-13.png";
import BusIocn14 from "../../../../public/images/bus-icon-14.png";
import BusIocn15 from "../../../../public/images/bus-icon-15.png";

const BusFiltersModal = ({ show, handleClose }: any) => {

    // const [activeTab, setActiveTab] = useState("tab1");
    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     const checkMobile = () => setIsMobile(window.innerWidth < 991);
    //     checkMobile();
    //     window.addEventListener("resize", checkMobile);
    //     return () => window.removeEventListener("resize", checkMobile);
    // }, []);

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered className="modal-filter review-modal-sec pt-4 modal-filters-busses">
                <Modal.Header>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>
                <Modal.Body className="review-modal-body px-0">
                    <div className="modal-block-header mb-0 border-bottom pb-2">
                        <h2 className="modal-title text-md-center text-capitalize">Filters Busses</h2>
                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <div className='d-flex filters-busses'>
                        <div className='col-auto'>
                            <div className='appnav-sidebar'>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Sort By</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Departure Time</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Bus Type</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four">Single Window Sleeper/ Seat</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five">Boarding Points</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six">Dropping Points</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven">Bus Operator</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eight">Amenities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nine">Arrival Time at Destination</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                        <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <div className="accordion-body p-4">
                                            <div className='bus-sorting-options-list'>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Relevance</b>
                                                    </label>
                                                </div>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Price - Low to High</b>
                                                    </label>
                                                </div>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Price - High to Low</b>
                                                    </label>
                                                </div>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Best Rated First</b>
                                                    </label>
                                                </div>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Early Departure</b>
                                                    </label>
                                                </div>
                                                <div className='bus-sorting-options-list-item'>
                                                    <label>
                                                        <input type='radio' name='busradio' />
                                                        <b className='d-block'>Late Departure</b>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>06:00 - 12:00</p>
                                                            <span className='bus-dep-time'>Morning</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>12:00 - 18:00</p>
                                                            <span className='bus-dep-time'>Afternoon</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>18:00 - 24:00</p>
                                                            <span className='bus-dep-time'>Evening</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>00:00 - 06:00</p>
                                                            <span className='bus-dep-time'>Night</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn1} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Seater</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn2} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Sleeper</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn3} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>AC</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn4} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Non-AC</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn1} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Single Seat</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Boarding Location 1</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Boarding Location 2</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Boarding Location 3</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Boarding Location 4</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Boarding Location 5</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Dropping Location 1</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Dropping Location 2</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Dropping Location 3</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Dropping Location 4</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <p className='bus-dep-ttl'>Dropping Location 5</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn1} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Seater</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn2} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Sleeper</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn3} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>AC</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn4} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Non-AC</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn5} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Toilet</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn6} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Water Bottle</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn7} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Blankets</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn8} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Bet Sheet</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn9} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Pillow</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn10} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Charging Point</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn11} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Night Lamp</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn12} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>USB Post</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn13} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Wi-Fi</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn14} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>Live Tracking</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='icon'>
                                                                    <Image src={BusIocn15} alt='' />
                                                                </div>
                                                                <p className='bus-dep-ttl'>First-aid Box</p>
                                                            </div>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine">
                                <div className="accordion-body p-4">
                                            <div className='bus-filter-list'>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>06:00 - 12:00</p>
                                                            <span className='bus-dep-time'>Morning</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>12:00 - 18:00</p>
                                                            <span className='bus-dep-time'>Afternoon</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>18:00 - 24:00</p>
                                                            <span className='bus-dep-time'>Evening</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='bus-filter-list-item'>
                                                    <div className='d-flex align-items-center'>
                                                        <div className='flex-grow-1'>
                                                            <p className='bus-dep-ttl'>00:00 - 06:00</p>
                                                            <span className='bus-dep-time'>Night</span>
                                                        </div>
                                                        <div className='ms-auto'>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                    </Tab.Container>

                </Modal.Body>

                <Modal.Footer className="modal-footer-box">
                    <button className='btn btn-primary btn-light'>Clear All</button>
                    <div className='flex-grow-1'>
                        <button className='btn btn-primary w-100'>Show Busses (23)</button>
                    </div>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default BusFiltersModal

