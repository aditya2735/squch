"use client";
import React from 'react'
import Image from "next/image";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Link from 'next/link';


const SquchBusPickup = () => {
  return (
    <div className="tabs-squchBus-Pickup-sec position-relative">
    <Tabs defaultActiveKey="Boarding" id="fill-tab-example" className="" fill>
      <Tab eventKey="Boarding" title={<span>Boarding Point <span className="text-muted">(Kumasi)</span></span>}>
      
        <div className='tabs-squch-bus-pickup mb-2'>
            <h2>Preferred Boarding Points at Kumasi</h2>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Kumasi VIP Bus Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Intercity STC Bus Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
        </div>

        <div className='tabs-squch-bus-pickup mb-5 mt-4'>
            <h2>All Boarding Points at Kumasi</h2>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Metro Mass Transport Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Achemfour Market station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>ASafo VIP Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>STC - ADUM Terminal</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
        </div>
        <div className='ntn-bottom w-100'>
            <Link href="" className='btn btn-primary disabled w-100'>Proceed</Link>
        </div>

      </Tab>
      <Tab eventKey="Dropping" title={<span>Dropping Point <span className="text-muted">(Tamale)</span></span>}>
        
        
      <div className='tabs-squch-bus-pickup mb-2'>
            <h2>Preferred Boarding Points at Kumasi</h2>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Kumasi VIP Bus Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Intercity STC Bus Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
        </div>

        <div className='tabs-squch-bus-pickup mb-5 mt-4'>
            <h2>All Boarding Points at Kumasi</h2>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Metro Mass Transport Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>Achemfour Market station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>ASafo VIP Station</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
            <div className='squch-bus-pickup-box mb-2 white-card d-flex align-items-end gap-2 justify-content-between'>
                <div className='left-squch-box d-flex align-items-center gap-2'>
                    <div className='btn-checkbox'>
                        <label>
                          <input type='radio' name='busradio' />
                            <b className='d-block'></b>
                        </label>
                    </div>
                    <div className='text-squch'>
                        <h6>STC - ADUM Terminal</h6>
                        <p>Boarding place address, landmark</p>
                    </div>
                </div>
                <div className='right-squch-box'>
                    <h6>04:00PM</h6>
                </div>
            </div>
        </div>
        <div className='ntn-bottom w-100'>
            <Link href="" className='btn btn-primary w-100'>Proceed</Link>
        </div>

      </Tab>
    </Tabs>
  </div>
  )
}

export default SquchBusPickup