// Types For Banner, Trending Destination and Deals&Discount Section
export interface Banner {
  id: number
  url: string
  hotelId: any
  hotelViewId: any
  type: string
  isPrimary: boolean
  createdAt: string
  updatedAt: string
}
export interface Location{
  hotelIds: number[]
  id: number
  locationName: string
  latitude: string
  longitude: string
  createdAt: string
  updatedAt: string
}

export interface LocationItem {
  hotelIds: number[];
  id: number;
  url: string;
  locationName: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
}

export interface LocationType {
  recent: LocationItem[];
  suggested: LocationItem[];
  [key: string]: LocationItem[];  
}

export interface Trending {
    data:any
  }

  export interface Deals {
    data:any
  }