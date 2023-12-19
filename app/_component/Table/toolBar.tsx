import Box from "@mui/material/Box";
import CustomSearch from "../Search/search";
import SelectOption from "../Select/select";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";

export default function ToolBar(props: any) {
  return (
    <Box display="flex" justifyContent="space-between">
      <ListItem>
        <ListItemText primary={props.title} />
      </ListItem>
      <Box
        display="flex"
        justifyContent="flex-end"
        sx={{
          mt: 1,
        }}
      >
        <CustomSearch setSearch={props.setSearch} search={props.search} />
        <SelectOption props={props.propsOrder} />
      </Box>
    </Box>
  );
}
