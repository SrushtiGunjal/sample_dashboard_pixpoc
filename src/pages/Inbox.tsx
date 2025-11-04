import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MessageSquare, Phone, User } from "lucide-react";
import { useState } from "react";

export default function Inbox() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="h-[calc(100vh-12rem)] flex gap-4">
      {/* Chat List */}
      <Card className="w-80 flex flex-col">
        <div className="p-4 border-b space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Inbox</h2>
            <Badge className="bg-primary text-primary-foreground">0</Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
          <div className="flex gap-2 text-sm">
            <Button variant="default" size="sm" className="flex-1">
              All
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Unread
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Assigned
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-sm text-muted-foreground">No conversations yet</p>
            <p className="text-xs text-muted-foreground">
              Connect your WhatsApp Business Account to start receiving messages
            </p>
          </div>
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Customer Name</h3>
                  <p className="text-sm text-muted-foreground">+1 234 567 8900</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="text-center text-sm text-muted-foreground">
                No messages yet
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-muted/30">
            <div className="text-center space-y-2">
              <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto" />
              <h3 className="text-lg font-semibold">No Conversation Selected</h3>
              <p className="text-sm text-muted-foreground">
                Select a conversation from the sidebar to view messages
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
