import React from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import CloseModal from "../../../../public/images/close-modal.png";
import PaymentNotConform from "../../../../public/images/payment-not-confirm.png"


const ConfirmError = ({ show, handleClose }: any) => {

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                centered className="text-center modal-filter cancel-confirmation-sec details pt-4"
            >
                <Modal.Header>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>
                
                <Modal.Body className="cancel-modal-body">
                    <div className='sec-modal-ttl'>
                        Please check your network connection
                    </div>
                    <div className='confirmation-box'>
                        <Image src={PaymentNotConform} alt=""></Image>
                    </div>
                    <div className='confirmation-text'>
                        <h3 className='cancelled'>Payment is not confirm</h3>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modal-footer-box justify-content-center">
                    <button className='btn btn-primary'>Proceed Again</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ConfirmError