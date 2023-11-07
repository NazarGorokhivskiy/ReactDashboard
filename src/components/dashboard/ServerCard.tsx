import { Stack, Typography } from "@mui/material";
import { Line, LineChart } from "recharts";
import ThemeColors from "../../theme/colors";
import AnalyticsCard from "./AnalyticsCard";
import data from "../../data/analytics.json";

type OverviewItemProps = {
  color?: string;
  item: {
    percentage: number;
    ghz: number;
    temp: number;
    chartData: Array<number>;
  };
};

const OverviewItem = ({ item, color = "red" }: OverviewItemProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="caption" fontWeight={500}>
        {item.percentage}% / {item.temp}°С / {item.ghz} Ghz
      </Typography>
      <LineChart
        width={150}
        height={30}
        data={item.chartData.map((i) => ({ pv: i }))}
      >
        <Line type="bump" dot={false} dataKey="pv" stroke={color} />
      </LineChart>
    </Stack>
  );
};

export default function ServerCard() {
  return (
    <AnalyticsCard title="Server Overview">
      <Stack gap={1.5} mt={2}>
        {data.serverOverview.map((item, i) => (
          <OverviewItem
            item={item}
            color={
              [
                ThemeColors.RED_500,
                ThemeColors.YELLOW_500,
                ThemeColors.BLUE_500,
              ][i % 3]
            }
          />
        ))}
      </Stack>
    </AnalyticsCard>
  );
}
