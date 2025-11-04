import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Clock, CheckCircle2, UserCheck } from "lucide-react";

export default function ConversationsAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Conversations Effectiveness</h1>
        <p className="text-muted-foreground mt-2">Measure conversation quality and outcomes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,452</div>
            <p className="text-xs text-success">+12.5% this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">First Response</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8m</div>
            <p className="text-xs text-success">-25% faster</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.4%</div>
            <p className="text-xs text-success">+3.2% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-success">+0.3 points</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Conversation Sources</CardTitle>
            <CardDescription>Where conversations are initiated</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { source: "WhatsApp Widget", count: 1420, percentage: 41 },
                { source: "Direct Messages", count: 980, percentage: 28 },
                { source: "Campaign Responses", count: 650, percentage: 19 },
                { source: "Catalog Inquiries", count: 402, percentage: 12 },
              ].map((item) => (
                <div key={item.source} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.source}</p>
                    <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-semibold">{item.count}</p>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resolution Times</CardTitle>
            <CardDescription>Time to resolve conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "< 5 minutes", count: 1580, percentage: 46 },
                { time: "5-15 minutes", count: 1020, percentage: 30 },
                { time: "15-30 minutes", count: 520, percentage: 15 },
                { time: "> 30 minutes", count: 332, percentage: 9 },
              ].map((item) => (
                <div key={item.time} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium">{item.time}</p>
                    <div className="mt-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-success" style={{ width: `${item.percentage}%` }} />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="font-semibold">{item.count}</p>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
