import { NavLink } from "react-router"
import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AuthForm from '../features/auth/AuthForm';
const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);
  return (
    <>
      <nav style={{ display: "flex", position: "fixed", top: "0px", right: "0px", left: "0px", width: "100vw", backgroundColor: "gray", justifyContent: "space-around" }}>
        <div>
          <NavLink to='/'>Home Page</NavLink>
        </div>
        <div>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div>
          <Button onClick={handleOpenLogin}>Login</Button>
        </div>
      </nav>

      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseLogin}
          >
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
