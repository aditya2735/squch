import { fetchHotelDetails } from '@//services/accommodation/hotelDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

 export const getHotelDetails = createAsyncThunk(
  'home/fetchHotelDetails',
  async (hotel_id:number, { rejectWithValue }) => {
    try {
      const response= await fetchHotelDetails(hotel_id) 
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message? error.message:'Failed to fetch hotel data');
    }
  }
);
interface Room {
    id: number;
    roomType: string;
  }

interface HotelState {
  data: any;
  bannerImages:any;
  rooms:any;
  loading: boolean;
  selectedRooms:number[];
  selectedRoom: Room | null;
  status:string;
  error: string | null;
}

const staticBanner=[
    {
        "id": 1,
        "hotelId": 1,
        "viewName": "City Skyline View",
        "description": "A breathtaking view of the city skyline from the top floors.",
        "createdAt": "2025-02-07T17:30:46.000Z",
        "updatedAt": "2025-02-07T17:30:46.000Z",
        "images": [
            {
                "id": 1,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 1,
                "isPrimary": true,
                "createdAt": "2025-02-07T18:38:15.000Z",
                "updatedAt": "2025-02-07T18:38:15.000Z"
            },
            {
                "id": 2,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 1,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:38:15.000Z",
                "updatedAt": "2025-02-07T18:38:15.000Z"
            },
            {
                "id": 3,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 1,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:38:15.000Z",
                "updatedAt": "2025-02-07T18:38:15.000Z"
            }
        ]
    },
    {
        "id": 2,
        "hotelId": 1,
        "viewName": "Garden View",
        "description": "A relaxing garden view with lush greenery and fountains.",
        "createdAt": "2025-02-07T17:30:46.000Z",
        "updatedAt": "2025-02-07T17:30:46.000Z",
        "images": [
            {
                "id": 4,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 2,
                "isPrimary": true,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            },
            {
                "id": 5,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 2,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            },
            {
                "id": 6,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 2,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            }
        ]
    },
    {
        "id": 3,
        "hotelId": 1,
        "viewName": "Rooftop View",
        "description": "Panoramic rooftop view with an open sky experience.",
        "createdAt": "2025-02-07T17:30:46.000Z",
        "updatedAt": "2025-02-07T17:30:46.000Z",
        "images": [
            {
                "id": 7,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 3,
                "isPrimary": true,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            },
            {
                "id": 8,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 3,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            },
            {
                "id": 9,
                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "hotelId": 1,
                "hotelViewId": 3,
                "isPrimary": false,
                "createdAt": "2025-02-07T18:39:00.000Z",
                "updatedAt": "2025-02-07T18:39:00.000Z"
            }
        ]
    },
    ,
                     {
                        "id": 4,
                        "hotelId": 1,
                        "viewName": "Lobby View",
                        "description": "Panoramic rooftop view with an open sky experience.",
                        "createdAt": "2025-02-07T17:30:46.000Z",
                        "updatedAt": "2025-02-07T17:30:46.000Z",
                        "images": [
                            {
                                "id": 7,
                                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                "hotelId": 1,
                                "hotelViewId": 3,
                                "isPrimary": true,
                                "createdAt": "2025-02-07T18:39:00.000Z",
                                "updatedAt": "2025-02-07T18:39:00.000Z"
                            },
                            {
                                "id": 8,
                                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                "hotelId": 1,
                                "hotelViewId": 3,
                                "isPrimary": false,
                                "createdAt": "2025-02-07T18:39:00.000Z",
                                "updatedAt": "2025-02-07T18:39:00.000Z"
                            },
                            {
                                "id": 9,
                                "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                "hotelId": 1,
                                "hotelViewId": 3,
                                "isPrimary": false,
                                "createdAt": "2025-02-07T18:39:00.000Z",
                                "updatedAt": "2025-02-07T18:39:00.000Z"
                            }
                        ]
                    }
]
const staticData={
    "id": 1,
    "primaryImages": [
        {
            "id": 1,
            "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "hotelId": 1,
            "hotelViewId": 1,
            "isPrimary": true,
            "createdAt": "2025-02-07T18:38:15.000Z",
            "updatedAt": "2025-02-07T18:38:15.000Z"
        },
        {
            "id": 4,
            "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "hotelId": 1,
            "hotelViewId": 2,
            "isPrimary": true,
            "createdAt": "2025-02-07T18:39:00.000Z",
            "updatedAt": "2025-02-07T18:39:00.000Z"
        },
        {
            "id": 7,
            "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "hotelId": 1,
            "hotelViewId": 3,
            "isPrimary": true,
            "createdAt": "2025-02-07T18:39:00.000Z",
            "updatedAt": "2025-02-07T18:39:00.000Z"
        }
    ],
    "name": "The Grand Palace",
    "description": "A luxurious hotel in the heart of the city with modern amenities.",
    "address": "123 Royal Street",
    "city": "New York",
    "state": "New York",
    "country": "USA",
    "zipCode": "10001",
    "latitude": "40.71280000",
    "longitude": "-74.00600000",
    "contactNumber": "+1 212-555-1234",
    "stayType": "Hotels",
    "reviews": [
        {
            "id": 1,
            "hotelId": 1,
            "userId": 1,
            "rating": 5,
            "comment": "Great place to stay, highly recommended!",
            "createdAt": "2025-02-07T17:43:01.000Z",
            "updatedAt": "2025-02-07T17:43:01.000Z",
            "sanitation": 4,
            "facilities": 4,
            "breakfast": 4,
            "location": 4,
            "hotelStaff": 4,
            "checkinRating": 4
        },
        {
            "id": 6,
            "hotelId": 1,
            "userId": 2,
            "rating": 4,
            "comment": "Nice hotel with good amenities.",
            "createdAt": "2025-02-07T17:43:01.000Z",
            "updatedAt": "2025-02-07T17:43:01.000Z",
            "sanitation": 4,
            "facilities": 4,
            "breakfast": 4,
            "location": 4,
            "hotelStaff": 4,
            "checkinRating": 4
        }
    ],
    "categoryRatings": {
        "sanitation": 4,
        "facilities": 4,
        "breakfast": 4,
        "location": 4,
        "hotelStaff": 4,
        "checkinRating": 4
    },
    "avg_ratings": 4.5,
    "total_ratings": 2,
    "isInWishList": true,
    "isRated": true,
    "your_rating": 5,
    "amenitiesUsedArray": [
        {
            "id": 1,
            "name": "Free Wi-Fi",
            "status": "Active"
        },
        {
            "id": 2,
            "name": "Swimming Pool",
            "status": "Active"
        },
        {
            "id": 3,
            "name": "Fitness Center",
            "status": "Inactive"
        },
        {
            "id": 4,
            "name": "24/7 Room Service",
            "status": "Active"
        },
        {
            "id": 5,
            "name": "Spa & Wellness",
            "status": "Active"
        }
    ],
    "hotelViewsWithImages": [
        {
            "id": 1,
            "hotelId": 1,
            "viewName": "City Skyline View",
            "description": "A breathtaking view of the city skyline from the top floors.",
            "createdAt": "2025-02-07T17:30:46.000Z",
            "updatedAt": "2025-02-07T17:30:46.000Z",
            "images": [
                {
                    "id": 1,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 1,
                    "isPrimary": true,
                    "createdAt": "2025-02-07T18:38:15.000Z",
                    "updatedAt": "2025-02-07T18:38:15.000Z"
                },
                {
                    "id": 2,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 1,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:38:15.000Z",
                    "updatedAt": "2025-02-07T18:38:15.000Z"
                },
                {
                    "id": 3,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 1,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:38:15.000Z",
                    "updatedAt": "2025-02-07T18:38:15.000Z"
                }
            ]
        },
        {
            "id": 2,
            "hotelId": 1,
            "viewName": "Garden View",
            "description": "A relaxing garden view with lush greenery and fountains.",
            "createdAt": "2025-02-07T17:30:46.000Z",
            "updatedAt": "2025-02-07T17:30:46.000Z",
            "images": [
                {
                    "id": 4,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 2,
                    "isPrimary": true,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                },
                {
                    "id": 5,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 2,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                },
                {
                    "id": 6,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 2,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                }
            ]
        },
        {
            "id": 3,
            "hotelId": 1,
            "viewName": "Rooftop View",
            "description": "Panoramic rooftop view with an open sky experience.",
            "createdAt": "2025-02-07T17:30:46.000Z",
            "updatedAt": "2025-02-07T17:30:46.000Z",
            "images": [
                {
                    "id": 7,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 3,
                    "isPrimary": true,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                },
                {
                    "id": 8,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 3,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                },
                {
                    "id": 9,
                    "url": "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "hotelId": 1,
                    "hotelViewId": 3,
                    "isPrimary": false,
                    "createdAt": "2025-02-07T18:39:00.000Z",
                    "updatedAt": "2025-02-07T18:39:00.000Z"
                }
            ]
        }
    ],
    "roomsCount": [
        {
            "id": 1,
            "hotelId": 1,
            "roomType": "Deluxe Room",
            "bedType": "King",
            "maxOccupancy": 2,
            "pricePerNight": "150.00",
            "priceInPerOccupancy": "75.00",
            "currency": "USD",
            "availability": true,
            "isRefundable": true,
            "createdAt": "2025-02-07T20:07:11.000Z",
            "updatedAt": "2025-02-14T17:00:55.000Z",
            "deletedAt": null,
            "bedCounts": 1,
            "bedroomCounts": 1,
            "bathroomCounts": 1,
            "images": [
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
            ]
        },
        {
            "id": 2,
            "hotelId": 1,
            "roomType": "Standard Room",
            "bedType": "Queen",
            "maxOccupancy": 2,
            "pricePerNight": "100.00",
            "priceInPerOccupancy": "50.00",
            "currency": "USD",
            "availability": true,
            "isRefundable": false,
            "createdAt": "2025-02-07T20:07:11.000Z",
            "updatedAt": "2025-02-14T17:00:55.000Z",
            "deletedAt": null,
            "bedCounts": 1,
            "bedroomCounts": 1,
            "bathroomCounts": 1,
            "images": [
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
            ]
        },
        {
            "id": 3,
            "hotelId": 1,
            "roomType": "Suite",
            "bedType": "King",
            "maxOccupancy": 4,
            "pricePerNight": "250.00",
            "priceInPerOccupancy": "62.50",
            "currency": "USD",
            "availability": true,
            "isRefundable": true,
            "createdAt": "2025-02-07T20:07:11.000Z",
            "updatedAt": "2025-02-14T16:59:02.000Z",
            "deletedAt": null,
            "bedCounts": 1,
            "bedroomCounts": 1,
            "bathroomCounts": 1,
            "images": [
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
                "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
            ]
        }
    ],
    "avgPricePerNight": "250.00",
    "currency": "USD",
    "checkInTime": "14:00:00",
    "checkOutTime": "11:00:00",
    "status": "Active",
    "createdAt": "2025-02-07T17:25:43.000Z",
    "updatedAt": "2025-02-14T12:40:02.000Z",
    "accessfeatures": [
        {
            "id": 1,
            "categoryId": 1,
            "featureName": "Adjustable bed height",
            "createdAt": "2025-02-11T19:31:02.000Z",
            "updatedAt": "2025-02-11T19:31:02.000Z"
        },
        {
            "id": 2,
            "categoryId": 1,
            "featureName": "Bed with clearance for wheelchair",
            "createdAt": "2025-02-11T19:31:02.000Z",
            "updatedAt": "2025-02-11T19:31:02.000Z"
        },
        {
            "id": 3,
            "categoryId": 1,
            "featureName": "Accessible light switches",
            "createdAt": "2025-02-11T19:31:02.000Z",
            "updatedAt": "2025-02-11T19:31:02.000Z"
        },
        {
            "id": 4,
            "categoryId": 2,
            "featureName": "Roll-in shower",
            "createdAt": "2025-02-11T19:31:02.000Z",
            "updatedAt": "2025-02-11T19:31:02.000Z"
        },
        {
            "id": 5,
            "categoryId": 2,
            "featureName": "Grab bars near toilet and shower",
            "createdAt": "2025-02-11T19:31:02.000Z",
            "updatedAt": "2025-02-11T19:31:02.000Z"
        }
    ],
    "bookingOptions": [
        {
            "id": 1,
            "hotelIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "optionName": "Free WiFi",
            "createdAt": "2025-02-11T19:22:37.000Z",
            "updatedAt": "2025-02-11T19:22:37.000Z"
        },
        {
            "id": 2,
            "hotelIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "optionName": "Pet Friendly",
            "createdAt": "2025-02-11T19:22:37.000Z",
            "updatedAt": "2025-02-11T19:22:37.000Z"
        },
        {
            "id": 3,
            "hotelIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "optionName": "Free Parking",
            "createdAt": "2025-02-11T19:22:37.000Z",
            "updatedAt": "2025-02-11T19:22:37.000Z"
        },
        {
            "id": 4,
            "hotelIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "optionName": "Swimming pool",
            "createdAt": "2025-02-11T19:22:37.000Z",
            "updatedAt": "2025-02-11T19:22:37.000Z"
        },
        {
            "id": 5,
            "hotelIds": [
                1,
                2,
                3,
                4,
                5
            ],
            "optionName": "Breakfast Included",
            "createdAt": "2025-02-11T19:22:37.000Z",
            "updatedAt": "2025-02-11T19:22:37.000Z"
        }
    ],
    "type": "Room"
}
const staticRooms=[
    {
        "id": 1,
        "hotelId": 1,
        "roomType": "Deluxe Room",
        "bedType": "King",
        "maxOccupancy": 2,
        "pricePerNight": "150.00",
        "priceInPerOccupancy": "75.00",
        "currency": "USD",
        "availability": true,
        "isRefundable": true,
        "createdAt": "2025-02-07T20:07:11.000Z",
        "updatedAt": "2025-02-14T17:00:55.000Z",
        "deletedAt": null,
        "bedCounts": 1,
        "bedroomCounts": 1,
        "bathroomCounts": 1,
        "images": [
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
        ]
    },
    {
        "id": 2,
        "hotelId": 1,
        "roomType": "Standard Room",
        "bedType": "Queen",
        "maxOccupancy": 2,
        "pricePerNight": "100.00",
        "priceInPerOccupancy": "50.00",
        "currency": "USD",
        "availability": true,
        "isRefundable": false,
        "createdAt": "2025-02-07T20:07:11.000Z",
        "updatedAt": "2025-02-14T17:00:55.000Z",
        "deletedAt": null,
        "bedCounts": 1,
        "bedroomCounts": 1,
        "bathroomCounts": 1,
        "images": [
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
        ]
    },
    {
        "id": 3,
        "hotelId": 1,
        "roomType": "Suite",
        "bedType": "King",
        "maxOccupancy": 4,
        "pricePerNight": "250.00",
        "priceInPerOccupancy": "62.50",
        "currency": "USD",
        "availability": true,
        "isRefundable": true,
        "createdAt": "2025-02-07T20:07:11.000Z",
        "updatedAt": "2025-02-14T16:59:02.000Z",
        "deletedAt": null,
        "bedCounts": 1,
        "bedroomCounts": 1,
        "bathroomCounts": 1,
        "images": [
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060",
            "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1739532460~exp=1739536060~hmac=d8034dac9ff10b929854f4d537ca745c3fbdfde49541699ff2980480681847e4&w=1060"
        ]
    }
]
const initialState: HotelState = {
  data: staticData,
  bannerImages:staticBanner,
  rooms:staticRooms,
selectedRooms:[],
selectedRoom: null,
  loading: false,
  status:"idle",
  error: null,
};

const hotelDetailSlice = createSlice({
  name: 'hotelDetails',
  initialState,
  reducers: {
    setSelectedRooms(state, action: PayloadAction<number>) {
        const roomId = action.payload;
        const isSelected = state.selectedRooms?.includes(roomId);
   
        if (isSelected) { 
          state.selectedRooms = state.selectedRooms?.filter((r) => r !== roomId);
        } else { 
          state.selectedRooms.push(roomId);
        }
      },
      setSelectedRoom(state, action: PayloadAction<Room>) {
        const { id } = action.payload;
        state.selectedRoom = state.selectedRoom?.id === id ? null : action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHotelDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "loading";
      })
       .addCase(getHotelDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "succeeded";
        // state.data = action.payload[0]; 
        // state.bannerImages=action.payload[0].hotelViewsWithImages
        // state.rooms=action.payload[0].roomsCount
      })
      .addCase(getHotelDetails.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { setSelectedRooms,setSelectedRoom } = hotelDetailSlice.actions;
export default hotelDetailSlice.reducer;
