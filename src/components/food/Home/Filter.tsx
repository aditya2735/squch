"use client";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"

const Filter = () => {
  return (
    <div className='filterDesign-sec mt-5'>
            <div className='inner-filterdesign bg-dark-gray px-40'>
            <SimpleBar style={{ maxWidth: "100%", overflowX: "auto" }}>
                <ul className="com-slider-box d-flex align-items-center gap-3 ">
                    <li>
                        <Link className="slider-box d-flex align-items-center gap-2 active-filter" href="">
                            <span className="item">2</span>
                            Filter
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 4.875H12" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.5 4.875H1.5" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.5 7.5C8.94975 7.5 10.125 6.32475 10.125 4.875C10.125 3.42525 8.94975 2.25 7.5 2.25C6.05025 2.25 4.875 3.42525 4.875 4.875C4.875 6.32475 6.05025 7.5 7.5 7.5Z" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.5 13.125H13.5" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 13.125H1.5" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 15.75C11.9497 15.75 13.125 14.5747 13.125 13.125C13.125 11.6753 11.9497 10.5 10.5 10.5C9.05025 10.5 7.875 11.6753 7.875 13.125C7.875 14.5747 9.05025 15.75 10.5 15.75Z" stroke="#262626" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box d-flex align-items-center gap-2 active-filter" href="">
                        Sort By
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box d-flex align-items-center gap-2 active-filter" href="">
                        Fast Delivery
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 9L1 1" stroke="#652669" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box " href="">
                        New on Squch
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box " href="">
                        Rating 4.0+
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box " href="">
                        Pure Veg
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box " href="">
                            Rs. 300 - Rs. 600
                        </Link>
                    </li>
                    <li>
                        <Link className="slider-box " href="">
                            Less than Rs. 300
                        </Link>
                    </li>
                </ul>
                </SimpleBar>
            </div>
    </div>
  )
}

export default Filter