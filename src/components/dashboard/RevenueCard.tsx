import AnalyticsCard from "./AnalyticsCard";
import ThemeColors from "../../theme/colors";
import Box from "@mui/material/Box";
import { PieChart, Pie, Cell, Legend } from "recharts";
import data from '../../data/analytics.json'

const COLORS = [
  ThemeColors.RED_500,
  ThemeColors.YELLOW_500,
  ThemeColors.BLUE_500,
];

export default function RevenueCard() {
  return (
    <AnalyticsCard title="Revenue Breakdown">
      <Box>
        <PieChart width={300} height={150}>
          <Pie
            data={data.revenueBreakdown}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={60}
          >
            {data.revenueBreakdown.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </Box>
    </AnalyticsCard>
  );
}
