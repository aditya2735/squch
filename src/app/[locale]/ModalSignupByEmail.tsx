"use client";
import React from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseModal from "../../../public/images/close-modal.png";
import Link from 'next/link';


const ModalSignupByEmail = ({ show, handleClose }: any) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="modal-filter modal-login-signup  pt-4">
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          <Image src={CloseModal} alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body className="review-modal-body">
        <div className='card-modal-signin-main'>
          <div className='heading-ttl-login-signup'>
            Finish signing up
          </div>
          <div className='form-group-single input-modal-form position-relative mb-16'>
            <label>Legal name</label>
            <div className='position-relative'>
              <div className='labelfloating'>First name on ID</div>
              <input type="text" className="form-control mb-8" placeholder='John' />
            </div>
            <input type="text" className="form-control mb-8" placeholder='Last name on ID' />
            <small className='d-block'>Make sure this matches the name on your government ID. if you go by another name, you can  add a <Link href="" className='link-underline-line'>preferred first name.</Link></small>
          </div>
          <div className='form-group-single input-modal-form position-relative mb-16'>
            <label>Date of birth</label>
            <input type="text" className="form-control mb-8" placeholder='Birthday' />
            <small>Other people who us Squch won’t see your birthday.</small>
          </div>
          <div className='form-group-single input-modal-form position-relative mb-16'>
            <label>Email</label>
            <input type="text" className="form-control mb-8" placeholder='Email' />
            <small>We’ll email you a confirmation.</small>
          </div>

          <div className='form-group-single input-modal-form position-relative'>
            <label>Password</label>
            <div className='position-relative'>
              <input type="password" className="form-control mb-8" placeholder='Email' />
              <div className='password-container'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1083 7.89166L7.8916 12.1083C7.34994 11.5667 7.0166 10.825 7.0166 10C7.0166 8.35 8.34993 7.01666 9.99993 7.01666C10.8249 7.01666 11.5666 7.35 12.1083 7.89166Z" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.8499 4.80834C13.3915 3.70834 11.7249 3.10834 9.99987 3.10834C7.0582 3.10834 4.31654 4.84167 2.4082 7.84167C1.6582 9.01667 1.6582 10.9917 2.4082 12.1667C3.06654 13.2 3.8332 14.0917 4.66654 14.8083" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.0166 16.275C7.9666 16.675 8.97493 16.8917 9.99993 16.8917C12.9416 16.8917 15.6833 15.1583 17.5916 12.1583C18.3416 10.9833 18.3416 9.00834 17.5916 7.83334C17.3166 7.4 17.0166 6.99167 16.7083 6.60834" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.9252 10.5834C12.7085 11.7584 11.7502 12.7167 10.5752 12.9334" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.8915 12.1083L1.6665 18.3333" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.3334 1.66669L12.1084 7.89169" stroke="#292D32" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <div className='password-suggestion mb-16'>
                <div className='icon'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2224 7.99998C14.2224 11.4364 11.4366 14.2222 8.00016 14.2222C4.56372 14.2222 1.77794 11.4364 1.77794 7.99998C1.77794 4.56354 4.56372 1.77776 8.00016 1.77776C11.4366 1.77776 14.2224 4.56354 14.2224 7.99998Z" stroke="#262626" strokeWidth="0.888889" />
                    <path d="M7.05346 10.3867C6.92012 10.3867 6.79346 10.3333 6.70012 10.24L4.81346 8.35334C4.62012 8.16 4.62012 7.84 4.81346 7.64667C5.00679 7.45334 5.32679 7.45334 5.52012 7.64667L7.05346 9.18L10.4801 5.75334C10.6735 5.56 10.9935 5.56 11.1868 5.75334C11.3801 5.94667 11.3801 6.26667 11.1868 6.46L7.40679 10.24C7.31346 10.3333 7.18679 10.3867 7.05346 10.3867Z" fill="#292D32" />
                  </svg>
                </div>
                <div className='text'>
                  Password strength : <span>Strong</span>
                </div>
              </div>

              <small>By selecting Agree and continue, I agree to Squch’s <Link href="" className='link-simple'> Terms of Services</Link> , <Link href="" className='link-simple'>Payments Terms of Services</Link>  and acknowledge the Privacy Policy.</small>

              

            </div>
          </div>

          

        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className='flex-grow-1'>
          <button className='btn btn-primary w-100'>Agree and continue</button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalSignupByEmail
