import React from 'react'

const TravelInfo = () => {
    return (
        <div className='bg-white px-40'>
            <div className="travel-info">
                <div className='d-flex align-items-center justify-content-between'>
                    <div className="departure text-start">
                        <strong>30 Dec, 16:00</strong>
                        <p>Metro Mass Transport Station</p>
                    </div>
                    <div className="arrow">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7276 5.93555L19.2917 11.4997L13.7276 17.0639" stroke="#454545" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.70824 11.5H19.1357" stroke="#454545" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="arrival text-end">
                        <strong>30 Dec, 19:30</strong>
                        <p>VIP Bus Station, Tamale</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelInfo
