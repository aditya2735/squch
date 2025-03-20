import Link from 'next/link'
import React from 'react'

const NavigationBottom = () => {
    return (
        <nav className='sec-navigation-bottom'>
            <div className='container'>
                <ul className='d-flex align-items-center justify-content-between list-unstyled m-0'>
                    <li>
                        <Link href="" className='nav-item'>
                            <span className='navicon d-block'>
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0002 26.5951C20.4435 26.5951 25.6668 21.3717 25.6668 14.9284C25.6668 8.48506 20.4435 3.26172 14.0002 3.26172C7.55684 3.26172 2.3335 8.48506 2.3335 14.9284C2.3335 21.3717 7.55684 26.5951 14.0002 26.5951Z" stroke="#838383" stroke-width="1.90909" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.0835 14.9297H11.0835" stroke="#838383" stroke-width="1.90909" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.4165 11.4297L9.9165 14.9297L13.4165 18.4297" stroke="#838383" stroke-width="1.90909" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <p className='m-0'>Back</p>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link href="" className='nav-item'>
                            <span className='navicon d-block'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16663 9.16659C4.16663 5.70984 4.16663 3.981 5.24096 2.90759C6.31529 1.83417 8.04321 1.83325 11.5 1.83325C14.9567 1.83325 16.6855 1.83325 17.759 2.90759C18.8324 3.98192 18.8333 5.70984 18.8333 9.16659V10.9999C18.8333 14.4567 18.8333 16.1855 17.759 17.2589C16.6846 18.3323 14.9567 18.3333 11.5 18.3333C8.04321 18.3333 6.31438 18.3333 5.24096 17.2589C4.16754 16.1846 4.16663 14.4567 4.16663 10.9999V9.16659Z" stroke="#838383" stroke-width="1.5"/>
<path d="M14.7083 14.6667H16.0833M6.91665 14.6667H8.29165M5.99998 17.875V19.25C5.99998 19.4931 6.09656 19.7263 6.26847 19.8982C6.44037 20.0701 6.67353 20.1667 6.91665 20.1667H8.29165C8.53476 20.1667 8.76792 20.0701 8.93983 19.8982C9.11174 19.7263 9.20831 19.4931 9.20831 19.25V18.3333M17 17.875V19.25C17 19.4931 16.9034 19.7263 16.7315 19.8982C16.5596 20.0701 16.3264 20.1667 16.0833 20.1667H14.7083C14.4652 20.1667 14.232 20.0701 14.0601 19.8982C13.8882 19.7263 13.7916 19.4931 13.7916 19.25V18.3333M18.8333 8.25H19.75C19.9931 8.25 20.2263 8.34658 20.3982 8.51849C20.5701 8.69039 20.6666 8.92355 20.6666 9.16667V10.0833C20.6666 10.2256 20.6335 10.366 20.5699 10.4933C20.5062 10.6206 20.4138 10.7313 20.3 10.8167L18.8333 11.9167H4.16665L2.69998 10.8167C2.58613 10.7313 2.49373 10.6206 2.43009 10.4933C2.36645 10.366 2.33331 10.2256 2.33331 10.0833V9.16667C2.33331 8.92355 2.42989 8.69039 2.6018 8.51849C2.77371 8.34658 3.00686 8.25 3.24998 8.25H4.16665" stroke="#838383" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.375 4.58325H4.625" stroke="#838383" stroke-width="1.5" stroke-linecap="round"/>
</svg>

                            </span>
                            <p className='m-0'>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/home/busbooking/SquchBusBookings" className='nav-item'>
                            <span className='navicon d-block'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.8335 1.83325V4.58325" stroke="#838383" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1665 1.83325V4.58325" stroke="#838383" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.9165 11.9167H14.2498" stroke="#838383" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.9165 15.5833H11.4998" stroke="#838383" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 3.20825C18.2192 3.37325 19.75 4.53742 19.75 8.84575V14.5108C19.75 18.2874 18.8333 20.1758 14.25 20.1758H8.75C4.16667 20.1758 3.25 18.2874 3.25 14.5108V8.84575C3.25 4.53742 4.78083 3.38242 7.83333 3.20825H15.1667Z" stroke="#838383" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </span>
                            <p className='m-0'>Bookings</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="" className='nav-item'>
                            <span className='navicon d-block'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.91602 11.4583C6.91602 8.92696 8.96797 6.875 11.4993 6.875C14.0307 6.875 16.0827 8.92696 16.0827 11.4583V18.7917H6.91602V11.4583Z" stroke="#838383" stroke-width="1.7" stroke-linejoin="round"/>
<path d="M11.4998 2.29175V3.66675M16.9503 4.27541L16.0662 5.32866M19.8502 9.29829L18.4958 9.53708M3.14941 9.29829L4.50379 9.53708M6.04975 4.27541L6.93341 5.32866M3.24979 18.7917H20.2081" stroke="#838383" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                            </span>
                            <p className='m-0'>SOS</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBottom
