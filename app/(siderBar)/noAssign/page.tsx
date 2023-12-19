"use client";
import { columns } from "../../_component/Table/colums";
import { useState, useEffect } from "react";
// import { columns } from "./colums";
import useQA from "../../_hooks/useQA";
import { QA } from "@/app/_settings/interface";
import DialogModel from "../../_component/Dialog/dialog";
import Table from "../../_component/Table/table";
import DeleteBtn from "../../_component/Table/ActionBtn/deleteBtn";
import EditBtn from "../../_component/Table/ActionBtn/editBtn";

export default function NoAssign({ props }: any) {
  const [
    rows, //QaListFilter
    createQA,
    deleteQA,
    updateQA,
    select,
    setSelect,
    search,
    setSearch,
    officeList,
    loading,
    recoverQA,
  ] = useQA();
  const [editSelected, setEditSelected] = useState<QA>();
  const [open, setOpen] = useState(false);

  const actionColumn = [
    {
      field: "action",
      headerName: "選項",
      // width: 200,
      flex: 1.65,
      sortable: false,
      renderCell: (params: any) => {
        return (
          <div>
            <EditBtn
              setEditSelected={setEditSelected}
              setOpen={setOpen}
              params={params}
            />
            <DeleteBtn deleteQA={deleteQA} params={params} />
          </div>
        );
      },
    },
  ];

  const dialogProps = {
    open,
    setOpen,
    editSelected,
    setEditSelected,
    label: "指派系所",
    options: officeList,
    select,
    setSelect,
    updateQA,
    // title: "指派", //btnName，沒寫預設為修改
    disabled: true, // disabled: true(不能input),預設false
    assignRecord: true,
  };
  const tablePorps = {
    rows,
    select,
    setSelect,
    search,
    setSearch,
    columns,
    actionColumn,
    title: "待指派問題", //每個不同
    loading,
  };
  return (
    <>
      <Table props={tablePorps} />
      <DialogModel props={dialogProps} />
    </>
  );
}
