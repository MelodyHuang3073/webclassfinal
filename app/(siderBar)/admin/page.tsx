"use client";
import { adminCols as columns } from "../../_component/Table/colums";
import { useState, useEffect } from "react";
import Table from "../../_component/Table/table";
import DeleteBtn from "../../_component/Table/ActionBtn/deleteBtn";
import EditUserBtn from "../../_component/Table/ActionBtn/editUserBtn";
import useAdmin from "@/app/_hooks/useAdmin";
import CheckBtn from "../../_component/Table/ActionBtn/checkBtn";

export default function Admin({ props }: any) {
  const [
    rows,
    checkOffice,
    deleteUser,
    loading,
    search,
    setSearch,
    select,
    setSelect,
    officeList,
    updateUser,
  ] = useAdmin();

  const actionColumn = [
    {
      field: "action",
      headerName: "選項",
      width: 180,
      sortable: false,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            {params.row.status === "officePending" && (
              <CheckBtn checkOffice={checkOffice} params={params} />
            )}
            {params.row.status !== "admin" && (
              <>
                <EditUserBtn props={propsEdit} params={params} />
                <DeleteBtn deleteQA={deleteUser} params={params} />
              </>
            )}
          </div>
        );
      },
    },
  ];
  const propsEdit = {
    label: "指派系所",
    officeList,
    select,
    setSelect,
    updateUser,
  };
  const tablePorps = {
    rows,
    select,
    setSelect,
    search,
    setSearch,
    columns,
    actionColumn,
    title: "權限管理", //每個不同
    loading,
  };
  return (
    <>
      <Table props={tablePorps} />
      {/* <div>123</div> */}
    </>
  );
}
