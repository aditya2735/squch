export interface Image {
    id: number;
    url: string;
    hotelId: number;
    hotelViewId?: number;
    isPrimary?: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
 export interface CategoryRatings {
    sanitation: number;
    facilities: number;
    breakfast: number;
    location: number;
    hotelStaff: number;
    checkinRating: number;
  }
  
 export interface Amenity {
    id: number;
    name: string;
    status: "Active" | "Inactive";
  }
  
 export interface HotelView {
    id: number;
    hotelId: number;
    viewName: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    images: Image[];
  }
  
  export interface Room {
    id: number;
    hotelId: number;
    roomType: string;
    bedType: string;
    maxOccupancy: number;
    pricePerNight: string;
    priceInPerOccupancy: string;
    currency: string;
    availability: boolean;
    isRefundable: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    bedCounts: number;
    bedroomCounts: number;
    bathroomCounts: number;
    images: string[];
  }
  
 export interface AccessibilityFeature {
    id: number;
    categoryId: number;
    featureName: string;
    createdAt: string;
    updatedAt: string;
  }
  
 export interface BookingOption {
    id: number;
    hotelIds: number[];
    optionName: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Review {
    id: number;
    hotelId: number;
    userId: number;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
    sanitation: number;
    facilities: number;
    breakfast: number;
    location: number;
    hotelStaff: number;
    checkinRating: number;
  }
  
export  interface Hotel {
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    latitude: string;
    longitude: string;
    contactNumber: string;
    stayType: string;
    avg_ratings: number;
    total_ratings: number;
    isInWishList: boolean;
    isRated: boolean;
    your_rating: number;
    avgPricePerNight: string;
    currency: string;
    checkInTime: string;
    checkOutTime: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    primaryImages: Image[];
    categoryRatings: CategoryRatings;
    amenitiesUsedArray: Amenity[];
    hotelViewsWithImages: HotelView[];
    roomsCount: Room[];
    accessfeatures: AccessibilityFeature[];
    bookingOptions: BookingOption[];
    reviews:Review[];
  }
  