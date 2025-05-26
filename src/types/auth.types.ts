export interface SessionData {
    access_token?: string;
    code_verifier?: string;
    destroy(): unknown;
    expires_in?: number;
    isLoggedIn: boolean;
    refresh_token?: string;
    save(): unknown;
    tenantId?: string;
    tokenIssuedAt?: number;
    userInfo?: SessionUserData;
    sapVendors: Array<SAPVendor>;
}
export type SessionUserData = {
    sub: string;
    name: string;
    email: string;
    given_name: string;
    family_name: string;
    app_roles: string[];
};

export type SAPVendor = {
    sapVendorId: number;
    sapVendorName: string;
    sapVendorNumber: number;
};