// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'

import dbConnect from "@/backend/lib/mongo";
import { APIResponse } from "@/backend/types/backend_types";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendPasswordResetEmail } from "firebase/auth";
import { handleErrorResponse, handleSuccessResponse } from "@/backend/lib/util";
import { auth } from "@/config/firebase";

export default async function updateUserPassword(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    try {
        const { email } = req.body;

        const isDbConnected = await dbConnect();
        if (isDbConnected) {
            if(!email)return handleErrorResponse(res,null,400,"error","Email Address Is required")
             await sendPasswordResetEmail(auth,email)
        return handleSuccessResponse(res,{message:"Password Reset Email Sent Successfully"})
        }
    } catch (error: any) {
    console.log(error,'error')}
}
