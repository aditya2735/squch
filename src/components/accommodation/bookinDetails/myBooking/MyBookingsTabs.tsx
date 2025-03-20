"use client";

import React from "react";
import Image from "next/image";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useRouter } from "next/navigation"
import UpComingTab from "./UpComingTab";
import ActiveTab from "./ActiveTab";
import CheckedOutTab from "./CheckedOutTab";
import CancelledTab from "./CancelledTab"
const MyBookingsTabs = () => {
  const router = useRouter();

  return (
    <div className="my-booking-tabs pb-4">
      <Tabs
        defaultActiveKey="Upcoming-box"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="Upcoming-box" title="Upcoming">
         <UpComingTab />
        </Tab>

        <Tab eventKey="Active" title="Active">
         <ActiveTab/>
        </Tab>

        <Tab eventKey="CheckedOut" title="CheckedOut">
          <CheckedOutTab/>
        </Tab>

        <Tab eventKey="Cancelled" title="Cancelled">
         <CancelledTab/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyBookingsTabs;
