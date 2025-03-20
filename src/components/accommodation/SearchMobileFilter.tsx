'use client'
import Image from "next/image";
import IconSearh from "../../../public/images/search-normal.svg";
import IconFilter from "../../../public/images/ic-filter.svg";


import Link from "next/link";

import SliderIcon from "../../../public/images/icon-1.svg";
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
 
const SearchMobileFilter = () => {
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
    <div className='max-w-[1100px] container'>
        <div className="flex items-center gap-3">
          <div className='bg-white rounded-xl p-[10px] flex-1 gap-3'>
              <div className='flex items-center gap-6'>
                  <div className='flex-none w-[24px]'>
                        <Image src={IconSearh} alt="" />
                  </div>
                  <div className='flex-1'>
                      <p className='text-[#838383] text-[14px] pb-0 mb-0'>Search places</p>
                      <p className='text-[#838383] text-[10px] pb-0 mb-0'>Date range  • Number of guests</p>
                  </div>
              </div>
          </div>
          <button className="w-[58px] h-[58px] bg-white rounded-xl flex items-center justify-center"   onClick={handleShow}>
            <Image src={IconFilter} alt="" /> 
          </button>

          
        </div>
    </div>
  )
}

export default SearchMobileFilter
