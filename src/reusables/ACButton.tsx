import { Button } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type ACButtonProps={
    children:ReactNode
    type?:"submit" |"button",
    colorScheme?:string,
    variant?:string
}
const AcButton = ({children,variant,type,colorScheme ='brand',...rest}:ACButtonProps,) => {
    
  return (  
    <Button size={'lg'}
     h={{base:'50px',xl:'62px'}} 
    //  boxShadow={
    //       '0px 1px 25px -5px #a300a3, 0 10px 10px -5px #a300a3'
    //     }
     py={{base:'3.5',xl:"4"}}
     px={{base:'24px',xl:"40px"}}
     className='ac_button'
     colorScheme={colorScheme}
     type={type}
     variant={variant}
    {...rest}
rounded={'100px'}
    >{children}</Button>
    
    // <Button bg="yellow.500" ring='1'  color="ac_black.500">{children}</Button>
  )
}

export default AcButton