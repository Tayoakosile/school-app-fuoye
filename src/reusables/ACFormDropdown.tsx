import {
    Box,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";
import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

type ACFormDropdownProp = {

    options?: { label: string, value: any }[];
    control: Control<any>;
    name: string;
    isLoading?: boolean
    isDisabled?: boolean
    label: string;
    helperText?: string;
    placeholder?: string;
    value?: any;
    onOptionChange?:any
    errorLabel?:string
    getOptionLabel?:string
}

const ACFormDropdown = ({
    options,
    getOptionLabel='label',
    label,
    control,errorLabel,
    name,
    isLoading,
    helperText,onOptionChange,
    placeholder,
    isDisabled
}: ACFormDropdownProp) => {


    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error, invalid, },
            }) => (

                <FormControl isInvalid={invalid}
                    sx={{
                        '& .acaid_control': {
                            height: '50px !important',
                            '&-is-focused': {
                                borderColor: 'brand.500'
                            },
                        },
                        '.acaid__option--is-focused': {
                            bg: 'brand.500',
                            color: 'white',
                            py: 4
                        }

                    }}
                >
                    <FormLabel fontSize="lg">{label}</FormLabel>
                    

                    <Box as={Select}
                        placeholder={placeholder}
                        isDisabled={isDisabled}
                        value={value}
                        sx={{
                            '& > .acaid__control': {
                                height: '50px !important',
                                rounded: 'lg',
                                border: '1px solid',
                                borderColor: 'gray.200'
                            }
                        }}
                        classNamePrefix='acaid'
                        isLoading={isLoading}
                        
                          getOptionLabel={(option:any) => option[getOptionLabel]}
  
                        options={options} onBlur={onBlur} onChange={(option: any) => {
                            onChange(option)
                            onOptionChange && onOptionChange(option)
                            
                            }} />
                    <FormErrorMessage>{errorLabel ? 
                    // @ts-ignore
                    error?.label?.message : error?.message}</FormErrorMessage>
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>

            )}
        />
    );
};

export default ACFormDropdown;
