import { DataGrid } from "@costco/merch-ui-components";
import API_ENDPOINT from "@/services/apiConfig/api.root";
import { urlParams } from "@/types/generic.types";
import commonService from "@/services/common.service";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { payload } from "@/services/types/api.types";
import API_SERVICE from "@/services/api";
import handleResponse from "@/services/apiConfig/apiResponse.service";
import { GetTableData } from "@/services/api/tableapi.service";
import { table } from "console";
// import { headers } from "next/headers";

const TableComponent = () => {
  const colItems: any = [
    {
      field: "whse",
      headerName: "whse",
    },
    {
      field: "frt",
      headerName: "Frt",
    },
    {
      field: "fi",
      headerName: "F/I",
    },
    {
      field: "trm",
      headerName: "Trm",
    },
    {
      field: "shippoint",
      headerName: "Ship point",
    },
    {
      field: "sta",
      headerName: "sta",
    },
    {
      field: "zip",
      headerName: "zip",
    },
    {
      field: "mix",
      headerName: "Mix",
    },
    {
      field: "imp",
      headerName: "Imp",
    },
    {
      field: "rtvnlc",
      headerName: "RTV @NLC",
    },
    {
      field: "shpphn",
      headerName: "Shp phn",
    },
    {
      field: "carrier",
      headerName: "Carrier",
    },
  ];

  const rowItems: any = [
    {
      whse: 734,
      frt: 10.5,
      fi: "Y",
      trm: "col",
      shippoint: "cowley",
      sta: "LA",
      zip: 70526,
      mix: "N",
      imp: "N",
      rtvnlc: "Y",
      shpphn: 1234567890,
      carrier: "CALL TRAFFIC",
      id: 1,
    },
    {
      whse: 735,
      frt: 10.5,
      fi: "Y",
      trm: "col",
      shippoint: "cowley",
      sta: "LA",
      zip: 70526,
      mix: "N",
      imp: "N",
      rtvnlc: "Y",
      shpphn: 1234567890,
      carrier: "CALL TRAFFIC",
      id: 2,
    },
  ];

  const getTableData = async (params: urlParams) => {
    const baseUrl: string = commonService.getApiBaseUrl();
    // const cookieHeader = (await headers()).get("cookie");
    // const apiHeader = await commonService.getApiHeader(
    //   cookieHeader as string,
    //   params
    // );
    const res = await fetch(`${baseUrl}/${API_ENDPOINT.VM.GET_DUMMY}`, {
      //   headers: apiHeader,
    });
    if (res) {
      if (res.status === 401) {
        redirect("/");
      }
    }
    const data: any = await res.json().then((data) => {
      //   return data.map((item: any) => {
      //     return {
      //       code: item.countryCode,
      //       value: `${item.country}|${item.countryCode}|${item.countryCallingCode}`,
      //       label: item.country,
      //     };
      //   });
      console.log("Something went wrong", data);
    });
    return data;
  };
  const tableDataFunction = async()=>{
    const data= await GetTableData({locale:""})
   console.log(data,'data')
  }
  useEffect(() => {
    // getTableData({ locale: "" });
    tableDataFunction()
   
  }, []);

  return (
    <DataGrid
      columns={colItems}
      rows={rowItems}
      id={"Facility_listing"}
      localeText={{
        noRowsLabel: "No records found",
      }}
      pageSizeOptions={[5, 10, 25, 50]}
      pagination={{
        paginationModel: {
          page: 0,
          pageSize: 10,
        },
      }}
    />
  );
};
export default TableComponent;
