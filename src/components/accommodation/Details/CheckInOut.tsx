"use client";
import { setDate } from "@/store/features/accommodation/slices/housePoliciesSlice";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const CheckInOut = ({ isOpen, onToggle }: {isOpen: boolean; onToggle: () => void; }) => {
  const dispatch = useAppDispatch()
  // const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [range, setRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const formatDate = (date: Date | null): string => {
    if (!date) return "--";
    return date.toLocaleDateString();
  };

  // Disable dates before today
  const disabledDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Handle date range change
  const handleDateChange = (value: [Date | null, Date | null] | null) => {
    const newRange: [Date | undefined, Date | undefined] = value
    ? [value[0] ?? undefined, value[1] ?? undefined]
    : [undefined, undefined];
  
    setRange(newRange);

    // Dispatch dates to Redux
    if (newRange[0]) {
      dispatch(setDate({
        key: "checkIn",
        value: newRange[0].toLocaleDateString("en-CA") // YYYY-MM-DD format
      }));
    }
    if (newRange[1]) {
      dispatch(setDate({
        key: "checkOut",
        value: newRange[1].toLocaleDateString("en-CA")
      }));
    }

    // Close when both dates are selected
    if (newRange[0] && newRange[1]) {
      setTimeout(onToggle, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="w-100 position-relative" ref={dropdownRef}>
      {/* Button */}
      <div className="w-100">
        <div
          className="menu-location-btn"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={onToggle}
        >
          <div className="custom-date-display">
            <div className="checkin">
              <strong>Check-in</strong>{" "}
              {range[0] ? (
                formatDate(range[0])
              ) : (
                <span className="placebox-text">Add date</span>
              )}
            </div>
            <div className="checkout">
              <strong>Check-out</strong>{" "}
              {range[1] ? (
                formatDate(range[1])
              ) : (
                <span className="placebox-text">Add date</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="menu-dropdown dropdown-position-fixed"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="coming-inner-sec" role="none">
            <h5>When's your trip</h5>
            <button
              className="close-button"
              onClick={onToggle}
              style={{
                position: 'absolute',
                right: '15px',
                top: '15px',
                background: 'none',
                border: 'none',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>
          <div id="date-picker-parent" style={{ position: "relative" }}>
            <div style={{ display: "block" }}>
              <DateRangePicker
                className="calendar-picker"
                value={range[0] && range[1] ? (range as [Date, Date]) : undefined}
                onChange={handleDateChange}
                placeholder="Select Date Range"
                disabledDate={disabledDate}
                container={() => document.getElementById("date-picker-parent") as HTMLElement}
                placement="bottomStart"
                style={{ width: "100%" }}
                open={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInOut;