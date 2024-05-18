import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  refreshThunk,
  logOutThunk,
} from './operations.js';

const initialState = {
  userData: null,
  authenticated: false,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.token = payload.token;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.token = payload.token;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        console.log(payload);

        state.userData = payload;
        state.token = payload.token;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(logOutThunk.fulfilled, logOutThunk.rejected), () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected,
          logOutThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
export const { setPage } = authSlice.actions;
