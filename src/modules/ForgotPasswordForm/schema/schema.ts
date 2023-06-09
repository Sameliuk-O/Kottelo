import * as Yup from "yup";
import {EMAIL_ERROR_TEXT, EMAIL_REG_EXP, PASS_ERROR_TEXT, PASS_REG_EXP} from "../../../common/config/validate";

export const forgotPasswordSchema = Yup.object({
  email: Yup
    .string()
    .required('Email is required field')
    .matches(EMAIL_REG_EXP, EMAIL_ERROR_TEXT)
});