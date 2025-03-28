"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

import ExploreImg1 from "../../../public/images/explore-squch-img-1.png";
import ExploreImg2 from "../../../public/images/explore-squch-img-2.png";
import ExploreImg3 from "../../../public/images/explore-squch-img-3.png";
import ExploreImg4 from "../../../public/images/explore-squch-img-4.png";
import ExploreImg5 from "../../../public/images/explore-squch-img-5.png";
import ExploreImg6 from "../../../public/images/explore-squch-img-6.png";
import ExploreImg7 from "../../../public/images/explore-squch-img-7.png";
import ExploreImg8 from "../../../public/images/explore-squch-img-8.png";

const ExploreSquch = () => {
  return (
    <div className='sec-explore-squch'>
        <div className='container'>
        <div className='block-header'>
            <div className='d-flex align-item-center'>
              <h2 className='heading02 font-32 m-0'>Explore Squch</h2>
            </div>
          </div>

            <div className='row'>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg1} alt=""/>
                        </div>
                        <p className='m-0'>Cab</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg2} alt=""/>
                        </div>
                        <p className='m-0'>Bus</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg3} alt=""/>
                        </div>
                        <p className='m-0'>Foods</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg4} alt=""/>
                        </div>
                        <p className='m-0'>Dine-in</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg5} alt=""/>
                        </div>
                        <p className='m-0'>Mart</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg6} alt=""/>
                        </div>
                        <p className='m-0'>Stay</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg7} alt=""/>
                        </div>
                        <p className='m-0'>Events</p>
                    </Link>
                </div>
                <div className='col-3'>
                    <Link href="" className='card-home-explore'>
                        <div className='card-home-explore-img'>
                            <Image src={ExploreImg8} alt=""/>
                        </div>
                        <p className='m-0'>Ads</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExploreSquch
