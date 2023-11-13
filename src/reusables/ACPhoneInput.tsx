import {
    Box,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';



type ACPhoneInputProp = {
  control: Control<any>;
  name: string;
  isDisabled?: boolean;
  label: string;
  helperText?: string;
  placeholder?: string;
  value?: any;
  
};

const ACPhoneInput = ({
  

  label,
  control,
  name,
  
  helperText,
  placeholder,
  
}: ACPhoneInputProp) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref, },
        fieldState: { error, invalid, },
        
      }) => (
        <FormControl
          isInvalid={invalid}
          sx={{
            "& .acaid_control": {
              height: "50px !important",
              "&-is-focused": {
                borderColor: "brand.500",
              },
            },
            ".acaid__option--is-focused": {
              bg: "brand.500",
              color: "white",
              py: 4,
            },
          }}
        >
          <FormLabel fontSize="lg">{label}</FormLabel>

          <Box
          as={PhoneInput}
            placeholder={placeholder}
            country={"ng"}
            value={value}
            disableDropdown
            sx={{
              "& > .form-control": {
                height: "50px !important",
                rounded: "lg",
                border: "1px solid",
                w:'full',
                borderColor: "gray.200",
              },
            }}
            onBlur={onBlur}
            onChange={onChange}
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default ACPhoneInput;
