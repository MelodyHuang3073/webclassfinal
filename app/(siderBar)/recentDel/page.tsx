"use client";
import { delCols as columns } from "../../_component/Table/colums";
import { useState, useEffect } from "react";
// import { columns } from "./colums";
import useQA from "../../_hooks/useQA";
import { QA } from "@/app/_settings/interface";
import Table from "../../_component/Table/table";
import DeleteBtn from "../../_component/Table/ActionBtn/deleteBtn";
import RecoverBtn from "../../_component/Table/ActionBtn/recoverBtn";

export default function RecentDel({ props }: any) {
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
            <RecoverBtn deleteQA={recoverQA} params={params} />
            <DeleteBtn deleteQA={deleteQA} params={params} />
          </div>
        );
      },
    },
  ];

  const tablePorps = {
    rows,
    select,
    setSelect,
    search,
    setSearch,
    columns,
    actionColumn,
    title: "近期刪除", //每個不同
    loading,
  };
  return <Table props={tablePorps} />;
}
