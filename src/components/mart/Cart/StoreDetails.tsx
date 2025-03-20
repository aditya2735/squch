import { StoreAddressProps } from '@/store/features/Mart/Cart/cartTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StoreDetails: React.FC<{ storeDetails: StoreAddressProps }> = ({ storeDetails }) => {
    return (
        <div className="biggie-mart-sec">
            <div className="top-biggie-mart d-flex align-items-center justify-content-between gap-2">
                <div className="left-biggie-mart">
                    <h2>{storeDetails?.name}</h2>
                    <p>{storeDetails?.address}</p>
                </div>
                <div className="right-biggie-mart">
                    <ul className="d-flex flex-wrap align-items-center justify-content-center gap-2">
                        <li>
                            <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href={`tel:${storeDetails.mobile}`}>
                                <Image src={"/images/dialer.svg"} alt="dialer icon" width={20} height={20} />
                                Call hotel
                            </Link>
                        </li>
                        <li>
                            <Link className="btn btn-light-grey d-flex align-items-center justify-content-center gap-1" href="">
                                <Image src={"/images/help.svg"} alt="help icon" width={20} height={20} />
                                Need help
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Address */}
            <div className="biggie-mart-bottom-details">
                <div className="biggie-mart-box d-flex justify-content-between align-items-end">
                    <div className="biffie-left-mart">
                        <h5>Delivery Address</h5>
                        <p>21 Dr Isert St, Accra, Ghana</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreDetails