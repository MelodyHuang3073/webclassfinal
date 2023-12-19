"use client";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import DeleteCheck from "../../Dialog/deleteCheck";

export default function DeleteBtn(props: any) {
  const handleDelete = () => {
    // props.deleteQA(props.params.row.qaId);
    setOpen(true);
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <DeleteCheck open={open} setOpen={setOpen} props={props} />
    </>
  );
}
