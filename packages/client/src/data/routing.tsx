import { IconCat } from "@tabler/icons-react";
import { navLink } from "../types";
import { IconHome } from "@tabler/icons-react";

export const links: (navLink & { icon?: React.ReactNode })[] = [
    {
        label: "Home",
        path: "/",
        icon: <IconHome size={20} />
    },
    {
        label: "Meow :3",
        path: "/mrr",
        icon: <IconCat size={20} />
    }
]
