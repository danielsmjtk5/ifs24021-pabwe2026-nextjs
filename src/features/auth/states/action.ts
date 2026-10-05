import { createAsyncThunk } from "@reduxjs/toolkit";
import { putAccessToken } from "@/helpers/apiHelper";
import { login, logout, register } from "../api/authApi";
import type { AuthCredentials, RegisterCredentials } from "@/types";

export const isAuthLogin = createAsyncThunk(
  "auth/login",
  async (credentials: AuthCredentials, { rejectWithValue }) => {
    try {
      const result = await login(credentials);
      putAccessToken(result.data.token);
      return result.data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Login gagal.");
    }
  },
);

export const isAuthRegister = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      return (await register(credentials)).message;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Registrasi gagal.");
    }
  },
);

export const isAuthLogout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await logout();
      putAccessToken(null);
      return result.message;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Logout gagal.");
    }
  },
);
