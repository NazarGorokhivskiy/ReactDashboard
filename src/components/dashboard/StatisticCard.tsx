import { CallMade, Circle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ThemeColors from "../../theme/colors";
import {
  formatNumberPrefix,
  formatPercentage,
  formatToNumberWithComas,
} from "../../utils/formatters";

type StatisticCardProps = {
  title: string;
  color?: string;
  value: number;
  registrations: number;
  bounceRate: number;
};

const MetaItem = ({ value = "", title = "", isPositive = true }) => (
  <Box flex={1}>
    <Stack direction="row" gap={1} alignItems="center">
      <Typography fontSize="1rem">{value}</Typography>
      <CallMade
        sx={{
          color: isPositive ? ThemeColors.GREEN : ThemeColors.RED_500,
          transform: isPositive ? "none" : "rotate(90deg)",
        }}
        fontSize="small"
      />
    </Stack>
    <Typography fontSize="0.75rem" color={ThemeColors.GRAY_700} mt={1.5}>
      {title}
    </Typography>
  </Box>
);

export default function StatisticCard({
  title,
  color = "gray",
  value,
  registrations,
  bounceRate,
}: StatisticCardProps) {
  const [selectedTime, setSelectedTime] = React.useState("daily");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedTime(event.target.value as string);
  };

  return (
    <Paper sx={{ flex: 1 }}>
      <Box p={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Circle sx={{ color, width: 14 }} />
          <Typography fontSize="1.25rem" variant="h6">
            Statistic {title}
          </Typography>
          <Select
            value={selectedTime}
            onChange={handleChange}
            sx={{
              marginLeft: "auto",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
          >
            <MenuItem value={"daily"}>Daily</MenuItem>
            <MenuItem value={"weekly"}>Weekly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
          </Select>
        </Stack>
        <Typography fontSize="1.375rem" fontWeight={700}>
          {formatToNumberWithComas(value)}
        </Typography>
      </Box>
      <Divider orientation="horizontal" />
      <Stack direction="row" p={2}>
        <MetaItem
          title="Registrations"
          value={formatNumberPrefix(registrations)}
          isPositive={registrations > 0}
        />
        <MetaItem
          title="Bounce Rate"
          value={formatPercentage(bounceRate)}
          isPositive={bounceRate > 0}
        />
      </Stack>
    </Paper>
  );
}
