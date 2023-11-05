// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'


import _ from "lodash";
import allSchoolCourses from "../../../config/faculties_and_department.json";
import type { NextApiRequest, NextApiResponse } from "next";
import { APIResponse } from '../../../backend/types/backend_types';
import { handleErrorResponse,handleSuccessResponse } from "backend/lib/util";

export default function upload_files(
    req: NextApiRequest,
    res: NextApiResponse<APIResponse>
) {
    if (req.method == "GET") {
        const faculty_id = req.query?.faculty_id;
        const department =
            // _.filter(allSchoolCourses.faculties,{'id':faculty_id})
            allSchoolCourses.departments.filter(
                (department) => department.faculty_id == Number(faculty_id)
            );
        if (!department.length)
            return handleErrorResponse(
                res,
                {
                    department: `No department found in the faculty ${faculty_id}`,
                },
                400,
                "fail"
            );

        return handleSuccessResponse(res, { department });
    }
}
