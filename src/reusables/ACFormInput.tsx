
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
import { BsEyeSlash } from "react-icons/bs";

const ACFormInput = ({
    label,
    control,
    name,
    isDisabled,
    helperText,
    type = "text",
    placeholder,
}: {
    label?: string;
    control: Control<any>;
    name: string;
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
                    <FormLabel fontSize="lg">{label}</FormLabel>
                    <InputGroup size='md'>
                        <Input
                            h='14'
                            isDisabled={isDisabled}
                            isReadOnly={isDisabled}
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
