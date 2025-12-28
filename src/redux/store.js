import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import contactsReducer from "./slice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
