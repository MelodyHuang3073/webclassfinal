"use client";
import Avatar from "@mui/material/Avatar";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import app from "../../_firebase/Config";
import "./menu.css";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { logout, handleAuth } from "../../../redux/features/authThunk";
import Button from "@mui/material/Button";
import {
  menuListUser,
  menuListOffice,
  menuListAdmin,
  nothingMenu,
  adminAccess,
  officeAccess,
} from "./lib";

const MiniDrawer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const [menuList, setMenuList] = useState(nothingMenu);

  useEffect(() => {
    if (user?.user?.uid) {
      switch (user.user.status) {
        case "office":
          if (adminAccess.includes(pathname)) {
            router.push("/pending");
          }
          setMenuList(menuListOffice);
          break;
        case "admin":
          setMenuList(menuListAdmin);
          break;
        default:
          if (officeAccess.concat(adminAccess).includes(pathname)) {
            router.push("/message");
          }
          setMenuList(menuListUser);
      }
    }
  }, [user]);

  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          paddingTop: "3rem",
        }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={220}
          height={65}
          priority={true}
        />
        {/* Sidebar Header */}
      </div>
      <div className="sidebar-item">
        {/* Sidebar Menu */}
        {menuList.map((item, index) => (
          <div
            className={`sidebar-button ${
              pathname === item.url ? "active" : ""
            }`}
            key={index}
            onClick={() => router.push(item.url)}
          >
            <p className="sidebar-icon">{item.icon}</p>
            <p className="sidebar-text">{item.title}</p>
          </div>
        ))}
      </div>
      <div
        className={user?.user?.uid ? "userc" : "userLogout"}
        onClick={() => router.push("/")}
      >
        <Avatar
          alt={user?.user?.name || undefined}
          src={user?.user?.url || undefined}
        />
        <span style={{ color: "black", marginLeft: "1.5rem" }}>
          {user?.user?.name}
        </span>
      </div>
      {user?.user?.uid && (
        <Button variant="contained" onClick={() => dispatch(logout())}>
          logout
        </Button>
      )}
    </div>
  );
};

export default MiniDrawer;
