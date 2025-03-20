import React, { useState } from 'react'
import ShowAllReviewModal from './ShowAllReviewModal';

const StoreCardInformation = () => {
    const [showReviewModal, setShowReviewModal] = useState(false);
    return (
        <div className='sec-store-information pb-0 mb-24'>
            <div className='container'>
                    <div className="store-card">
                        <div className="store-info">
                            <h2 className='title-name'>Jamrock Restaurant</h2>
                            <div className='d-flex align-items-center'>
                                <div className='flex-grow-1'>
                                    <p className="delivery-info">
                                        25-30 mins • 4.0km • Achimota Mall, Accra, Ghana
                                    </p>
                                    <p className="items">Japanese, Chinees, Fast Food | ₵24.00 for two</p>
                                </div>
                                <div className="rating cursor-pointer" onClick={() => setShowReviewModal(true)}>
                                    <span className="rating-badge">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.865 1.75531L7.745 3.51531C7.865 3.76031 8.185 3.99531 8.455 4.04031L10.05 4.30531C11.07 4.47531 11.31 5.21531 10.575 5.94531L9.335 7.18531C9.125 7.39531 9.01 7.80031 9.075 8.09031L9.43 9.62531C9.71 10.8403 9.065 11.3103 7.99 10.6753L6.495 9.79031C6.225 9.63031 5.78 9.63031 5.505 9.79031L4.01 10.6753C2.94 11.3103 2.29 10.8353 2.57 9.62531L2.925 8.09031C2.99 7.80031 2.875 7.39531 2.665 7.18531L1.425 5.94531C0.695 5.21531 0.93 4.47531 1.95 4.30531L3.545 4.04031C3.81 3.99531 4.13 3.76031 4.25 3.51531L5.13 1.75531C5.61 0.800313 6.39 0.800313 6.865 1.75531Z" fill="white" />
                                        </svg>
                                        4.2</span>
                                    <p>20k+ ratings</p>
                                </div>
                            </div>
                            <div className="open-status">
                                <span className="status">
                                    <span className='text-success'>Open</span> till 11:30 PM
                                </span>
                                <span className="info-dropdown">
                                    <i className="bi bi-chevron-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
            <ShowAllReviewModal show={showReviewModal} handleClose={() => setShowReviewModal(false)}/>
        </div>
    )
}

export default StoreCardInformation