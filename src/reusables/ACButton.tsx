import { Button } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type ACButtonProps={
    children:ReactNode
    type?:"submit" |"button",
    colorScheme?:string,
    variant?:string;
    isLoading?:boolean;
}
const AcButton = (props:any) => {
  const {children,variant,isLoading,type,colorScheme ='brand',...rest} = props
    
  return (  
    <Button size={'lg'}
     h={{base:'50px',xl:'62px'}} 
  boxShadow='0px 1px 25px -5px #a300a3, 0 10px 10px -5px #a300a3'
    
    isLoading={isLoading}
     py={{base:'3.5',xl:"4"}}
     px={{base:'24px',xl:"40px"}}
     className='ac_button'
     colorScheme={colorScheme}
     type={type}
     variant={variant}
    {...rest}
rounded={'100px'}
    >{children}</Button>
    
    
  )
}

export default AcButton