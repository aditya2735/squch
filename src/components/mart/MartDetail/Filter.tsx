import React from 'react';

interface FilterProps {
    filter: {
        storeId: string;
        type: string;
        minPrice: string;
        maxPrice: string;
        categoryId: string;
        sortBy: string;
        sortingOrder: string;
    };
    setFilter: React.Dispatch<React.SetStateAction<{
        storeId: string;
        type: string;
        minPrice: string;
        maxPrice: string;
        categoryId: string;
        sortBy: string;
        sortingOrder: string;
    }>>;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {

    const handleTypeChange = (value: string) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            type: value, // Update the type based on selected option
        }));
    };

    return (
        <div className='sec-detail-menu'>
            <h2 className='text-center section-title'>Menu</h2>
            <div className="filter-container d-flex">
                {/* Veg Toggle */}
                <div className="toggle-button toggle-veg btn">
                    <input 
                        type='checkbox' 
                        id='veg' 
                        checked={filter.type === 'veg'}
                        onChange={() => handleTypeChange('veg')} 
                    />
                    <div className="toggle-icon green">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.65" y="0.65" width="17.7" height="17.7" rx="3.35" stroke="#20A66A" strokeWidth="1.3" />
                            <circle cx="9.5" cy="9.5" r="4.5" fill="#20A66A" />
                        </svg>
                    </div>
                </div>

                {/* Non-Veg Toggle */}
                <div className="toggle-button toggle-non-veg btn">
                    <input 
                        type='checkbox' 
                        id='non-veg' 
                        checked={filter.type === 'non-veg'} // Checked when non-veg is selected
                        onChange={() => handleTypeChange('non-veg')} 
                    />
                    <div className="toggle-icon green">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.892187" y="1.15" width="17.7" height="17.7" rx="3.35" stroke="#BD2F18" strokeWidth="1.3" />
                            <path d="M6.00072 12.5L10.2422 6.37797L14.4837 12.5H6.00072Z" fill="#BD2F18" stroke="#BD2F18" />
                        </svg>
                    </div>
                </div>

                {/* Additional Filters (e.g., Bestseller, Rating) */}
                <button className='btn'>Bestseller</button>
                <button className='btn'>Rating 4.0+</button>

            </div>
        </div>
    );
};

export default Filter;
