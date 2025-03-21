"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BackArrow from "../../../../public/images/backlink-arrow.svg";
import { useRouter } from 'next/navigation';


const BackLink: React.FC = () => {

    const router = useRouter();

    return (
        <div className='back-toolbar'>
            <div className='d-flex align-items-center'>

                <button className='btn btn-back' onClick={() => router.back()}>
                    <Image src={BackArrow} alt='back' />
                </button>

                <div className='ms-auto'>
                    <div className='d-flex social-auth'>
                        <ul className='d-flex align-items-center list-unstyled m-0'>
                            <li>
                                <Link href="">
                                    <i className="bi bi-share"></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <i className="bi bi-heart"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BackLink;
