import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Clock, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TeamAnalytics() {
  const teamMembers = [
    { name: "Sarah Johnson", conversations: 245, avgResponse: "1.2m", satisfaction: 4.9, status: "online" },
    { name: "Mike Chen", conversations: 198, avgResponse: "1.8m", satisfaction: 4.7, status: "online" },
    { name: "Emma Davis", conversations: 187, avgResponse: "2.1m", satisfaction: 4.8, status: "away" },
    { name: "James Wilson", conversations: 156, avgResponse: "2.5m", satisfaction: 4.6, status: "offline" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Team Performance</h1>
        <p className="text-muted-foreground mt-2">Track individual and team metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">3 active now</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Handled</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">786</div>
            <p className="text-xs text-success">+15% this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.9m</div>
            <p className="text-xs text-success">-18% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-success">+0.2 points</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Individual Performance</CardTitle>
          <CardDescription>Performance metrics by team member</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{member.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Conversations</p>
                    <p className="font-semibold">{member.conversations}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Response</p>
                    <p className="font-semibold">{member.avgResponse}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-warning" />
                      {member.satisfaction}
                    </p>
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
