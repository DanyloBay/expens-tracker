import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddTransactionThunk,
  handleDeleteTransactionThunk,
  handleFetchTransactionsThunk,
} from "./operations";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    isLoading: false,
    error: null,
    total_items: 0,
    transactions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchTransactionsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(handleFetchTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
        state.total_items = action.payload.length;
      })
      .addCase(handleAddTransactionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload);
        state.total_items += 1;
      })
      .addCase(handleDeleteTransactionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        );
        state.total_items -= 1;
      })
      .addCase(handleFetchTransactionsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteTransaction, addTransaction } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
