import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import React from "react";

export default function CustomBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        YOU ARE HERE
      </Link>
      <Link underline="hover" color="inherit" href="/">
        App
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Main
      </Link>
      <Typography color="text.primary" fontWeight={500}>
        Analytics
      </Typography>
    </Breadcrumbs>
  );
}
