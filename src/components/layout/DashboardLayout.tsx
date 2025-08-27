import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  HelpCircle, 
  Settings, 
  Users,
  Menu,
  X,
  Bell,
  LogOut,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'client' | 'investor' | 'admin';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const getNavigationItems = () => {
    const baseItems = [
      { icon: FileText, label: "Reports", path: "/dashboard/reports" },
      { icon: HelpCircle, label: "Support", path: "/dashboard/support" },
      { icon: Settings, label: "Settings", path: "/dashboard/settings" },
    ];

    switch (userType) {
      case 'client':
        return [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/client" },
          { icon: CreditCard, label: "Loans", path: "/dashboard/client/loans" },
          ...baseItems
        ];
      case 'investor':
        return [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/investor" },
          { icon: TrendingUp, label: "Investments", path: "/dashboard/investor/investments" },
          ...baseItems
        ];
      case 'admin':
        return [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
          { icon: Users, label: "User Management", path: "/dashboard/admin/users" },
          { icon: CreditCard, label: "Loan Approvals", path: "/dashboard/admin/loans" },
          ...baseItems
        ];
      default:
        return [
          { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
          ...baseItems
        ];
    }
  };

  const navigationItems = getNavigationItems();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const getUserInfo = () => {
    switch (userType) {
      case 'client':
        return { name: "John Doe", email: "client@elite.com", role: "Client" };
      case 'investor':
        return { name: "Jane Smith", email: "investor@elite.com", role: "Investor" };
      case 'admin':
        return { name: "Admin User", email: "admin@elite.com", role: "Administrator" };
      default:
        return { name: "User", email: "user@elite.com", role: "User" };
    }
  };

  const userInfo = getUserInfo();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-transform duration-300 ${
        isSidebarOpen ? 'w-64 translate-x-0' : 'w-16 translate-x-0'
      }`}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-border px-6">
            {isSidebarOpen ? (
              <Link to="/" className="text-xl font-bold text-gradient">
                Elite Capital
              </Link>
            ) : (
              <div className="text-xl font-bold text-primary">EC</div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={index} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${!isSidebarOpen ? 'px-2' : ''}`}
                  >
                    <item.icon className={`h-4 w-4 ${!isSidebarOpen ? 'mx-auto' : 'mr-2'}`} />
                    {isSidebarOpen && <span>{item.label}</span>}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* User Info */}
          {isSidebarOpen && (
            <div className="border-t border-border p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{userInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{userInfo.name}</p>
                  <Badge variant="outline" className="text-xs">{userInfo.role}</Badge>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>

          <div className="flex-1" />

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">3</Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{userInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userInfo.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{userInfo.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;