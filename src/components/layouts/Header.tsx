import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { ChevronLeft } from "@mui/icons-material";
import "./Header.css";

interface HeaderProps {
  handleLogout: () => void;
}

export const Header = ({ handleLogout }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutConfirmation = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box className="header-class">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h3"
          sx={{ alignSelf: "baseline", justifySelf: "baseline" }}
        >
          Dev Session Tracker
        </Typography>
        <IconButton onClick={logoutConfirmation}>
          <LogoutIcon sx={{color:'white'}}></LogoutIcon>
        </IconButton>
      </Box>
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "lightgrey",
            width: 240,
          },
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft></ChevronLeft>
        </IconButton>
        <Button startIcon={<DashboardIcon />}>Dashboard</Button>
        <Button startIcon={<DataObjectIcon />}>My Sessions</Button>
        <Button startIcon={<AddCircleIcon />}>Add Session</Button>
        <Button startIcon={<SettingsIcon />}>Settings</Button>
      </Drawer>
      <Dialog open={openDialog}>
        <DialogContent className="confirmation-dialog">
          <Typography variant="body1">
            Are you sure you want to Logout
          </Typography>
        </DialogContent>
        <DialogActions className="confirmation-dialog">
          <Button sx={{ backgroundColor: "green" }} onClick={handleLogout}>
            Yes
          </Button>
          <Button sx={{ backgroundColor: "red" }} onClick={handleDialogClose}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
