import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { MetricCardType } from "@/data/adminMock";
import AnimatedCounter from "../AnimatedCounter"; // Assuming you have this
import { cn } from "@/lib/utils";

type MetricCardProps = {
  data: MetricCardType;
};

const MetricCard = ({ data }: MetricCardProps) => {
  const chartConfig = {
    value: {
      label: "Value",
      color: "hsl(var(--brand-neon-red))",
    },
  };

  return (
    <Card className="bg-background-secondary border-border-secondary relative overflow-hidden transition-all hover:border-brand-neon-red/50 hover:shadow-neon-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-text-secondary">
          {data.title}
        </CardTitle>
        <data.icon className={cn("h-5 w-5", data.iconColor)} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-orbitron font-bold">
          <AnimatedCounter
            from={0}
            to={parseFloat(data.value.replace(/[^0-9.]/g, ""))}
            prefix={data.value.startsWith("₹") ? "₹" : ""}
            postfix={data.value.endsWith("%") ? "%" : ""}
            formatter={(value) => {
              if (data.value.startsWith("₹")) {
                return `₹${Math.floor(value).toLocaleString("en-IN")}`;
              }
              if (Number.isInteger(parseFloat(data.value))) {
                 return Math.floor(value).toLocaleString("en-IN");
              }
              return value.toFixed(2);
            }}
          />
        </div>
        <p
          className={cn(
            "text-xs mt-1",
            data.changeType === "positive"
              ? "text-green-400"
              : "text-red-400"
          )}
        >
          {data.change} vs last month
        </p>
      </CardContent>
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-50">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data.sparklineData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  labelFormatter={(label) => `${label}`}
                  className="bg-background-secondary/80 backdrop-blur-sm border-border-secondary"
                />
              }
            />
            <Area
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default MetricCard;