import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modal";
import clientsReducer from "./clients";
import productsReducer from "./products";
import treatmentsReducer from "./treatments";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    clients: clientsReducer,
    products: productsReducer,
    treatments: treatmentsReducer,
  },
});

export default store;
