import { languageType } from ".";

export const tr: languageType = {
  login: {
    title: "Giriş",
    loginBtn: "Giriş",
    resetBtn: "Sıfırla",
    loginInput: {
      email: "E-posta",
      password: "Şifre",
    },
    validation: {
      email: "Geçersiz e-posta",
      password: "Şifre en az 4 karakter içermelidir",
    },
  },
} as const;
