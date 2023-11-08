import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import SideBar from "./components/SideBar";
import React from "react";
import Box from "@mui/material/Box";

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarHovered, setSidebarHovered] = React.useState(false);

  return (
    <Stack direction="row">
      <SideBar
        open={sidebarOpen || sidebarHovered}
        onClose={() => setSidebarOpen(false)}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <Dashboard />
      </Box>
    </Stack>
  );
}

export default App;
