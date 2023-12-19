import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectOption({ props }: any) {
  useEffect(() => {
    props.setSelect({ ...props.select, [props.label]: props.current });
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    props.setSelect({ ...props.select, [props.label]: event.target.value });
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{props.label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.select?.[props.label]}
        label={props.label}
        onChange={handleChange}
      >
        {props.options.map((x: any) => (
          <MenuItem value={x.value} key={x.value}>
            {x.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
