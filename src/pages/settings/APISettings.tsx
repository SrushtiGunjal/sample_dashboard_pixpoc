import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function APISettings() {
  const [showKey, setShowKey] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    toast({
      title: "API Key Copied",
      description: "Your API key has been copied to clipboard",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">🔑 API Access</h1>
        <p className="text-muted-foreground mt-1">Manage your API keys for programmatic access</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>API Key</CardTitle>
          <CardDescription>Use this API key to authenticate requests to the Wapikit API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              <strong>Developer friendly:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Keep your API key secure and never share it publicly</li>
                <li>
                  Regenerate your key immediately if you suspect it has been compromised
                </li>
                <li>The API key grants full access to your account via the API</li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                type={showKey ? "text" : "password"}
                value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                readOnly
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <Button variant="outline" onClick={handleCopy}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Regenerate
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🔑 API Key Usage</CardTitle>
          <CardDescription>Usage and rate limits for your API key</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">Requests this month</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground">Rate limit</p>
              <p className="text-2xl font-bold">1000/hour</p>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            📊 View API Usage
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📖 Documentation</CardTitle>
          <CardDescription>Learn how to integrate with the Wapikit API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            View API Documentation →
          </Button>
          <Button variant="outline" className="w-full justify-start">
            View Code Examples →
          </Button>
          <Button variant="outline" className="w-full justify-start">
            API Status & Updates →
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
