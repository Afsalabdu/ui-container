import API_ENDPOINT from "@/services/apiConfig/api.root";
import { urlParams } from "@/types/generic.types";
import commonService from "@/services/common.service";
import { redirect } from "next/navigation";
import { payload } from "@/services/types/api.types";
import API_SERVICE from "@/services/api";
import handleResponse from "@/services/apiConfig/apiResponse.service";
export const GetTableData = async (params: urlParams) => {
  const payload: payload = {
    whseIds: "",
    freight: "",
  };
  const res = await API_SERVICE.VM.GETDUMMY(payload);
  const responseData = await handleResponse(res as unknown as any);
 return responseData
};
export const POStTableData = async (params: urlParams,payloadData:payload) => {
  const payload: payload = {
    whseIds: payloadData['whseIds'],
    freight: payloadData['freight'],
  };
  const res = await API_SERVICE.VM.GETDUMMY(payload);
  const responseData = await handleResponse(res as unknown as any);
 return responseData
};
