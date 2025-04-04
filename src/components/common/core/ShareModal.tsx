import React from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import CloseModal from "../../../../public/images/close-modal.png";

const shareOptions = [
    { href: "", src: "/images/copy.svg", alt: "Copy link", label: "Copy Link" },
    { href: "", src: "/images/email.svg", alt: "Email", label: "Email" },
    { href: "", src: "/images/message.svg", alt: "Messages", label: "Messages" },
    { href: "", src: "/images/ShareWhatsapp.svg", alt: "WhatsApp", label: "WhatsApp" },
    { href: "", src: "/images/messenger.svg", alt: "Messenger", label: "Messenger" },
    { href: "", src: "/images/facebook.svg", alt: "Facebook", label: "Facebook" },
    { href: "", src: "/images/twitter.svg", alt: "Twitter", label: "Twitter" },
];

  
const ShareModal = ({ show, handleClose }: { show: boolean; handleClose: () => void }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter modal-share">
            <Modal.Header>
                <Button variant="close-btn" onClick={handleClose}>
                    <Image src={CloseModal} alt="" />
                </Button>
            </Modal.Header>
            <Modal.Body className="review-modal-body">
                <div className="modal-block-header mb-3 border-bottom pb-2">
                    <h2 className="modal-title text-md-center text-capitalize">Share this place</h2>
                </div>
                <div className="share-box">
                    <ul className="d-flex flex-wrap list-unstyled">
                        {shareOptions.map(({ href, src, alt, label }, index) => (
                            <li key={index}>
                                <Link href={href} passHref>
                                    <span className="ic-box">
                                        <Image src={src} alt={alt} height={16} width={16} />
                                    </span>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ShareModal;