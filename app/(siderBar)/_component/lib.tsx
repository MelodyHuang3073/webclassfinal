import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
export const nothingMenu = [
  {
    title: "",
    icon: <ChatIcon style={{ color: "white" }} />,
    url: "",
  },
];
export const userAccess = ["/message", "/testmail"];
export const officeAccess = ["/pending", "/checked", "/recentDel"];
export const adminAccess = ["/noAssign", "/admin"];

export const menuListUser = [
  {
    title: "問答區",
    icon: <ChatIcon />,
    url: "/message",
  },
  {
    title: "意見反映",
    icon: <EmailIcon />,
    url: "/testmail",
  },
];
export const menuListOffice = [
  {
    title: "待審核問題",
    icon: <PendingActionsOutlinedIcon />,
    url: "/pending",
  },
  { title: "已確認問答集", icon: <LiveHelpOutlinedIcon />, url: "/checked" },
  { title: "近期刪除", icon: <DeleteOutlineOutlinedIcon />, url: "/recentDel" },
].concat(menuListUser);

export const menuListAdmin = [
  {
    title: "待指派問題",
    icon: <ContentPasteSearchOutlinedIcon />,
    url: "/noAssign",
  },
  {
    title: "權限管理",
    icon: <ContentPasteSearchOutlinedIcon />,
    url: "/admin",
  },
].concat(menuListUser);
