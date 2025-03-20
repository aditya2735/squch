"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const WhatIsNearBy = () => {
  const router = useRouter();
  const { hotel_id } = useParams();
  const {nearbyFacilities}= useAppSelector((state)=>state.hotelDetail.data)
  return (
    <div className="sec-tabs-nearby mb-24">
      <div className="block-header">
        <div className="d-flex align-item-center">
          <h2 className="heading02 m-0">What’s near by</h2>
        </div>
      </div>

      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="d-flex align-items-center tabs-near-by">
          <Nav.Item>
            <Nav.Link eventKey="first">Transportation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Restaurants</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <ul className="d-flex flex-column list-unstyled p-0 m-0">
                {nearbyFacilities?.transportFacilities.length>0 &&
                nearbyFacilities?.transportFacilities.map((item)=>(
            <li key={item.id} className="list-near-item">
                <div className="d-flex align-items-center">
                  <div className="icbox">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.5"
                        cy="10.5137"
                        r="9.75"
                        fill="white"
                        stroke="#6D6D6D"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M13.7727 6.96875H7.22727C6.82561 6.96875 6.5 7.29436 6.5 7.69602V10.6051C6.5 11.0068 6.82561 11.3324 7.22727 11.3324H13.7727C14.1744 11.3324 14.5 11.0068 14.5 10.6051V7.69602C14.5 7.29436 14.1744 6.96875 13.7727 6.96875Z"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.7727 11.332H7.22727C6.82561 11.332 6.5 11.6576 6.5 12.0593V13.5138C6.5 13.9155 6.82561 14.2411 7.22727 14.2411H13.7727C14.1744 14.2411 14.5 13.9155 14.5 13.5138V12.0593C14.5 11.6576 14.1744 11.332 13.7727 11.332Z"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.7727 6.96822H7.22727C7.03455 6.96768 6.84988 6.89088 6.71361 6.75461C6.57734 6.61833 6.50054 6.43366 6.5 6.24094C6.50054 6.04823 6.57734 5.86355 6.71361 5.72728C6.84988 5.59101 7.03455 5.51421 7.22727 5.51367H13.7727C13.9654 5.51421 14.1501 5.59101 14.2864 5.72728C14.4227 5.86355 14.4995 6.04823 14.5 6.24094C14.4995 6.43366 14.4227 6.61833 14.2864 6.75461C14.1501 6.89088 13.9654 6.96768 13.7727 6.96822ZM7.95455 14.2409V14.7409C7.95455 14.8012 7.9306 14.859 7.88798 14.9017C7.84536 14.9443 7.78755 14.9682 7.72727 14.9682H7.09091C7.03063 14.9682 6.97282 14.9443 6.9302 14.9017C6.88758 14.859 6.86364 14.8012 6.86364 14.7409V14.2409H7.95455ZM14.1364 14.2409V14.7409C14.1364 14.8012 14.1124 14.859 14.0698 14.9017C14.0272 14.9443 13.9694 14.9682 13.9091 14.9682H13.2727C13.2125 14.9682 13.1546 14.9443 13.112 14.9017C13.0694 14.859 13.0455 14.8012 13.0455 14.7409V14.2409H14.1364Z"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0453 13.1491C13.2461 13.1491 13.4089 12.9863 13.4089 12.7855C13.4089 12.5847 13.2461 12.4219 13.0453 12.4219C12.8444 12.4219 12.6816 12.5847 12.6816 12.7855C12.6816 12.9863 12.8444 13.1491 13.0453 13.1491Z"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.95348 13.1491C8.15431 13.1491 8.31712 12.9863 8.31712 12.7855C8.31712 12.5847 8.15431 12.4219 7.95348 12.4219C7.75265 12.4219 7.58984 12.5847 7.58984 12.7855C7.58984 12.9863 7.75265 13.1491 7.95348 13.1491Z"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 6.96751V11.3311M6.5 6.24023V12.7857M14.5 6.24023V12.7857"
                        stroke="#5D5D5D"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow-1">
                    <div className="station-name">{item.facilityName}</div>
                    <p className="m-0">Station location details</p>
                  </div>
                  <div>
                    <p className="m-0">{item.distance}</p>
                  </div>
                </div>
              </li>
                ))
                }
              
            </ul>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <ul className="d-flex flex-column list-unstyled p-0 m-0">
            {nearbyFacilities?.restaurantFacilities.length>0 &&
                nearbyFacilities?.restaurantFacilities.map((item)=>(
                    <li key={item.id} className="list-near-item">
                    <div className="d-flex align-items-center">
                      <div className="icbox">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="10.5"
                            cy="10.5137"
                            r="9.75"
                            fill="white"
                            stroke="#6D6D6D"
                            strokeWidth="0.5"
                          />
                          <path
                            d="M13.7727 6.96875H7.22727C6.82561 6.96875 6.5 7.29436 6.5 7.69602V10.6051C6.5 11.0068 6.82561 11.3324 7.22727 11.3324H13.7727C14.1744 11.3324 14.5 11.0068 14.5 10.6051V7.69602C14.5 7.29436 14.1744 6.96875 13.7727 6.96875Z"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7727 11.332H7.22727C6.82561 11.332 6.5 11.6576 6.5 12.0593V13.5138C6.5 13.9155 6.82561 14.2411 7.22727 14.2411H13.7727C14.1744 14.2411 14.5 13.9155 14.5 13.5138V12.0593C14.5 11.6576 14.1744 11.332 13.7727 11.332Z"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.7727 6.96822H7.22727C7.03455 6.96768 6.84988 6.89088 6.71361 6.75461C6.57734 6.61833 6.50054 6.43366 6.5 6.24094C6.50054 6.04823 6.57734 5.86355 6.71361 5.72728C6.84988 5.59101 7.03455 5.51421 7.22727 5.51367H13.7727C13.9654 5.51421 14.1501 5.59101 14.2864 5.72728C14.4227 5.86355 14.4995 6.04823 14.5 6.24094C14.4995 6.43366 14.4227 6.61833 14.2864 6.75461C14.1501 6.89088 13.9654 6.96768 13.7727 6.96822ZM7.95455 14.2409V14.7409C7.95455 14.8012 7.9306 14.859 7.88798 14.9017C7.84536 14.9443 7.78755 14.9682 7.72727 14.9682H7.09091C7.03063 14.9682 6.97282 14.9443 6.9302 14.9017C6.88758 14.859 6.86364 14.8012 6.86364 14.7409V14.2409H7.95455ZM14.1364 14.2409V14.7409C14.1364 14.8012 14.1124 14.859 14.0698 14.9017C14.0272 14.9443 13.9694 14.9682 13.9091 14.9682H13.2727C13.2125 14.9682 13.1546 14.9443 13.112 14.9017C13.0694 14.859 13.0455 14.8012 13.0455 14.7409V14.2409H14.1364Z"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.0453 13.1491C13.2461 13.1491 13.4089 12.9863 13.4089 12.7855C13.4089 12.5847 13.2461 12.4219 13.0453 12.4219C12.8444 12.4219 12.6816 12.5847 12.6816 12.7855C12.6816 12.9863 12.8444 13.1491 13.0453 13.1491Z"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.95348 13.1491C8.15431 13.1491 8.31712 12.9863 8.31712 12.7855C8.31712 12.5847 8.15431 12.4219 7.95348 12.4219C7.75265 12.4219 7.58984 12.5847 7.58984 12.7855C7.58984 12.9863 7.75265 13.1491 7.95348 13.1491Z"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.5 6.96751V11.3311M6.5 6.24023V12.7857M14.5 6.24023V12.7857"
                            stroke="#5D5D5D"
                            strokeWidth="0.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1">
                        <div className="station-name">{item.facilityName}</div>
                        <p className="m-0">Station location details</p>
                      </div>
                      <div>
                        <p className="m-0">{item.distance}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </Tab.Pane>
          <div
            className="btn btn-white w-100 btn-view-map"
            onClick={() =>
              router.push(`/home/accommodation/searchMap/${hotel_id}`)
            }
          >
            View on map
          </div>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default WhatIsNearBy;
