import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleFetchTransactionsThunk = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, thunkApi) => {
    try {
      const response = await fetch(
        "https://expens-tracker-backend.onrender.com/api/transactions"
      );
      return response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const handleAddTransactionThunk = createAsyncThunk(
  "transactions/addTransaction",
  async (transaction, thunkApi) => {
    try {
      const response = await fetch(
        "https://expens-tracker-backend.onrender.com/api/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        }
      );
      return response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const handleDeleteTransactionThunk = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, thunkApi) => {
    try {
      await fetch(
        `https://expens-tracker-backend.onrender.com/api/transactions/${id}`,
        {
          method: "DELETE",
        }
      );
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
