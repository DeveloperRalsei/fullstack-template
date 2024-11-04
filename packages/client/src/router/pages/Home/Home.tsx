import { Space, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Stack w={"100%"} gap={0} pt={0}>
      <Title order={2}>{t("home.title")}</Title>
      <Space h={"30vh"} />
    </Stack>
  );
};
