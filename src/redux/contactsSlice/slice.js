import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "redux/operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.contacts = payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            console.log(action.payload)
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload)
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const i = state.contacts.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.splice(i, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }
});

export const contactsReducer = contactsSlice.reducer;
