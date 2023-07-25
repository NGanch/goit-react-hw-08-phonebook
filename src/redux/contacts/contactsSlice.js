import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

import { logOut } from 'redux/auth/auth-operations';
// initial state
const defaultContacts = {
  items: [],
  isLoading: false,
  error: null,
  addAvatar: null,
};

// handle the pending action by updating the state
const handlePending = state => {
  state.isLoading = true;
};

// rejected action by updating the state
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// fetch contact action by updating the state
const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

// add contact action by updating the state
const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

// delete contact action by updating the state
const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

// Reducer function for handling successful log out
const handleLogoutFulfilled = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

// Reducer function for handling successful edit contact request
const handleEditContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

// // add contact avatar action by updating the state
// const handleAddAvatarContact = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.addAvatar = action.payload;
// };

// const handleEditContactAvatarFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   const index = state.items.findIndex(task => task.id === action.payload.id);
//   state.items.splice(index, 1, action.payload);
// };
// Створення slice контактів за допомогою createSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,

  // Додаємо обробку зовнішніх екшенів
  extraReducers:
    // builder callback
    builder =>
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFetchContacts)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleAddContact)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleDeleteContact)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(logOut.fulfilled, handleLogoutFulfilled)
        .addCase(updateContact.pending, handlePending)
        .addCase(updateContact.fulfilled, handleEditContactFulfilled)
        .addCase(updateContact.rejected, handleRejected)
});

export const contactsReducer = contactsSlice.reducer;
