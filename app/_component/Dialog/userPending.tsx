"use client";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import SelectOption from "../Select/select";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import useQA from "@/app/_hooks/useQA";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { statusSelect } from "@/redux/features/authThunk";

export default function UserPending() {
  const [
    rows, //QaListFilter
    createQA,
    deleteQA,
    updateQA,
    useQAselect,
    useQAsetSelect,
    search,
    setSearch,
    officeList,
    loading,
    recoverQA,
  ] = useQA();
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [select, setSelect] = useState({ 系所: "" });
  const [value, setValue] = useState("user");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const props = {
    label: "系所",
    options: officeList,
    current: "",
    select,
    setSelect,
  };
  const handle = () => {
    const data = {
      officeId: value == "officePending" ? select.系所 : user?.user?.uid,
      status: value,
      office:
        value == "officePending"
          ? officeList.filter((x) => x.id === select.系所)[0].name
          : "",
    };
    dispatch(statusSelect(data));
  };
  return (
    <Dialog open={user?.user?.status == "pending"}>
      <DialogTitle>請選擇您的身分</DialogTitle>
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
            value="officePending"
            control={<Radio />}
            label="管理者"
          />
        </RadioGroup>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: value === "officePending" ? "space-between" : "",
        }}
      >
        {value == "officePending" && <SelectOption props={props} />}
        {value == "officePending" && !select.系所 && (
          <p style={{ color: "red" }}>請選擇您所屬單位</p>
        )}
        {(value == "user" || select.系所) && (
          <Button onClick={handle}>確定</Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
