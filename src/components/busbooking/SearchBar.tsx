"use client";
import Image from "next/image";
import Link from "next/link";

import React from 'react'

import ImageSearch from "../../../../public/images/icon-search.svg";
import ImageMicro from "../../../../public/images/icon-microphone.svg";


const SearchBar = () => {
    return (
            <div className='searchbar mb-4'>
                <div className="position-relative">
                <input type="email" className="form-control" placeholder="Search “Item Category”" />
                <div className="position-absolute">
                    <button className="icon-button icon-search">
                        <Image src={ImageSearch} alt="" />
                    </button>
                    <button className="icon-button icon-micro">
                        <Image src={ImageMicro} alt="" />
                    </button>
                </div>
                </div>
            </div>
    )
}

export default SearchBar
