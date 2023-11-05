
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Controller, Control } from "react-hook-form";

const ACFormInput = ({
    label,
    control,
    name,
    helperText,
      type="text",
      placeholder
}: {
    label?: string;
    control: Control<any>;
    name: string;
    helperText?:string
    type?:"text" | 'number'
    placeholder?:string
}) => {
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
                    <Input 
                    h='16'
                    placeholder={placeholder} size='lg' type={type} value={value} onChange={onChange} onBlur={onBlur} />
                    {!error?.message && <FormHelperText>{helperText}</FormHelperText>}
                    <FormErrorMessage>{`${error?.message}`}</FormErrorMessage>

                </FormControl>
            )}
        />
    );
};

export default ACFormInput;
