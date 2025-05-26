import API_ENDPOINT from "../apiConfig/api.root";
import apiCall from "../apiConfig/apiCall.config";
import { payload } from "../types/api.types";
export const createVmTable = async (payload: payload) => {
  try {
    const res = await apiCall.post(API_ENDPOINT.VM.POST_VM, payload);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getVmTable = async (payload: payload) => {
  try {
    const res = await apiCall.get(API_ENDPOINT.VM.GET_VM, payload);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const getDummyTable = async (payload: payload) => {
  try {
    // const res = await apiCall.get(API_ENDPOINT.VM.GET_DUMMY, payload);
    const res = await apiCall.get(API_ENDPOINT.VM.GET_DUMMY);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};
export const PostDummyTable = async (payload: payload) => {
  try {
    // const res = await apiCall.get(API_ENDPOINT.VM.GET_DUMMY, payload);
    const res = await apiCall.post(API_ENDPOINT.VM.GET_DUMMY,payload);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};