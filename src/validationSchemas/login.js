import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email().required("The email is required"),
  password: yup
    .string()
    .min(5, "Too short")
    .max(20, "Too long")
    .required("The password is required"),
});
