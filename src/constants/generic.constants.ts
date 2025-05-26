const GENERIC_CONSTANTS = {
    AUTH: {
        SESSION_PATH: "/api/auth/session",
        SIGN_OUT_PATH: "/api/auth/logout",
    },
    HTTP: {
        STATUS: {
            BAD_REQUEST: 400,
            CONFLICT: 409,
            FORBIDDEN: 403,
            INTERNAL_SERVER_ERROR: 500,
            NOT_FOUND: 404,
            SUCCESS: 200,
            UNAUTHORIZED: 401,
        }
    },
    API: {
        TIMEOUT: 100000,
    }
}
export default GENERIC_CONSTANTS;