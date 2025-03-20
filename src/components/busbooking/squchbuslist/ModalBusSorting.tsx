"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../../public/images/close-modal.png";
import Link from 'next/link';

const ModalBusSorting = ({ show, handleClose }: any) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter review-modal-sec pt-4 modal-filters-history">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="review-modal-body">
                <div className="modal-block-header mb-3 border-bottom pb-2">
                    <h2 className="modal-title text-md-center text-capitalize">Sorting options</h2>
                </div>
                <div className='bus-sorting-options-list'>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Relevance</b>
                        </label>
                    </div>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Price - Low to High</b>
                        </label>
                    </div>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Price - High to Low</b>
                        </label>
                    </div>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Best Rated First</b>
                        </label>
                    </div>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Early Departure</b>
                        </label>
                    </div>
                    <div className='bus-sorting-options-list-item'>
                        <label>
                        <input type='radio' name='busradio' />
                            <b className='d-block'>Late Departure</b>
                        </label>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer className="modal-footer-box">
                <button className='btn btn-primary w-100'>Save Preferences</button>
            </Modal.Footer>

        </Modal>
    )
}

export default ModalBusSorting
