import { languageType } from ".";

export const en: languageType = {
  login: {
    title: "Login",
    resetBtn: "Reset",
    loginBtn: "Login",
    loginInput: {
      email: "Email",
      password: "Password",
    },
    validation: {
      email: "Invalid email",
      password: "The password must be at least 4 characters",
    },
  },
} as const;
