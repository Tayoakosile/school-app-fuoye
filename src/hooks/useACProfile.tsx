import useACAPI from 'api/useACAPI'
import schoolFacultiesAndDepartment from '../config/faculties_and_department.json'

import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { joiResolver } from '@hookform/resolvers/joi'
import { profileValidationSchema } from 'config/validation'
import useImageUploader from './useImageUploader'
import { StudentLevelOptions } from 'lib/util/util'
import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const useACProfile = () => {
  const toast = useToast()
  const { handleuploadImage } = useImageUploader()
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)
  const { control, setValue, handleSubmit, formState: { isDirty, touchedFields, errors }, } = useForm({
    defaultValues: {
      email: "",
      first_name: '',
      last_name: '',
      phone: "",
      faculty: null,
      level: null,
      department: null,

    },
    resolver: joiResolver(profileValidationSchema)
  })
  
  const { AC_BASE_URL } = useACAPI()

  const handleUpdateUserProfile = useMutation(async (userProfile: any) => {
    const { data } = await AC_BASE_URL.put("/profile", userProfile)
    return data;

  }, {
    onMutate() {
      setIsUpdatingProfile(true)
    },

    onSuccess(){
      toast({
        description:'Profile Updated Successfully',
        duration:1500,
        isClosable:true,
        status:'success'
      })
    },
    onSettled() {
      setIsUpdatingProfile(false)

    }
  }

  )

  const profileInfo = useQuery(['profile'], async () => {
    const { data } = await AC_BASE_URL.get('/profile')
    return data
  }, {
    onSuccess(data) {
      const profile = data?.data

      setValue("email", profile?.email, {
        shouldDirty: false,
        shouldTouch: false,
      })
      setValue("first_name", profile?.first_name, {
        shouldDirty: false,
        shouldTouch: false,
      })
      setValue("last_name", profile?.last_name, {
        shouldDirty: false,
        shouldTouch: false,
      })
      setValue("phone", `${profile?.phone}`, {
        shouldDirty: false,
        shouldTouch: false,
      })

      setValue("faculty",
        // @ts-ignore
        schoolFacultiesAndDepartment.faculties.find((faculty) => faculty.id === profile.faculty_id), {
        shouldDirty: false,
        shouldTouch: false,
      })
      setValue("department",
        // @ts-ignore
        schoolFacultiesAndDepartment.departments.find((department) => department.id === profile.faculty_id), {
        shouldDirty: false,
        shouldTouch: false,
      })
      setValue("level",
        // @ts-ignore
        StudentLevelOptions.find((level) => Number(level.value) === profile.level), {
        shouldDirty: false,
        shouldTouch: false,
      })
    },

  })

  console.log(errors, 'errors')

  const onSubmit = handleSubmit((data: any) => {

    setIsUpdatingProfile(true)
    handleuploadImage().then((photoURL) => {

      handleUpdateUserProfile.mutate({
        ...data, level: Number(data?.level?.value),
        photoURL,
        faculty_id: data?.faculty?.id, department_id: data?.department?.id
      })

    })

  })


  return { profileInfo, control, isDirty, touchedFields, onSubmit,isUpdatingProfile }
}

export default useACProfile