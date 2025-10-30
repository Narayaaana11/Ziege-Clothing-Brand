import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { userGrowthData } from "@/data/adminMock";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-3))", // Using blue for users
  },
};

const UserGrowthChart = () => {
  const newSignups =
    userGrowthData.length > 1
      ? userGrowthData[userGrowthData.length - 1].users! -
        userGrowthData[userGrowthData.length - 2].users!
      : 0;

  return (
    <Card className="bg-background-secondary border-border-secondary shadow-neon-sm h-full">
      <CardHeader>
        <CardTitle className="font-orbitron">User Growth</CardTitle>
        <CardDescription>
          Total registered users over time.
          <span className="text-green-400 font-medium ml-2">
            +{newSignups} new signups today!
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <LineChart
            data={userGrowthData}
            margin={{ left: 12, right: 12, top: 5, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-border-secondary/50"
            />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  className="bg-background-secondary/80 backdrop-blur-sm border-border-secondary"
                />
              }
            />
            <Line
              dataKey="users"
              type="monotone"
              stroke="var(--color-users)"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default UserGrowthChart;