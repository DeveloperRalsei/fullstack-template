import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header, Navbar } from "../components";
import { useDisclosure } from "@mantine/hooks";

export const Route = createRootRoute({
    component: () => {
        const [navbarOpened, { toggle }] = useDisclosure()

        return (
            <AppShell header={{
                height: 60
            }} navbar={{
                breakpoint: "sm",
                width: 240,
                collapsed: {
                    desktop: false,
                    mobile: !navbarOpened
                }
            }}>
                <Header navbar={{
                    opened: navbarOpened,
                    toggle
                }} />
                <Navbar />
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>

        )
    }
})
