import * as yup from "yup";

const regexPassword = '/(?=^.{8,15}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/';

export const basicSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, "Логин должен быть не менее 3 букв")
  .required("Введите логин"),

  password: yup
  .string()
  .min(8, "Длина пароля должна быть минимум 8")
  .matches(regexPassword, 'Пароль слишком простой')
  .required("Введите пароль"),

  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password"), null], "Пароль не совпадает")
  .required("Введите пароль"),
});