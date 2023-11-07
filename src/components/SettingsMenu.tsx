import {
  CalendarMonth as CalendarMonthIcon,
  Email as EmailIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import React from "react";

type SettingsItemProps = {
  icon: React.ReactNode;
  text: string;
};

const SettingsItem = ({ icon, text }: SettingsItemProps) => {
  return (
    <MenuItem
      sx={{
        padding: "0.75rem 1.5rem",
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </MenuItem>
  );
};

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuList>
          <SettingsItem icon={<PersonIcon />} text="My account" />
          <Divider orientation="horizontal" />
          <SettingsItem icon={<CalendarMonthIcon />} text="Calendar" />
          <SettingsItem icon={<EmailIcon />} text="In box" />
          <Divider orientation="horizontal" />
          <SettingsItem icon={<LogoutIcon />} text="Log out" />
        </MenuList>
      </Popover>
    </>
  );
}
