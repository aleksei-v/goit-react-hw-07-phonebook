import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6360ec09af66cc87dc1dd2c5.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const addContact  = createAsyncThunk(
    "contacts/addContact",
    async (contact, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);
