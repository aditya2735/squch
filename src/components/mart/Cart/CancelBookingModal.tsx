"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { Button, Modal, Form } from 'react-bootstrap';

import CloseModal from "../../../../public/images/close-modal.png";
import CancelConfirmation from './CancelConfirmation';
import { useAppSelector } from '@/store/hooks';

interface CancelBookingProps {
    show: boolean;
    handleClose: () => void;
}

const CancelBookingModal: React.FC<CancelBookingProps> = ({ show, handleClose }) => {

    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
    const [selectedReason, setSelectedReason] = useState<number[]>([]);
    const [otherReason, setOtherReason] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { cancelReason } = useAppSelector((state) => state.martCart);

    const otherReasonExists = cancelReason.find((reason) => reason.reason.toLowerCase().includes("other"));
    const otherReasonId = otherReasonExists ? otherReasonExists.reasonId : null;

    const handleCheckboxChange = (id: number) => {
        if (id == otherReasonId) {
            setSelectedReason([id]);
        } else {
            setOtherReason("");
            setSelectedReason((prev) => {
                if (prev.includes(otherReasonId!)) {
                    return [id];
                }
                return prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id];
            })
        }
    }

    const handleSubmit = () => {

        if (selectedReason.length === 0) {
            setError("Please select at least one reason.");
            return;
        }

        if (selectedReason.includes(otherReasonId!) && !otherReason.trim()) {
            setError("Please enter a reason for selecting 'Other'.");
            return;
        }
        const payload: any = {
            reasonId: selectedReason,
        };

        if (selectedReason.includes(otherReasonId!)) {
            payload.reasonDetails = otherReason.trim();
        }

        console.log("Payload Sent to API:", payload);

        handleClose();
        setSelectedReason([]);
        setOtherReason("");
        setError("");
        setShowCancelConfirmation(true);
    };


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
                            {cancelReason.map((reason, index) => (
                                <li key={index}>
                                    <div className='checkbox-box d-flex align-items-center gap-2'>
                                        <Form.Check
                                            type="checkbox"
                                            name="cancelReason"
                                            onChange={() => handleCheckboxChange(reason.reasonId)}
                                            checked={selectedReason.some((r) => r === reason.reasonId)}
                                            aria-label="option 1"
                                        /> {reason.reason}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className='delivery-instructions'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={otherReason}
                                    onChange={(e) => setOtherReason(e.target.value)}
                                    placeholder="Please Describe your issue"
                                />
                                  {error && <p className="text-danger">{error}</p>}
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>

                <Modal.Footer className="modal-footer-box">
                    <button
                        className='btn btn-primary'
                        onClick={handleSubmit}
                        disabled={selectedReason.includes(otherReasonId!) && !otherReason.trim()}
                    >
                        Submit & Cancel
                    </button>
                </Modal.Footer>
            </Modal>

            <CancelConfirmation show={showCancelConfirmation} handleClose={() => setShowCancelConfirmation(false)} />
        </div>
    )
}

export default CancelBookingModal