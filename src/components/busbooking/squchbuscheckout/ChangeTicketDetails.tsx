import Link from 'next/link'
import React from 'react'

const ChangeTicketDetails = () => {
    return (
        <div className='card card-traveling position-relative card-change-detail mb-40'>
            <div className='wedge-white'>Ticket Details Will Send To</div>
            <div className='d-md-flex align-items-center'>
                <div className='flex-grow-1'>
                    <Link href="tel:+233 12345 12345" className='d-flex detail-items w-100'>
                        <span className='icon'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" />
                                <path d="M19 9C19 8.4 18.53 7.48 17.83 6.73C17.19 6.04 16.34 5.5 15.5 5.5" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22.5 9C22.5 5.13 19.37 2 15.5 2" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        +233 12345 12345
                    </Link>
                    <Link href="mailto:johndoe@gmail.com" className='d-flex detail-items w-100'>
                        <span className='icon'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 20.5H7.5C4.5 20.5 2.5 19 2.5 15.5V8.5C2.5 5 4.5 3.5 7.5 3.5H17.5C20.5 3.5 22.5 5 22.5 8.5V15.5C22.5 19 20.5 20.5 17.5 20.5Z" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5 9L14.37 11.5C13.34 12.32 11.65 12.32 10.62 11.5L7.5 9" stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        johndoe@gmail.com
                    </Link>
                </div>
                <div className='ms-auto'>
                    <div className='sec-chnage-detail-box'>
                        <Link href="" className='btn btn-change-details'>
                            <span className='icon'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4999 10.0003C12.8011 10.0003 14.6666 8.13485 14.6666 5.83366C14.6666 3.53247 12.8011 1.66699 10.4999 1.66699C8.19873 1.66699 6.33325 3.53247 6.33325 5.83366C6.33325 8.13485 8.19873 10.0003 10.4999 10.0003Z" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.5083 13.1162L13.5583 16.0662C13.4416 16.1829 13.3333 16.3995 13.3083 16.5579L13.1499 17.6828C13.0916 18.0912 13.375 18.3745 13.7833 18.3162L14.9083 18.1579C15.0666 18.1329 15.2916 18.0245 15.4 17.9079L18.3499 14.9579C18.8583 14.4495 19.0999 13.8579 18.3499 13.1079C17.6083 12.3662 17.0166 12.6079 16.5083 13.1162Z" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.0833 13.541C16.3333 14.441 17.0332 15.141 17.9332 15.391" stroke="#652669" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.34155 18.3333C3.34155 15.1083 6.54991 12.5 10.4999 12.5C11.3666 12.5 12.1999 12.625 12.9749 12.8583" stroke="#652669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            Change Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeTicketDetails
