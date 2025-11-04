import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Bot, Zap, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AISettings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">🤖 Conversational AI Engine</h1>
        <p className="text-muted-foreground mt-1">Utilize the power of AI for conversational marketing</p>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Conversation Engine Not Active</strong>
          <p className="mt-1">
            Upgrade to Scale plan to activate your AI-powered conversation engine and automate customer engagement.
          </p>
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Activate Your AI Conversation Engine</CardTitle>
          <CardDescription>
            Your conversation engine is currently inactive. Upgrade to Scale plan to enable AI-powered and manually
            curated integrations, and 24/7 Customer engagement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="text-center p-6 border rounded-lg">
              <Bot className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">AI Auto-Replies</h3>
              <p className="text-sm text-muted-foreground">
                Let AI handle customer inquiries intelligently with context-aware responses
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <Zap className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Smart Response Suggestions</h3>
              <p className="text-sm text-muted-foreground">
                Get intelligent reply suggestions based on customer conversations
              </p>
            </div>

            <div className="text-center p-6 border rounded-lg">
              <MessageSquare className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Brand Aware Conversations</h3>
              <p className="text-sm text-muted-foreground">
                AI understands your brand tone and automatically generates on-brand responses
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-success hover:bg-success/90">
              ⬆️ Upgrade Plan
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Features</CardTitle>
          <CardDescription>Available with Scale plan and above</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Automated Responses</p>
                <p className="text-sm text-muted-foreground">AI-powered 24/7 customer support</p>
              </div>
            </div>
            <Badge variant="secondary">Premium</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Smart Suggestions</p>
                <p className="text-sm text-muted-foreground">Context-aware reply recommendations</p>
              </div>
            </div>
            <Badge variant="secondary">Premium</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Brand Tone Matching</p>
                <p className="text-sm text-muted-foreground">Maintains your brand voice in all responses</p>
              </div>
            </div>
            <Badge variant="secondary">Premium</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
