import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function OrganizationSettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Organization Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your organization settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Organization Details</CardTitle>
          <CardDescription>
            Update your organization information. Changes in webhook url automatically update your Conversational AI system configuration.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orgName">Organization Name</Label>
            <Input id="orgName" defaultValue="WinWar" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input id="website" type="url" placeholder="https://example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what your organization does, your target audience, and your unique value proposition..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="vertical">Business Vertical</Label>
            <Input id="vertical" placeholder="e.g., Automotive, Retail, Healthcare" />
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Danger Zone
          </CardTitle>
          <CardDescription>Actions here can't be undone</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertDescription>
              Remove yourself from this organization. If you're the last admin, this organization will be deleted.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label>Leave Organization</Label>
            <Button variant="destructive" className="w-full">
              🗑️ Delete Organization
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
