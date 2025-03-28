import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import CloseModal from "../../../../public/images/close-modal.png";
import PaymentSuccessful from "../../../../public/images/payment-successful.png";

interface PaymentSuccessfullModalProps {
    show: boolean;
    handleClose: () => void;
}

const PaymentSuccessfullModal: React.FC<PaymentSuccessfullModalProps> = ({ show, handleClose }) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className="text-center modal-filter cancel-confirmation-sec details pt-4"
            >
                <Modal.Header>
                    <Button variant="close-btn" onClick={() => handleClose()}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>

                <Modal.Body className="cancel-modal-body">
                    <div className='confirmation-box'>
                        <Image src={PaymentSuccessful} alt="" />
                    </div>
                    <div className='confirmation-text'>
                        <h3 className='text-payment-successful'>
                            your Payment is Successful
                        </h3>
                    </div>
                </Modal.Body>

                <Modal.Footer className="modal-footer-box justify-content-center">
                    <button className='btn btn-primary'>
                        View Details
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PaymentSuccessfullModal