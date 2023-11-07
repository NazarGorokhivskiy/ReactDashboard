import AnalyticsCard from "./AnalyticsCard";
import Stack from "@mui/material/Stack";
import { FiberManualRecord } from "@mui/icons-material";
import {
  Box,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import ThemeColors from "../../theme/colors";
import data from "../../data/analytics.json";

type LegendProps = {
  title: string;
  color?: string;
};

type PerformanceItemProps = {
  title: string;
  data: {
    this: number;
    last: number;
  };
};

const StyledLinearProgress = styled(LinearProgress)<{ customColor: string }>(
  ({ customColor = "red", theme }) => ({
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: customColor,
    },
  })
);

const Legend = ({ title, color = "gray" }: LegendProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={0.5}>
      <FiberManualRecord
        sx={{
          width: 10,
          height: 10,
          color: color,
        }}
      />
      <Typography variant="caption">{title}</Typography>
    </Stack>
  );
};

const PerformanceItem = ({ title, data }: PerformanceItemProps) => (
  <Box>
    <Box mb={1}>
      <Typography variant="caption">{title}</Typography>
    </Box>
    <Stack gap={0.5}>
      <StyledLinearProgress
        value={data.last}
        variant="determinate"
        customColor={ThemeColors.BLUE_500}
      />
      <StyledLinearProgress
        value={data.this}
        variant="determinate"
        customColor={ThemeColors.RED_500}
      />
    </Stack>
  </Box>
);

export default function PerformanceCard() {
  return (
    <AnalyticsCard title="App Performance">
      <Stack gap={1}>
        <Stack direction="row" mt={1} mb={2} gap={2}>
          <Legend color={ThemeColors.RED_500} title="This Period" />
          <Legend color={ThemeColors.BLUE_500} title="Last Period" />
        </Stack>
        {data.appPerformance.map((item) => (
          <PerformanceItem title={item.name} data={item} />
        ))}
      </Stack>
    </AnalyticsCard>
  );
}
