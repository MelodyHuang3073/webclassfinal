"use client";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import PaginationControlled from "./pagination";
import ToolBar from "./toolBar";
import CustomNoRowsOverlay from "./noRow";
// import LinearProgress from "@mui/material/LinearProgress";

export default function Table({ props }: any) {
  const PAGE_SIZE = 3;
  const [paginationModel, setPaginationModel] = useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });

  const propsOrder = {
    label: "順序",
    options: [
      { value: "desc", name: "最新" },
      { value: "asc", name: "最舊" },
    ],
    current: "desc",
    select: props.select,
    setSelect: props.setSelect,
  };
  return (
    <div
      style={{
        background: "",
        padding: "3rem",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        className=""
        style={{
          background: "#FFFFFF",
          padding: "1rem",
          height: "calc(100% - 1rem)",
          borderRadius: "1rem",
          boxShadow: "0px 10px 20px #E8E8E8",
        }}
      >
        <div style={{ height: "calc(100% - 5rem)", overflow: "auto" }}>
          <DataGrid
            autoHeight
            rows={props.rows}
            columns={props.columns.concat(props.actionColumn)}
            disableColumnMenu
            disableRowSelectionOnClick
            loading={props.loading}
            slots={{
              toolbar: ToolBar,
              pagination: PaginationControlled,
              noRowsOverlay: CustomNoRowsOverlay,
              // loadingOverlay: LinearProgress,
            }}
            slotProps={{
              toolbar: {
                search: props.search,
                setSearch: props.setSearch,
                propsOrder,
                title: props.title,
              },
            }}
            sx={{ "--DataGrid-overlayHeight": "300px" }}
            pageSizeOptions={[PAGE_SIZE]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </div>
      </div>
    </div>
  );
}
