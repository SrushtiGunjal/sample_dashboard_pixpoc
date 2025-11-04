import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const integrations = [
  {
    name: "Shopify - Sell on WhatsApp",
    description: "Enable in-chat order placement and hosted payment link generation via Shopify.",
    icon: "🛍️",
    premium: true,
  },
  {
    name: "Shopify - Alerts & Cart/Checkout Recovery",
    description: "Connect your Shopify store to Pixpoc so that all your customers receive timely WhatsApp updates for every order event.",
    icon: "🛍️",
    premium: true,
  },
  {
    name: "Calendly",
    description: "Embed Calendly scheduling into your WhatsApp flows—customers can book appointments directly.",
    icon: "📅",
    premium: true,
  },
  {
    name: "Custom HTTP Integration",
    description: "Push your own business events into Pixpoc and receive WhatsApp events back via your webhook.",
    icon: "🔌",
    premium: true,
  },
  {
    name: "HubSpot",
    description: "Sync contacts, deals, and tickets between HubSpot CRM and WhatsApp.",
    icon: "🎯",
    premium: true,
    comingSoon: true,
  },
];

const categories = ["Marketing", "Communication", "Support", "Sales", "CRM", "Analytics"];

export default function Integrations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Integrations</h1>
          <p className="text-muted-foreground mt-1">Connect Pixpoc with your favorite tools and services</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search integrations..." className="pl-10" />
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm">
            {category}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="installed">Installed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Integrations</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {integrations.map((integration) => (
                <Card key={integration.name}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{integration.icon}</div>
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          {integration.premium && (
                            <Badge className="mt-1 bg-success text-success-foreground">Premium</Badge>
                          )}
                          {integration.comingSoon && (
                            <Badge variant="secondary" className="mt-1 ml-2">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{integration.description}</CardDescription>
                    <Button className="w-full" disabled={integration.comingSoon}>
                      {integration.comingSoon ? "Coming Soon" : "Connect"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="installed">
          <Card className="p-12">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto flex items-center justify-center">
                <span className="text-3xl">🔌</span>
              </div>
              <h3 className="text-xl font-semibold">No integrations installed</h3>
              <p className="text-muted-foreground">Connect your first integration to get started</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
