// import { getUserInfo } from "@/lib/getUserInfo";
import { urlParams } from "@/types/generic.types";

const getApiBaseUrl = () => {
    const baseUrl: string | undefined =
        typeof window !== "undefined"
            ? process.env.NEXT_PUBLIC_API_BASE_URL
            : process.env.API_BASE_URL;
    return baseUrl ? baseUrl : "";
};

const getApiHeader = async (cookieHeader?: string, urlParams?: urlParams) => {
    // TODO: AUTH: Replace with iron session
    // const userData = getUserInfo(cookieHeader);
    // const accessToken = userData?.user_session?.accessToken;
    // const sapVendorDefaultNumber = userData?.vendors?.[0] || "0";
    // const selectedSapVendor = getSapVendorId(urlParams);
    const head = {
        "Access-Control-Allow-Origin": "*",
        Accept: "*/*",
        // Authorization: `Bearer ${accessToken}`,
        // SapVendorNumber: selectedSapVendor || sapVendorDefaultNumber,
    };
    return head;
};

// const getSapVendorId = (urlParams?: urlParams) => {
//     let vendorId: string | undefined;
//     if (urlParams?.vendorId) vendorId = urlParams.vendorId;
//     else if (window && window.location) {
//         const pathname = window.location.pathname;
//         const segments = pathname.split("/").filter(Boolean);
//         if (!isNaN(Number(segments[0]))) vendorId = segments[0];
//     }
//     return vendorId;
// };
const commonService = {
    getApiBaseUrl,
    getApiHeader,
};

export default commonService;