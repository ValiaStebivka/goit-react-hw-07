import { createSlice } from "@reduxjs/toolkit";

const initialFillterState = {
    name: ''
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialFillterState,
    reducers: {
        setFilter(state, action) {
            state.name = action.payload;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
export const filterSelector = state => state.filters.name;

