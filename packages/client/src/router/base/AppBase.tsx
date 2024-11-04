import { AppShell, Burger, Group, NavLink, Title } from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { IconChevronRight } from "@tabler/icons-react";

function AppBase() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useHotkeys([
    ["1", () => i18n.changeLanguage("en")],
    ["2", () => i18n.changeLanguage("tr")],
  ]);

  const links = [{ label: t("links.home"), href: "" }].map((link) => (
    <NavLink
      key={link.href}
      component={Link}
      to={link.href}
      label={link.label}
      rightSection={<IconChevronRight size={16} />}
      active={link.href === location.pathname}
      onClick={close}
    />
  ));

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { desktop: false, mobile: !opened },
      }}>
      <AppShell.Header>
        <Group
          w={"100%"}
          h={"100%"}
          align="center"
          justify="space-between"
          px={"md"}>
          <Group>
            <Burger hiddenFrom="sm" opened={opened} onClick={toggle} />
            <Title order={1} fz={"h2"}>
              App
            </Title>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Navbar>{links}</AppShell.Navbar>
    </AppShell>
  );
}

export default AppBase;
