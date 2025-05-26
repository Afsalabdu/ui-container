"use client";
import Image from "next/image";
import { Button, TextField, DataGrid } from "@costco/merch-ui-components";
import TableComponent from "@/components/atoms/TableComponent/TableComponent";
import { PostDummyTable } from "@/services/api/vm.service";
import { POStTableData } from "@/services/api/tableapi.service";
import { payload } from "@/services/types/api.types";
import { useState } from "react";
import { redirect } from "next/navigation";
import styles from "./layout.module.scss";

export default function Emulator() {
  const [inputval, setInptVal] = useState("");

  const tableDataFunction = async (payload: payload) => {
    const data = await POStTableData({ locale: "" }, payload);
    console.log(data, "data");
  };
  const onSubmit = () => {
    alert(inputval);
    setInptVal("");
    // tableDataFunction({ locale: "" },{"whseIds":[735],"freight":data})
    //  redirect("/emulator");
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start min-h-screen p-4 pb-5 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      {/* <div className={styles.body}> */}
      <div className="flex">
        {/* <div className="my-3 bg-[#f4f5f5] p-1 rounded-sm">Freight</div> */}
        <div className="my-3">
          <TextField
            id="id"
            autoFocus
            label="Freight"
            value={inputval}
            variant="filled"
            hideUnderline={true}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInptVal(event.target.value);
            }}
          />
        </div>
        <div className="mx-8 my-3">
          <Button
            id="primary-button"
            label="Submit"
            className="h-14 rounded-xl"
            onClick={() => onSubmit()}
          />
        </div>
      </div>
      <div className="m-1">
        <TableComponent />
      </div>
    </div>
  );
}
