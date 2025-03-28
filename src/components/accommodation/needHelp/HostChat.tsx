"use client";
import Image from "next/image"; 
import React, { useState } from 'react';

import LogoIcons from "../../../../public/images/logo-support.png"; 

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css"; 
import { useAppSelector } from "@/store/hooks";

const HostChat = () => {
    const {hostData}=useAppSelector((state)=>state.hostChat)
    return (
        <div className='sec-support-tickets chat-support-main'>
            <div className="support-tickets-content">
                <div className='chat-support-body'>
                    <SimpleBar style={{ maxHeight: '100%' }}>
                        {hostData && 
                        <div className=' host-list-details chat-support-head text-center'>
                                 <div >
                                      <Image src={hostData?.profilePicture} alt="Host Image" height={81} width={81}/>
                                    </div> 

                        <h2 className='ttl-support-tickets'>{hostData?.firstName} {hostData?.lastName}</h2>
                        {/* <p className='m-0'>Hotel Name</p> */}
                    </div>}
                        
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Hi </div>
                                    <div className='bg-purple chat-message'>I need to confirm something regarding booking </div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex mb-1'>
                            <div className='flex-grow-1'>
                                <div className='w-100'>
                                    <div className='d-flex flex-column align-items-start mesge-you'>
                                        <div className='bg-light chat-message'>Sure, can you Please specify</div>
                                        <div className="small">
                                            <Image src={LogoIcons} alt="" />
                                            12:54 PM
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end text-end mb-1'>
                            <div className='w-100'>
                                <div className='d-flex flex-column align-items-end mesge-me'>
                                    <div className='bg-purple chat-message'>Yes sure</div>
                                    <div className='d-flex'>
                                        <div className='small'>12:54 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleBar>
                </div>

                <div className='chat-support-footer'>
                    <div className='position-relative d-flex align-items-center w-100'>
                        <textarea className="form-control" data-autoresize="true" placeholder="Enter message here"></textarea>
                        <button className="btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="..." fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostChat;
