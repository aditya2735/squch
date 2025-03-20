const currencySymbols: Record<string, string> = {
  LRD: "L$",
  GHS: "₵",
  NGN: "₦",
  SLL: "Le",
  XAF: "FCFA",
  USD: "$",
};


export const formatDate = (dateString: string, includeWeekday: boolean = false, showYear: boolean = true): string => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    ...(showYear && { year: "numeric" }),
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  return includeWeekday
    ? `${new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(date)}, ${formattedDate}`
    : formattedDate;
};
  
  export const formatTime = (time: string): string => {
    if (!time) return "";
  
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes);
  
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  export const calculateNights = (checkIn?: string| null, checkOut?: string| null): number => {
    if (!checkIn || !checkOut) return 1;
  
    const nights = Math.ceil(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    );
  
    return Math.max(nights, 1);
  };
  
  export const getCurrencySymbol = (country: string) => currencySymbols[country] || country;
