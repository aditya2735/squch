"use client";
import React from 'react'
import Image from "next/image";

import ImageTab1 from "../../../public/images/icon-tab-1.png";
import ImageTab2 from "../../../public/images/icon-tab-2.png";
import ImageTab3 from "../../../public/images/icon-tab-3.png";
import ImageTab4 from "../../../public/images/icon-tab-4.png";
import Link from 'next/link';

const TabsStartSearchingMobile = () => {
    return (
        <div className='sec-gap pb-0'>
            <div className='container'>
                <div className='sec-search-booking'>
                    <ul className='d-flex align-items-center list-unstyled'>
                        <li>
                            <Link href="">
                                <Image src={ImageTab1} alt='' />
                                <p className='m-0'>Busses To Airport</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={ImageTab2} alt='' />
                                <p className='m-0'>Daily Public Transport</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={ImageTab3} alt='' />
                                <p className='m-0'>To Subway Station</p>
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                <Image src={ImageTab4} alt='' />
                                <p className='m-0'>Plan Your Next Trip</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TabsStartSearchingMobile
