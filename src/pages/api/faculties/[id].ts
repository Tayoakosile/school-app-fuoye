
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { createFolder, getData } from '@/googleDrive'


import schoolFacultiesAndDepartment from '../../../config/faculties_and_department.json'
import type { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse } from '../../../backend/types/backend_types';
import { handleErrorResponse, handleSuccessResponse } from 'backend/lib/util';

type Data = {
  name: string;
  page:any
}


export default function upload_files(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  
  if(req.method=='GET') {
    const faculty_id= req.query?.id;
    const faculties = schoolFacultiesAndDepartment.faculties?.find(faculty=>faculty.id ===Number(faculty_id))

if(!faculties ) return handleErrorResponse(res,{message:`Faculty with the id "${faculty_id}"`},400,'error')
return  handleSuccessResponse(res,{data:faculties},200)



  }



  // res.status(200).json({ name: 'John Doe',page:page() })
}
