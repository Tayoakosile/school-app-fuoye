import useACAPI from 'api/useACAPI'
import schoolFacultiesAndDepartment from '../config/faculties_and_department.json'

import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'

const useACProfile = () => {
  const {control,setValue,formState:{isDirty}} = useForm()
    const {AC_BASE_URL } =useACAPI()
    const profileInfo = useQuery(['profile'],async()=>{
        const {data} =await AC_BASE_URL.get('/profile')
        return data
    },{
      onSuccess(data){
        const profile = data?.data
        
        setValue("email",profile?.email)
        setValue("first_name",profile?.first_name)
        setValue("last_name",profile?.last_name)
        setValue("phone",`${profile?.phone}`)
        
        setValue("faculty",schoolFacultiesAndDepartment.faculties.find((faculty)=>faculty.id === profile.faculty_id))
        setValue("department",schoolFacultiesAndDepartment.departments.find((department)=>department.id === profile.faculty_id))
      }
    })
  return {profileInfo,control,isDirty}
}

export default useACProfile