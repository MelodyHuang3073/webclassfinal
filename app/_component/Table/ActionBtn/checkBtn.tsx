"use client";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";

export default function CheckBtn(props: any) {
  const handleCheck = () => {
    props.checkOffice(props.params.row.uid, "office");
  };

  return (
    <>
      <IconButton aria-label="check" onClick={handleCheck}>
        <CheckIcon />
      </IconButton>
    </>
  );
}
