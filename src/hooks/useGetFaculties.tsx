import { useQuery, useMutation } from 'react-query';
import React, { useState } from 'react'
import axios from 'axios';

const useGetFaculties = () => {
    const [all_faculties_and_department,setAllFacultiesAndDepartment] = useState({
        faculties:[],
        departments:[],
        department_id:0
    })

    const {data:allFaculties} = useQuery([],async()=>{
        const{data} = await axios.get(`/api/faculties`)
        return data
    },{
        onSuccess(data){
            setAllFacultiesAndDepartment({...all_faculties_and_department,faculties:data?.data?.faculties})
        }
    })
    
    const{isLoading:isPageLoading}= useQuery([all_faculties_and_department.department_id],async(id:any)=>{
        return await axios.get(`/api/department/${all_faculties_and_department.department_id}`)

    },{
        enabled:all_faculties_and_department.department_id>=1,
        onSuccess(data){
            console.log(data,'data')
            setAllFacultiesAndDepartment({...all_faculties_and_department,departments:data?.data?.data?.department})
        }
    })

  return {allFaculties,all_faculties_and_department,isPageLoading,setAllFacultiesAndDepartment}
}

export default useGetFaculties