import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  BarChart3,
  FileText,
  Megaphone,
  Users,
  Shield,
  Plug,
  LogIn,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Inbox", url: "/inbox", icon: MessageSquare },
  { title: "Login", url: "/login", icon: LogIn },
];

const expandableNavItems = [
  {
    title: "Analytics",
    icon: BarChart3,
    items: [
      { title: "Overview", url: "/analytics/overview" },
      { title: "Campaign Performance", url: "/analytics/campaigns" },
      { title: "Conversations Effectiveness", url: "/analytics/conversations" },
      { title: "Team Performance", url: "/analytics/team" },
    ],
  },
  {
    title: "Content & Templates",
    icon: FileText,
    items: [
      { title: "Message Templates", url: "/templates" },
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    items: [
      { title: "Campaigns", url: "/campaigns" },
    ],
  },
  {
    title: "Contacts & Data",
    icon: Users,
    items: [
      { title: "All Contacts", url: "/contacts" },
    ],
  },
  {
    title: "Team & Access",
    icon: Shield,
    items: [
      { title: "Team Members", url: "/team/members" },
      { title: "Access Control", url: "/team/access" },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    items: [],
    url: "/integrations",
  },
];

export function AppSidebar() {
  const [openSections, setOpenSections] = useState<string[]>(["Analytics"]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-border bg-card">
      <SidebarContent>
        {/* Logo */}
        <div className="px-6 py-6 border-b">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto"
            onError={(e) => {
              // fallback to svg if png not present
              // @ts-ignore
              e.currentTarget.src = '/logo.svg';
            }}
          />
        </div>

        <SidebarGroup className="px-3 py-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {/* Main nav items */}
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive ? "bg-accent text-accent-foreground" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* Expandable nav items */}
              {expandableNavItems.map((item) => {
                const hasSubItems = item.items && item.items.length > 0;
                const isOpen = openSections.includes(item.title);

                if (!hasSubItems && item.url) {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          className={({ isActive }) =>
                            isActive ? "bg-accent text-accent-foreground" : ""
                          }
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return (
                  <Collapsible
                    key={item.title}
                    open={isOpen}
                    onOpenChange={() => toggleSection(item.title)}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon className="h-4 w-4" />
                          <span className="flex-1">{item.title}</span>
                          {hasSubItems && (
                            <ChevronRight
                              className={`h-4 w-4 transition-transform ${
                                isOpen ? "rotate-90" : ""
                              }`}
                            />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {hasSubItems && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                   <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 w-full ${isActive ? "bg-accent text-accent-foreground" : ""}`
                                    }
                                  >
                                    <span className="flex-1 truncate">{subItem.title}</span>
                                    {subItem.badge && (
                                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 shrink-0 text-muted-foreground border-muted">
                                        {subItem.badge}
                                      </Badge>
                                    )}
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
