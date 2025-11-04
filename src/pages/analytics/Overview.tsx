import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, MessageSquare, Users, Clock, CheckCircle } from "lucide-react";

export default function Overview() {
  const metrics = [
    { title: "Total Messages", value: "45,231", change: "+20.1%", icon: MessageSquare, trend: "up" },
    { title: "Active Conversations", value: "2,350", change: "+15.3%", icon: Users, trend: "up" },
    { title: "Avg Response Time", value: "2.5m", change: "-12.5%", icon: Clock, trend: "down" },
    { title: "Resolution Rate", value: "94.2%", change: "+5.4%", icon: CheckCircle, trend: "up" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
        <p className="text-muted-foreground mt-2">Track your WhatsApp Business performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.trend === 'up' ? 'text-success' : 'text-primary'}`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Message Volume</CardTitle>
            <CardDescription>Messages sent and received over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <BarChart3 className="h-16 w-16 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Time Trends</CardTitle>
            <CardDescription>Average response time by hour</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              <TrendingUp className="h-16 w-16 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
