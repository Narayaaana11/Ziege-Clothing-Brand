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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { ordersData } from "@/data/adminMock";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  Pending: { label: "Pending", color: "hsl(var(--chart-1))" },
  Processing: { label: "Processing", color: "hsl(var(--chart-2))" },
  Shipped: { label: "Shipped", color: "hsl(var(--chart-3))" },
  Delivered: { label: "Delivered", color: "hsl(var(--chart-4))" },
  Canceled: { label: "Canceled", color: "hsl(var(--chart-5))" },
};

const OrdersChart = () => {
  return (
    <Card className="bg-background-secondary border-border-secondary shadow-neon-sm">
      <CardHeader>
        <CardTitle className="font-orbitron">Orders Overview</CardTitle>
        <CardDescription>Weekly order status breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={ordersData} margin={{ top: 5, bottom: 5 }}>
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
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="Pending" fill="var(--color-Pending)" radius={4} />
            <Bar
              dataKey="Processing"
              fill="var(--color-Processing)"
              radius={4}
            />
            <Bar dataKey="Shipped" fill="var(--color-Shipped)" radius={4} />
            <Bar dataKey="Delivered" fill="var(--color-Delivered)" radius={4} />
            <Bar dataKey="Canceled" fill="var(--color-Canceled)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default OrdersChart;