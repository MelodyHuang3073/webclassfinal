import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function EditBtn(props: any) {
  const editPop = () => {
    props.setEditSelected(props.params.row);
    props.setOpen(true);
  };
  return (
    <IconButton aria-label="edit" onClick={editPop}>
      <EditIcon />
    </IconButton>
  );
}
