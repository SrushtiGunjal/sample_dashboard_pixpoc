import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Send, Clock, CheckCircle2, XCircle } from "lucide-react";

export default function Campaigns() {
  const campaigns = [
    { 
      name: "Summer Sale 2025", 
      status: "completed", 
      sent: 15420, 
      delivered: 15380, 
      read: 12450, 
      date: "2025-09-28" 
    },
    { 
      name: "Product Launch", 
      status: "active", 
      sent: 8500, 
      delivered: 8470, 
      read: 6800, 
      date: "2025-10-01" 
    },
    { 
      name: "Welcome Series", 
      status: "scheduled", 
      sent: 0, 
      delivered: 0, 
      read: 0, 
      date: "2025-10-05" 
    },
    { 
      name: "Flash Sale Alert", 
      status: "draft", 
      sent: 0, 
      delivered: 0, 
      read: 0, 
      date: "2025-10-03" 
    },
  ];

  const statusConfig = {
    completed: { label: "Completed", variant: "default" as const, icon: CheckCircle2 },
    active: { label: "Active", variant: "default" as const, icon: Send },
    scheduled: { label: "Scheduled", variant: "secondary" as const, icon: Clock },
    draft: { label: "Draft", variant: "outline" as const, icon: XCircle },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-muted-foreground mt-2">Create and manage WhatsApp broadcast campaigns</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Campaign
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search campaigns..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {campaigns.map((campaign) => {
              const config = statusConfig[campaign.status as keyof typeof statusConfig];
              const StatusIcon = config.icon;
              
              return (
                <div key={campaign.name} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{campaign.name}</h3>
                      <Badge variant={config.variant} className="gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {config.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{campaign.date}</p>
                  </div>
                  
                  {campaign.status !== 'draft' && campaign.status !== 'scheduled' && (
                    <div className="grid grid-cols-3 gap-4 text-sm">
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
                        <p className="font-semibold text-success">{campaign.read.toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
