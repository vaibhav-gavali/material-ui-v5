import {
  Article,
  Home,
  Group,
  Storefront,
  Person,
  Settings,
  AccountBox,
  ModeNight,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import React from 'react';

const pages = [
  { primary: 'Homepage', href: 'home', icon: <Home /> },
  { primary: 'Pages', href: 'pages', icon: <Article /> },
  { primary: 'Groups', href: 'groups', icon: <Group /> },
  { primary: 'Marketplace', href: 'marketplace', icon: <Storefront /> },
  { primary: 'Friends', href: 'friends', icon: <Person /> },
  { primary: 'Settings', href: 'settings', icon: <Settings /> },
  { primary: 'Profile', href: 'profile', icon: <AccountBox /> },
];

const Sidebar = ({ setMode, mode }) => {
  return (
    <Box flex={1} padding={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'}>
        <List>
          {pages.map((page) => (
            <ListItem disablePadding>
              <ListItemButton component="a" href={`#${page.href}`}>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.primary} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a" href={`#switch`}>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                defaultChecked
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
