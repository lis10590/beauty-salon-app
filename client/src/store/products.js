import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialProductsState = [
  {
    id: "1",
    productName: "Purifying Extract",
    manufacturer: "Hava Zingboim",
    productType: "Serum",
    productGroup: "Acne",
    price: 290,
  },
  {
    id: "2",
    productName: "Active Gel",
    manufacturer: "Hava Zingboim",
    productType: "Treatment Gel",
    productGroup: "Acne",
    price: 200,
  },
  {
    id: "3",
    productName: "Gold Cream",
    manufacturer: "KB Pure",
    productType: "Moisturizer",
    productGroup: "Anti-Aging",
    price: 350,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(productName, manufacturer, productType, productGroup, price) {
        return {
          payload: {
            id: nanoid(),
            productName,
            manufacturer,
            productType,
            productGroup,
            price,
          },
        };
      },
    },
  },
});

export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
export const selectAllProducts = (state) => state.products;
