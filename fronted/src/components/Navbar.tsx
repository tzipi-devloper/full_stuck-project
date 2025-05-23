import { NavLink } from 'react-router';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

import AuthForm from '../features/auth/AuthForm';
import { selectCurrentUser } from '../features/auth/authUserSlice';
import UserMenu from '../components/UserMenu';

const Navbar = () => {
  const user = useSelector(selectCurrentUser);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar sx={{ px: 3, display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              component={NavLink}
              to="/"
              color="inherit"
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              Home Page
            </Button>
            <Button
              component={NavLink}
              to="/about"
              color="inherit"
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              About
            </Button>
          </Box>
          {!user ? (
            <Button
              color="inherit"
              onClick={() => setOpenLogin(true)}
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              Login
            </Button>
          ) : (
            <UserMenu />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Dialog open={openLogin} onClose={() => setOpenLogin(false)}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton aria-label="close" onClick={() => setOpenLogin(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <AuthForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
