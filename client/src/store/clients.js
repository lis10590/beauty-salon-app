import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewClient,
  getClients,
  deleteClient,
  addNewClientFromCalendar,
} from "../api/clients";

const initialClientsState = {
  clients: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const clientAdditionFromCalendar = createAsyncThunk(
  "clients/newClientFromCalendar",
  async (client, thunkAPI) => {
    try {
      return await addNewClientFromCalendar(client);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const clientAddition = createAsyncThunk(
  "clients/newClient",
  async (client, thunkAPI) => {
    try {
      return await addNewClient(client);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllClients = createAsyncThunk(
  "clients/getClients",
  async (thunkAPI) => {
    try {
      return await getClients();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteOneClient = createAsyncThunk(
  "clients/deleteClient",
  async (clientId, thunkAPI) => {
    try {
      return await deleteClient(clientId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// [
//   {
//     id: "1",
//     fullName: "Dana Levi",
//     phoneNumber: "0527654384",
//     treatmentHistory: {
//       treatmentName: ["Gel Nail Polish"],
//       date: [new Date("2022-02-16")],
//     },
//     productsPurchased: [],
//   },
//   {
//     id: "2",
//     fullName: "Shir Falcon",
//     phoneNumber: "0527675385",
//     treatmentHistory: {
//       treatmentName: ["Gel Nail Polish"],
//       date: [new Date("2022-02-15")],
//     },
//     productsPurchased: [],
//   },

//   {
//     id: "3",
//     fullName: "Yael Israeli",
//     phoneNumber: "0527675388",
//     treatmentHistory: {
//       treatmentName: ["Pedicure"],
//       date: [new Date("2022-01-15")],
//     },
//     productsPurchased: ["Gold Cream"],
//   },

//   {
//     id: "4",
//     fullName: "Sivan Amir",
//     phoneNumber: "0527675388",
//     treatmentHistory: {
//       treatmentName: ["Pedicure"],
//       date: [new Date("2022-01-15")],
//     },
//     productsPurchased: ["Gold Cream"],
//   },
// ];

// export const accountDetails = {
//   firstName: "Lis",
//   lastName: "Setgasy",
//   email: "lis@gmail.com",
// };

// export const productList = [
//   {
//     productName: "Purifying Extract",
//     manufacturer: "Hava Zingboim",
//     productType: "Serum",
//     productGroup: "Acne",
//     price: 290,
//   },
//   {
//     productName: "Active Gel",
//     manufacturer: "Hava Zingboim",
//     productType: "Treatment Gel",
//     productGroup: "Acne",
//     price: 200,
//   },
//   {
//     productName: "Gold Cream",
//     manufacturer: "KB Pure",
//     productType: "Moisturizer",
//     productGroup: "Anti-Aging",
//     price: 350,
//   },
// ];

const clientSlice = createSlice({
  name: "clients",
  initialState: initialClientsState,
  reducers: {
    reset: (state) => initialClientsState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(clientAdditionFromCalendar.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(clientAdditionFromCalendar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients.push(action.payload);
      })
      .addCase(clientAdditionFromCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(clientAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(clientAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients.push(action.payload);
      })
      .addCase(clientAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllClients.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllClients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients = action.payload;
      })
      .addCase(getAllClients.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOneClient.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.clients = state.clients.filter(
          (client) => client._id !== action.payload.id
        );
      })
      .addCase(deleteOneClient.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
  //   reducers: {
  //     addClient: {
  //       reducer(state, action) {
  //         state.push(action.payload);
  //       },
  //       prepare(fullName, phoneNumber) {
  //         return {
  //           payload: {
  //             id: nanoid(),
  //             fullName,
  //             phoneNumber,
  //           },
  //         };
  //       },
  //     },
  //   },
});

export default clientSlice.reducer;
export const { reset } = clientSlice.actions;
export const selectAllClients = (state) => state.clients.clients;
