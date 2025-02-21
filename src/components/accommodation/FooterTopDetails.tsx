import React from 'react'
import Image from "next/image";
//form last details page

import DetailsIcon1 from "../../../public/images/details-01.png";
import DetailsIcon2 from "../../../public/images/details-02.png";
import Link from 'next/link';



const FooterTopDetails = () => {
  return (
    <div className="footer-top-sec sec-gap">
      <div className="px-40 ">
          <div className="inner-footer-top d-flex align-items-center position-relative bg-white flex-wrap overflow-hidden">
            <div className="left-top-img position-absolute">
              <Image src={DetailsIcon1} alt=""/>
            </div>
            <div className="w-100 text-footer-top-box d-flex flex-md-nowrap flex-wrap align-items-end">
              <div className='left-text-box'>
                <h2>Become a Host on Squch !</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula lorem, elementum faucibus tristique non, scelerisque eu quam. Vestibulum ut nisi ac ex pharetra dapibus et eget quam</p>
              </div>
              <div className='right-text-box'>
                <Link href="" className="btn btn-primary">View Details</Link>
              </div>
            </div>
            <div className="right-top-img position-absolute">
              <Image src={DetailsIcon2} alt=""/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FooterTopDetails