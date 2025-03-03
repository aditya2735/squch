"use client";
import Image from "next/image";
import styles from "../../home/busTicketBooking/style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";

import SliderIcon from "../../../public/images/icon-1.svg";
import CloseModal from "../../../public/images/close-modal.png";
import kitchenIcon from "../../../public/images/kitchen.png";
import wifiIcon from "../../../public/images/iconswifi.png";
import swimmingIcon from "../../../public/images/iconsswimming.png";
import CarParkingIcon from "../../../public/images/iconsCarParking.png";
import SharedIcon from "../../../public/images/iconsSharedIcon.png";
import AlarmIcon from "../../../public/images/iconsAlarmIcon.png";
import HouseIcons from "../../../public/images/house-icons.png";
import FlateTcons from "../../../public/images/flate-icons.png";
import GuestHouseIcons from "../../../public/images/guestHouseIcons.png";
import FilterBtn from "../../../public/images/filter-btn.png";

import { Range } from "react-range";

import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

import { useAppDispatch, useAppSelector } from "@//store/hooks";
import { UseStateNumber } from "./Types";
import { useTranslations } from "next-intl";
import {
  resetFilters,
  toggleArrayFilter,
  setSingleFilter,
  setRangeFilter,
  updateCounterFilter,
} from "@//store/features/accommodation/slices/selectedFilterSlice";

interface FilterModalProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

const FilterModal = ({ show, setShow }: FilterModalProps) => {
  // testing start
  const t = useTranslations("Accommodation.FilterModal");
  const dispatch = useAppDispatch();
  const { amenities, bookingOptions, accessibilityCategories, status, error } =
    useAppSelector((state) => state.allFilters);
  const selectedFilters = useAppSelector((state) => state.selectedFilters);

  // 🧹 Clear all filters
  const handleClearFilters = () => {
    dispatch(resetFilters());
  };

  // testing end

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rangeValues = [850, 15000];

  const [showAll, setShowAll] = useState(false);

  /********checkbox*******/

  const topRatedOptions = [
    { id: 3, label: "3 Star" },
    { id: 4, label: "4 Star" },
  ];

  const userRatingOptions = [
    { id: 4.5, label: "Excellent :- 4.5+" },
    { id: 3.5, label: "Very Good :- 3.5+" },
  ];

  /********some filters data*******/

  const Properties = [
    {
      id: "House",
      name: "House",
      image: HouseIcons,
      alt: "House Icon",
    },
    {
      id: "Flate",
      name: "Flate",
      image: HouseIcons,
      alt: "Flate Icon",
    },
    {
      id: "GuestHouse",
      name: "GuestHouse",
      image: GuestHouseIcons,
      alt: "House Icon",
    },
  ];

  const roomFilters = [
    { id: 1, label: "Bedrooms", key: "bedRoomCount" },
    { id: 2, label: "Beds", key: "bedCount" },
    { id: 3, label: "Bathrooms", key: "bathRoomCount" },
  ];

  const handleToggle = () => setShowAll(!showAll);

  const handleRangeValue = (values: number[]) => {
    if (values.length === 2) {
      dispatch(setRangeFilter({ sPrice: values[0], ePrice: values[1] }));
    }
  };

  const handleCheckboxChange = (featureId: number) => {
    dispatch(toggleArrayFilter({ key: "accecIds", value: featureId }));
  };

  const optionRows = (keyValue: string, item: any) => {
    return ( 
        <div
          key={item.id}
          onClick={() =>
            dispatch(toggleArrayFilter({ key: keyValue, value: item.id }))
          }
        >
          <button className="card">
            <div
              className="card-body d-flex align-items-center gap-2 justify-center text-center "
              style={{
                backgroundColor: selectedFilters[keyValue]?.includes(item.id)
                  ? "rgba(38, 38, 38, 1)"
                  : "#fff",
                color: selectedFilters[keyValue]?.includes(item.id)
                  ? "#fff"
                  : "#000",
              }}
            >
              <span  className="icons-btn">
                <Image src={FilterBtn} alt={item.id} />
              </span>
              <p className="card-text ">{item.name ?? item.optionName}</p>
            </div>
          </button>
        </div> 
    );
  };

  const RatingFilterOptions = ({
    options, 
  }: {
    options: { id: number; label: string }[]; 
  }) => (
    <form action="">
      {options.map((option) => (
        <Form.Group className="mb-2" controlId={option.label} key={option.id} >
          <Form.Check
            type="checkbox"
            label={option.label}
            checked={selectedFilters?.minRating?.includes(option.id) ?? false}
            onChange={() => {
              dispatch(
                toggleArrayFilter({ key: "minRating", value: option.id })
              );
            }}
          />
        </Form.Group>
      ))}
    </form>
  );

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-filter pt-4"
      >
        <Modal.Header>
          <Button variant="close-btn" onClick={handleClose}>
            <Image src={CloseModal} alt="" />
          </Button>
        </Modal.Header>
        <Modal.Body className="filter-modal-body">
          <div className="top-filter-modal">
            <h2>{t("filters")}</h2>
            <p>{t("typeOfPlace")}</p>
          </div>
          <div className="tabs-filter">
            <Tabs
              defaultActiveKey="any"
              id="justify-tab-example"
              onSelect={(k) =>
                dispatch(setSingleFilter({ key: "type", value: k ? k : "any" }))
              }
              className="mb-3"
              justify
              activeKey={selectedFilters?.type}
            >
              <Tab eventKey="Any" title={t("anyType")}></Tab>
              <Tab eventKey="Room" title={t("room")}></Tab>
              <Tab eventKey="Home" title={t("entireHome")}></Tab>
            </Tabs>
            <div>
              <div className="top-range-slider">
                <div className="top-filter-slider mt-4 ">
                  <h6>{t("priceRange")}</h6>
                  <p className="mb-0">Nightly prices before fees and taxes</p>
                </div>

                {/* Range Slider */}

                <Range
                  step={50}
                  min={850}
                  max={15000}
                  values={[
                    selectedFilters?.sPrice ?? rangeValues[0],
                    selectedFilters?.ePrice ?? rangeValues[1],
                  ]}
                  onChange={handleRangeValue}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="range-box"
                      style={{
                        position: "relative",
                        margin: "1.5rem 0",
                        height: "6px",
                        background: "#e5e7eb",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          backgroundColor: "#6B21A8",
                          height: "100%",
                          borderRadius: "4px",
                          left: `${
                            (((selectedFilters?.sPrice !== undefined
                              ? selectedFilters.sPrice
                              : rangeValues[0]) -
                              rangeValues[0]) /
                              (rangeValues[1] - rangeValues[0])) *
                            100
                          }%`,
                          right: `${
                            100 -
                            (((selectedFilters?.ePrice !== undefined
                              ? selectedFilters.ePrice
                              : rangeValues[1]) -
                              rangeValues[0]) /
                              (rangeValues[1] - rangeValues[0])) *
                              100
                          }%`,
                        }}
                      />
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                        position: "relative",
                        top: "5px",
                      }}
                      className="thumb-slide-btn"
                    />
                  )}
                />

                {/* Minimum and Maximum Price Display */}
                <div className="d-flex align-items-center justify-content-between range-content-box mt-3">
                  <div>
                    <span className="text-top">{t("minimum")}</span>
                    <div className="text-bottom">₡ {selectedFilters?.sPrice || rangeValues[0]}</div>
                  </div>
                  <div>
                    <span className="text-top">{t("maximum")}</span>
                    <div className="text-bottom">₡ {selectedFilters?.ePrice || rangeValues[1]}</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="rooms-beds-box">
                <h6>{t("roomsAndBeds")}</h6>
                {roomFilters.map((item) => (
                  <div key={item.id} className="bed-rooms d-flex justify-content-between align-items-center">
                    <div className="head-text">
                      <h5>{item.label}</h5>
                    </div>
                    <form className="">
                      <div className="add-remove-btn-box position-relative d-flex align-items-center">
                        {/* Decrement Button */}
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateCounterFilter({
                                key: item.key,
                                type: "decrement",
                              })
                            )
                          }
                          className="remove-btn-box"
                        >
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.9134 18.3337C15.4967 18.3337 19.2467 14.5837 19.2467 10.0003C19.2467 5.41699 15.4967 1.66699 10.9134 1.66699C6.33008 1.66699 2.58008 5.41699 2.58008 10.0003C2.58008 14.5837 6.33008 18.3337 10.9134 18.3337Z"
                              stroke="#652669"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.58008 10H14.2467"
                              stroke="#652669"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        {/* Input Field */}
                        <input
                          type="text"
                          value={selectedFilters[item.key] ?? "Any"}
                          readOnly
                          className="input-box"
                        />
                        {/* Increment Button */}
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateCounterFilter({
                                key: item.key,
                                type: "increment",
                              })
                            )
                          }
                          className="add-btn-box"
                        >
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.3939 18.3337C14.9772 18.3337 18.7272 14.5837 18.7272 10.0003C18.7272 5.41699 14.9772 1.66699 10.3939 1.66699C5.81055 1.66699 2.06055 5.41699 2.06055 10.0003C2.06055 14.5837 5.81055 18.3337 10.3939 18.3337Z"
                              stroke="#652669"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.06055 10H13.7272"
                              stroke="#652669"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.3945 13.3337V6.66699"
                              stroke="#652669"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                ))}
              </div>
              <hr />
              <div className="amenities-box">
                <h6>{t("amenities")}</h6>
                <div className="d-flex items-center flex-wrap gap-md-2 gap-1">
                  {amenities
                    ?.filter((item: any) => item.status === "Active")
                    ?.slice(0, showAll ? undefined : 6)
                    ?.map((item: any) => optionRows("amentIDs", item))}
                </div>
              </div>

              {/* Toggle Button */}
              <div className="text-center btn-show-less mt-4">
                <button
                  onClick={handleToggle}
                  className="btn btn-primary d-flex align-items-center justify-content-center"
                >
                  <i
                    className={`${
                      showAll
                        ? "fa-solid fa-chevron-up"
                        : "fa-solid fa-chevron-down"
                    } me-2`}
                  ></i>
                  {amenities?.length > 6 && (
                    <button
                      className="btn btn-link"
                      onClick={() => setShowAll(!showAll)}
                    >
                      {showAll ? t("showLess") : t("showMore")}
                    </button>
                  )}
                </button>
              </div>
              <hr />
              <div className="booking-box">
                <h6>{t("bookingOptions")} </h6>
                <div className="booking-bottom">
                  <div className="d-flex items-center flex-wrap gap-md-2 gap-1 p-0 m-0">
                    {bookingOptions?.length > 0 &&
                      bookingOptions.map((item: any) =>
                        optionRows("bookOpsId", item)
                      )}
                  </div>
                </div>
              </div>
              <hr />
              <div className="booking-box">
                <h6>{t("topRated")}</h6>
                <p className="heading-small-text mt-3 mb-3">
                  {t("starCategory")}
                </p>
                <div className="booking-bottom">
                  <RatingFilterOptions
                    options={topRatedOptions} 
                  />
                </div>

                <p className="heading-small-text mt-3 mb-3">
                  {t("userRating")}
                </p>
                <div className="booking-bottom">
                  <RatingFilterOptions
                    options={userRatingOptions} 
                  />
                </div>
              
              </div>
              <hr />
              <div className="accordion-box">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header> {t("propertyType")}</Accordion.Header>
                    <Accordion.Body>
                      <div className="booking-bottom">
                        <div className="d-flex items-center flex-wrap gap-md-2 gap-1 p-0 m-0">
                          {Properties.map((item) =>
                            optionRows("stayType", item)
                          )}
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <hr />
              <div className="accordion-box">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {t("accessibilityFeatures")}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="booking-bottom">
                        {accessibilityCategories.map((category: any) => (
                          <div className="mb-3" key={category.id}>
                            <span className="heading-box">
                              {category.categoryName}
                            </span>
                            <form action="">
                              {category.features.map((feature: any) => (
                                <Form.Group
                                  className="mb-2"
                                  controlId={feature.id}
                                  key={feature.id}
                                >
                                  <Form.Check
                                    type="checkbox"
                                    label={feature.featureName}
                                    checked={
                                      selectedFilters?.accecIds?.includes(
                                        feature.id
                                      ) ?? false
                                    }
                                    onChange={() =>
                                      handleCheckboxChange(feature.id)
                                    }
                                  />
                                </Form.Group>
                              ))}
                            </form>
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-box">
          <hr className="w-100" />
          <ul className="d-flex flex-wrap align-items-center justify-content-between w-100">
            <li>
              <Button variant="btn-left-text" onClick={handleClearFilters}>
                {t("clearAll")}
              </Button>
            </li>
            <li>
              <Button variant="btn-right-box">Show Rooms</Button>
            </li>
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FilterModal;
