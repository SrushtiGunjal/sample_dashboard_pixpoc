import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Package, ExternalLink } from "lucide-react";

export default function Catalogs() {
  const catalogs = [
    { 
      name: "Summer Collection 2025", 
      products: 156, 
      status: "active",
      lastUpdated: "2 days ago" 
    },
    { 
      name: "Electronics Catalog", 
      products: 89, 
      status: "active",
      lastUpdated: "1 week ago" 
    },
    { 
      name: "Holiday Specials", 
      products: 45, 
      status: "draft",
      lastUpdated: "3 days ago" 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Catalogs</h1>
          <p className="text-muted-foreground mt-2">Manage your WhatsApp Business catalogs</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Catalog
        </Button>
      </div>

      <Card className="bg-info/10 border-info/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <Package className="h-5 w-5 text-info mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-info-foreground">WhatsApp Business Catalogs</h3>
              <p className="text-sm text-info-foreground/80 mt-1">
                Showcase your products directly in WhatsApp. Customers can browse and inquire about items without leaving the chat.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search catalogs..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {catalogs.map((catalog) => (
              <div key={catalog.name} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{catalog.name}</h3>
                      <p className="text-sm text-muted-foreground">{catalog.products} products • Updated {catalog.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={catalog.status === 'active' ? 'default' : 'secondary'}>
                      {catalog.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="gap-2">
                      View <ExternalLink className="h-3 w-3" />
                    </Button>
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
