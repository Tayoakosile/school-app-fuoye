import useACAPI from 'api/useACAPI'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useSingleFile = () => {
    const router= useRouter()
    const {AC_BASE_URL} = useACAPI()
    const [searchWord,setSearchWord] = useState('')

    
    const  getSingleFile= useQuery([searchWord],async()=>{
        const {data} = await AC_BASE_URL.get(`/files/${searchWord}`)
        return data;
    },{
        enabled:searchWord?.length > 1 ?true :false
    })
    useEffect(()=>{
        setSearchWord(`${router.query?.file_id ??''}`)
    },[router?.query])
    console.log(router?.query,'router?.query',searchWord)
  return {getSingleFile}
}

export default useSingleFile