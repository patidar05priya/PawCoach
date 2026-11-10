import { ActionIcon, ColorSwatch, Group, Menu, Text } from '@mantine/core';
import { useAppTheme } from '../themes/context';
import { THEMES } from '../themes/themes';

export default function ThemePicker() {
  const { theme, setThemeId } = useAppTheme();

  return (
    <Menu shadow="md" width={260} position="bottom-end">
      <Menu.Target>
        <ActionIcon variant="light" size="lg" radius="xl" aria-label="Change theme">
          🎨
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Pick your vibe</Menu.Label>
        {THEMES.map((t) => {
          const isActive = t.id === theme.id;
          return (
            <Menu.Item
              key={t.id}
              onClick={() => setThemeId(t.id)}
              bg={isActive ? 'var(--mantine-primary-color-light)' : undefined}
              leftSection={<Text fz="xl">{t.emoji.icon}</Text>}
              rightSection={
                <Group gap={4}>
                  <ColorSwatch color={t.colors.primary} size={14} />
                  <ColorSwatch color={t.colors.background} size={14} />
                  {isActive && <Text fz="sm">✓</Text>}
                </Group>
              }
            >
              <Text fw={700} fz="sm" ff={t.font}>
                {t.name}
              </Text>
              <Text fz="xs" c="dimmed">
                {t.description}
              </Text>
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
