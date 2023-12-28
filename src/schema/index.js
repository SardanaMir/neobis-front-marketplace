import * as yup from "yup";

const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

export const basicSchema = yup.object().shape({
  username: yup
  .string()
  .min(3, "Логин должен быть не менее 3 букв")
  .required("Введите логин"),
  
  email: yup
  .string()
  .email("Введите e-mail")
  .required("Введите e-mail"),

  password: yup
  .string()
  .min(8, "Длина пароля должна быть минимум 8")
  .matches(regexPassword, 'Пароль слишком простой')
  .required("Введите пароль"),

  confirmPassword: yup
  .string()
  .oneOf([yup.ref("password"), null], "Пароль не совпадает")
  .required("Введите повторно пароль"),

  DOB: yup
  .string()
  .matches(/(19|20)\d\d-(0\d|1[012])-(0\d|1\d|2\d|3[01])/, 'Неверный формат даты. Используйте YYYY-MM-DD.')
});