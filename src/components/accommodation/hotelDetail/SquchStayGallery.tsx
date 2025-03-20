"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import CloseModal from "../../../../public/images/close-modal.png";
import Gallery1 from "../../../../public/images/gallery-01.png";
import Gallery2 from "../../../../public/images/gallery-02.png";
import Gallery3 from "../../../../public/images/gallery-03.png";
import Gallery4 from "../../../../public/images/gallery-04.png";
import Gallery5 from "../../../../public/images/gallery-05.png";
import Gallery6 from "../../../../public/images/gallery-06.png";
import { useAppSelector } from "@/store/hooks";
import { Banner } from "@/store/features/accommodation/types/homePageTypes";
import { HotelView, Room } from "@/store/features/accommodation/types/hotelTypes";

const SquchStayGallery = ({ show, handleClose, selectedTab }: any) => {
  const { hotelViewImages,rooms } = useAppSelector((state) => state.hotelDetail);
  const [activeTab, setActiveTab] = useState(selectedTab);

  useEffect(() => {
    setActiveTab(selectedTab);
  }, [selectedTab]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="modal-filter gallery-modal-sec pt-4"
    >
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          <Image src={CloseModal} alt="" />
        </Button>
      </Modal.Header>
      <Modal.Body className="gallery-modal-body">
        <h2>40 images</h2>
        <Tabs
          defaultActiveKey="All-box"
          id="justify-tab-example"
          className="mb-3"
          justify
          activeKey={activeTab} onSelect={(k) => setActiveTab(k)}
        >
          <Tab key={"all"}  eventKey="All" title="All">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between gap-2 mb={2}">
                  <h2>All Images</h2>
                  <span className="total-img">26 images</span>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <p>Classic</p>
              </div> */}
            </div>
            <div className="img-gallery-bottom">
              <div className="img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2">
                {hotelViewImages?.length > 0 &&
                  hotelViewImages.map(
                    (item: HotelView) =>
                      item?.images?.length > 0 &&
                      item.images.map((imageData) => (
                        <div key={imageData.id} className="gallery-img">
                          <Image
                            alt={`${imageData.id}`}
                            src={imageData.url}
                            height={311.33}
                            width={230}
                          ></Image>
                        </div>
                      ))
                  )}
                <div className="gallery-img">
                  <Image alt="" src={Gallery1}></Image>
                </div>
              </div>
            </div>
          </Tab>          
          <Tab key={"room"}  eventKey="Room" title="Room">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h2>Room</h2>
                    <span className="total-img">4 images</span>
                  </div>
                </div>
              </div>
              {rooms?.length > 0 &&
            rooms.map((room, index:number) => (
              <div key={`${room.id}${index}`}>
              <div className="col-lg-12">
                  <p>{room.roomType}</p>
                </div>
              <div >
                <div key={`${room.id}${index}-image`} className="img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2">
                {room?.images?.length > 0 &&
                      room.images.map((item, index:number) => (
                        <div key={index} className="gallery-img">
                          <Image
                            alt={`Image${index}`}
                            src={item}
                            height={311.33}
                            width={230}
                          ></Image>
                        </div>
                      ))}
                </div>
              </div>
              </div>
               ))}
            </Tab>
           
          {hotelViewImages?.length > 0 &&
            hotelViewImages.map((view: HotelView) => (
              <Tab key={view.viewName} eventKey={view.viewName} title={view.viewName}>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <h2>{view.viewName}</h2>
                      <span className="total-img">4 images</span>
                    </div>
                  </div>
                  {/* <div className="col-lg-12">
                    <p>Classic</p>
                  </div> */}
                </div>
                <div className="img-gallery-bottom">
                  <div className="img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2">
                    {view?.images?.length > 0 &&
                      view.images.map((item, index:number) => (
                        <div key={`${item.id}${index}`} className="gallery-img">
                          <Image
                            alt={`Image${item.id}${index}`}
                            src={item.url}
                            height={311.33}
                            width={230}
                          ></Image>
                        </div>
                      ))}
                  </div>
                </div>
              </Tab>
            ))}
            
          {/* <Tab eventKey="Entrance" title="Entrance">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h2>Entrance</h2>
                  <span className="total-img">6 images</span>
                </div>
              </div>
              <div className="col-lg-12">
                <p>Classic</p>
              </div>
            </div>
            <div className="img-gallery-bottom">
              <div className="img-gallery-sec d-flex flex-wrap justify-content-center column-gap-2 gap-2">
                <div className="gallery-img">
                  <Image alt="" src={Gallery5}></Image>
                </div>
                <div className="gallery-img">
                  <Image alt="" src={Gallery4}></Image>
                </div>
              </div>
            </div>
          </Tab> */}
       
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default SquchStayGallery;


{/* 
  
   <Tab key={"all"}  eventKey="All-box" title="All">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h2>All Room</h2>
                  <span className="total-img">26 images</span>
                </div>
              </div>
              <div className="col-lg-12">
                <p>Classic</p>
              </div>
            </div>
          mapping images
                      ))
                  )}
                <div className="gallery-img">
                  <Image alt="" src={Gallery1}></Image>
                </div>
              </div>
            </div>
          </Tab>          
          <Tab key={"room"}  eventKey="Room" title="Room">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <h2>Room</h2>
                    <span className="total-img">4 images</span>
                  </div>
                </div>
              </div>
              {rooms?.length > 0 &&
            rooms.map((room: Room) => (
              <div key={room.id}>
              <div className="col-lg-12">
                  <p>{room.roomType}</p>
                </div>
              <div >
                mapping images
              </div>
              </div>
               ))}
            </Tab>
           
          {hotelViewImages?.length > 0 &&
            hotelViewImages.map((view: HotelView) => (
              <Tab key={view.viewName} eventKey={view.viewName} title={view.viewName}>
               mapping details
                  </div>
                 mapping images
                        ))}
                    </div>
                  </div>
                </Tab>
              ))}

   */}