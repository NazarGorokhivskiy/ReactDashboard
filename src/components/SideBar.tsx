import { ExpandLess, ExpandMore, Home as HomeIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ThemeColors from "../theme/colors";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Collapse from "@mui/material/Collapse";

type SideBarProps = {
  open?: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const DRAWER_WIDTH = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const LogoText = styled(Typography)(({ theme }) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar({
  open = false,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: SideBarProps) {
  const [dashboardCollapsed, setDashboardCollapsed] = useState(false);

  useEffect(() => {
    if (!open) {
      setDashboardCollapsed(false);
    }
  }, [open]);

  return (
    <CustomDrawer
      anchor="left"
      variant="permanent"
      open={open}
      onClose={onClose}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Box width={DRAWER_WIDTH} py={4} role="presentation" onKeyDown={onClose}>
        <LogoText
          mb={2}
          color={ThemeColors.BLUE_500}
          fontWeight={500}
          fontSize={24}
          px={1}
          sx={{
            marginLeft: open ? "2.25rem" : "0.25rem",
          }}
        >
          {open ? "Dashboard App" : "Dash"}
        </LogoText>
        <List>
          <ListItemButton
            onClick={() => setDashboardCollapsed((prev) => !prev)}
          >
            <ListItemIcon>
              <HomeIcon sx={{ color: ThemeColors.BLUE_500 }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {dashboardCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={dashboardCollapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Analytics", "Visits", "Widgets"].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </CustomDrawer>
  );
}
