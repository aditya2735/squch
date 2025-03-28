// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Location01 from "../../../../public/images/location-01.png"
// import Location02 from "../../../../public/images/location-02.png"
// import Location03 from "../../../../public/images/location-03.png"
// import Location04 from "../../../../public/images/location-04.png"
// import Location05 from "../../../../public/images/location-05.png"
// import Location06 from "../../../../public/images/location-06.png"
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';


// const LocationSearchNew = () => {

//   const [range, setRange] = useState([null, null]);
//   const pickerRef = useRef();

//   const formatDate = (date) => {
//     if (!date) return '--';
//     return date.toLocaleDateString();
//   };

//   const openPicker = () => {
//     const input = pickerRef.current?.querySelector('input');
//     input?.click();
//   };

//   // State for adults, children, infants, and pets
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [pets, setPets] = useState(0);

//   // State and ref for general dropdown
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // State and ref for location dropdown
//   const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
//   const locationDropdownRef = useRef(null);

//   // Toggle function for the general dropdown
//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setIsOpenNew(false);
//     setIsLocationDropdownOpen(false);
//   };

//   // State and ref for general dropdown
//   const [isOpenNew, setIsOpenNew] = useState(false);
//   const dropdownRefNew = useRef(null);


//   const toggleDropdownNew = () => {
//     setIsOpenNew(!isOpenNew);
//     setIsOpen(false);
//     setIsLocationDropdownOpen(false);
//   };

//   // Toggle function for the location dropdown
//   const toggleLocationDropdown = () => {
//     setIsLocationDropdownOpen(!isLocationDropdownOpen);
//     setIsOpen(false);
//     setIsOpenNew(false);
//   };

//   // Common function to handle click outside logic for both dropdowns
//   const handleClickOutside = (event) => {
//     if (
//       (dropdownRef.current && !dropdownRef.current.contains(event.target)) &&
//       (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) &&
//       (dropdownRefNew.current && !dropdownRefNew.current.contains(event.target))
//     ) {
//       // Close both dropdowns if click is outside either
//       setIsOpen(false);
//       setIsLocationDropdownOpen(false);
//       setIsOpenNew(false);
//     }
//   };

//   // Event listener to detect clicks outside the dropdowns
//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Functions for incrementing and decrementing the counter values
//   const increment = (setter, value) => setter(value + 1);
//   const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);


//   return (
//     <div className="location-sec px-40">
//       <div className="location-box">
//         <ul className="location-listing-box w-100 d-flex flex-wrap align-items-center">
//           {/* Location Section */}
//           <li className="location-fiest-box">
//             <div className="w-100 position-relative" ref={locationDropdownRef}>
//               <h5>Location</h5>
//               <div className="w-100">
//                 <input type="text" onClick={toggleLocationDropdown} placeholder="Search destinations, stays, or experiences" className="location-input" />
//               </div>

//               {isLocationDropdownOpen && (
//                 <div className="location-dropdown dropdown-position-fixed">
//                   <div className="scroll-box-location" role="none">
//                     <div className="location-item-box">
//                       <h3>Recent searches</h3>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location01} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Kumasi</span>
//                           <span className="d-block w-100 location-filter-text-bottom">15-18 Jan  •  2 guests</span>
//                         </li>
//                       </ul>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location02} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Sekondi-Takoradi</span>
//                         </li>
//                       </ul>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location03} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Cape Coast</span>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="location-item-box">
//                       <h3>Suggested destinations</h3>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location04} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Koforidua</span>
//                         </li>
//                       </ul>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location05} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Tamale</span>
//                         </li>
//                       </ul>
//                       <ul className="d-flex align-items-center gap-2">
//                         <li>
//                           <Image src={Location06} alt="" />
//                         </li>
//                         <li>
//                           <span className="d-block w-100 location-filter-text-top">Ho</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </li>



//           {/* Guests Section */}
//           <li className="location-second-box">
//             <div className="w-100 position-relative" ref={dropdownRefNew}>
//               {/* Button */}
//               <div className="w-100">
//                 <div
//                   className="menu-location-btn"
//                   id="menu-button"
//                   aria-expanded={isOpenNew}
//                   aria-haspopup="true"
//                   onClick={toggleDropdownNew}
//                 >
//                   <div className="custom-date-display">
//                     <div className="checkin">
//                       <strong>Check-in</strong> {range?.[0] ? formatDate(range[0]) : <span className="placebox-text">Add date</span>}
//                     </div>
//                     <div className="checkout">
//                       <strong>Check-out</strong> {range?.[1] ? formatDate(range[1]) : <span className="placebox-text">Add date</span>}
//                     </div>
//                   </div>

//                 </div>
//               </div>

//               {/* Dropdown Menu */}
//               {isOpenNew && (
//                 <div className="menu-dropdown dropdown-position-fixed" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} >
//                 <div id="date-picker-parent" style={{ position: "relative" }}>
//                         <div ref={pickerRef} style={{ display: "block" }}>
//                           <DateRangePicker
//                             className="calendar-picker"
//                             value={range}
//                             onChange={setRange}
//                             placeholder="Select Date Range"
//                             container={() => document.getElementById("date-picker-parent")}
//                             placement="bottomStart"
//                             style={{ width: "100%" }}
//                             open={true} // ✅ Always open
//                           />
//                         </div>
//                       </div>
//                 </div>
//               )}
//             </div>
//           </li>


//           {/* Guests Section */}
//           <li className="location-fourth-box">
//             <div className="w-100 position-relative" ref={dropdownRef}>
//               {/* Button */}
//               <h5> Guests </h5>
//               <div className="w-100">
//                 <button
//                   type="button"
//                   className="menu-location-btn"
//                   id="menu-button"
//                   aria-expanded={isOpen}
//                   aria-haspopup="true"
//                   onClick={toggleDropdown}
//                 >
//                   Add Guests
//                   <svg
//                     className="-mr-1 size-6 txet-[#838383]"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                     data-slot="icon"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Dropdown Menu */}
//               {isOpen && (
//                 <div className="menu-dropdown dropdown-position-fixed" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} >
//                   <div className="coming-inner-sec" role="none">
//                     <h5>Who’s coming?</h5>
//                     <div className="add-remove-box d-flex justify-content-between align-items-center">
//                       <div className="text-add-remove">
//                         <h6>Adults</h6>
//                         <span>Ages 13 or above</span>
//                       </div>
//                       <form className="add-remove-btn">
//                         <div className=" d-flex align-items-center justify-content-between gap-2 position-relative text-center">
//                           {/* Decrement Button */}
//                           <button type="button" onClick={() => decrement(setAdults, adults)} className="btn-remove" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.59961 10H13.2663" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                           {/* Input Field */}
//                           <input type="text" value={adults} readOnly className="" />
//                           {/* Increment Button */}
//                           <button type="button" onClick={() => increment(setAdults, adults)} className="btn-add" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.66602 10H13.3327" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 13.3337V6.66699" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                     <div className="add-remove-box d-flex justify-content-between align-items-center">
//                       <div className="text-add-remove">
//                         <h6>Children</h6>
//                         <span>Ages 2-12</span>
//                       </div>
//                       <form className="add-remove-btn">
//                         <div className=" d-flex align-items-center justify-content-between gap-2 position-relative text-center">
//                           {/* Decrement Button */}
//                           <button type="button" onClick={() => decrement(setChildren, children)} className=" btn-remove" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.59961 10H13.2663" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                           {/* Input Field */}
//                           <input type="text" value={children} readOnly
//                           />
//                           {/* Increment Button */}
//                           <button type="button" onClick={() => increment(setChildren, children)} className=" btn-add" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.66602 10H13.3327" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 13.3337V6.66699" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                     <div className="add-remove-box d-flex justify-content-between align-items-center">
//                       <div className="text-add-remove">
//                         <h6>Infants</h6>
//                         <span>Under 2</span>
//                       </div>
//                       <form className="add-remove-btn">
//                         <div className=" d-flex align-items-center justify-content-between gap-2 position-relative text-center">
//                           {/* Decrement Button */}
//                           <button type="button" onClick={() => decrement(setInfants, infants)} className=" btn-remove" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.59961 10H13.2663" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                           {/* Input Field */}
//                           <input type="text" value={infants} readOnly
//                           />
//                           {/* Increment Button */}
//                           <button type="button" onClick={() => increment(setInfants, infants)} className=" btn-add" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.66602 10H13.3327" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 13.3337V6.66699" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                     <div className="add-remove-box d-flex justify-content-between align-items-center">
//                       <div className="text-add-remove">
//                         <h6>Pets</h6>
//                         <span>Bringing a service animal?</span>
//                       </div>
//                       <form className="add-remove-btn">
//                         <div className=" d-flex align-items-center justify-content-between gap-2 position-relative text-center">
//                           {/* Decrement Button */}
//                           <button type="button" onClick={() => decrement(setPets, pets)} className=" btn-remove" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.93294 18.3337C14.5163 18.3337 18.2663 14.5837 18.2663 10.0003C18.2663 5.41699 14.5163 1.66699 9.93294 1.66699C5.34961 1.66699 1.59961 5.41699 1.59961 10.0003C1.59961 14.5837 5.34961 18.3337 9.93294 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.59961 10H13.2663" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                           {/* Input Field */}
//                           <input type="text" value={pets} readOnly
//                           />
//                           {/* Increment Button */}
//                           <button type="button" onClick={() => increment(setPets, pets)} className=" btn-add" >
//                             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 14.5837 5.41602 18.3337 9.99935 18.3337Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M6.66602 10H13.3327" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 13.3337V6.66699" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </li>

//           <li className="location-fifth-box">
//             {/* Search Button */}
//             <div className="flex">
//               <button>
//                 <svg
//                   width="48"
//                   height="48"
//                   viewBox="0 0 48 48"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect width="48" height="48" rx="8" fill="#652669" />
//                   <path
//                     d="M23 32C27.9706 32 32 27.9706 32 23C32 18.0294 27.9706 14 23 14C18.0294 14 14 18.0294 14 23C14 27.9706 18.0294 32 23 32Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M30.9304 32.6898C31.4604 34.2898 32.6704 34.4498 33.6004 33.0498C34.4504 31.7698 33.8904 30.7198 32.3504 30.7198C31.2104 30.7098 30.5704 31.5998 30.9304 32.6898Z"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </li>
//         </ul>


//       </div>
//     </div>
//   );
// };

// export default LocationSearchNew;
