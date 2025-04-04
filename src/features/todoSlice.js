import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const base_url = "http://localhost:8001/";
export const fetchTodo = createAsyncThunk("todo/fetchTodo", async () => {
  const response = await axios.get(`${base_url}/todos`);
  console.log("todo response >>>", response.data);
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.loading = true;
      state.console.log("pending state >>>>", action);
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      console.log("state is fulfilled >>>", action);
    });

    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log("state is rejected >>>", action);
    });
  },
});

export const { loading, data, error } = todoSlice.actions;

export default todoSlice.reducer;
