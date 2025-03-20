import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HousePoliciesState {
  locationId: number | null;
  locationName:string |null;
  checkIn: string | null;
  checkOut: string | null;
  guests:number;
  [key:string]:any
}

// adults: number;
// children: number;
// infants: number;
// pets: number;
const initialState: HousePoliciesState = {
  locationId: null,
  locationName:null,
  checkIn: null,
  checkOut: null,
  guests:1,
  // adults: 0,
  // children: 0,
  // infants: 0,
  // pets: 0,
};

const housePoliciesSlice = createSlice({
  name: "housePolicies",
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<{ id: number; locationName: string }>) {
      state.locationId = action.payload.id;
      state.locationName = action.payload.locationName;

    },
    setDate(state, action: PayloadAction<{ key:"checkIn"|"checkOut"; value: string }>) {
          const { key, value } = action.payload;
          state[key] = value;
        },

    setGuestCount: (state, action: PayloadAction<{ key: keyof HousePoliciesState; type: "increment" | "decrement" }>) => {
      const { key, type } = action.payload;
      
      state[key] = (state[key] || 0) + (type === "increment" ? 1 : -1);
      
      if ((key === "infants" || key === "pets") && state[key] > 5) {
        state[key] = 5;
      }

      if (state[key] <= 0) state[key] = null; 

      if (key === "adults" || key === "children" || key === "specialCare") {
        state.guests = 
      Math.max(1, (state.adults || 0) + (state.children || 0) + (state.specialCare || 0)); // Ensuring guests is at least 1
    }
    
  }
  },
});

export const { setLocation, setGuestCount ,setDate} =
  housePoliciesSlice.actions;
export default housePoliciesSlice.reducer;
