export * from "./en";
export * from "./tr";

export type languageType = {
  login: {
    title: string;
    loginBtn: string;
    resetBtn: string;
    loginInput: {
      email: string;
      password: string;
    };
    validation: {
      email: string;
      password: string;
    };
  };
};
