import { useState } from 'react';
import { Typography, Divider, Button,  DialogTitle } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useSelector, useDispatch } from 'react-redux';
import { removeCookie } from 'typescript-cookie';
import { selectCurrentUser, clearUser } from '../features/auth/authUserSlice';
import { useDeleteUserMutation } from '../features/auth/authAPI';

import { 
  StyledAvatar, 
  StyledMenu, 
  StyledMenuItem, 
  StyledDialog, 
  StyledDialogActions, 
  StyledDialogTitleBox,
} from './styled/UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const [deleteUser] = useDeleteUserMutation();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  if (!user) return null;

  const firstLetter = user.name.charAt(0).toUpperCase();

  const handleAvatarClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    removeCookie('token');
    dispatch(clearUser());
    handleMenuClose();
  };

  const handleDeleteAccount = () => {
    setOpenDeleteDialog(true);
    handleMenuClose();
  };

  const confirmDeleteAccount = async () => {
    try {
      await deleteUser(user._id).unwrap();
      removeCookie('token');
      dispatch(clearUser());
    } catch (err) {
      console.error(err);
    }
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <StyledAvatar onClick={handleAvatarClick}>
        {firstLetter}
      </StyledAvatar>

      <StyledMenu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <StyledMenuItem disabled>
          <Typography variant="subtitle2">שלום, {user.name}</Typography>
        </StyledMenuItem>
        <Divider sx={{ my: 1 }} />
        <StyledMenuItem onClick={handleLogout}>
          <Typography variant="body2">התנתק</Typography>
        </StyledMenuItem>
        <Divider sx={{ my: 1 }} />
        <StyledMenuItem onClick={handleDeleteAccount} sx={{ color: 'error.main' }}>
          <Typography variant="body2">מחק חשבון</Typography>
        </StyledMenuItem>
      </StyledMenu>
      <StyledDialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>
          <StyledDialogTitleBox>
            <WarningAmberIcon color="warning" />
            <Typography variant="h6" component="span">
              אישור מחיקת חשבון
            </Typography>
          </StyledDialogTitleBox>
        </DialogTitle>
        <StyledDialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="primary" variant="outlined">
            בטל
          </Button>
          <Button onClick={confirmDeleteAccount} color="error" variant="contained">
            מחק חשבון
          </Button>
        </StyledDialogActions>
      </StyledDialog>
    </>
  );
};

export default UserMenu;
