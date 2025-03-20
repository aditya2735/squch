import Link from 'next/link'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'

const RightBookingDetails = () => {
    return (
        <>
            <div className="cardwhite cardshadow mb-24">
                <div className="block-header mb-16">
                    <h3 className="heading02 m-0">Your booking details</h3>
                </div>

                <div className="card-single card-guest-restaurantdetail mb-24">
                    <div className="block-header mb-0">
                        <h3 className="heading02 font-14 m-0">Your booking details</h3>
                    </div>
                    <div className="guest-options">
                        <SimpleBar style={{ maxWidth: "100%", overflowX: "auto", overflowY: "hidden" }}>
                            <div className="d-flex align-items-center justify-content-between gap-12 py-3 pb-2 p-2">
                                <button className="guest">1</button>
                                <button className="guest active">2</button>
                                <button className="guest">3</button>
                                <button className="guest">4</button>
                                <button className="guest">5</button>
                            </div>
                        </SimpleBar>
                    </div>
                </div>

                <div className="card-single card-visiting-restaurantdetail mb-16">
                    <div className="block-header mb-1">
                        <h3 className="heading02 font-14 m-0">When are you visiting?</h3>
                    </div>
                    <div className="sec-dates">
                        <SimpleBar style={{ maxWidth: "100%", overflowX: "auto", overflowY: "hidden" }}>
                            <div className="d-flex align-items-center justify-content-between gap-12 py-3 p-2">
                                <button className="dates-item date active">
                                    <span className="item-days d-block">Today</span>
                                    <span className="item-dats-time d-block">07 Jan</span>
                                </button>
                                <button className="dates-item date">
                                    <span className="item-days d-block">Wed</span>
                                    <span className="item-dats-time d-block">08 Jan</span>
                                    <span className="wedge-box">15% OFF</span>
                                </button>
                                <button className="dates-item date">
                                    <span className="item-days d-block">Thu</span>
                                    <span className="item-dats-time d-block">09 Jan</span>
                                </button>
                                <button className="dates-item date">
                                    <span className="item-days d-block">Fri</span>
                                    <span className="item-dats-time d-block">10 Jan</span>
                                </button>

                            </div>
                        </SimpleBar>
                    </div>
                </div>

                <div className="card-single">
                    <div className="block-header">
                        <h3 className="heading02 font-14 m-0">Select the time of day to see the offers</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-16">
                            <div className="dropdown-card">
                                <Dropdown align={'start'}>
                                    <Dropdown.Toggle variant="light">
                                        <span className="d-flex">
                                            <span className="icon">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.209 18C16.7988 18 19.709 15.0899 19.709 11.5C19.709 7.91015 16.7988 5 13.209 5C9.61913 5 6.70898 7.91015 6.70898 11.5C6.70898 15.0899 9.61913 18 13.209 18Z" stroke="#6D6D6D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path opacity="0.4" d="M19.849 19.14L19.719 19.01M19.719 4.99L19.849 4.86L19.719 4.99ZM5.56898 19.14L5.69898 19.01L5.56898 19.14ZM12.709 2.08V2V2.08ZM12.709 22V21.92V22ZM2.78898 12H2.70898H2.78898ZM22.709 12H22.629H22.709ZM5.69898 4.99L5.56898 4.86L5.69898 4.99Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                            <span className="flex-grow-1 text-left">
                                                <span className="d-block ttl-top">Lunch</span>
                                                <span className="d-block ttl-bottom">02:00 PM to 05:00 PM</span>
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <ul className="list-unstyled time-slot d-flex flex-wrap m-0">
                                            <li className="col-6">
                                                <Link href="">12:00 PM to 02:00 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">12:30 PM to 02:30 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">01:00 PM to 03:00 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">01:30 PM to 03:30 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">02:00 PM to 04:00 PM</Link>
                                            </li>
                                        </ul>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-md-12 mb-16">
                            <div className="dropdown-card">
                                <Dropdown align={'start'}>
                                    <Dropdown.Toggle variant="light">
                                        <span className="d-flex">
                                            <span className="icon">
                                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.7381 12.4209C3.0981 17.5709 7.4681 21.7609 12.6981 21.9909C16.3881 22.1509 19.6881 20.4309 21.6681 17.7209C22.4881 16.6109 22.0481 15.8709 20.6781 16.1209C20.0081 16.2409 19.3181 16.2909 18.5981 16.2609C13.7081 16.0609 9.7081 11.9709 9.6881 7.14094C9.6781 5.84094 9.9481 4.61094 10.4381 3.49094C10.9781 2.25094 10.3281 1.66094 9.0781 2.19094C5.1181 3.86094 2.4081 7.85094 2.7381 12.4209Z" stroke="#6D6D6D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                            <span className="flex-grow-1 text-left">
                                                <span className="d-block ttl-top">Dinner</span>
                                                <span className="d-block ttl-bottom">02:00 PM to 05:00 PM</span>
                                            </span>
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <ul className="list-unstyled time-slot d-flex flex-wrap m-0">
                                            <li className="col-6">
                                                <Link href="">12:00 PM to 02:00 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">12:30 PM to 02:30 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">01:00 PM to 03:00 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">01:30 PM to 03:30 PM</Link>
                                            </li>
                                            <li className="col-6">
                                                <Link href="">02:00 PM to 04:00 PM</Link>
                                            </li>
                                        </ul>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-single card-payment-bg">
                    <div className="block-header">
                        <h3 className="heading02 font-14 m-0">Select your table type</h3>
                    </div>
                    <div className="dropdown-card mb-16">
                        <Dropdown align={'start'}>
                            <Dropdown.Toggle variant="light">
                                <span className="d-flex align-items-center">
                                    <span className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 20L7.5 16.25C7.65 15.8667 7.89167 15.5623 8.225 15.337C8.55833 15.1117 8.93333 14.9993 9.35 15H11V10.975C8.45 10.8917 6.31233 10.5167 4.587 9.85C2.86167 9.18333 1.99933 8.4 2 7.5C2 6.53333 2.975 5.70833 4.925 5.025C6.875 4.34167 9.23333 4 12 4C14.7833 4 17.146 4.34167 19.088 5.025C21.03 5.70833 22.0007 6.53333 22 7.5C22 8.4 21.1373 9.18333 19.412 9.85C17.6867 10.5167 15.5493 10.8917 13 10.975V15H14.65C15.05 15 15.421 15.1127 15.763 15.338C16.105 15.5633 16.3507 15.8673 16.5 16.25L18 20H16L14.8 17H9.2L8 20H6ZM12 9C13.6167 9 15.1417 8.85833 16.575 8.575C18.0083 8.29167 19.0583 7.93333 19.725 7.5C19.0583 7.06667 18.0083 6.70833 16.575 6.425C15.1417 6.14167 13.6167 6 12 6C10.3833 6 8.85833 6.14167 7.425 6.425C5.99167 6.70833 4.94167 7.06667 4.275 7.5C4.94167 7.93333 5.99167 8.29167 7.425 8.575C8.85833 8.85833 10.3833 9 12 9Z" fill="#6D6D6D" />
                                        </svg>
                                    </span>
                                    <span className="flex-grow-1 text-left">
                                        <span className="d-block ttl-top m-0">lawn table</span>
                                    </span>
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <ul className="list-unstyled time-slot d-flex flex-wrap m-0">
                                    <li className="col-6">
                                        <Link href="">Lawn Table</Link>
                                    </li>
                                    <li className="col-6">
                                        <Link href="">Pool Slide Table</Link>
                                    </li>
                                    <li className="col-6">
                                        <Link href="">Rooftop Table</Link>
                                    </li>
                                </ul>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="mb-0">
                        <Link href="" className="btn btn-primary w-100">Book Now</Link>
                    </div>
                </div>

                <div className='whatsapp-updates mb-16'>
                <div className='d-flex align-items-center'>
                  <div className='flex-grow-1'>
                    <div className='ttl-w-updates fw-bold'>order food</div>
                  </div>
                  <div className='swithc-toggle ms-auto'>
                    <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
              <Link className='btn-border flex-grow-1 btn d-flex align-items-center gap-2 justify-content-center' href="">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 9.5625H4.5C4.1925 9.5625 3.9375 9.3075 3.9375 9C3.9375 8.6925 4.1925 8.4375 4.5 8.4375H13.5C13.8075 8.4375 14.0625 8.6925 14.0625 9C14.0625 9.3075 13.8075 9.5625 13.5 9.5625Z" fill="#652669" /><path d="M9 14.0625C8.6925 14.0625 8.4375 13.8075 8.4375 13.5V4.5C8.4375 4.1925 8.6925 3.9375 9 3.9375C9.3075 3.9375 9.5625 4.1925 9.5625 4.5V13.5C9.5625 13.8075 9.3075 14.0625 9 14.0625Z" fill="#652669" /></svg>
                            Add items
                          </Link>
              </div>
              <div className="coupons-text">
                  <p className="m-0">*Discount and coupons can be applied in the next step</p>
              </div>

            </div>
            
        </>
    )
}

export default RightBookingDetails