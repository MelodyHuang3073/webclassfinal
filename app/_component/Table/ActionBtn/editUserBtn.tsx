"use client";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import useQA from "@/app/_hooks/useQA";
import { FormControlLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SelectOption from "../../Select/select";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";
import { useAppSelector } from "@/redux/hooks";

export default function EditUserBtn({ props, params }: any) {
  const [select, setSelect] = useState({ 系所: "" });
  const [value, setValue] = useState("user");
  const [open, setOpen] = useState(false);
  const user = useAppSelector((state) => state.auth);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const propsSelect = {
    label: "系所",
    options: props.officeList,
    current: params.row.officeId,
    select,
    setSelect,
  };

  const handle = () => {
    setOpen(false);
    Swal.fire({
      title: "確定修改權限?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "確定",
      cancelButtonText: "取消",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          officeId: value == "office" ? select.系所 : params.row.uid,
          status: value,
          office:
            value == "office"
              ? props.officeList.filter((x: any) => x.id === select.系所)[0]
                  .name
              : "",
        };

        props.updateUser(params.row.uid, data);
      }
    });
  };
  const hide = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton aria-label="edit" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Dialog open={open}>
        <DialogTitle>修改權限</DialogTitle>
        <DialogContent>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="user"
              control={<Radio />}
              label="一般使用者"
            />
            <FormControlLabel
              value="office"
              control={<Radio />}
              label="業管單位"
            />
            <FormControlLabel
              value="admin"
              control={<Radio />}
              label="管理者"
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
          }}
        >
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
          {value == "office" && <SelectOption props={propsSelect} />}

          <Button onClick={hide}>取消</Button>
          <Button onClick={handle}>修改</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
