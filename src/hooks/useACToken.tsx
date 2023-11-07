import dayjs from "dayjs"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const useACToken = () => {
    const [token, setToken] = useState('')

    const router = useRouter()
    useEffect(() => {

        const storedToken = JSON.parse(localStorage.getItem('token') as string)
        setTimeout(() => {

            if (dayjs().isAfter(dayjs(storedToken?.date))){
                setToken('')
            }
            if (!storedToken) {
                router.replace('/login')
            }

            setToken(`${storedToken?.token}`)
        }, 0);
    }, [])
return {token,setToken}
}
export default useACToken
