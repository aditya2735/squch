"use client";
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import BackArrow from "../../../../public/images/backlink-arrow.svg";
import { useRouter } from 'next/navigation';


const BackLink: React.FC<{ ShowOption: boolean }> = ({ ShowOption = false }) => {

    const router = useRouter();

    return (
        <div className='back-toolbar'>
            <div className='d-flex align-items-center'>

                <button className='btn btn-back' onClick={() => router.back()}>
                    <Image src={BackArrow} alt='back' />
                </button>

                {ShowOption && <div className='ms-auto'>
                    <div className='d-flex social-auth'>
                        <ul className='d-flex align-items-center list-unstyled m-0'>
                            <li>
                                <Link href="">
                                    <Image src={"/images/share.svg"} alt='share icon' width={15} height={17} />
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <Image src={"/images/heart.svg"} alt='share icon' width={21} height={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>}

            </div>
        </div>
    )
};

export default BackLink;
