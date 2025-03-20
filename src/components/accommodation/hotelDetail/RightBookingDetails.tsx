"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import HostImg from "../../../../public/images/host-author-img.png";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSelectedRoom } from "@/store/features/accommodation/slices/hotelDetailSlice";
import { Room } from "@/store/features/accommodation/types/hotelTypes";
import { checkInPost } from "@/services/accommodation/bookingServices";
import { calculateNights, getCurrencySymbol } from "@/utils/formatData";

const RightBookingDetails = () => {
  const { rooms, selectedRooms, selectedRoom } = useAppSelector(
    (state) => state.hotelDetail
  );
  const { avgPricePerNight, id: hotel_id } = useAppSelector(
    (state) => state.hotelDetail.data
  );
  const { housePolicy } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const guestTypes = [
    { key: "adults", label: "Adult" },
    { key: "children", label: "Children" },
    { key: "specialCare", label: "Special Care" },
  ];

  const handleBookNow = async () => {
    try {
      const data = {
        hotelId: hotel_id,
        userId: 2,
        roomIds: selectedRoom?.id,
        startDate: housePolicy.checkIn,
        endDate: housePolicy.checkOut,
        adultsCount: housePolicy?.adults || 0,
        childrenCount: housePolicy?.children || 0,
        infantsCount: housePolicy?.infants || 0,
        petsCount: housePolicy?.pets || 0,
        specialCareCount: housePolicy?.specialCare || 0,
      };

      console.log("Booking data:", data);

      // const response = await checkInPost(data);  // uncomment

      router.push(`/home/accommodation/booking/${hotel_id}/booknow`); // remove when api is working
      // if (response) {
      //   console.log("Booking successful:");
      //   if(response.success===true){
      //     router.push(`/home/accommodation/booking/${hotel_id}/booknow`)
      //   }
      // } else {
      //   console.error("Booking failed: No response from API.");
      // }
    } catch (error: any) {
      console.error("Error during booking:", error.message);
    }
  };

  const nights = calculateNights(housePolicy?.checkIn, housePolicy?.checkOut); // by default nights = 1

  // Function to format date (e.g., "Wed, 8 Jan")
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const checkInFormatted = housePolicy.checkIn? formatDate(housePolicy.checkIn): "N/A";
  const checkOutFormatted = housePolicy.checkOut? formatDate(housePolicy.checkOut): "N/A";

  // Guests & Night info
  const guests = guestTypes.map(({ key, label }) => 
    {    const count = housePolicy[key];
      return count ? `${count} ${label}${count > 1 && label!="Children" ? "s" : ""}` : "";
    })
    .filter(Boolean)
    .join(", ");

  const totalGuests = housePolicy?.guests;

  const nightDetails = `${totalGuests} Guest${
    totalGuests !== 1 ? "s" : ""
  } - ${nights} Night${nights !== 1 ? "s" : ""}`;

  const calculateTotalPrice = (room: Room, totalGuests: number) => {
    const { maxOccupancy, currency, pricePerNight, priceInPerOccupancy } = room;

    const baseRoomPrice = parseFloat(pricePerNight); // Room price per night
    const extraGuestPrice = parseFloat(priceInPerOccupancy); // Extra guest charge
    const hotelBasePrice = parseFloat(avgPricePerNight); // Base hotel price

    // Calculate room price including extra guest charges
    const roomTotalPrice =
      totalGuests <= maxOccupancy
        ? baseRoomPrice // No extra charge if guests are within maxOccupancy
        : baseRoomPrice + (totalGuests - maxOccupancy) * extraGuestPrice; // Charge for extra guests

    // Final total price including hotel base price
    const totalPrice = roomTotalPrice + hotelBasePrice;
    const currencySymbol= getCurrencySymbol(currency)
    return `${currencySymbol} ${totalPrice.toFixed(2)}`;
  };

  return (
    <>
      <div className="booking-date-sec">
        <div className="top-booking-details bg-white mb-4">
          <h5>Your booking details</h5>
          <div className="list-booking">
            <ul className="d-flex align-items-center gap-3 justify-content-between">
              <li className="time-box d-flex align-items-center gap-2">
                <span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833984 7.49935C0.833984 4.98535 0.833984 3.72802 1.61532 2.94735C2.39665 2.16668 3.65332 2.16602 6.16732 2.16602H8.83398C11.348 2.16602 12.6053 2.16602 13.386 2.94735C14.1666 3.72868 14.1673 4.98535 14.1673 7.49935V8.83268C14.1673 11.3467 14.1673 12.604 13.386 13.3847C12.6046 14.1653 11.348 14.166 8.83398 14.166H6.16732C3.65332 14.166 2.39598 14.166 1.61532 13.3847C0.834651 12.6033 0.833984 11.3467 0.833984 8.83268V7.49935Z"
                      stroke="#5D5D5D"
                    />
                    <path
                      d="M4.16797 2.16602V1.16602M10.8346 2.16602V1.16602M1.16797 5.49935H13.8346"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11.5 10.8333C11.5 11.0101 11.4298 11.1797 11.3047 11.3047C11.1797 11.4298 11.0101 11.5 10.8333 11.5C10.6565 11.5 10.487 11.4298 10.3619 11.3047C10.2369 11.1797 10.1667 11.0101 10.1667 10.8333C10.1667 10.6565 10.2369 10.487 10.3619 10.3619C10.487 10.2369 10.6565 10.1667 10.8333 10.1667C11.0101 10.1667 11.1797 10.2369 11.3047 10.3619C11.4298 10.487 11.5 10.6565 11.5 10.8333ZM11.5 8.16667C11.5 8.34348 11.4298 8.51305 11.3047 8.63807C11.1797 8.7631 11.0101 8.83333 10.8333 8.83333C10.6565 8.83333 10.487 8.7631 10.3619 8.63807C10.2369 8.51305 10.1667 8.34348 10.1667 8.16667C10.1667 7.98986 10.2369 7.82029 10.3619 7.69526C10.487 7.57024 10.6565 7.5 10.8333 7.5C11.0101 7.5 11.1797 7.57024 11.3047 7.69526C11.4298 7.82029 11.5 7.98986 11.5 8.16667ZM8.16667 10.8333C8.16667 11.0101 8.09643 11.1797 7.9714 11.3047C7.84638 11.4298 7.67681 11.5 7.5 11.5C7.32319 11.5 7.15362 11.4298 7.0286 11.3047C6.90357 11.1797 6.83333 11.0101 6.83333 10.8333C6.83333 10.6565 6.90357 10.487 7.0286 10.3619C7.15362 10.2369 7.32319 10.1667 7.5 10.1667C7.67681 10.1667 7.84638 10.2369 7.9714 10.3619C8.09643 10.487 8.16667 10.6565 8.16667 10.8333ZM8.16667 8.16667C8.16667 8.34348 8.09643 8.51305 7.9714 8.63807C7.84638 8.7631 7.67681 8.83333 7.5 8.83333C7.32319 8.83333 7.15362 8.7631 7.0286 8.63807C6.90357 8.51305 6.83333 8.34348 6.83333 8.16667C6.83333 7.98986 6.90357 7.82029 7.0286 7.69526C7.15362 7.57024 7.32319 7.5 7.5 7.5C7.67681 7.5 7.84638 7.57024 7.9714 7.69526C8.09643 7.82029 8.16667 7.98986 8.16667 8.16667ZM4.83333 10.8333C4.83333 11.0101 4.7631 11.1797 4.63807 11.3047C4.51305 11.4298 4.34348 11.5 4.16667 11.5C3.98986 11.5 3.82029 11.4298 3.69526 11.3047C3.57024 11.1797 3.5 11.0101 3.5 10.8333C3.5 10.6565 3.57024 10.487 3.69526 10.3619C3.82029 10.2369 3.98986 10.1667 4.16667 10.1667C4.34348 10.1667 4.51305 10.2369 4.63807 10.3619C4.7631 10.487 4.83333 10.6565 4.83333 10.8333ZM4.83333 8.16667C4.83333 8.34348 4.7631 8.51305 4.63807 8.63807C4.51305 8.7631 4.34348 8.83333 4.16667 8.83333C3.98986 8.83333 3.82029 8.7631 3.69526 8.63807C3.57024 8.51305 3.5 8.34348 3.5 8.16667C3.5 7.98986 3.57024 7.82029 3.69526 7.69526C3.82029 7.57024 3.98986 7.5 4.16667 7.5C4.34348 7.5 4.51305 7.57024 4.63807 7.69526C4.7631 7.82029 4.83333 7.98986 4.83333 8.16667Z"
                      fill="#5D5D5D"
                    />
                  </svg>
                </span>
                <span>Dates</span>
              </li>
              <li className="date-box">
                {checkInFormatted} - {checkOutFormatted}
              </li>
            </ul>
            <ul className="d-flex align-items-center gap-3 justify-content-between">
              <li className="time-box d-flex align-items-center gap-2">
                <span>
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5007 12.4993C11.5007 11.0849 10.9387 9.72831 9.93855 8.72811C8.93836 7.72792 7.58181 7.16602 6.16732 7.16602C4.75283 7.16602 3.39628 7.72792 2.39608 8.72811C1.39589 9.72831 0.833984 11.0849 0.833984 12.4993"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.16732 7.16667C8.00827 7.16667 9.50065 5.67428 9.50065 3.83333C9.50065 1.99238 8.00827 0.5 6.16732 0.5C4.32637 0.5 2.83398 1.99238 2.83398 3.83333C2.83398 5.67428 4.32637 7.16667 6.16732 7.16667Z"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1678 11.8335C14.1678 9.5868 12.8345 7.50013 11.5012 6.50013C11.9395 6.17131 12.2899 5.73952 12.5216 5.24298C12.7532 4.74643 12.8588 4.20044 12.8292 3.65333C12.7995 3.10622 12.6355 2.57485 12.3515 2.10626C12.0675 1.63767 11.6724 1.2463 11.2012 0.966797"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Details</span>
              </li>
              <li className="date-box">{nightDetails}</li>
            </ul>
            <ul className="d-flex align-items-center gap-3 justify-content-between">
              <li className="time-box d-flex align-items-center gap-2">
                <span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8327 12.4993C11.8327 11.0849 11.2708 9.72831 10.2706 8.72811C9.27039 7.72792 7.91384 7.16602 6.49935 7.16602C5.08486 7.16602 3.72831 7.72792 2.72811 8.72811C1.72792 9.72831 1.16602 11.0849 1.16602 12.4993"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.49935 7.16667C8.3403 7.16667 9.83268 5.67428 9.83268 3.83333C9.83268 1.99238 8.3403 0.5 6.49935 0.5C4.6584 0.5 3.16602 1.99238 3.16602 3.83333C3.16602 5.67428 4.6584 7.16667 6.49935 7.16667Z"
                      stroke="#5D5D5D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Guests</span>
              </li>
              <li className="date-box">{guests}</li>
            </ul>
          </div>
          <div className="light-bg-top-booking">
            <div className="dropdown-room">
              <Dropdown
                onSelect={(eventKey) => {
                  const selected = rooms.find(
                    (room) => room.id.toString() === eventKey
                  );
                  if (selected) {
                    dispatch(setSelectedRoom(selected));
                  }
                }}
              >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedRoom ? selectedRoom.roomType : "Select a Room"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {rooms?.length > 0 &&
                    rooms.map((item) => (
                      <Dropdown.Item key={item.id} eventKey={item.id}>
                        {item.roomType}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="total-amount-box d-flex justify-content-between align-items-center gap-2">
              <div className="left-amount-box">
                <p>Total Amount</p>
                <span>For {nightDetails}</span>
              </div>
              <div className="right-amount-box">
                {selectedRoom ? (
                  <h6>{calculateTotalPrice(selectedRoom, totalGuests)}</h6>
                ) : (
                  <p>Select a Room</p>
                )}
              </div>
            </div>
            {/* /home/accommodation/booking/${hotel_id}/booknow  */}
            <div className="book-now-btn">
              <button className="btn btn-primary" onClick={handleBookNow}>
                {" "}
                Book Now{" "}
              </button>
            </div>
          </div>
          <div className="green-box d-flex align-items-center gap-2">
            <span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8.52745L3.6225 8.47412C3.60815 8.31404 3.5327 8.16565 3.4118 8.05976C3.29091 7.95387 3.13387 7.89861 2.9733 7.90548C2.81273 7.91234 2.66098 7.9808 2.54957 8.09662C2.43815 8.21245 2.37563 8.36674 2.375 8.52745H3ZM17.3633 10.0466L16.775 13.4466L18.0075 13.6599L18.595 10.2599L17.3633 10.0466ZM11.5375 17.7075H7.66333V18.9575H11.5375V17.7075ZM6.90417 17.01L6.2275 9.18245L4.98167 9.28995L5.65917 17.1175L6.90417 17.01ZM16.775 13.4466C16.3525 15.8883 14.1508 17.7075 11.5375 17.7075V18.9575C14.7258 18.9575 17.4758 16.7333 18.0075 13.6599L16.775 13.4466ZM11.5458 4.24912L10.9933 7.61995L12.2267 7.82162L12.7792 4.45162L11.5458 4.24912ZM6.49 8.53745L7.68917 7.50412L6.8725 6.55745L5.675 7.59078L6.49 8.53745ZM9.87 4.14245L10.2667 2.61412L9.05667 2.30078L8.66 3.82828L9.87 4.14245ZM10.865 2.31412L10.9858 2.35328L11.3683 1.16328L11.2475 1.12412L10.865 2.31412ZM9.26917 5.67912C9.52932 5.19237 9.731 4.67657 9.87 4.14245L8.66 3.82828C8.54517 4.26686 8.37961 4.69055 8.16667 5.09078L9.26917 5.67912ZM10.9858 2.35328C11.1046 2.38966 11.2122 2.45527 11.299 2.54409C11.3858 2.6329 11.4489 2.74208 11.4825 2.86162L12.6925 2.54828C12.6067 2.22437 12.4403 1.92745 12.2088 1.68526C11.9772 1.44307 11.6881 1.26349 11.3683 1.16328L10.9858 2.35328ZM10.2667 2.61412C10.2835 2.55421 10.3131 2.49864 10.3534 2.45119C10.3936 2.40374 10.4436 2.36551 10.5 2.33912L9.9575 1.21328C9.51417 1.42662 9.18083 1.82162 9.05667 2.30078L10.2667 2.61412ZM10.5 2.33912C10.6141 2.28497 10.7445 2.27604 10.865 2.31412L11.2475 1.12412C10.8219 0.988059 10.3603 1.01996 9.9575 1.21328L10.5 2.33912ZM12.295 9.15245H16.6117V7.90245H12.295V9.15245ZM4.4325 17.8375L3.6225 8.47412L2.3775 8.58162L3.18583 17.945L4.4325 17.8375ZM3.625 17.9266V8.52745H2.375V17.9266H3.625ZM3.18583 17.945C3.18329 17.9147 3.18791 17.8842 3.19778 17.8554C3.20765 17.8267 3.22339 17.8003 3.244 17.778C3.26461 17.7556 3.28964 17.7378 3.3175 17.7257C3.34536 17.7136 3.37544 17.7073 3.40583 17.7075V18.9575C4.01083 18.9575 4.48417 18.4391 4.4325 17.8375L3.18583 17.945ZM12.7792 4.45162C12.8839 3.81811 12.8544 3.16965 12.6925 2.54828L11.4825 2.86245C11.6007 3.31511 11.6223 3.78757 11.5458 4.24912L12.7792 4.45162ZM7.66333 17.7075C7.47251 17.7071 7.28873 17.6353 7.14821 17.5062C7.00769 17.3771 6.92062 17.2001 6.90417 17.01L5.65917 17.1175C5.70253 17.6193 5.9324 18.0866 6.30342 18.4272C6.67444 18.7678 7.15966 18.957 7.66333 18.9575V17.7075ZM7.68917 7.50412C8.25583 7.01578 8.86583 6.43495 9.27 5.67912L8.16667 5.09078C7.87833 5.63162 7.41917 6.08745 6.8725 6.55745L7.68917 7.50412ZM18.595 10.2599C18.6452 9.97077 18.6315 9.67412 18.555 9.39078C18.4784 9.10744 18.3409 8.84425 18.1519 8.61966C17.963 8.39507 17.7272 8.21451 17.4612 8.09062C17.1951 7.96672 16.9052 7.9025 16.6117 7.90245V9.15245C17.0842 9.15245 17.445 9.57912 17.3633 10.0466L18.595 10.2599ZM3.40583 17.7075C3.5275 17.7075 3.625 17.8058 3.625 17.9266H2.375C2.375 18.495 2.83583 18.9575 3.40583 18.9575V17.7075ZM10.9933 7.61995C10.9623 7.80877 10.9726 8.00208 11.0238 8.18648C11.0749 8.37088 11.1655 8.54196 11.2893 8.68784C11.4132 8.83372 11.5673 8.95091 11.7409 9.03128C11.9146 9.11165 12.1036 9.15245 12.295 9.15245V7.90245C12.2848 7.90249 12.2748 7.90113 12.2656 7.89685C12.2563 7.89256 12.2482 7.8863 12.2416 7.8785C12.2351 7.87071 12.2304 7.86156 12.2278 7.85173C12.2252 7.8419 12.2248 7.83162 12.2267 7.82162L10.9933 7.61995ZM6.2275 9.18245C6.21734 9.06178 6.23507 8.94042 6.28084 8.82831C6.32661 8.7162 6.39829 8.61652 6.49 8.53745L5.67333 7.58995C5.43179 7.7984 5.24314 8.06118 5.1229 8.35671C5.00266 8.65224 4.95426 8.97208 4.98167 9.28995L6.2275 9.18245Z"
                  fill="#198152"
                />
              </svg>
            </span>
            <span>Pay now and save ₵100 on this booking</span>
          </div>
          <div className="para-details">
            <p className="mb-0">
              *Discount and coupons can be applied in the next step
            </p>
          </div>
        </div>
        <div className="bottom-booking-details bg-white mb-4">
          <h5>Meet Your Host</h5>
          <div className="host-list-details">
            <div className="host-list d-flex align-items-center gap-2">
              <div className="host-img-box">
                <Image src={HostImg} alt="" />
              </div>
              <div className="host-img-details">
                <h6>Zara Millers</h6>
                <p>Host, Accra Marriott Hotel</p>
                <ul className="d-flex align-items-center gap-2">
                  <li>
                    <Link
                      href=""
                      className="btn btn-light d-flex align-items-center gap-1"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.25"
                          width="16"
                          height="16"
                          rx="8"
                          stroke="#F6F6F6"
                        />
                        <path
                          d="M14.4576 11.9454C14.4576 12.1698 14.4078 12.4004 14.3018 12.6248C14.1958 12.8493 14.0587 13.0612 13.8779 13.2607C13.5724 13.5973 13.2358 13.8404 12.8555 13.9963C12.4815 14.1521 12.0763 14.2332 11.64 14.2332C11.0041 14.2332 10.3246 14.0835 9.60775 13.7781C8.89087 13.4726 8.17398 13.0612 7.46333 12.5438C6.74645 12.0202 6.06697 11.4404 5.41866 10.7984C4.77658 10.15 4.19684 9.47056 3.67944 8.75991C3.16827 8.04926 2.75684 7.33861 2.45762 6.6342C2.1584 5.92355 2.00879 5.24407 2.00879 4.59576C2.00879 4.17186 2.08359 3.76666 2.2332 3.39264C2.38281 3.01238 2.6197 2.66329 2.95009 2.3516C3.34905 1.95887 3.78541 1.76562 4.24671 1.76562C4.42126 1.76562 4.5958 1.80303 4.75165 1.87783C4.91372 1.95264 5.0571 2.06485 5.16931 2.22692L6.61554 4.26537C6.72775 4.42121 6.80879 4.56459 6.86489 4.70173C6.921 4.83264 6.95217 4.96355 6.95217 5.08199C6.95217 5.2316 6.90853 5.38121 6.82126 5.52459C6.74022 5.66796 6.62178 5.81757 6.47217 5.96718L5.9984 6.45965C5.92983 6.52822 5.89866 6.60926 5.89866 6.709C5.89866 6.75887 5.90489 6.80251 5.91736 6.85238C5.93606 6.90225 5.95476 6.93965 5.96723 6.97705C6.07944 7.18277 6.27269 7.45082 6.54697 7.77498C6.82749 8.09913 7.12671 8.42952 7.45087 8.75991C7.78749 9.0903 8.11165 9.39576 8.44204 9.67627C8.76619 9.95056 9.03424 10.1376 9.24619 10.2498C9.27736 10.2622 9.31476 10.281 9.3584 10.2997C9.40827 10.3184 9.45814 10.3246 9.51424 10.3246C9.62022 10.3246 9.70126 10.2872 9.76983 10.2186L10.2436 9.75108C10.3994 9.59524 10.549 9.47679 10.6924 9.40199C10.8358 9.31472 10.9792 9.27108 11.135 9.27108C11.2535 9.27108 11.3781 9.29602 11.5153 9.35212C11.6524 9.40822 11.7958 9.48926 11.9516 9.59524L14.015 11.0602C14.1771 11.1724 14.2893 11.3033 14.3579 11.4591C14.4202 11.615 14.4576 11.7708 14.4576 11.9454Z"
                          stroke="#262626"
                          strokeWidth="1.4026"
                          strokeMiterlimit="10"
                        />
                      </svg>
                      Call hotel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="btn btn-light d-flex align-items-center gap-1"
                    >
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.08301 14.8802C5.89634 14.8802 5.703 14.8336 5.52966 14.7403C5.14966 14.5403 4.91634 14.1402 4.91634 13.7136V12.767C2.90301 12.5603 1.58301 11.0802 1.58301 8.96025V4.96029C1.58301 2.66695 3.12301 1.12695 5.41634 1.12695H12.083C14.3763 1.12695 15.9163 2.66695 15.9163 4.96029V8.96025C15.9163 11.2536 14.3763 12.7936 12.083 12.7936H9.56966L6.72966 14.687C6.53632 14.8136 6.30967 14.8802 6.08301 14.8802ZM5.41634 2.12028C3.69634 2.12028 2.58301 3.23361 2.58301 4.95361V8.95365C2.58301 10.6737 3.69634 11.787 5.41634 11.787C5.68967 11.787 5.91634 12.0137 5.91634 12.287V13.707C5.91634 13.7937 5.96968 13.8336 6.00301 13.8536C6.03634 13.8736 6.10302 13.8936 6.17635 13.847L9.14303 11.8737C9.22303 11.8203 9.32301 11.787 9.42301 11.787H12.0897C13.8097 11.787 14.923 10.6737 14.923 8.95365V4.95361C14.923 3.23361 13.8097 2.12028 12.0897 2.12028H5.41634Z"
                          fill="#262626"
                        />
                        <path
                          d="M8.7502 8.07324C8.47687 8.07324 8.2502 7.84658 8.2502 7.57324V7.43327C8.2502 6.65993 8.81686 6.27993 9.03019 6.13326C9.27686 5.96659 9.35685 5.85326 9.35685 5.67993C9.35685 5.3466 9.08354 5.07324 8.7502 5.07324C8.41687 5.07324 8.14355 5.3466 8.14355 5.67993C8.14355 5.95326 7.91689 6.17993 7.64355 6.17993C7.37022 6.17993 7.14355 5.95326 7.14355 5.67993C7.14355 4.79326 7.86354 4.07324 8.7502 4.07324C9.63687 4.07324 10.3569 4.79326 10.3569 5.67993C10.3569 6.43993 9.79688 6.81992 9.59021 6.95992C9.33021 7.13325 9.2502 7.2466 9.2502 7.43327V7.57324C9.2502 7.85324 9.02354 8.07324 8.7502 8.07324Z"
                          fill="#262626"
                        />
                        <path
                          d="M8.75 9.7334C8.47 9.7334 8.25 9.50673 8.25 9.2334C8.25 8.96007 8.47667 8.7334 8.75 8.7334C9.02333 8.7334 9.25 8.96007 9.25 9.2334C9.25 9.50673 9.03 9.7334 8.75 9.7334Z"
                          fill="#262626"
                        />
                      </svg>
                      Need help
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBookingDetails;
