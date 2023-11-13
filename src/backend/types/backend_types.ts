export type APIResponseSuccess = "success" | "error" | "fail" ;
export type APIResponseError_code = 400 | 401 | 404 | 500;

export interface APIResponse {
    status: APIResponseSuccess;
    message?: string;
    error_code?:APIResponseError_code;
    data: any;
    code?:200|201
}
// export interface APIProps {
//   req: NextApiRequest,
// res: NextApiResponse<Response>
// }
