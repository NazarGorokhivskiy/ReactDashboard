import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CallMade as CallMadeIcon } from "@mui/icons-material";
import ThemeColors from "../../theme/colors";
import Box from "@mui/material/Box";
import data from "../../data/analytics.json";
import {
  formatNumberPrefix,
  formatPercentage,
  formatToNumberWithComas,
} from "../../utils/formatters";

type MetaItemProps = { text: string; value: string };

const MetaItem = ({ text, value }: MetaItemProps) => (
  <Box>
    <Typography variant="body1">{value}</Typography>
    <Typography variant="body2" color={ThemeColors.GRAY_700}>
      {text}
    </Typography>
  </Box>
);

export default function VisitsCard() {
  return (
    <AnalyticsCard title="Visits Today">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">
          {formatToNumberWithComas(data.visitsToday.visits)}
        </Typography>
        <CallMadeIcon
          sx={{
            color: ThemeColors.GREEN,
          }}
          fontSize="large"
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between" mt={2}>
        <MetaItem
          text="Logins"
          value={formatNumberPrefix(data.visitsToday.logins)}
        />
        <MetaItem
          text="Sign Out"
          value={formatPercentage(data.visitsToday.signOut)}
        />
        <MetaItem text="Rate" value={formatPercentage(data.visitsToday.rate)} />
      </Stack>
    </AnalyticsCard>
  );
}
