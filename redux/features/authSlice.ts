import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { googleSignIn, logout, handleAuth, statusSelect } from "./authThunk";

export interface UserState {
  id?: string;
  email: string;
  url: string;
  name: string;
  officeId: string; //系所單位
  uid: string;
  status: string; //pending(一開始) user office(or officePending) admin(assign)
  applyTime: Date | string;
}

export interface User {
  user: UserState;
  error: string | undefined;
  bad: boolean;
}

export const initialState: User = {
  user: {
    email: "",
    url: "",
    name: "",
    officeId: "",
    uid: "",
    status: "",
    applyTime: "",
  },
  error: "",
  bad: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state, action) => {
      if (action.payload == null) {
        state.user = initialState.user;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignIn.fulfilled, (state, action: any) => {
        state.user = action.payload;
        switch (action.payload.status) {
          case "office":
            location.href = "pending";
            break;
          case "admin":
            location.href = "noAssign";
            break;
          default:
            location.href = "message";
        }
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(action.payload);
      })
      .addCase(handleAuth.fulfilled, (state, action: any) => {
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(handleAuth.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(action.payload);
      })
      .addCase(statusSelect.fulfilled, (state, action: any) => {
        state.user = {
          ...state.user,
          officeId: action.payload.officeId,
          status: action.payload.status,
        };
        location.href = "message";
      })
      .addCase(statusSelect.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
