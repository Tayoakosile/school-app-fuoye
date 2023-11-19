import { useState, useEffect } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, useWatch } from "react-hook-form";
import Joi from "joi";
import useGetFaculties from "hooks/useGetFaculties";

const useAdminGetTeams = () => {
  const [is_district_leader, setIsDistrictLeader] = useState(false);
  const { all_faculties_and_department } = useGetFaculties();
  const userSchema = Joi.object({
    full_name: Joi.string().required().messages({
      "any.required": "Full name is required.",
      "string.empty": "Full name cannot be empty.",
    }),
    username: Joi.string().alphanum().min(3).max(30).required().messages({
      "any.required": "Username is required.",
      "string.empty": "Username cannot be empty.",
      "string.alphanum": "Username must only contain alphanumeric characters.",
      "string.min": "Username must be at least {#limit} characters long.",
      "string.max": "Username cannot be longer than {#limit} characters.",
    }),
    email: Joi.string().email({ tlds: false }).required().messages({
      "any.required": "Email is a required field",
      "string.email": "Invalid email format",
    }),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required()
      .messages({
        "any.required": "Password is required.",
        "string.empty": "Password cannot be empty.",
        "string.pattern.base":
          "Password must be at least 3 characters long and contain only alphanumeric characters.",
      }),
    position: Joi.any().when("role.value", {
      is: "admin" || "executives" || "executive",
      then: Joi.string().required().messages({
        "any.required": "Position is a required field",
      }),
    }),

    role: Joi.object({
      label: Joi.string().required().messages({
        "any.required": "This field is required.",
        "string.empty": "This field is required.",
      }),
      value: Joi.string().required().messages({
        "any.required": "This field is required.",
        "string.empty": "This field is required.",
      }),
    })
      .required()
      .messages({
        "any.required": "Role is required.",
      }),
    faculty: Joi.any().when("role.value", {
      is: "district-leader",
      then: Joi.object().required().messages({
        "any.required": "This field is required",
        "object.base": "This field is required",
      }),
    }),
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
      username: "",
      password: "",
      position: "",
      role: { label: "", value: "" },
      faculty: null,
    },
    resolver: joiResolver(userSchema),
  });
  const teamRole = useWatch({ control, name: "role" });

  useEffect(() => {
    teamRole?.value === "district-leader"
      ? setIsDistrictLeader(true)
      : setIsDistrictLeader(false);
  }, [teamRole]);

  return {
    userSchema,
    control,
    setValue,
    handleSubmit,
    is_district_leader,
    all_faculties_and_department,
  };
};

export default useAdminGetTeams;
