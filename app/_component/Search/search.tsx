import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomSearch(props: any) {
  const InputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    props.setSearch(e.target.value);
  };

  return (
    <TextField
      value={props.search}
      onChange={InputChange}
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        p: 1,
      }}
    />
  );
}
