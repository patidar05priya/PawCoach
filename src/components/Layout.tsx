import { Box, Button, Container, Group, Text } from '@mantine/core';
import { motion } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router';
import { useAppTheme } from '../themes/context';
import ThemePicker from './ThemePicker';

const NAV_LINKS = [
  { to: '/', label: 'My Dog' },
  { to: '/training', label: 'Training' },
];

export default function Layout() {
  const { pathname } = useLocation();
  const { theme } = useAppTheme();

  return (
    <>
      <Box
        component="header"
        py="sm"
        bg="white"
        style={{
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <Container size="sm">
          <Group justify="space-between">
            <Text component={Link} to="/" fw={800} fz="xl" c={theme.colors.text} td="none">
              {theme.emoji.icon} PawCoach
            </Text>
            <Group gap="xs">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  size="sm"
                  radius="xl"
                  variant={pathname === link.to ? 'light' : 'subtle'}
                >
                  {link.label}
                </Button>
              ))}
              <ThemePicker />
            </Group>
          </Group>
        </Container>
      </Box>

      <Container size="sm" py="xl">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Outlet />
        </motion.div>
      </Container>
    </>
  );
}
