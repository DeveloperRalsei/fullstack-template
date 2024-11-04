import { AppShell, Burger, Group, NavLink, Title } from "@mantine/core";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

function AppBase() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Meow", href: "/meow" },
  ].map((link) => (
    <NavLink
      key={link.href}
      component={Link}
      to={link.href}
      label={link.label}
      rightSection={">"}
      active={link.href === location.pathname}
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
