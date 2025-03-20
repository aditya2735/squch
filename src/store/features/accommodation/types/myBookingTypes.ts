
export interface MyBookingState{
    "upcoming":MyBooking[],
    "active":MyBooking[],
    "checkedOut":MyBooking[],
    "cancelled":MyBooking[]
  }

export interface MyBooking {
  id: number
  hotelId: number
  userId: number
  roomIds: number
  startDate: string
  endDate: string
  checkInTime: string
  checkOutTime: string
  adultsCount: number
  childrenCount: number
  infantsCount: number
  petsCount: number
  specialCareCount: number
  bookingStatus: string
  cancellationReason: any
  paymentStatus: string
  paymentMode: any
  currency: string
  calculatedPrice: string
  basePrice: string
  taxesAndFees: string
  refundAmount: string
  partiallyPaidAmount: string
  promoCodeUsed: any
  transactionId: any
  createdAt: string
  updatedAt: string
  hotel: BookingHotel
  }
  
  export interface BookingHotel {
    name: string
    address: string
    contactNumber: string
    city: string
    state: string
    country: string
    latitude: string
    longitude: string
  }
  