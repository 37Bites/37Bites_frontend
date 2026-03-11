import { createSlice } from "@reduxjs/toolkit";

const storedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = {
  user: storedAuth?.user || null,
  accessToken: storedAuth?.accessToken || null,
  refreshToken: storedAuth?.refreshToken || null,
  lastLogin: storedAuth?.lastLogin || null,
  isAuthenticated: !!storedAuth?.user,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const payload = action.payload || {};
      const user = payload.user || null;
      const accessToken = payload.accessToken || null;
      const refreshToken = payload.refreshToken || null;
      const lastLogin = new Date().toISOString();

      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.lastLogin = lastLogin;
      state.isAuthenticated = !!user;

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user,
          accessToken,
          refreshToken,
          lastLogin,
        })
      );
    },

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: state.user,
          accessToken: state.accessToken,
          refreshToken: state.refreshToken,
          lastLogin: state.lastLogin,
        })
      );
    },

    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.lastLogin = null;
      state.isAuthenticated = false;

      localStorage.removeItem("auth");
    },
  },
});

export const { loginSuccess, updateUser, logout } = authSlice.actions;
export default authSlice.reducer;