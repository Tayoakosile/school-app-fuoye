import useACAPI from 'api/useACAPI'


import { useForm } from 'react-hook-form'
import { useMutation, useQuery, } from 'react-query'
import { joiResolver } from '@hookform/resolvers/joi'
import { profileValidationSchema } from 'config/validation'
import useImageUploader from './useImageUploader'

import { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const useACProfile = () => {
  const toast = useToast()
  const { handleuploadImage,files } = useImageUploader()
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
    
    staleTime:Infinity,
    cacheTime:Infinity,
    refetchOnMount:true,
    refetchOnWindowFocus:true,
    retryOnMount:true

  })



  const onSubmit = handleSubmit((data: any) => {

    setIsUpdatingProfile(true)
    if(!files){
    return  handleUpdateUserProfile.mutate({
        ...data, level: Number(data?.level?.value),
        faculty_id: data?.faculty?.id, department_id: data?.department?.id
      })
    }

    handleuploadImage().then((photoURL) => {

      handleUpdateUserProfile.mutate({
        ...data, level: Number(data?.level?.value),
        photoURL,
        faculty_id: data?.faculty?.id, department_id: data?.department?.id
      })

    })

  })


  return { profileInfo, control, isDirty, touchedFields, onSubmit,isUpdatingProfile,setValue }
}

export default useACProfile