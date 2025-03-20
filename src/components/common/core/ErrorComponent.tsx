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
                Something went wrong. Please try again later.
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