import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Package,
  Cpu,
  AlertCircle,
  PackageCheck,
  PackageX,
  UserCheck,
  Truck,
} from "lucide-react";

// Types
export type MetricCardType = {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ElementType;
  iconColor: string;
  sparklineData: { name: string; value: number }[];
};

export type ChartDataType = {
  name: string;
  revenue?: number;
  orders?: number;
  users?: number;
  generated?: number;
};

export type OrderStatusType = {
  name: string;
  Pending: number;
  Processing: number;
  Shipped: number;
  Delivered: number;
  Canceled: number;
};

export type TopProductType = {
  id: string;
  name: string;
  imageUrl: string;
  revenue: number;
};

export type ActivityType = {
  id: string;
  icon: React.ElementType;
  text: string;
  timestamp: string;
};

// Data
export const metricCards: MetricCardType[] = [
  {
    id: "m1",
    title: "Total Revenue",
    value: "₹4,52,318",
    change: "+20.1%",
    changeType: "positive",
    icon: DollarSign,
    iconColor: "text-green-400",
    sparklineData: [
      { name: "Week 1", value: 3000 },
      { name: "Week 2", value: 4000 },
      { name: "Week 3", value: 2000 },
      { name: "Week 4", value: 2780 },
      { name: "Week 5", value: 1890 },
      { name: "Week 6", value: 2390 },
      { name: "Week 7", value: 3490 },
    ],
  },
  {
    id: "m2",
    title: "Total Orders",
    value: "12,100",
    change: "+12.5%",
    changeType: "positive",
    icon: Package,
    iconColor: "text-blue-400",
    sparklineData: [
      { name: "Week 1", value: 150 },
      { name: "Week 2", value: 170 },
      { name: "Week 3", value: 160 },
      { name: "Week 4", value: 190 },
      { name: "Week 5", value: 180 },
      { name: "Week 6", value: 210 },
      { name: "Week 7", value: 230 },
    ],
  },
  {
    id: "m3",
    title: "AI Custom Orders",
    value: "842",
    change: "+42.3%",
    changeType: "positive",
    icon: Cpu,
    iconColor: "text-brand-neon-red",
    sparklineData: [
      { name: "Week 1", value: 20 },
      { name: "Week 2", value: 25 },
      { name: "Week 3", value: 30 },
      { name: "Week 4", value: 28 },
      { name: "Week 5", value: 35 },
      { name: "Week 6", value: 40 },
      { name: "Week 7", value: 45 },
    ],
  },
  {
    id: "m4",
    title: "Low Stock Alerts",
    value: "15",
    change: "2 new",
    changeType: "negative",
    icon: AlertCircle,
    iconColor: "text-yellow-400",
    sparklineData: [
      { name: "Week 1", value: 5 },
      { name: "Week 2", value: 5 },
      { name: "Week 3", value: 6 },
      { name: "Week 4", value: 8 },
      { name: "Week 5", value: 7 },
      { name: "Week 6", value: 10 },
      { name: "Week 7", value: 15 },
    ],
  },
];

export const revenueData: { [key: string]: ChartDataType[] } = {
  monthly: [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 5000 },
    { name: "Apr", revenue: 4500 },
    { name: "May", revenue: 6000 },
    { name: "Jun", revenue: 5500 },
    { name: "Jul", revenue: 7000 },
  ],
  weekly: [
    { name: "Week 1", revenue: 1200 },
    { name: "Week 2", revenue: 1500 },
    { name: "Week 3", revenue: 1100 },
    { name: "Week 4", revenue: 1600 },
  ],
  daily: [
    { name: "Mon", revenue: 300 },
    { name: "Tue", revenue: 450 },
    { name: "Wed", revenue: 350 },
    { name: "Thu", revenue: 500 },
    { name: "Fri", revenue: 600 },
    { name: "Sat", revenue: 700 },
    { name: "Sun", revenue: 650 },
  ],
};

export const ordersData: OrderStatusType[] = [
  {
    name: "Week 1",
    Pending: 40,
    Processing: 30,
    Shipped: 20,
    Delivered: 50,
    Canceled: 5,
  },
  {
    name: "Week 2",
    Pending: 35,
    Processing: 25,
    Shipped: 30,
    Delivered: 60,
    Canceled: 8,
  },
  {
    name: "Week 3",
    Pending: 45,
    Processing: 35,
    Shipped: 25,
    Delivered: 55,
    Canceled: 10,
  },
  {
    name: "Week 4",
    Pending: 50,
    Processing: 40,
    Shipped: 30,
    Delivered: 65,
    Canceled: 12,
  },
];

export const userGrowthData: ChartDataType[] = [
  { name: "Jan", users: 200 },
  { name: "Feb", users: 350 },
  { name: "Mar", users: 450 },
  { name: "Apr", users: 500 },
  { name: "May", users: 650 },
  { name: "Jun", users: 800 },
];

export const aiInsightsData = {
  totalGenerated: 12450,
  totalPurchased: 842,
  conversionRate: "6.76%",
  trendData: [
    { name: "Jan", generated: 1200 },
    { name: "Feb", generated: 1800 },
    { name: "Mar", generated: 2500 },
    { name: "Apr", generated: 2300 },
  ],
};

export const topProductsData: TopProductType[] = [
  {
    id: "p1",
    name: "Akuma 'Oni' Hoodie",
    imageUrl: "/placeholder.svg", // Replace with actual path
    revenue: 75000,
  },
  {
    id: "p2",
    name: "Cyber-Glitch Tee",
    imageUrl: "/placeholder.svg",
    revenue: 62000,
  },
  {
    id: "p3",
    name: "Neon-Red Tech Cargos",
    imageUrl: "/placeholder.svg",
    revenue: 51000,
  },
  {
    id: "p4",
    name: "Akuma Kanji Cap",
    imageUrl: "/placeholder.svg",
    revenue: 35000,
  },
  {
    id: "p5",
    name: "'Yokai' Bomber Jacket",
    imageUrl: "/placeholder.svg",
    revenue: 28000,
  },
];

export const recentActivityData: ActivityType[] = [
  {
    id: "a1",
    icon: PackageCheck,
    text: "Order #1043 shipped to Hyderabad",
    timestamp: "2 min ago",
  },
  {
    id: "a2",
    icon: UserCheck,
    text: "New user @rahul joined",
    timestamp: "10 min ago",
  },
  {
    id: "a3",
    icon: Cpu,
    text: "New AI design 'Glitch Oni' purchased",
    timestamp: "1 hour ago",
  },
  {
    id: "a4",
    icon: PackageX,
    text: "Order #1039 canceled by user",
    timestamp: "2 hours ago",
  },
  {
    id: "a5",
    icon: Truck,
    text: "Order #1041 is out for delivery",
    timestamp: "3 hours ago",
  },
  {
    id: "a6",
    icon: UserCheck,
    text: "New user @priya signed up",
    timestamp: "5 hours ago",
  },
];