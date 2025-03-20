import React from 'react';
import Image from 'next/image';
import MenuCard from "../../../../public/images/res-menu-card.png";

const MenuSection = () => {
    return (
        <div className='card-restaurant-menu mb-24'>
            <div className="block-header">
                <div className="d-flex align-item-center">
                    <h2 className="heading02 m-0">Menu</h2>
                </div>
            </div>
            <div className='menucard'>
                <Image src={MenuCard} alt=''/>
            </div>
            <p className='menu-name m-0'><b>All</b> + 2 pages</p>
        </div>
    )
}

export default MenuSection