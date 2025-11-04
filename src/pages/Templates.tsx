import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MessageSquare, CheckCircle, Clock, XCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const templates = [
  {
    name: "Welcome Message",
    category: "Greeting",
    status: "approved",
    language: "English",
    content: "Hi {{1}}, Welcome to Pixpoc! We're excited to have you with us. How can we help you today?",
  },
  {
    name: "Order Confirmation",
    category: "Transactional",
    status: "approved",
    language: "English",
    content: "Hello {{1}}, Your order #{{2}} has been confirmed and will be delivered by {{3}}. Thank you for shopping with us!",
  },
  {
    name: "Appointment Reminder",
    category: "Reminder",
    status: "pending",
    language: "English",
    content: "Hi {{1}}, This is a reminder for your appointment on {{2}} at {{3}}. Reply CONFIRM to confirm or RESCHEDULE to change.",
  },
  {
    name: "Payment Received",
    category: "Transactional",
    status: "approved",
    language: "English",
    content: "Thank you {{1}}! We've received your payment of {{2}}. Your transaction ID is {{3}}.",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return <CheckCircle className="h-4 w-4 text-success" />;
    case "pending":
      return <Clock className="h-4 w-4 text-warning" />;
    case "rejected":
      return <XCircle className="h-4 w-4 text-destructive" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  const variants: Record<string, string> = {
    approved: "bg-success/10 text-success",
    pending: "bg-warning/10 text-warning",
    rejected: "bg-destructive/10 text-destructive",
  };

  return (
    <Badge variant="secondary" className={variants[status] || ""}>
      {status}
    </Badge>
  );
};

export default function Templates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Message Templates</h1>
          <p className="text-muted-foreground mt-1">Create and manage WhatsApp message templates</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search templates..." className="pl-10" />
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-4">
            {templates.map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{template.category}</Badge>
                          <span>•</span>
                          <span>{template.language}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(template.status)}
                      {getStatusBadge(template.status)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm">{template.content}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button variant="outline" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approved" className="mt-6">
          <div className="grid gap-4">
            {templates
              .filter((t) => t.status === "approved")
              .map((template, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{template.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{template.content}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="mt-6">
          <Card className="p-12">
            <div className="text-center space-y-2">
              <Clock className="h-12 w-12 text-muted-foreground mx-auto" />
              <h3 className="text-xl font-semibold">No Pending Templates</h3>
              <p className="text-muted-foreground">All your templates have been reviewed</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <Card className="p-12">
            <div className="text-center space-y-2">
              <XCircle className="h-12 w-12 text-muted-foreground mx-auto" />
              <h3 className="text-xl font-semibold">No Rejected Templates</h3>
              <p className="text-muted-foreground">You don't have any rejected templates</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
