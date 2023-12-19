"use client";
import GoogleBtn from "./_component/googleBtn";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useRouter, usePathname } from "next/navigation";

export default function AuthLogin() {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (user?.user?.uid) {
      switch (user?.user?.status) {
        case "office":
          router.push("/pending");
          break;
        case "admin":
          router.push("/noAssign");

          break;
        default:
          router.push("/message");
      }
      return;
    }
  }, [user]);
  return (
    <Dialog open={true}>
      <DialogTitle
        sx={{ display: "flex", justifyContent: "center", width: "350px" }}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={220}
          height={65}
          priority={true}
        />
      </DialogTitle>
      <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
        <GoogleBtn />
      </DialogContent>
    </Dialog>
  );
}
