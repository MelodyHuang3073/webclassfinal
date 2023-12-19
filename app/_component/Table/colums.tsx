import moment from "moment";
import "./adminTable.css";
export const columns = [
  {
    field: "question",
    headerName: "問題",
    // width: 800,
    flex: 4,
  },
  {
    field: "stuNum",
    headerName: "發問者學號",
    //  width: 350,
    flex: 1.5,
  },
  {
    field: "qaAskTime",
    headerName: "發問時間",
    // width: 400,
    flex: 2,
    renderCell: (params: any) => {
      return <div>{moment(params.row.qaAskTime.toDate()).format("LLL")}</div>;
    },
  },
];

export const checkCols = [
  {
    field: "question",
    headerName: "問題",
    // width: 800,
    flex: 4,
  },
  {
    field: "answer",
    headerName: "答案",
    //  width: 350,
    flex: 5,
  },
  {
    field: "lastUpdaterId",
    headerName: "上次修改者",
    //  width: 350,
    flex: 2,
  },
  {
    field: "qaUpdateTime",
    headerName: "最近修改時間",
    // width: 400,
    flex: 2,
    renderCell: (params: any) => {
      return <div>{moment(params.row.qaAskTime.toDate()).format("LLL")}</div>;
    },
  },
];

export const delCols = [
  {
    field: "question",
    headerName: "問題",
    // width: 800,
    flex: 4,
  },
  {
    field: "answer",
    headerName: "答案",
    //  width: 350,
    flex: 4,
  },
  {
    field: "lastUpdaterId",
    headerName: "刪除者",
    //  width: 350,
    flex: 2,
  },
  {
    field: "qaDeleteTime",
    headerName: "刪除時間",
    // width: 400,
    flex: 2,
    renderCell: (params: any) => {
      return <div>{moment(params.row.qaAskTime.toDate()).format("LLL")}</div>;
    },
  },
];

export const adminCols = [
  {
    field: "email",
    headerName: "信箱",
    // width: 800,
    flex: 3,
  },
  {
    field: "name",
    headerName: "名稱",
    //  width: 350,
    flex: 1.5,
  },
  {
    field: "office",
    headerName: "單位",
    // width: 400,
    flex: 2,
  },
  {
    field: "status",
    headerName: "權限",
    // width: 400,
    flex: 1.5,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "applyTime",
    headerName: "註冊時間",
    flex: 2,
    renderCell: (params: any) => {
      return <div>{moment(params.row.applyTime.toDate()).format("LLL")}</div>;
    },
  },
];
