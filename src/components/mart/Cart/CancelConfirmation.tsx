"use client";
import React from 'react'
import Image from "next/image";
import { Button, Modal } from 'react-bootstrap';
import CloseModal from "../../../../public/images/close-modal.png";
import Confirmation from "../../../../public/images/confirmation.png";

interface CancelConfirmationProps {
    show: boolean;
    handleClose: () => void;
}

const CancelConfirmation: React.FC<CancelConfirmationProps> = ({ show, handleClose }) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="text-center modal-filter cancel-confirmation-sec details pt-4"
            >
                <Modal.Header>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>
                <Modal.Body className="cancel-modal-body">
                    <div className='confirmation-box'>
                        <Image src={Confirmation} alt=""></Image>
                    </div>
                    <div className='confirmation-text'>
                        <h3 className='cancelled'>Cancelled</h3>
                        <p>your booking is cancelled</p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer-box justify-content-center">
                    <button className='btn btn-light-gray'>Back to Home</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CancelConfirmation