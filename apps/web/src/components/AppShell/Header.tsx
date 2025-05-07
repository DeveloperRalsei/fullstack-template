import { AppShellHeader, Burger, Group, Text } from "@mantine/core";

export const Header = ({ navbar }: { navbar: { opened: boolean, toggle: () => void } }) => (
    <AppShellHeader>
        <Group p="sm" w="100%" h="100%" justify="space-between" align="center" >
            <Group>
                <Burger opened={navbar.opened} onClick={navbar.toggle} hiddenFrom="sm" />
                <Text fz={"h2"}>
                    App
                </Text>
            </Group>
        </Group>
    </AppShellHeader>
)
