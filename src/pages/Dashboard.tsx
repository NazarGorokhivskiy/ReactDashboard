import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThemeColors from "../theme/colors";
import Stack from "@mui/material/Stack";
import VisitsCard from "../components/dashboard/VisitsCard";
import RevenueCard from "../components/dashboard/RevenueCard";
import PerformanceCard from "../components/dashboard/PerformanceCard";
import ServerCard from "../components/dashboard/ServerCard";
import DailyLineChart from "../components/dashboard/DailyLineChart";
import CustomBreadcrumbs from "../components/dashboard/CustomBreadcrumbs";
import StatisticCard from "../components/dashboard/StatisticCard";
import statistics from "../data/statistics.json";
import SupportRequestsTable from "../components/dashboard/SupportRequestsTable";

export default function Dashboard() {
  return (
    <Box p={4} bgcolor={ThemeColors.MAIN_BG}>
      <CustomBreadcrumbs />
      <Typography variant="h4" component="h4" my={3}>
        Analytics
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={4} justifyContent="center">
        <VisitsCard />
        <RevenueCard />
        <PerformanceCard />
        <ServerCard />
      </Stack>
      <Box mt={4}>
        <DailyLineChart />
      </Box>
      <Stack direction="row" gap={4} mt={4} flexWrap="wrap">
        {statistics.map((item, i) => (
          <StatisticCard
            title={item.name}
            color={
              [
                ThemeColors.BLUE_500,
                ThemeColors.RED_500,
                ThemeColors.PURPLE_500,
              ][i % 3]
            }
            value={item.value}
            registrations={item.registrations}
            bounceRate={item.bounceRate}
          />
        ))}
      </Stack>
      <Box mt={4}>
        <SupportRequestsTable />
      </Box>
    </Box>
  );
}
