import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/slice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },

});
