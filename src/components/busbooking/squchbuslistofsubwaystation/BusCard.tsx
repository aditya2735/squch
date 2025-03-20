'use client'
import Image from "next/image";
import Link from 'next/link';
import React from 'react'

const BusCard = () => {
    return (
        <div className='sec-buscard px-40 pb-2 pb-md-5'>
            <div className='buscard-list'>
                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>

                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>

                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>
                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>
                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>
                <Link href="/home/busbooking/squchbuslist" className='card buscard-list-item'>
                    <div className="station-name">Accra Railway Station</div>
                    <div className="station-details">Train Station, Kwame Nkurumah Avenue</div>
                    <div className="bottom-row d-flex align-items-center justify-content-between">
                        <span>16KM away</span>
                        <span>20 Busses</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BusCard
