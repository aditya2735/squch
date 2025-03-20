import { formatDate } from "@/utils/formatData";

const getDateNGuest = (
  startDate?: string,
  endDate?: string,
  adultsCount: number = 0,
  childrenCount: number = 0,
  specialCareCount: number = 0
) => {
  const guestCount = adultsCount + childrenCount + specialCareCount;

  const checkInFormatted = startDate ? formatDate(startDate, false, false) : "N/A";
  const checkOutFormatted = endDate ? formatDate(endDate, false, false) : "N/A";

  return `${checkInFormatted} - ${checkOutFormatted} • ${guestCount} Guest${guestCount !== 1 ? "s" : ""}`;
};

export default getDateNGuest;
