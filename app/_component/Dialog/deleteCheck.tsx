"use client";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function DeleteCheck({ setOpen, open, props }: any) {
  const hide = () => {
    setOpen(false);
  };
  const updateQAHandler = () => {
    props.deleteQA(props.params.row.id);
    hide();
  };
  return (
    <>
      <Dialog open={open || false} onClose={hide}>
        <DialogTitle>確定刪除?</DialogTitle>
        <DialogContent>
          <Image
            src="/trash.svg"
            alt="Logo"
            width={300}
            height={300}
            priority={true}
          />
        </DialogContent>
        <DialogActions>
          <IconButton
            aria-label="close"
            onClick={hide}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Button onClick={hide}>取消</Button>
          <Button onClick={updateQAHandler}>確定</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
