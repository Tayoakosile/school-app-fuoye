import useACAPI from 'api/useACAPI'
import schoolFacultiesAndDepartment from '../config/faculties_and_department.json'
import { useState } from 'react'
import { useQuery } from 'react-query'

const useSearchFiles = () => {
const {AC_BASE_URL} =     useACAPI()
const [allFiles,setAllFiles]= useState([])
const [searchTerm,setSearchTerm] = useState('')
    const  { data,isLoading:isGettingFiles }= useQuery([searchTerm],async()=>{
        const {data}= await AC_BASE_URL.get(`${!searchTerm ? "/files": `/files?s=${searchTerm}`}`)
        return data;
        
    },{
onSuccess(data){
            const files  =   data?.data?.map((file:any)=>{
                const department  = schoolFacultiesAndDepartment.departments?.find(department=>department.id===Number(file.department_id))
                
                const faculty  = schoolFacultiesAndDepartment.faculties?.find(faculty=>faculty.id===Number(file.faculty_id))
                
                
                return {
                    ...file,
                    faculty:faculty?.name,
                    department:department?.name,
                }


                

            })
            console.log(files,'files',data)
            setAllFiles(files)
        },
        cacheTime:560000
    })
  return {setSearchTerm,searchTerm,allFiles,isGettingFiles}
}

export default useSearchFiles