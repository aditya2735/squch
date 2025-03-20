import React from 'react'
import { Accordion } from 'react-bootstrap'

import ResImg1 from '../../../../public/images/select-res-img-1.png'
import ResImg2 from '../../../../public/images/select-res-img-2.png'
import Image from 'next/image'
import Link from 'next/link'

const RestaurantAccordion = () => {
    return (
        <div className="sec-restaurant-accordion">
            <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Select Your Table</Accordion.Header>
                    <Accordion.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card-box-offer card-accordion">
                                    <div className="cardthumbimg">
                                        <div className="position-relative">
                                            <button className="favorite-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71953 13.0297C8.50703 13.1047 8.15703 13.1047 7.94453 13.0297C6.13203 12.4109 2.08203 9.82969 2.08203 5.45469C2.08203 3.52344 3.63828 1.96094 5.55703 1.96094C6.69453 1.96094 7.70078 2.51094 8.33203 3.36094C8.96328 2.51094 9.97578 1.96094 11.107 1.96094C13.0258 1.96094 14.582 3.52344 14.582 5.45469C14.582 9.82969 10.532 12.4109 8.71953 13.0297Z" stroke="#454545" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <Image src={ResImg1} alt="" />
                                            <div className="position-absolute">
                                                <div className="deal-title">FLAT 50% oFF</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="cardlower-box">
                                        <div className="offer-name">Buka Restaurant</div>
                                        <p className="mb-0">₵24.00 for two</p>
                                        <ul className="d-flex align-items-center list-unstyled m-0">
                                            <li>
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8"></circle><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white"></path></svg>
                                            </li>
                                            <li>4.2</li>
                                            <li className="separator">•</li>
                                            <li>25-30 mins de...</li>
                                        </ul>
                                        <Link href=""><p className="m-0">Mexican , Italian , Afri...</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-box-offer card-accordion">
                                    <div className="cardthumbimg">
                                        <div className="position-relative">
                                            <button className="favorite-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71953 13.0297C8.50703 13.1047 8.15703 13.1047 7.94453 13.0297C6.13203 12.4109 2.08203 9.82969 2.08203 5.45469C2.08203 3.52344 3.63828 1.96094 5.55703 1.96094C6.69453 1.96094 7.70078 2.51094 8.33203 3.36094C8.96328 2.51094 9.97578 1.96094 11.107 1.96094C13.0258 1.96094 14.582 3.52344 14.582 5.45469C14.582 9.82969 10.532 12.4109 8.71953 13.0297Z" stroke="#454545" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <Image src={ResImg2} alt="" />
                                            <div className="position-absolute">
                                                <div className="deal-title">FLAT 50% oFF</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="cardlower-box">
                                        <div className="offer-name">Buka Restaurant</div>
                                        <p className="mb-0">₵24.00 for two</p>
                                        <ul className="d-flex align-items-center list-unstyled m-0">
                                            <li>
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8"></circle><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white"></path></svg>
                                            </li>
                                            <li>4.2</li>
                                            <li className="separator">•</li>
                                            <li>25-30 mins de...</li>
                                        </ul>
                                        <Link href=""><p className="m-0">Mexican , Italian , Afri...</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>More Italian Food Restaurant</Accordion.Header>
                    <Accordion.Body>
                    <div className="row">
                            <div className="col-md-6">
                                <div className="card-box-offer card-accordion">
                                    <div className="cardthumbimg">
                                        <div className="position-relative">
                                            <button className="favorite-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71953 13.0297C8.50703 13.1047 8.15703 13.1047 7.94453 13.0297C6.13203 12.4109 2.08203 9.82969 2.08203 5.45469C2.08203 3.52344 3.63828 1.96094 5.55703 1.96094C6.69453 1.96094 7.70078 2.51094 8.33203 3.36094C8.96328 2.51094 9.97578 1.96094 11.107 1.96094C13.0258 1.96094 14.582 3.52344 14.582 5.45469C14.582 9.82969 10.532 12.4109 8.71953 13.0297Z" stroke="#454545" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <Image src={ResImg1} alt="" />
                                            <div className="position-absolute">
                                                <div className="deal-title">FLAT 50% oFF</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="cardlower-box">
                                        <div className="offer-name">Buka Restaurant</div>
                                        <p className="mb-0">₵24.00 for two</p>
                                        <ul className="d-flex align-items-center list-unstyled m-0">
                                            <li>
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8"></circle><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white"></path></svg>
                                            </li>
                                            <li>4.2</li>
                                            <li className="separator">•</li>
                                            <li>25-30 mins de...</li>
                                        </ul>
                                        <Link href=""><p className="m-0">Mexican , Italian , Afri...</p></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-box-offer card-accordion">
                                    <div className="cardthumbimg">
                                        <div className="position-relative">
                                            <button className="favorite-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71953 13.0297C8.50703 13.1047 8.15703 13.1047 7.94453 13.0297C6.13203 12.4109 2.08203 9.82969 2.08203 5.45469C2.08203 3.52344 3.63828 1.96094 5.55703 1.96094C6.69453 1.96094 7.70078 2.51094 8.33203 3.36094C8.96328 2.51094 9.97578 1.96094 11.107 1.96094C13.0258 1.96094 14.582 3.52344 14.582 5.45469C14.582 9.82969 10.532 12.4109 8.71953 13.0297Z" stroke="#454545" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            </button>
                                            <Image src={ResImg2} alt="" />
                                            <div className="position-absolute">
                                                <div className="deal-title">FLAT 50% oFF</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="cardlower-box">
                                        <div className="offer-name">Buka Restaurant</div>
                                        <p className="mb-0">₵24.00 for two</p>
                                        <ul className="d-flex align-items-center list-unstyled m-0">
                                            <li>
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7.74219" r="7" fill="#DB8AE8"></circle><path d="M7.67356 4.4399L8.358 5.80878C8.45133 5.99934 8.70022 6.18212 8.91022 6.21712L10.1508 6.42323C10.9441 6.55545 11.1308 7.13101 10.5591 7.69878L9.59467 8.66323C9.43133 8.82656 9.34189 9.14156 9.39244 9.36712L9.66856 10.561C9.88633 11.506 9.38467 11.8716 8.54856 11.3777L7.38578 10.6893C7.17578 10.5649 6.82967 10.5649 6.61578 10.6893L5.453 11.3777C4.62078 11.8716 4.11522 11.5021 4.333 10.561L4.60911 9.36712C4.65967 9.14156 4.57022 8.82656 4.40689 8.66323L3.44245 7.69878C2.87467 7.13101 3.05745 6.55545 3.85078 6.42323L5.09133 6.21712C5.29745 6.18212 5.54633 5.99934 5.63967 5.80878L6.32411 4.4399C6.69745 3.69712 7.30411 3.69712 7.67356 4.4399Z" fill="white"></path></svg>
                                            </li>
                                            <li>4.2</li>
                                            <li className="separator">•</li>
                                            <li>25-30 mins de...</li>
                                        </ul>
                                        <Link href=""><p className="m-0">Mexican , Italian , Afri...</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default RestaurantAccordion;