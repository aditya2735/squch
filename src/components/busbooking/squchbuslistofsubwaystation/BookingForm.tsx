import React from 'react'

const BookingForm = () => {
    return (
        <div className='sec-booking-form'>
            <div className='card'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 form-group'>
                        <div className='d-flex align-items-center'>
                            <label>From</label>
                            <input type="text" className='form-control' placeholder="Custom Location" />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 form-group'>
                        <div className='d-flex align-items-center'>
                            <label>People</label>
                            <input type="text" className='form-control' placeholder="Custom Location" />
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 form-group'>
                        <div className='d-flex align-items-center justify-content-lg-between'>
                            <label>Date</label>
                            <div className="date-buttons d-flex align-items-center justify-content-between">
                                <button className="btn active">Today</button>
                                <button className="btn">Tomorrow</button>
                                <button className="btn">Schedule</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
