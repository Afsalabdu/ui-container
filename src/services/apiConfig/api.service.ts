import CONSTANTS from "@/constants";
import apisauce from "apisauce";
import commonService from "../common.service";
import { FieldValues } from "react-hook-form";

const Create = (baseURL?: string) => {
    let apiBaseUrl: string = baseURL as string;
    if (!baseURL) {
        apiBaseUrl = commonService.getApiBaseUrl();
    }
    const api = apisauce.create({
        baseURL: apiBaseUrl,
        timeout: CONSTANTS.GENERIC.API.TIMEOUT,
    });

    const setHeader = async () => {
        const apiHeader = await commonService.getApiHeader();
        api.setHeaders(apiHeader);
    };

    const get = async (
        url: string,
        params?: object | string,
        options?: object,
    ) => {
        await setHeader();
        return api.get(url, params, options);
    };

    const patch = async (
        url: string,
        body?: { [key: string]: string | FieldValues | boolean },
        customHeader?: { [key: string]: string }
    ) => {
        if (customHeader) api.setHeaders(customHeader);
        else await setHeader();
        return api.patch(url, body);
    };

    const patchRequest = async <T>(
        url: string,
        body?: T,
        customHeader?: { [key: string]: string }
    ) => {
        if (customHeader) api.setHeaders(customHeader);
        else await setHeader();
        return api.patch(url, body);
    };

    const post = async <T>(url: string, body?: T) => {
        await setHeader();
        return api.post(url, body);
    };

    const put = async <T>(
        url: string,
        body?: T,
        customHeader?: { [key: string]: string }
    ) => {
        if (customHeader) api.setHeaders(customHeader);
        else await setHeader();
        return api.put(url, body);
    };

    const remove = async (url: string, body?: { [key: string]: string }) => {
        await setHeader();
        return api.delete(url, body);
    };
    return {
        get,
        post,
        remove,
        put,
        api,
        patch,
        patchRequest,
    };
};

export default Create;
