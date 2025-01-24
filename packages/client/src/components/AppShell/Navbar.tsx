import { AppShellNavbar, NavLink } from "@mantine/core";
import { links } from '@/data/routing'
import { Link } from "@tanstack/react-router";

export const Navbar = () => (
    <AppShellNavbar>
        {links.map((l, i) =>
            <NavLink
                key={"navlink" + l.label + i}
                rightSection={l.icon}
                component={Link}
                to={l.path}
                label={l.label} />
        )}
    </AppShellNavbar>
)
