import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  UserPlus,
  Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const stats = [
    {
      title: "Total Users",
      value: "2,547",
      icon: Users,
      change: "+127 this month",
      color: "text-primary"
    },
    {
      title: "Loans Pending",
      value: "23",
      icon: Clock,
      change: "Requires review",
      color: "text-warning"
    },
    {
      title: "Total Disbursed",
      value: "$2.5M",
      icon: DollarSign,
      change: "+8.2% this month",
      color: "text-success"
    },
    {
      title: "Active Investments",
      value: "$1.8M",
      icon: TrendingUp,
      change: "+12.5% this month",
      color: "text-success"
    }
  ];

  const pendingLoans = [
    {
      id: "LA001",
      applicant: "John Doe",
      amount: "$15,000",
      purpose: "Business Expansion",
      score: 750,
      income: "$5,000",
      date: "2024-01-22",
      risk: "Low"
    },
    {
      id: "LA002",
      applicant: "Sarah Wilson",
      amount: "$8,000",
      purpose: "Personal",
      score: 680,
      income: "$3,500",
      date: "2024-01-21",
      risk: "Medium"
    },
    {
      id: "LA003",
      applicant: "Mike Johnson",
      amount: "$25,000",
      purpose: "Home Improvement",
      score: 720,
      income: "$6,200",
      date: "2024-01-20",
      risk: "Low"
    }
  ];

  const users = [
    {
      id: "U001",
      name: "John Doe",
      email: "john@example.com",
      type: "Client",
      joinDate: "2024-01-15",
      status: "Active",
      totalBorrowed: "$15,000"
    },
    {
      id: "U002", 
      name: "Sarah Wilson",
      email: "sarah@example.com",
      type: "Investor",
      joinDate: "2024-01-10",
      status: "Active",
      totalInvested: "$50,000"
    },
    {
      id: "U003",
      name: "Mike Johnson", 
      email: "mike@example.com",
      type: "Client",
      joinDate: "2024-01-08",
      status: "Pending",
      totalBorrowed: "$0"
    }
  ];

  const financialReports = [
    { metric: "Total Revenue", value: "$125,000", change: "+15.2%" },
    { metric: "Interest Income", value: "$98,000", change: "+12.8%" },
    { metric: "Fee Income", value: "$27,000", change: "+8.5%" },
    { metric: "Operating Costs", value: "$45,000", change: "+5.2%" },
    { metric: "Net Profit", value: "$80,000", change: "+18.9%" },
    { metric: "Default Rate", value: "2.1%", change: "-0.3%" }
  ];

  const handleLoanApproval = (loanId: string, action: 'approve' | 'reject') => {
    toast({
      title: action === 'approve' ? "Loan Approved" : "Loan Rejected",
      description: `Loan ${loanId} has been ${action}d successfully.`,
    });
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'Low':
        return <Badge className="bg-success text-success-foreground">Low Risk</Badge>;
      case 'Medium':
        return <Badge className="bg-warning text-warning-foreground">Medium Risk</Badge>;
      case 'High':
        return <Badge className="bg-destructive text-destructive-foreground">High Risk</Badge>;
      default:
        return <Badge variant="outline">{risk}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case 'Pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'Suspended':
        return <Badge className="bg-destructive text-destructive-foreground">Suspended</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage loans, users, and monitor platform performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="loans" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="loans">Loan Approvals</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="reports">Financial Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Loan Approvals */}
          <TabsContent value="loans" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Pending Loan Approvals</CardTitle>
                <CardDescription>Review and approve or reject loan applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Loan ID</TableHead>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Credit Score</TableHead>
                      <TableHead>Monthly Income</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingLoans.map((loan) => (
                      <TableRow key={loan.id}>
                        <TableCell className="font-medium">{loan.id}</TableCell>
                        <TableCell>{loan.applicant}</TableCell>
                        <TableCell>{loan.amount}</TableCell>
                        <TableCell>{loan.purpose}</TableCell>
                        <TableCell>{loan.score}</TableCell>
                        <TableCell>{loan.income}</TableCell>
                        <TableCell>{getRiskBadge(loan.risk)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => {}}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="success"
                              onClick={() => handleLoanApproval(loan.id, 'approve')}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleLoanApproval(loan.id, 'reject')}
                            >
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users and their accounts</CardDescription>
                <div className="flex justify-between items-center">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8 w-[300px]"
                    />
                  </div>
                  <Button variant="elite">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.type}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>
                          {user.totalBorrowed && (
                            <span className="text-sm text-muted-foreground">
                              Borrowed: {user.totalBorrowed}
                            </span>
                          )}
                          {user.totalInvested && (
                            <span className="text-sm text-muted-foreground">
                              Invested: {user.totalInvested}
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Reports */}
          <TabsContent value="reports" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {financialReports.map((report, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{report.metric}</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{report.value}</div>
                    <p className={`text-xs ${
                      report.change.startsWith('+') ? 'text-success' : 
                      report.change.startsWith('-') && report.metric !== 'Default Rate' ? 'text-destructive' :
                      report.metric === 'Default Rate' && report.change.startsWith('-') ? 'text-success' : 'text-muted-foreground'
                    }`}>
                      {report.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Detailed Financial Overview</CardTitle>
                <CardDescription>Comprehensive financial metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] bg-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Financial Chart Placeholder</p>
                    <p className="text-sm">Revenue, profit, and loan performance charts would be displayed here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Loan Disbursement Analytics</CardTitle>
                  <CardDescription>Monthly loan disbursement trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <CreditCard className="h-12 w-12 mx-auto mb-2" />
                      <p>Loan Disbursement Chart</p>
                      <p className="text-sm">Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>User Growth Analytics</CardTitle>
                  <CardDescription>Platform user acquisition and growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p>User Growth Chart</p>
                      <p className="text-sm">Chart visualization would go here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;