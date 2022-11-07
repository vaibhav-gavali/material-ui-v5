import { ImportantDevices, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import profile from '../assets/vaibhav.jpg';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          VAIBHAV DEV
        </Typography>
        <ImportantDevices sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Vaibhav Dev"
            src={profile}
            onClick={(e) => setOpenNavbar(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpenNavbar(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Vaibhav Dev"
            src={profile}
          />
          <Typography variant="span">Vaibhav</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openNavbar}
        onClose={(e) => setOpenNavbar(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
