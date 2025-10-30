import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { aiInsightsData } from "@/data/adminMock";
import { ArrowUpRight, Cpu, ShoppingBag, Zap } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import AnimatedCounter from "@/components/AnimatedCounter";

const chartConfig = {
  generated: {
    label: "Generated",
    color: "hsl(var(--brand-neon-red))",
  },
};

const AIInsights = () => {
  return (
    <Card className="bg-background-secondary border-border-secondary shadow-neon-sm h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-orbitron">AI Custom Insights</CardTitle>
        <Button variant="ghost" size="sm" className="text-brand-neon-red hover:text-brand-neon-red/80">
          View Gallery
          <ArrowUpRight className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border-secondary">
            <Cpu className="h-5 w-5 mb-1 text-brand-neon-red" />
            <p className="text-xs text-text-secondary">Generated</p>
            <p className="text-lg font-bold font-orbitron">
              <AnimatedCounter from={0} to={aiInsightsData.totalGenerated} formatter={(val) => Math.floor(val).toLocaleString("en-IN")} />
            </p>
          </div>
          <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border-secondary">
            <ShoppingBag className="h-5 w-5 mb-1 text-green-400" />
            <p className="text-xs text-text-secondary">Purchased</p>
            <p className="text-lg font-bold font-orbitron">
              <AnimatedCounter from={0} to={aiInsightsData.totalPurchased} formatter={(val) => Math.floor(val).toLocaleString("en-IN")} />
            </p>
          </div>
          <div className="flex flex-col items-center p-3 bg-background rounded-lg border border-border-secondary">
            <Zap className="h-5 w-5 mb-1 text-blue-400" />
            <p className="text-xs text-text-secondary">Conv. Rate</p>
            <p className="text-lg font-bold font-orbitron">
              {aiInsightsData.conversionRate}
            </p>
          </div>
        </div>

        {/* Trend Graph */}
        <div className="flex-1 h-32">
          <p className="text-sm font-medium text-center mb-2">
            Generation Trend
          </p>
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={aiInsightsData.trendData}
                margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorGenerated" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-generated)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-generated)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      indicator="line"
                      className="bg-background-secondary/80 backdrop-blur-sm border-border-secondary"
                    />
                  }
                />
                <Area
                  dataKey="generated"
                  type="monotone"
                  stroke="var(--color-generated)"
                  fillOpacity={1}
                  fill="url(#colorGenerated)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsights;