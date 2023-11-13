// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'


import allSchoolCourses from "../../../config/faculties_and_department.json";
import type { NextApiRequest, NextApiResponse } from "next";
import { APIResponse } from '../../../backend/types/backend_types';



export default function upload_files(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    if (req.method == "GET") {
        res.status(200).json({status:'success' ,data: {faculties:allSchoolCourses.faculties} });
    }

    // res.status(200).json({ name: 'John Doe',page:page() })
}
