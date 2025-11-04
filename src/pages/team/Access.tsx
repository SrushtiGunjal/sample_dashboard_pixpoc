import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Shield, Users, MessageSquare, Settings, BarChart3 } from "lucide-react";

export default function AccessControl() {
  const roles = [
    { 
      name: "Admin", 
      members: 1, 
      permissions: ["Full access to all features", "Manage team members", "Configure settings", "View all analytics"],
      color: "text-primary"
    },
    { 
      name: "Agent", 
      members: 3, 
      permissions: ["Handle conversations", "View assigned contacts", "Use templates", "Limited analytics"],
      color: "text-success"
    },
    { 
      name: "Manager", 
      members: 0, 
      permissions: ["View team performance", "Assign conversations", "Access analytics", "Manage campaigns"],
      color: "text-warning"
    },
  ];

  const permissions = [
    { name: "Manage Conversations", icon: MessageSquare, admin: true, manager: true, agent: true },
    { name: "View Analytics", icon: BarChart3, admin: true, manager: true, agent: false },
    { name: "Manage Team", icon: Users, admin: true, manager: false, agent: false },
    { name: "Configure Settings", icon: Settings, admin: true, manager: false, agent: false },
    { name: "Manage Campaigns", icon: Shield, admin: true, manager: true, agent: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Access Control</h1>
          <p className="text-muted-foreground mt-2">Manage roles and permissions</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Role
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.name}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className={role.color}>{role.name}</CardTitle>
                <Badge variant="secondary">{role.members} members</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {role.permissions.map((permission) => (
                  <li key={permission} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                    <span className="text-muted-foreground">{permission}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Permission Matrix</CardTitle>
          <CardDescription>Manage what each role can do</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 font-semibold text-sm border-b pb-3">
              <div>Permission</div>
              <div className="text-center">Admin</div>
              <div className="text-center">Manager</div>
              <div className="text-center">Agent</div>
            </div>
            {permissions.map((permission) => (
              <div key={permission.name} className="grid grid-cols-4 gap-4 items-center py-3 border-b last:border-0">
                <div className="flex items-center gap-2">
                  <permission.icon className="h-4 w-4 text-muted-foreground" />
                  <span>{permission.name}</span>
                </div>
                <div className="flex justify-center">
                  <Switch checked={permission.admin} />
                </div>
                <div className="flex justify-center">
                  <Switch checked={permission.manager} />
                </div>
                <div className="flex justify-center">
                  <Switch checked={permission.agent} />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
