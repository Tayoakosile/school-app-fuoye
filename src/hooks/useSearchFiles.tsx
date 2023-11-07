import useACAPI from 'api/useACAPI'
import React, { useState } from 'react'
import { useQuery } from 'react-query'

const useSearchFiles = () => {
const {AC_BASE_URL} =     useACAPI()
const [searchTerm,setSearchTerm] = useState('')
    const  { data:allFiles }= useQuery([searchTerm],async()=>{
        const {data}= await AC_BASE_URL.get(`${!searchTerm ? "/files": `/files?s=${searchTerm}`}`)
        
    })
  return {setSearchTerm,searchTerm,allFiles}
}

export default useSearchFiles