import { Hotel } from "./hotelTypes";

export type HotelsByLocation = Record<string, Hotel[]>;

export interface WishlistData {
  hotels: HotelsByLocation;
}