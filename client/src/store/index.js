import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modal";
import clientsReducer from "./clients";
import productsReducer from "./products";
import treatmentsReducer from "./treatments";
import authReducer from "./auth";
import userReducer from "./user";
import eventsReducer from "./events";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    clients: clientsReducer,
    products: productsReducer,
    treatments: treatmentsReducer,
    auth: authReducer,
    user: userReducer,
    events: eventsReducer,
  },
});

export default store;
