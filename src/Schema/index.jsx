import * as yup from "yup";

export const Schema = yup.object({
  from: yup.string().min(2).max(25).required("enter the name"),
  to: yup.string().min(2).max(25).required("enter the to"),
  Departure: yup.date().required("enter the date"),
  Return: yup.date().required("enter the date"),
  Preference: yup.number().min(2).max(25).required("enter the to"),
  Adult: yup.number().min(2).max(25).required("enter the to"),
  child: yup.number().min(2).max(25).required("enter the to"),
});
