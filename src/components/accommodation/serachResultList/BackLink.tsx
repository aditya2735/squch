"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import getDateNGuest from "../DateNGuest";

const BackLink = ({ pageName }: { pageName: string | undefined }) => {
  const router = useRouter();
  const { checkIn, checkOut, guests, locationName } = useAppSelector(
    (state) => state.housePolicy
  );
  console.log("page name is", pageName)

  const categoryName = {
    near: {
      id: 1,
      label: "Nearby Properties",
      functionName: "fetchNearProperties",
    },
    other: {
      id: 2,
      label: "Other Properties",
      functionName: "fetchOtherProperties",
    },
    popular: {
      id: 3,
      label: "Popular Properties",
      functionName: "fetchPopularProperties",
    },
    recommended: {
      id: 4,
      label: "You might also like",
      functionName: "fetchRecommendedProperties",
    },
    nearBy: {
      id: 5,
      label: "Similar properties Nearby",
      functionName: "fetchSimilarProperties",
    },
    trending: {
      id: 4,
      label: "Trending Destinations",
      functionName: "fetchRecommendedProperties",
    },
  };
  type CategoryKeys = keyof typeof categoryName;
  const isValidCategory = (key: string): key is CategoryKeys =>
    key in categoryName;
  return (
    <div className="back-toolbar remove-space">
      <div className="d-flex align-items-center gap-4">
        <div className="btn btn-back" onClick={() => router.back()}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 5.97461L3.5 12.0446L9.57 18.1146"
              stroke="#652669"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.4999 12.0449H3.66992"
              stroke="#652669"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="right-align-backlink  w-100">
          <div className="search-filter-box bg-white w-100 d-flex align-items-center justify-content-between gap-md-2 flex-column flex-md-row">
            <h6>
              {pageName &&
                (pageName === "search"
                  ? locationName ||"Search"
                  : isValidCategory(pageName)
                  ? categoryName[pageName].label
                  : "Search")}
            </h6>
            <div className="date-details-box d-flex align-items-center gap-3">
              {checkIn && checkOut && (
                <p>{getDateNGuest(checkIn, checkOut, guests)}</p>
              )}

              <span>
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.0449219"
                    width="32"
                    height="32"
                    rx="16"
                    fill="#FAF5FF"
                  />
                  <rect
                    x="9.16797"
                    y="8.71094"
                    width="14.6667"
                    height="14.6667"
                    rx="7.33333"
                    fill="#FAF5FF"
                  />
                  <path
                    d="M22.612 12.6826H18.9453"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8351 12.6826H10.3906"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.2795 14.8217C16.4608 14.8217 17.4184 13.8641 17.4184 12.6828C17.4184 11.5016 16.4608 10.5439 15.2795 10.5439C14.0982 10.5439 13.1406 11.5016 13.1406 12.6828C13.1406 13.8641 14.0982 14.8217 15.2795 14.8217Z"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.6124 19.4062H20.168"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0573 19.4062H10.3906"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.7229 21.5434C18.9041 21.5434 19.8618 20.5858 19.8618 19.4045C19.8618 18.2232 18.9041 17.2656 17.7229 17.2656C16.5416 17.2656 15.584 18.2232 15.584 19.4045C15.584 20.5858 16.5416 21.5434 17.7229 21.5434Z"
                    stroke="#652669"
                    strokeWidth="1.47656"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackLink;
