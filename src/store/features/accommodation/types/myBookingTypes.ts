
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
  partiallyPaidAmount: any
  promoCodeUsed: any
  transactionId: any
  createdAt: string
  updatedAt: string
  hotel: BookingHotel
  roomDetails: RoomDetail
  hostDetails: HostDetails
  primaryImage: PrimaryImage
  }
  
  export interface BookingHotel {
    id: number
    name: string
    address: string
    contactNumber: string
    city: string
    state: string
    country: string
    latitude: string
    longitude: string
    refundableTill: number
    isDateChangeAvailable: boolean
    cancelCandidate: any
  }

  export interface RoomDetail {
    id: number
    roomType: string
  }
  
  export interface HostDetails {
    id: number
    firstName: string
    lastName: string
    phoneNumber: string
    profilePicture: string
  }
  
  export interface PrimaryImage {
    id: number
    url: string
    hotelId: number
    hotelViewId: number
    type: string
    isPrimary: boolean
    createdAt: string
    updatedAt: string
  }
  