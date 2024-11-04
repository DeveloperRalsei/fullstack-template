import { Button, Card, Group, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  document.title = t("login.title");

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("login.validation.email"),
      password: (value) =>
        value.length >= 4 ? null : t("login.validation.password"),
    },
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Stack mah={"100vh"} mih={"100vh"} align={"center"} justify={"center"}>
      <Title order={1} fz={"h2"}>
        Login
      </Title>
      <Card>
        <form onSubmit={form.onSubmit((v) => handleSubmit(v))}>
          <Stack>
            <TextInput
              label={t("login.loginInput.email")}
              withAsterisk
              type="email"
              {...form.getInputProps("email")}
            />
            <TextInput
              label={t("login.loginInput.password")}
              withAsterisk
              rightSection={
                !isVisible ? (
                  <IconEyeClosed
                    size={16}
                    color="var(--mantine-color-gray-5)"
                    onClick={() => setIsVisible(true)}
                    cursor={"pointer"}
                  />
                ) : (
                  <IconEye
                    size={16}
                    color="var(--mantine-color-blue-5)"
                    onClick={() => setIsVisible(false)}
                    cursor={"pointer"}
                  />
                )
              }
              type={isVisible ? "text" : "password"}
              {...form.getInputProps("password")}
            />
          </Stack>
          <Group grow mt={"md"}>
            <Button type="reset" variant="default" onClick={form.reset}>
              {t("login.resetBtn")}
            </Button>
            <Button type="submit">{t("login.loginBtn")}</Button>
          </Group>
        </form>
      </Card>
    </Stack>
  );
};
