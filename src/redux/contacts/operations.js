import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// axios.defaults.baseURL = "https://64b6dc76df0839c97e1637ba.mockapi.io";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        // При успішному запиті повертаємо проміс із даними
        return response.data;
      } catch (e) {
        // При помилці запиту повертаємо проміс
        // який буде відхилений з текстом помилки
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', { name, number } );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "tasks/deleteContact",
    async (contactsId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactsId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const updateContact = createAsyncThunk(
    "tasks/updateContact",
    async ({ id, name, number }, thunkAPI) => {
      try {
        const response = await axios.patch(`/contacts/${id}`, { name, number });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  // // axios.defaults.baseURL = "https://64bfe3180d8e251fd111a27a.mockapi.io";

  // export const addAvatar = createAsyncThunk(
  //     "avatar/addAvatar",
  //     async ({ avatar }, thunkAPI) => {
  //       try {
  //         const response = await axios.post('/avatar', { avatar } );
  //         return response.data;
  //       } catch (e) {
  //         return thunkAPI.rejectWithValue(e.message);
  //       }
  //     }
  //   );