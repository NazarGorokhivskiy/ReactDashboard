import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ThemeColors from "../../theme/colors";
import data from "../../data/daily-line.json";
import Stack from "@mui/material/Stack";
import { Circle } from "@mui/icons-material";

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <Stack direction="row" justifyContent="center" gap={2} paddingBottom={2}>
      {
        // @ts-ignore
        payload.map((item) => (
          <Stack direction="row" alignItems="center" gap={1}>
            <Circle sx={{ width: 14, color: item.color }} />
            <Typography
              fontSize="0.875rem"
              fontWeight={700}
              textTransform="capitalize"
            >
              {item.value}
            </Typography>
          </Stack>
        ))
      }
    </Stack>
  );
};

export default function DailyLineChart() {
  return (
    <Paper>
      <Box width="100%" overflow="auto">
        <Box p={2} minWidth={700}>
          <Box mb={4}>
            <Typography variant="h6" fontWeight={500}>
              Daily Line Chart
            </Typography>
          </Box>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" content={renderLegend} />
              <Area
                type="monotone"
                dataKey="lightBlue"
                stroke={ThemeColors.BLUE_500}
                fill={ThemeColors.BLUE_200}
                dot={false}
                strokeWidth={0}
              />
              <Line
                type="monotone"
                dataKey="rns"
                stroke={ThemeColors.RED_500}
                dot={false}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="signApp"
                stroke={ThemeColors.YELLOW_500}
                dot={false}
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Paper>
  );
}
