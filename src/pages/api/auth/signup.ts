// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'

import dbConnect from "@/backend/lib/mongo";
import { APIResponse } from "@/backend/types/backend_types";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/config/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import SignupModel from "@/backend/models/SignUp";
import { handleErrorResponse, handleSuccessResponse } from "@/backend/lib/util";

export default async function signup(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    try {
        const { email, password } = req.body;

        const isDbConnected = await dbConnect();
        if (isDbConnected) {
            const createUserDetails = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (createUserDetails.user) {
                await SignupModel.create({ ...req.body }).then(() => {
                    handleSuccessResponse(
                        res,
                        { message: "Account Created Succesfully" },
                        201
                    );
                });
            }
        }
    } catch (error: any) {
        
        if (error?.code == "auth/email-already-in-use")
            return handleErrorResponse(
                res,
                { email: "The Email is already in use,Login to Continue" },
                400
            );
    }
    // res.status(200).json({ name: 'John Doe',page:page() })
}
