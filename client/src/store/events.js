import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewEvent, getEvents, deleteEvent } from "../api/events";

const initialEventState = {
  events: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const eventAddition = createAsyncThunk(
  "events/newEvent",
  async (event, thunkAPI) => {
    try {
      return await addNewEvent(event);
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

export const getAllEvents = createAsyncThunk(
  "events/getEvents",
  async (thunkAPI) => {
    try {
      return await getEvents();
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

export const deleteOneEvent = createAsyncThunk(
  "events/deleteEvent",
  async (eventId, thunkAPI) => {
    try {
      return await deleteEvent(eventId);
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
//  [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date(2021, 3, 0),
//     end: new Date(2021, 3, 0),
//   },
//   {
//     title: "Vacation",
//     start: new Date(2021, 3, 7),
//     end: new Date(2021, 6, 10),
//   },
//   {
//     title: "Conference",
//     start: new Date(2021, 3, 20),
//     end: new Date(2021, 3, 23),
//   },
// ];

const eventsSlice = createSlice({
  name: "events",
  initialState: initialEventState,
  reducers: {
    reset: (state) => initialEventState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(eventAddition.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(eventAddition.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events.push(action.payload);
      })
      .addCase(eventAddition.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllEvents.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
        // state.events = state.events.map((event) => {
        //   event._id = action.payload.id;
        //   event.title = action.payload.title;
        //   event.start = new Date(action.payload.start);
        //   event.end = new Date(action.payload.end);
        // });
      })
      .addCase(getAllEvents.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteOneEvent.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteOneEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = state.events.filter(
          (event) => event._id !== action.payload.id
        );
      })
      .addCase(deleteOneEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
  // reducers: {
  //   addEvent: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(title, start, end) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           title,
  //           start,
  //           end,
  //         },
  //       };
  //     },
  //   },
  // },
});

export default eventsSlice.reducer;
export const { reset } = eventsSlice.actions;
export const selectAllEvents = (state) => state.events.events;
