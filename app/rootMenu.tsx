"use client";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/features/authSlice";
import { handleAuth } from "../redux/features/authThunk";
import { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import app from "./_firebase/Config";
import { useRouter, usePathname } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
// import DeleteCheck from "./_component/Dialog/deleteCheck";

export default function RootMenu() {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const canToLogin = useRef(false);
  const pathname = usePathname();
  useEffect(() => {
    pathname == "/" && router.push("/message");

    const auth = getAuth(app);
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(handleAuth(currentUser.uid));
        canToLogin.current = true;
      } else {
        dispatch(logoutUser(currentUser));
        router.push("/login");
      }
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Snackbar
        open={user.bad}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">你壞壞喔!</Alert>
      </Snackbar>
    </>
  );
}
