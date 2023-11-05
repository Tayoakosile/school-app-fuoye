import { NextApiResponse } from "next";
import {
    APIResponse,
    APIResponseError_code,
    APIResponseSuccess,
} from "../types/backend_types";

type handleErrorResponseProp = (
    res: NextApiResponse<APIResponse>,
    data: any,
    error_code?: APIResponseError_code,
    status?: APIResponseSuccess,
    message?:string
) => any;

type handleSuccessResponseProp = (
    res: NextApiResponse<APIResponse>,
    data: any,
    code? :any
) => any;

export const handleErrorResponse: handleErrorResponseProp = (
    res: NextApiResponse<APIResponse>,
    data: any,
    error_code,
    status = "fail",
    message
) => {
    return res.status(error_code?error_code:400).send({
        status,
        data,
        error_code,
        message
    });
};

export const handleSuccessResponse: handleSuccessResponseProp = (
    res: NextApiResponse<APIResponse>,
    data,
    code = 200  
) => {
    return res.status(code).send({
        status:'success',
        data,

    });
};
