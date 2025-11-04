import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Contacts from "./pages/Contacts";
import Integrations from "./pages/Integrations";
import Conversations from "./pages/Conversations";
import Tags from "./pages/Tags";
import Templates from "./pages/Templates";
import Campaigns from "./pages/Campaigns";
import Catalogs from "./pages/Catalogs";
import Overview from "./pages/analytics/Overview";
import CampaignAnalytics from "./pages/analytics/Campaigns";
import ConversationsAnalytics from "./pages/analytics/Conversations";
import TeamAnalytics from "./pages/analytics/Team";
import TeamMembers from "./pages/team/Members";
import TeamAccess from "./pages/team/Access";
import ComingSoon from "./pages/ComingSoon";
import ProfileSettings from "./pages/settings/ProfileSettings";
import OrganizationSettings from "./pages/settings/OrganizationSettings";
import NotificationSettings from "./pages/settings/NotificationSettings";
import WidgetSettings from "./pages/settings/WidgetSettings";
import AISettings from "./pages/settings/AISettings";
import APISettings from "./pages/settings/APISettings";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/inbox" element={<DashboardLayout><Inbox /></DashboardLayout>} />
          
          {/* Analytics Routes */}
          <Route path="/analytics/overview" element={<DashboardLayout><Overview /></DashboardLayout>} />
          <Route path="/analytics/campaigns" element={<DashboardLayout><CampaignAnalytics /></DashboardLayout>} />
          <Route path="/analytics/conversations" element={<DashboardLayout><ConversationsAnalytics /></DashboardLayout>} />
          <Route path="/analytics/team" element={<DashboardLayout><TeamAnalytics /></DashboardLayout>} />
          <Route path="/analytics/ai" element={<DashboardLayout><ComingSoon title="AI Conversations Analytics" description="Analyze your AI-powered conversation performance" /></DashboardLayout>} />
          <Route path="/analytics/satisfaction" element={<DashboardLayout><ComingSoon title="Customer Satisfaction" description="Track customer satisfaction metrics and feedback" /></DashboardLayout>} />
          <Route path="/analytics/roi" element={<DashboardLayout><ComingSoon title="ROI Tracking" description="Measure return on investment for your campaigns" /></DashboardLayout>} />
          
          {/* Content & Templates */}
          <Route path="/templates" element={<DashboardLayout><Templates /></DashboardLayout>} />
          <Route path="/tags" element={<DashboardLayout><Tags /></DashboardLayout>} />
          
          {/* Marketing */}
          <Route path="/campaigns" element={<DashboardLayout><Campaigns /></DashboardLayout>} />
          <Route path="/drip-campaigns" element={<DashboardLayout><ComingSoon title="Drip Campaigns" description="Automated message sequences for customer engagement" /></DashboardLayout>} />
          
          {/* Contacts & Data */}
          <Route path="/contacts" element={<DashboardLayout><Contacts /></DashboardLayout>} />
          <Route path="/contacts/segments" element={<DashboardLayout><Contacts /></DashboardLayout>} />
          <Route path="/catalogs" element={<DashboardLayout><Catalogs /></DashboardLayout>} />
          
          {/* Team & Access */}
          <Route path="/team/members" element={<DashboardLayout><TeamMembers /></DashboardLayout>} />
          <Route path="/team/access" element={<DashboardLayout><TeamAccess /></DashboardLayout>} />
          
          {/* Integrations */}
          <Route path="/integrations" element={<DashboardLayout><Integrations /></DashboardLayout>} />
          
          {/* Other */}
          <Route path="/conversations" element={<DashboardLayout><Conversations /></DashboardLayout>} />
          
          {/* Settings Routes */}
          <Route path="/settings/profile" element={<DashboardLayout><ProfileSettings /></DashboardLayout>} />
          <Route path="/settings/organization" element={<DashboardLayout><OrganizationSettings /></DashboardLayout>} />
          <Route path="/settings/notifications" element={<DashboardLayout><NotificationSettings /></DashboardLayout>} />
          <Route path="/settings/widget" element={<DashboardLayout><WidgetSettings /></DashboardLayout>} />
          <Route path="/settings/ai-settings" element={<DashboardLayout><AISettings /></DashboardLayout>} />
          <Route path="/settings/api-access" element={<DashboardLayout><APISettings /></DashboardLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
