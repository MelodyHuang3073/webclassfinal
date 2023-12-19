import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import app from "@/app/_firebase/Config";
import {
  setDoc,
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { RootState } from "../store";
import { initialState } from "./authSlice";

const auth = getAuth(app);
const db = getFirestore(app);

type UserSelect = {
  officeId: string;
  status: string;
};
//user logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//Google sign-in
export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async (_, { rejectWithValue }) => {
    try {
      const googleAuthProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleAuthProvider); //登入
      const usersCollectionRef = doc(db, "users", res.user.uid);

      const account = await getDoc(usersCollectionRef);

      if (!account.exists()) {
        //確認是否為第一次(有無帳號，沒 則新增)
        const data = await getDocs(collection(db, "users"));
        let user = {
          email: res.user.email,
          url: res.user.photoURL,
          name: res.user.displayName,
          officeId: res.user.uid,
          uid: res.user.uid,
          status: "pending", //因還沒選身分(user or office)
          applyTime: serverTimestamp(),
        };
        if (data.docs.length === 0) {
          //代表第一個 設為admin
          user = { ...user, status: "admin", officeId: "iFzUP8v4QxfQYVkBkoc7" };
        }
        await setDoc(usersCollectionRef, user);
        return user;
      }

      return account.data();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const handleAuth = createAsyncThunk(
  "auth/handleAuth",
  async (uid: string, { rejectWithValue, getState }) => {
    try {
      const usersCollectionRef = doc(db, "users", uid);
      const account = await getDoc(usersCollectionRef);
      if (!account.data()) {
        await signOut(auth);
        return initialState;
      }
      return { ...account.data(), applyTime: "" };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const statusSelect = createAsyncThunk(
  "auth/statusSelect",
  async (data: UserSelect, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const user = state.auth.user;
      const usersCollectionRef = doc(db, "users", user.uid);
      await updateDoc(usersCollectionRef, data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
