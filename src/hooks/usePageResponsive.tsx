import { useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const usePageResponsive = () => {
    const [isLargerThan1000] = useMediaQuery('(min-width:1000px)')
    const [isPageTabletSize, setIsPageTabletSize] = useState(false)

    useEffect(() => {

        setIsPageTabletSize(isLargerThan1000)
    }, [isLargerThan1000])


    return { isPageTabletSize }
}

export default usePageResponsive