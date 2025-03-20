"use client";
import React from 'react'
import { useAppSelector } from '@/store/hooks';
import { formatTime } from '@/utils/formatData';

const Housepolicies = ( ) => {
      const { checkInTime,checkOutTime  } = useAppSelector((state) => state.hotelDetail.data);
    
    return (
        <div className='sec-house-policies mb-24'>
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">House policies</h2>
                </div>
            </div>

            <div className="house-policies">
                <div className="policy-container d-flex justify-content-between">
                    <div className="policy d-flex align-items-center">
                        <div className="icon-policy">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.862 9.57867L17.182 10.8987C18.177 11.8937 18.527 10.0587 19.916 9.82867C20.382 9.75067 20.793 9.59267 20.969 9.07667C21.125 8.62067 20.948 8.19167 20.395 7.63867L19 6.24467M11.5 13.5137L21.5 3.51367M8 21.5137C8.59095 21.5137 9.17611 21.3973 9.72208 21.1711C10.268 20.945 10.7641 20.6135 11.182 20.1957C11.5998 19.7778 11.9313 19.2817 12.1575 18.7357C12.3836 18.1898 12.5 17.6046 12.5 17.0137C12.5 16.4227 12.3836 15.8376 12.1575 15.2916C11.9313 14.7456 11.5998 14.2496 11.182 13.8317C10.7641 13.4138 10.268 13.0824 9.72208 12.8562C9.17611 12.6301 8.59095 12.5137 8 12.5137C6.80653 12.5137 5.66193 12.9878 4.81802 13.8317C3.97411 14.6756 3.5 15.8202 3.5 17.0137C3.5 18.2071 3.97411 19.3517 4.81802 20.1957C5.66193 21.0396 6.80653 21.5137 8 21.5137Z" stroke="#6D6D6D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div className='flex-grow-1'>
                            <p className="title">Check-in</p>
                            <p className="time">{formatTime(checkInTime)}</p>
                        </div>
                    </div>
                    <div className="policy checkout-time d-flex align-item-center">
                    <div className='flex-grow-1'>
                            <p className="title">Checkout</p>
                            <p className="time">Till {formatTime(checkOutTime)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Housepolicies
