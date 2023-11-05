// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'

import dbConnect from "@/backend/lib/mongo";
import { APIResponse } from "@/backend/types/backend_types";
import { auth } from "@/config/firebase";
import type { NextApiRequest, NextApiResponse } from "next";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignupModel from "@/backend/models/SignUp";
import { handleErrorResponse, handleSuccessResponse } from "@/backend/lib/util";

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {

    if(!req.body.email || !req.body.password){
        return handleErrorResponse(
            res,
            { email: "Your Email Address is Required" },
            400
        );
    }
    
    try {
        const { email, password } = req.body;

        const isDbConnected = await dbConnect();
        if (isDbConnected) {
            const signInUser = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (signInUser) {
                const UserDetails = await SignupModel.findOne({ email });
                const userDetail = UserDetails;
                // return;

                if (userDetail) {
                    const token = await signInUser.user.getIdToken();
                    return handleSuccessResponse(res, {
                        ...userDetail?._doc,
                        reFreshToken: signInUser.user.refreshToken,
                        token,
                        isEmailVerified: signInUser.user.emailVerified,
                    });
                }
            }
        }
    } catch (error: any) {
        console.log(error.code);
        if (error?.code == "auth/invalid-login-credentials")
            return handleErrorResponse(
                res,
                { email: "Incorrect Email or Password, Please Try Again" },
                400
            );
    }
}
