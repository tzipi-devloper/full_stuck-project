import styled from 'styled-components';
import {
  Avatar,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  Box,
} from '@mui/material';
export const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;
  width: 36px;
  height: 36px;
`;
export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    min-width: 200px;
    padding: 8px;
  }
`;
export const StyledMenuItem = styled(MenuItem)`
  .MuiTypography-root {
    font-size: 14px;
  }
`;
export const StyledDialog = styled(Dialog)`
  .MuiDialogTitle-root {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
export const StyledDialogActions = styled(DialogActions)`
  button {
    &.MuiButton-outlined {
      color: ${({ theme }) => theme.palette.primary.main};
    }
    &.MuiButton-contained {
      background-color: ${({ theme }) => theme.palette.error.main};
    }
  }
`;
export const StyledDialogTitleBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;
