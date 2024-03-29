
import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Controller, Control } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ACFormInput = ({
    label,
    control,
    name,
    isDisabled,
    helperText,
    type = "text",
    autoComplete,
    placeholder,
}: {
    label?: string;
    control: Control<any>;
    name: string;
    autoComplete?:string;
    helperText?: string
    type?: "text" | 'number'
    placeholder?: string;
    isDisabled?: boolean
}) => {
    const [show, setShow] = useState(false)
    const [inputType, setInputType] = useState('text')
    const handleClick = () => setShow(!show)
    useEffect(() => {

        setInputType(name == 'password' && !show ? "password" : name == 'password' && show ? 'text' : name == 'email' ? 'email' : "text")
    }, [show, name])
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error, invalid },
            }) => (
                <FormControl isInvalid={invalid}>
                    <FormLabel color='gray.700' fontSize={{base:"lg",lg:'xl'}}>{label}</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            h='12'
                            autoComplete={autoComplete}
                            isDisabled={isDisabled}
                            _hover={{borderColor:'brand.500'}}
                            isReadOnly={isDisabled}
                            outline="none"
                            
                            
                            ringOffset={2}
                            ringColor={'brand.500'}
                            placeholder={placeholder} size='lg' type={inputType}
                            value={value} onChange={onChange} onBlur={onBlur} />
                        {!error?.message && <FormHelperText>{helperText}</FormHelperText>}
                        
                        {name == 'password' &&<InputRightElement width='4.5rem'>
                            <Icon w='6' h='6' mt='4' onClick={handleClick} as={ inputType == 'text'? AiOutlineEye:AiOutlineEyeInvisible}/>

                                {/* {show ? 'Hide' : 'Show'} {inputType}
                            </Icon> */}
                        </InputRightElement>}
                    </InputGroup>

                    <FormErrorMessage>{`${error?.message}`}</FormErrorMessage>

                </FormControl>
            )}
        />
    );
};

export default ACFormInput;
