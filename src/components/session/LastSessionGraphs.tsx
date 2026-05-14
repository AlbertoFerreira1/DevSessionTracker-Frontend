import { Card, CardContent, Typography } from "@mui/material";
import type { SessionData } from "../../models/Sessions";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560"];

export const LastSessionGraphs = ({ data }: { data: SessionData[] | null }) => {
  const chartData = Object.entries(
    (data ?? [])
      .map((item) => item.topic)
      .filter((topic): topic is string => Boolean(topic))
      .reduce<Record<string, number>>((acc, topic) => {
        acc[topic] = (acc[topic] ?? 0) + 1;
        return acc;
      }, {})
  ).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          In this month you studied
        </Typography>

        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};