import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import Dashboard from "./pages/dashboard/Dashboard";
import ClientDashboard from "./pages/dashboard/ClientDashboard";
import InvestorDashboard from "./pages/dashboard/InvestorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Reports from "./pages/dashboard/Reports";
import Support from "./pages/dashboard/Support";
import Settings from "./pages/dashboard/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Client Dashboard Routes */}
          <Route path="/dashboard/client" element={<ClientDashboard />} />
          <Route path="/dashboard/client/loans" element={<ClientDashboard />} />
          <Route path="/dashboard/client/reports" element={<Reports userType="client" />} />
          <Route path="/dashboard/client/support" element={<Support userType="client" />} />
          <Route path="/dashboard/client/settings" element={<Settings userType="client" />} />
          
          {/* Investor Dashboard Routes */}
          <Route path="/dashboard/investor" element={<InvestorDashboard />} />
          <Route path="/dashboard/investor/investments" element={<InvestorDashboard />} />
          <Route path="/dashboard/investor/reports" element={<Reports userType="investor" />} />
          <Route path="/dashboard/investor/support" element={<Support userType="investor" />} />
          <Route path="/dashboard/investor/settings" element={<Settings userType="investor" />} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/users" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/loans" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/reports" element={<Reports userType="admin" />} />
          <Route path="/dashboard/admin/support" element={<Support userType="admin" />} />
          <Route path="/dashboard/admin/settings" element={<Settings userType="admin" />} />
          
          {/* Generic Dashboard (fallback) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/support" element={<Support />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;