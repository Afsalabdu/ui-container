import { Response } from "@/types/generic.types";
import CONSTANTS from "@/constants";
import { redirect } from "next/navigation";

const handleResponse = async <T>(res: Response<T>) => {
    const baseUrl: string | undefined =
        typeof window !== "undefined"
            ? process.env.NEXT_PUBLIC_APP_URL
            : process.env.APP_URL;
    if (!res.ok) {
        if (
            res.status === CONSTANTS.GENERIC.HTTP.STATUS.BAD_REQUEST ||
            res.status === CONSTANTS.GENERIC.HTTP.STATUS.FORBIDDEN ||
            res.status === CONSTANTS.GENERIC.HTTP.STATUS.NOT_FOUND ||
            res.status === CONSTANTS.GENERIC.HTTP.STATUS.INTERNAL_SERVER_ERROR
        ) {
            // TODO add error handling
        } else if (res.status === CONSTANTS.GENERIC.HTTP.STATUS.UNAUTHORIZED) {
            // TODO Add redirection to login

            if (typeof window !== "undefined") {
                console.log("Auth session expired");
                window.location.href = baseUrl + "/logout";
            } else {
                alert("Session expired, please login again");
                redirect(baseUrl + "/logout");
            }
        }
    }

    return res;
};

export default handleResponse;
