import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        add(state, action) {
            state.contacts.push(action.payload);
        },
        remove(state, action) {
            const i = state.contacts.findIndex(
                contact => contact.id === action.payload
            );
            state.contacts.splice(i, 1);
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { add, remove } = contactsSlice.actions;

