import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedFiltersState {
  [key: string]: any; // Dynamic keys for various filters
}

const initialState: SelectedFiltersState = {};

const selectedFiltersSlice = createSlice({
  name: "selectedFilters",
  initialState,
  reducers: {
    toggleArrayFilter: (state, action: PayloadAction<{ key: keyof SelectedFiltersState; value: number }>) => {
        const { key, value } = action.payload;
        if (!state[key]) {
          state[key] = [value];  
        } else {
          const index = state[key]!.indexOf(value);
          if (index === -1) {
            state[key]!.push(value); 
          } else {
            state[key]!.splice(index, 1); 
            if (state[key]!.length === 0) delete state[key]; 
          }
        }
      },
      setSingleFilter: (state, action: PayloadAction<{ key: keyof SelectedFiltersState; value: string | number }>) => {
        const { key, value } = action.payload;
        if (value || value === 0) {
          if (state[key] === value) {
            delete state[key]; 
          } else {
            state[key] = value; 
          }
        } else {
          delete state[key]; 
        }
      },
      setRangeFilter: (state, action: PayloadAction<{ sPrice: number; ePrice: number }>) => {
        const { sPrice, ePrice } = action.payload;
        if (sPrice !== 850 || ePrice !== 15000) {
          state.sPrice = sPrice;
          state.ePrice = ePrice;
        } else {
          delete state.sPrice;
          delete state.ePrice;
        }
      },
      setReload: (state, action: PayloadAction<{ key: keyof SelectedFiltersState; value: string | number }>) => {
        const { key, value } = action.payload;
            state[key] = value;  
      },
       updateCounterFilter: (state, action: PayloadAction<{ key: keyof SelectedFiltersState; type: "increment" | "decrement" }>) => {
        const { key, type } = action.payload;
        if (typeof state[key] !== "number") {
          state[key] = 0;
        }
        state[key] = type === "increment" ? state[key] + 1 : Math.max(0, state[key] - 1);
        
        if (state[key] === 0) {
          delete state[key];
        }
      },
      setDate(state, action: PayloadAction<{ key: keyof SelectedFiltersState; value: string }>) {
        const { key, value } = action.payload;
        state[key] = value;
      },
      resetFilters: () => initialState,
    },
  });

export const { toggleArrayFilter, setSingleFilter, setRangeFilter, resetFilters,updateCounterFilter,setReload,setDate } = selectedFiltersSlice.actions;
export default selectedFiltersSlice.reducer;
