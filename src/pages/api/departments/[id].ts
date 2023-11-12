
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


export default function getSingleDepartment(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  
  if(req.method=='GET') {
    const department_id= req.query?.id;
    const departments = schoolFacultiesAndDepartment.departments?.find(department=>department.id ===Number(department_id))

if(!departments ) return handleErrorResponse(res,{message:`Faculty with the id "${department_id}"`},400,'error')
return  handleSuccessResponse(res,{data:departments},200)



  }



  // res.status(200).json({ name: 'John Doe',page:page() })
}
