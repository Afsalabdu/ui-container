export type urlParams = {
    locale: string;
};
export type Response<T> = {
    data?: T;
    ok: boolean;
    status: number;
};