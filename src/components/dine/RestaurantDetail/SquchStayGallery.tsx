import Image from 'next/image';
import React from 'react';
import { Button, Modal, Tab, Tabs } from 'react-bootstrap';

import CloseModal from "../../../../public/images/close-modal.png";

import Gallery1 from "../../../../public/images/gallery-ambience-img-1.jpg";
import Gallery2 from "../../../../public/images/gallery-ambience-img-2.jpg";
import Gallery3 from "../../../../public/images/gallery-ambience-img-3.jpg";
import Gallery4 from "../../../../public/images/gallery-ambience-img-4.jpg";
import Gallery5 from "../../../../public/images/gallery-ambience-img-5.jpg";
import Gallery6 from "../../../../public/images/gallery-ambience-img-6.jpg";

import MenuCard from "../../../../public/images/menu-card-img.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const SquchStayGallery = ({ show, handleClose }: any) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="modal-filter gallery-modal-sec pt-4">
          <Modal.Header>
            <Button variant="close-btn" onClick={handleClose}>
              <Image src={CloseModal} alt="" />
            </Button>
          </Modal.Header>
          <Modal.Body className="gallery-modal-body">
            <h2>40 images</h2>
            <Tabs defaultActiveKey="All-box" id="justify-tab-example" className="mb-3" justify>
              <Tab eventKey="All-box" title="Ambience">
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='d-flex align-items-center justify-content-between gap-2'>
                      <h2>All Ambience</h2>
                      <span className='total-img'>26 images</span>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <p>Classic</p>
                  </div>
                </div>
                <div className='img-gallery-bottom'>
                  <div className='img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2'>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery1}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery2}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery3}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery4}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery5}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery6}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery1}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery2}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery6}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery1}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery2}></Image>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Room" title="Food">
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='d-flex align-items-center justify-content-between gap-2'>
                      <h2>Food</h2>
                      <span className='total-img'>4 images</span>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <p>Classic</p>
                  </div>
                </div>
                <div className='img-gallery-bottom'>
                  <div className='img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2'>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery1}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery2}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery3}></Image>
                    </div>
                    <div className='gallery-img'>
                      <Image alt='' src={Gallery4}></Image>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Entrance" title="Menu">
                <div className='d-flex align-items-center justify-content-between gap-2 mb-24'>
                  <h2>Menu</h2>
                </div>
                <div className='sec-menu-slider'>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={true} // Enable navigation arrows
                    modules={[Navigation]}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                    breakpoints={{
                      300: { slidesPerView: 1, },
                      767: { slidesPerView: 1 },
                      1024: { slidesPerView: 1 },
                    }}
                    className="slider-menu-card"
                  >
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={MenuCard} alt='' />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Tab>
            </Tabs>
    
          </Modal.Body>
    
        </Modal>
      )
}

export default SquchStayGallery