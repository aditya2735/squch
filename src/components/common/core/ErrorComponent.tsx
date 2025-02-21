"use client";
import React from 'react'
import Image from "next/image";

import PaymentNotConform from "../../../../public/images/payment-not-confirm.png"

interface ErrorComponentProps {
    retryFunction: () => void;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ retryFunction }) => {
    return (
        <div className="text-center modal-filter cancel-confirmation-sec details pt-4">
            <div className='sec-modal-ttl'>
                Please check your network connection
            </div>
            <div className='confirmation-box'>
                <Image src={PaymentNotConform} alt=""></Image>
            </div>
           
            <div className="error ">
                <button className='error-button' onClick={() => retryFunction()}>Try Again</button>
            </div>
        </div>
    );
}

export default ErrorComponent;


// <div className="text-center p-5">
//     <p>Something went wrong. Please try again.</p>
//     <button className='error-button' onClick={retryFunction}>Try Again</button>
// </div>
