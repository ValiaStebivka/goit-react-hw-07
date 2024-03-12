import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { addContact, deleteContact, fetchContact } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.loading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContact.pending, handlePending)
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        handleFulfilled(state);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        handleFulfilled(state);
      })
      .addCase(deleteContact.rejected, handleRejected),
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactReducer = persistReducer(persistConfig, contactsSlice.reducer);
// export const { addContact, deleteContact } = contactsSlice.actions;

// reducers: {
//   addContact: (state, action) => {
//     state.items.push(action.payload);
//   },
//   deleteContact: (state, action) => {
//     state.items = state.items.filter(contact => contact.id !== action.payload);
//   },
// },

// const contactsInitialState = {
//         items: [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ]};

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsInitialState,
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.items.push(action.payload);
//             },
//             prepare({ name, number }) {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name,
//                         number,
//                     }
//                 }
//             }
//         },
//         deleteContact(state, action) {
//             const index = state.items.findIndex(item => item.id === action.payload);
//             state.items.splice(index, 1);
//         }
//     }
// });

//export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;