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
import SelectOption from "../Select/select";

export default function DialogModel({ props }: any) {
  const hide = () => {
    props.setOpen(false);
  };
  const InputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    props.setEditSelected({
      ...props.editSelected,
      [e.target.name]: e.target.value,
    });
  };
  const propsSelect = {
    options: props.options,
    label: props.label,
    current: props.editSelected && props.editSelected.officeId,
    select: props.select,
    setSelect: props.setSelect,
  };
  const updateQAHandler = () => {
    props.updateQA(props.editSelected);
    hide();
  };
  return (
    <Dialog open={props.open} onClose={hide}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="question"
          label="問題"
          fullWidth
          variant="standard"
          multiline
          value={props.editSelected && props.editSelected.question}
          onChange={InputChange}
          disabled={props.disabled}
        />
        <TextField
          margin="dense"
          name="answer"
          label="答案"
          fullWidth
          variant="standard"
          multiline
          value={props.editSelected && props.editSelected.answer}
          onChange={InputChange}
          disabled={props.disabled}
        />
        {props.assignRecord && (
          <TextField
            margin="dense"
            label="指派紀錄"
            fullWidth
            variant="standard"
            multiline
            value={props.editSelected && props.editSelected.history.join("->")}
          />
        )}
      </DialogContent>
      <DialogActions>
        <SelectOption props={propsSelect} />
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
        <Button onClick={updateQAHandler}>
          {props.title == "指派" ? "指派" : "修改"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
