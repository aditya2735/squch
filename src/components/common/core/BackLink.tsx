"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import BackArrow from "../../../../public/images/backlink-arrow.svg";
import { useRouter } from 'next/navigation';
import ShareModal from './ShareModal';

interface BackLinkProps {
    ShowOption: boolean;
    IsFavourite?: boolean;
    handleFavourite?: () => void;
}

const BackLink: React.FC<BackLinkProps> = ({ ShowOption = false, IsFavourite, handleFavourite }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const router = useRouter();

    return (
        <div className='back-toolbar'>
            <div className='d-flex align-items-center'>

                <button className='btn btn-back' onClick={() => router.back()}>
                    <Image src={BackArrow} alt='back' />
                </button>

                {
                    ShowOption && <div className='ms-auto'>
                        <div className='d-flex social-auth'>
                            <ul className='d-flex align-items-center list-unstyled m-0'>
                                <li>
                                    <div onClick={()=> handleShow()}>
                                        <Image src={"/images/share.svg"} alt='share icon' width={15} height={17} />
                                    </div>
                                </li>
                                <li>
                                    {IsFavourite ?
                                        (
                                            <div onClick={() => handleFavourite?.()}>
                                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4066 15.5845C10.1233 15.6845 9.65664 15.6845 9.37331 15.5845C6.95664 14.7595 1.55664 11.3178 1.55664 5.48451C1.55664 2.90951 3.63164 0.826172 6.18997 0.826172C7.70664 0.826172 9.04831 1.55951 9.88997 2.69284C10.7316 1.55951 12.0816 0.826172 13.59 0.826172C16.1483 0.826172 18.2233 2.90951 18.2233 5.48451C18.2233 11.3178 12.8233 14.7595 10.4066 15.5845Z" fill="#F73179" stroke="#F73179" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        )
                                        :
                                        (
                                            <div onClick={() => handleFavourite?.()}>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3168 18.0826C11.0335 18.1826 10.5668 18.1826 10.2835 18.0826C7.8668 17.2576 2.4668 13.8159 2.4668 7.98255C2.4668 5.40755 4.5418 3.32422 7.10013 3.32422C8.6168 3.32422 9.95846 4.05755 10.8001 5.19089C11.6418 4.05755 12.9918 3.32422 14.5001 3.32422C17.0585 3.32422 19.1335 5.40755 19.1335 7.98255C19.1335 13.8159 13.7335 17.2576 11.3168 18.0826Z" stroke="#454545" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                }

            </div>
            <ShareModal show={show} handleClose={handleClose} />
        </div>
    )
};

export default BackLink;
