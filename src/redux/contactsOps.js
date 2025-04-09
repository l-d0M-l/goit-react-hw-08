import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67f5cbb9913986b16fa58ec8.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchALL",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/contacts");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const resp = await axios.delete(`contacts/${contactId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactInfo, thunkAPI) => {
    try {
      const resp = await axios.post("/contacts", contactInfo);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
