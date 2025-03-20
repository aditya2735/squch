"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { Button, Modal , Form} from 'react-bootstrap';

import CloseModal from "../../../../public/images/close-modal.png";
import CancelConfirmation from './CancelConfirmation';

interface CancelBookingProps {
    show: boolean;
    handleClose: () => void;
}

const CancelBookingModal: React.FC<CancelBookingProps> = ({ show, handleClose }) => {

    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    return (

        <div>
            <Modal show={show} onHide={handleClose} centered className="modal-filter cancel-modal-sec details pt-4">
                <Modal.Header>
                    <Button variant="close-btn" onClick={handleClose}>
                        <Image src={CloseModal} alt="" />
                    </Button>
                </Modal.Header>

                <Modal.Body className="cancel-modal-body">
                    <div className='modal-block-header'>
                        <h2 className='modal-title'>
                            Reason For Cancellation
                        </h2>
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
                                <div className='checkbox-box d-flex align-items-center gap-2'><Form.Check aria-label="option 5" checked /> Had a different issue</div>
                            </li>
                        </ul>
                    </div>


                    <div className='delivery-instructions'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Please Describe your issue" />
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer className="modal-footer-box">
                    <button className='btn btn-primary' onClick={() => { handleClose(); setShowCancelConfirmation(true); }}>Submit & Cancel</button>
                </Modal.Footer>
            </Modal>

            <CancelConfirmation show={showCancelConfirmation} handleClose={() => setShowCancelConfirmation(false)} />
        </div>
    )
}

export default CancelBookingModal