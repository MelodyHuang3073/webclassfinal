"use client";

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/features/authSlice";
import { googleSignIn } from "../redux/features/authThunk";
import rootMenu from "./rootMenu";
export default function Home() {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log(user, "noiw");
  return (
    <>
      <div>{user?.user?.email}</div>
      <button onClick={() => dispatch(googleSignIn())}>signIn</button>
    </>
  );
}
