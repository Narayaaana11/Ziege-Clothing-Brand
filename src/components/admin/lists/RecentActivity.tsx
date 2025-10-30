import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { recentActivityData } from "@/data/adminMock";
  
  const RecentActivity = () => {
    return (
      <Card className="bg-background-secondary border-border-secondary shadow-neon-sm h-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-orbitron">Recent Activity</CardTitle>
          <Button variant="ghost" size="sm" className="text-brand-neon-red hover:text-brand-neon-red/80">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <ul className="space-y-5">
            {recentActivityData.map((activity) => (
              <li key={activity.id} className="flex items-start gap-4">
                <div className="p-2 bg-background-tertiary rounded-full border border-border-secondary">
                   <activity.icon className="h-5 w-5 text-text-secondary" />
                </div>
                <div className="flex-1 mt-1">
                  <p className="font-medium text-sm">{activity.text}</p>
                  <p className="text-xs text-text-secondary">
                    {activity.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  };
  
  export default RecentActivity;