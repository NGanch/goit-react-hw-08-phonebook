import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// fetch contact action by updating the state
const handleRegister = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogIn = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handlefetchCurrentUserPending = state => {
  state.isRefreshing = true;
};

const handlefetchCurrentUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handlefetchCurrentUserRejected = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:
    // builder callback
    builder =>
      builder
        .addCase(register.fulfilled, handleRegister)
        .addCase(logIn.fulfilled, handleLogIn)
        .addCase(logOut.fulfilled, handleLogOut)
        .addCase(fetchCurrentUser.fulfilled, handlefetchCurrentUserFulfilled)
        .addCase(fetchCurrentUser.pending, handlefetchCurrentUserPending)
        .addCase(fetchCurrentUser.rejected, handlefetchCurrentUserRejected),
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
