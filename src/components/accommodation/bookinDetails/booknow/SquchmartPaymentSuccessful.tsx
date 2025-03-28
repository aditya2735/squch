"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import CloseModal from "../../../../../public/images/close-modal.png";
import PaymentSuccessful from "../../../../../public/images/accommodation-payment-success.png"
import { useRouter } from 'next/navigation';


const SquchmartPaymentSuccessful = ({ show, handleClose }: any) => {
    const router= useRouter()
    const hotel_id=1
  return (
    <div>
    <Modal show={show} onHide={handleClose} centered className="text-center accommondation-modal-payment modal-filter cancel-confirmation-sec details pt-4">
        <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
                <Image src={CloseModal} alt="" />
            </Button>
        </Modal.Header>
        <Modal.Body className="cancel-modal-body">
            <div className='confirmation-box'>
                <Image src={PaymentSuccessful} alt=""></Image>
            </div>
            <div className='confirmation-text'>
                <h3>Congratulation</h3>
                <p>your booking is successful</p>
            </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-box justify-content-center">
            <button className='btn btn-primary'
            onClick={()=>router.push(`/home/accommodation/booking/${hotel_id}/summary`)}
            >View Details</button>
        </Modal.Footer>
    </Modal>
</div>
  )
}

export default SquchmartPaymentSuccessful
