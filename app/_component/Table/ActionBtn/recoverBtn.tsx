import IconButton from "@mui/material/IconButton";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

export default function RecoverBtn(props: any) {
  const handleRecover = () => {
    props.deleteQA(props.params.row.qaId);
  };
  return (
    <IconButton aria-label="rotateleft" onClick={handleRecover}>
      <RotateLeftIcon />
    </IconButton>
  );
}
