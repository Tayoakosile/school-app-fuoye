import {motion} from 'framer-motion'
import {
  SimpleGrid,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Collapse,
  Box,
} from "@chakra-ui/react";
import useAdminGetTeams from "hooks/admin/useAdminGetTeams";
import randomatic from "randomatic";
import { Controller } from "react-hook-form";
import AcButton from "reusables/ACButton";
import ACFormDropdown from "reusables/ACFormDropdown";
import ACFormInput from "reusables/ACFormInput";

const AddNewTeam = () => {
  const {
    control,
    setValue,
    handleSubmit,
    is_district_leader,
    all_faculties_and_department,
  } = useAdminGetTeams();
  console.log(all_faculties_and_department, "all_faculties_and_department");
  const handleClick = () => {
    setValue("password", randomatic("A0", 8), {
      shouldValidate: true,
    });
  };

  const options = [
    {
      label: "Executives",
      value: "executives",
    },
    {
      label: "District Leader",
      value: "district-leader",
    },
    {
      label: "Admin",
      value: "admin",
    },
  ];

  const onSubmit = handleSubmit((data) => console.log(data, "datadata"));
  return (
    <form onSubmit={onSubmit}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={8} pb="8" spacingY={6}>
        <ACFormInput label="Full Name" name="full_name" control={control} />
        <ACFormInput label="Username" name="username" control={control} />
        <ACFormInput
          label="Email Address"
          helperText="Enter new team email address,(Generated Credentials will be sent to team's mail )"
          name="email"
          control={control}
        />
        <ACFormDropdown
          options={options}
          errorLabel="role"
          label="Role"
          name="role"
          control={control}
        />

        <Collapse in={!is_district_leader} >
          <ACFormInput label="Position" name="position" control={control} />
        </Collapse>
        
        <motion.div animate={{
            opacity:is_district_leader? 1:0,
            scale:is_district_leader? 1:0.4,
            transitionEnd:{display:is_district_leader? 'block':'none'}
        }} >
          <ACFormDropdown
            // options={options}
            options={all_faculties_and_department?.faculties}
            
            getOptionLabel="name"
            label="District Leader for What Faculty?"
            name="faculty"
            control={control}
          />
        </motion.div>

        <Controller
          control={control}
          name={"password"}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { invalid, error },
          }) => (
            <FormControl isInvalid={invalid}>
              <FormLabel color="gray.700" fontSize={{ base: "lg", lg: "xl" }}>
                Password
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  pr="4.5rem"
                  type={"text"}
                  placeholder="Enter password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
                <InputRightElement width="fit">
                  <Button h="full" size="xs" onClick={handleClick}>
                    Autogenerate
                  </Button>
                </InputRightElement>
              </InputGroup>
              {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
            </FormControl>
          )}
        />
      </SimpleGrid>
      <AcButton type="submit">Add New Team Member</AcButton>
    </form>
  );
};

export default AddNewTeam;
