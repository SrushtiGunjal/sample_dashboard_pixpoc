import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare } from "lucide-react";

export default function Conversations() {
  return (
    <div className="h-[calc(100vh-12rem)] flex gap-4">
      {/* Conversations List */}
      <Card className="w-80 flex flex-col">
        <div className="p-4 border-b space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">All Auto-Reply</h2>
            <Badge className="bg-success text-success-foreground">Beta</Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
          <div className="flex gap-2 text-sm">
            <Button variant="outline" size="sm" className="flex-1">
              All
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Unread
            </Button>
          </div>
        </div>

        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-sm text-muted-foreground">No conversations found</p>
          </div>
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center space-y-2">
          <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto" />
          <h3 className="text-lg font-semibold">No Conversation Selected</h3>
          <p className="text-sm text-muted-foreground">Select a conversation from the sidebar</p>
        </div>
      </Card>
    </div>
  );
}
