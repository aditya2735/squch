"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';


import CloseModal from "../../../../../public/images/close-modal.png";
import SquchmartCancelConfirmation from './SquchmartCancelConfirmation';

const CancelBookingModal = ({ show, handleClose }: any) => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  return (
    
    <div>
    <Modal show={show} onHide={handleClose} centered className="modal-filter accommodation-cancelconfirm-modal cancel-modal-sec details pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="cancel-modal-body ">
            <div className='modal-block-header'>
                <h2 className='modal-title text-center'>Reason For Cancellation</h2>
            </div>
            <div className='modal-form-list'>
                <ul>
                    <li>
                        <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 1" /> Don’t need this table option</div>
                    </li>
                    <li>
                        <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 2" /> What help with location</div>
                    </li>
                    <li>
                        <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 3" /> Found a better price</div>
                    </li>
                    <li>
                        <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 4" /> details did not match as per my prefrence</div>
                    </li>
                    <li>
                        <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 5" checked/> Had a different issue</div>
                    </li>
                </ul>
            </div>

            
            <div className='delivery-instructions'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Please Describe your issue"  />
                    </Form.Group>
                </Form>
            </div>

        </Modal.Body>
        <Modal.Footer className="modal-footer-box">
            <button className='btn btn-primary w-100'  onClick={() => {handleClose(); setShowCancelConfirmation(true); }}>Submit & Cancel</button>
        </Modal.Footer>
    </Modal>
    
    <SquchmartCancelConfirmation show={showCancelConfirmation} handleClose={() => setShowCancelConfirmation(false)}/>
</div>
  )
}

export default CancelBookingModal