import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function NotificationSettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Notification Settings</h1>
        <p className="text-muted-foreground mt-1">
          Control what notifications you receive and how you receive them across all channels.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity & Conversations</CardTitle>
          <CardDescription>Get notified about your conversations and engagements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Assigned to you</Label>
              <p className="text-sm text-muted-foreground">When you get assigned</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Unassigned from you</Label>
              <p className="text-sm text-muted-foreground">When you get unassigned from a conversation</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Mentions</Label>
              <p className="text-sm text-muted-foreground">When someone mentions you in a conversation</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>New Messages</Label>
              <p className="text-sm text-muted-foreground">When you receive new messages in assigned conversations</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Marketing & Promotions</CardTitle>
          <CardDescription>Get notified about promotions, offers, and newsletters</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">No marketing preferences available yet</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Sounds</CardTitle>
          <CardDescription>Configure sound and volume for notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Enable notification sounds</Label>
            <Switch />
          </div>
          <p className="text-sm text-muted-foreground">Play sounds when receiving notifications</p>
        </CardContent>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Email security and billing notifications will always be delivered regardless of these settings</li>
            <li>WhatsApp notifications require you to allow browser notifications to be enabled in your account settings</li>
            <li>In-app notifications are always enabled</li>
            <li>Marketing and System notifications will be sent through the meta-managed WhatsApp automatically</li>
            <li>You can update these preferences at any time in your account settings</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
