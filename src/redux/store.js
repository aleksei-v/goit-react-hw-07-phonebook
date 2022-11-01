import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/slice";
import { filterSlice } from "./filterSlice/slice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    },
});

export const persistor = persistStore(store)
