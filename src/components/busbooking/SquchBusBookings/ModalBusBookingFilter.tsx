"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';


const ModalBusBookingFilter = ({ show, handleClose }: any) => {
    return (

        <Modal show={show} onHide={handleClose} centered className="modal-filter review-modal-sec pt-4 modal-filters-history">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="review-modal-body">
                <div className="modal-block-header mb-3 border-bottom pb-2">
                    <h2 className="modal-title text-md-center text-capitalize">Filters History</h2>
                </div>
                <div className='filters-short-list'>
                    <div className='filters-short-list-item'>
                        <h3 className='list-item-ttl'>Sort</h3>
                        <div className='d-flex flex-wrap'>
                            <button className='btn btnfilters-wedge active'>Date (Recent First)</button>
                            <button className='btn btnfilters-wedge'>Date (Oldest First)</button>
                            <button className='btn btnfilters-wedge'>By Bus Operators (A-Z)</button>
                            <button className='btn btnfilters-wedge'>By Bus Operators (A-Z)</button>


                        </div>
                    </div>
                    <div className='filters-short-list-item'>
                        <h3 className='list-item-ttl'>Booking Status</h3>
                        <div className='d-flex flex-wrap'>
                            <button className='btn btnfilters-wedge active'>All</button>
                            <button className='btn btnfilters-wedge'>Completed</button>
                            <button className='btn btnfilters-wedge'>Cancelled</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer className="modal-footer-box">
                <button className='btn btn-primary btn-light'>Clear All</button>
                <div className='flex-grow-1'>
                    <button className='btn btn-primary w-100'>Apply Filters</button>
                </div>
            </Modal.Footer>

        </Modal>

    )
}

export default ModalBusBookingFilter
