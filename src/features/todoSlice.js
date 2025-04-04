import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const API_URL = 'http://localhost:8002'
export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await axios.get(`${API_URL}/todos`)
  console.log('response todos >>>', response.data);
  return response.data
})




const initialState = {
  loading: false,
  todo: [],
  error: false
}






const todoSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todo = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.error = action.payload
    })
  }
});

export const { loading, error, todo } = todoSlice.actions;

export default todoSlice.reducer;