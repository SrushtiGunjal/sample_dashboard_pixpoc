import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

export default function WidgetSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Chat Widget</h1>
        <p className="text-muted-foreground mt-1">Create and customize a beautiful chat widget for your website</p>
      </div>

      <Tabs defaultValue="customize">
        <TabsList>
          <TabsTrigger value="customize">Customize</TabsTrigger>
          <TabsTrigger value="code">Get Code</TabsTrigger>
        </TabsList>

        <TabsContent value="customize" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>✨ Appearance</CardTitle>
              <CardDescription>Customize colors and positioning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Widget Position</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Left
                    </Button>
                    <Button className="flex-1">Right</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryColor">Primary Color</Label>
                  <div className="flex gap-2">
                    <Input id="primaryColor" defaultValue="#00A445" />
                    <div className="w-12 h-10 rounded border" style={{ backgroundColor: "#00A445" }} />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Bottom Offset: 20px</Label>
                  <Slider defaultValue={[20]} max={100} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Side Offset: 20px</Label>
                  <Slider defaultValue={[20]} max={100} step={1} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Chat Bubble</Label>
                  <p className="text-sm text-muted-foreground">Display chat bubble</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bubbleText">Chat Bubble Text</Label>
                <Input id="bubbleText" defaultValue="Chat with us" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💬 Chat Settings</CardTitle>
              <CardDescription>Configure messages and behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="brandLogo">Brand Logo URL</Label>
                <Input id="brandLogo" placeholder="https://example.com/logo.png" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headerText">Header Text</Label>
                <Input id="headerText" defaultValue="We are available on WhatsApp" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prefilledMessage">Prefilled Message</Label>
                <Input id="prefilledMessage" defaultValue="Hi, I got a question." />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="buttonText">Button Text</Label>
                  <Input id="buttonText" defaultValue="Talk to us" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="agentName">Agent Name</Label>
                  <Input id="agentName" defaultValue="Support Team" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="displayDelay">Display Delay: 0s</Label>
                <Slider defaultValue={[0]} max={10} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>⚡ Quick Actions</CardTitle>
              <CardDescription>Configure quick action buttons for common inquiries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Enable Quick Actions</Label>
                <Switch defaultChecked />
              </div>

              <div className="space-y-3 pl-4 border-l-2">
                <div>
                  <Label className="text-sm">Quick Action 1</Label>
                  <p className="text-sm text-muted-foreground">📞 General Support</p>
                  <p className="text-sm">Hi! I got a question.</p>
                </div>
                <div>
                  <Label className="text-sm">Quick Action 2</Label>
                  <p className="text-sm text-muted-foreground">🛒 Product Enquiry</p>
                  <p className="text-sm">Hi! I would like to know more about your products.</p>
                </div>
                <div>
                  <Label className="text-sm">Quick Action 3</Label>
                  <p className="text-sm text-muted-foreground">💰 Pricing Enquiry</p>
                  <p className="text-sm">Hi! Can you tell me about your pricing?</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>📱 Display Options</CardTitle>
              <CardDescription>Control when and where to show the widget</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show on Mobile</Label>
                  <p className="text-sm text-muted-foreground">Display widget on mobile devices</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show on Desktop</Label>
                  <p className="text-sm text-muted-foreground">Display widget on desktop devices</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Installation Code</CardTitle>
              <CardDescription>Copy and paste this code before the closing &lt;/body&gt; tag</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                <code>{`<script>
  (function() {
    // Wapikit Widget Code
    // Add your widget initialization here
  })();
</script>`}</code>
              </pre>
              <Button className="mt-4">Copy Code</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
