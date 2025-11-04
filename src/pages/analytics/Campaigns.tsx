import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Eye, MousePointer, TrendingUp } from "lucide-react";

export default function CampaignAnalytics() {
  const campaigns = [
    { name: "Summer Sale 2025", sent: 15420, delivered: 15380, read: 12450, clicked: 3240, conversionRate: "26.0%" },
    { name: "Product Launch", sent: 8500, delivered: 8470, read: 6800, clicked: 1890, conversionRate: "27.8%" },
    { name: "Welcome Series", sent: 5200, delivered: 5190, read: 4100, clicked: 980, conversionRate: "23.9%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Campaign Performance</h1>
        <p className="text-muted-foreground mt-2">Analyze your WhatsApp campaign results</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">29,120</div>
            <p className="text-xs text-success">+18% from last period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.7%</div>
            <p className="text-xs text-success">+0.3% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Read Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80.8%</div>
            <p className="text-xs text-success">+5.2% increase</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Click Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25.9%</div>
            <p className="text-xs text-success">+2.1% growth</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Breakdown</CardTitle>
          <CardDescription>Performance metrics by campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.name} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3">{campaign.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Sent</p>
                    <p className="font-semibold">{campaign.sent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Delivered</p>
                    <p className="font-semibold">{campaign.delivered.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Read</p>
                    <p className="font-semibold">{campaign.read.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Clicked</p>
                    <p className="font-semibold">{campaign.clicked.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conv. Rate</p>
                    <p className="font-semibold text-success">{campaign.conversionRate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
