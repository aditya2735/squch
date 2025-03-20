import Link from 'next/link'
import React from 'react'

const RestaurantTabs = () => {
    return (
        <div className='tabs-shopmenu mt-0 mb-24 tabs-restaurant-main'>
            <ul className='d-flex align-items-center list-unstyled m-0'>
                <li><Link href="" className='active'>Order Online</Link></li>
                <li><Link href="">Dine-out</Link></li>
            </ul>
        </div>
    )
}

export default RestaurantTabs