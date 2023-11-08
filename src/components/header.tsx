import {
  Close as CloseIcon,
  CompareArrows as CompareArrowsIcon,
  Dehaze as DehazeIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Stack,
} from "@mui/material";
import avatar from "../assets/avatar.png";
import SettingsMenu from "./SettingsMenu";

type HeaderProps = {
  toggleSidebar: () => void;
};

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <Paper
      sx={{
        boxShadow:
          "0 15px 20px -20px rgba(115,162,208,0.1),0 0 15px rgba(115,162,208,0.06)",
      }}
    >
      <Stack direction="row" p={1.5} justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <IconButton onClick={toggleSidebar}>
            <DehazeIcon />
          </IconButton>
          <IconButton>
            <CompareArrowsIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
          <Box ml={8}>
            <Input
              placeholder="Search Dashboard"
              disableUnderline
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <Avatar alt="Avatar" src={avatar} />
          <Badge badgeContent={4} color="error">
            <Button variant="text">Admin</Button>
          </Badge>
          <SettingsMenu />
        </Stack>
      </Stack>
    </Paper>
  );
}
