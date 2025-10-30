import { useEffect, useMemo, useState } from 'react';
import { AdminNavbar } from './AdminNavbar';
import { AdminSidebar } from './AdminSidebar';
import { MetricCard } from './MetricCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, ShoppingCart, Bot, Users, AlertTriangle, Activity } from 'lucide-react';
import { fetchAiInsights, fetchMetricsOverview, fetchOrdersBreakdown, fetchRecentActivities, fetchRevenueSeries, fetchTopProducts, fetchUserGrowth, TimeRange } from '@/data/adminMock';
import { RevenueChart } from './charts/RevenueChart';
import { OrdersChart } from './charts/OrdersChart';
import { TopProducts } from './lists/TopProducts';
import AIInsights from "./lists/AIInsights";
import RecentActivity from "./lists/RecentActivity";
import UserGrowthChart from "./charts/UserGrowthChart";

export function Dashboard() {
  const [search, setSearch] = useState('');
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [metrics, setMetrics] = useState<any>(null);
  const [revenue, setRevenue] = useState<any[]>([]);
  const [orders, setOrders] = useState<any | null>(null);
  const [topProducts, setTopProducts] = useState<any[]>([]);
  const [aiSummary, setAiSummary] = useState<any | null>(null);
  const [userGrowth, setUserGrowth] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([
      fetchMetricsOverview(),
      fetchRevenueSeries(timeRange),
      fetchOrdersBreakdown(timeRange),
      fetchTopProducts(),
      fetchAiInsights(timeRange),
      fetchUserGrowth(timeRange),
      fetchRecentActivities(),
    ]).then(([m, rev, ord, top, ai, users, acts]) => {
      if (!mounted) return;
      setMetrics(m);
      setRevenue(rev);
      setOrders(ord);
      setTopProducts(top);
      setAiSummary(ai);
      setUserGrowth(users);
      setActivities(acts);
    }).finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [timeRange]);

  const sparklineData = useMemo(() => revenue.slice(-10), [revenue]);

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar onSearch={setSearch} />
      <div className="w-full pt-16 pl-0 md:pl-64 pr-4 md:pr-6 lg:pr-8">
        <AdminSidebar />
        <main className="py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">Dashboard Overview</h1>
            <div className="flex items-center gap-2">
              <Select value={timeRange} onValueChange={(v: TimeRange) => setTimeRange(v)}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Time Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="7d">Last 7 Days</SelectItem>
                  <SelectItem value="30d">Last 30 Days</SelectItem>
                  <SelectItem value="6m">Last 6 Months</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export</Button>
            </div>
          </div>

          {/* Summary Cards */}
          {loading || !metrics ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
              <MetricCard title="Total Revenue" value={metrics.totalRevenue} prefix="₹" icon={<DollarSign className="h-5 w-5" />} delta={metrics.growthPercentages.revenue} accent="primary" />
              <MetricCard title="Total Orders" value={metrics.totalOrders} icon={<ShoppingCart className="h-5 w-5" />} delta={metrics.growthPercentages.orders} accent="secondary" />
              <MetricCard title="AI Custom Orders" value={metrics.aiCustomOrders} icon={<Bot className="h-5 w-5" />} delta={metrics.growthPercentages.ai} accent="accent" />
              <MetricCard title="Active Users Today" value={metrics.activeUsersToday} icon={<Users className="h-5 w-5" />} delta={metrics.growthPercentages.users} />
              <MetricCard title="Low Stock Alerts" value={metrics.lowStockAlerts} icon={<AlertTriangle className="h-5 w-5" />} accent="destructive" />
              {metrics.liveVisitors !== undefined && (
                <MetricCard title="Live Visitors" value={metrics.liveVisitors} icon={<Activity className="h-5 w-5" />} />
              )}
            </div>
          )}

          {/* Sales & Orders Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? <Skeleton className="h-64 rounded-xl" /> : <RevenueChart data={revenue} />}
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Orders Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? <Skeleton className="h-64 rounded-xl" /> : <OrdersChart data={orders} />}
              </CardContent>
            </Card>
          </div>

          {/* Product & AI Insights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <TopProducts products={topProducts} loading={loading} />
            <AIInsights summary={aiSummary} loading={loading} />
          </div>

          {/* User & Activity Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? <Skeleton className="h-64 rounded-xl" /> : <UserGrowthChart data={userGrowth} />}
              </CardContent>
            </Card>
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="font-orbitron">Recent Activities</CardTitle>
                <Button variant="ghost" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Skeleton key={i} className="h-10 rounded-xl" />
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {activities.map((a) => (
                      <li key={a.id} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40">
                        <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-primary" />
                        <div>
                          <div className="font-rajdhani">{a.message}</div>
                          <div className="text-xs text-muted-foreground">{new Date(a.timestamp).toLocaleString()}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}


