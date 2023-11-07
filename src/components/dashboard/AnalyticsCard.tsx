import { Close } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

type AnalyticsCardProps = {
  title: string;
  children?: React.ReactNode;
};

export default function AnalyticsCard({ title, children }: AnalyticsCardProps) {
  return (
    <Card sx={{ flex: 1, minWidth: 300, maxWidth: 345 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Typography gutterBottom variant="h6" component="h5">
            {title}
          </Typography>
          <IconButton>
            <Close fontSize="small" />
          </IconButton>
        </Stack>
        <Box py={1} pr={1}>{children}</Box>
      </CardContent>
    </Card>
  );
}
