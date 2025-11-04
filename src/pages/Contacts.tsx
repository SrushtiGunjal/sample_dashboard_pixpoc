import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, UserPlus, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contacts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-muted-foreground mt-1">Manage contacts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add New
          </Button>
        </div>
      </div>

      <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search phone..." className="pl-10" />
          </div>

          <Card className="p-12">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-muted rounded-lg mx-auto flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold">No records found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          </Card>
      </div>
    </div>
  );
}
