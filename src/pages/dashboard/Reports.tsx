import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  CreditCard,
  Download,
  Calendar,
  FileText,
  PieChart
} from "lucide-react";

const Reports = ({ userType = 'client' }: { userType?: 'client' | 'investor' | 'admin' }) => {
  const reportCards = [
    {
      title: "Loan Disbursements",
      description: "Monthly loan disbursement reports and trends",
      icon: CreditCard,
      metrics: { total: "$2.5M", change: "+15.2%" },
      lastUpdated: "2024-01-25"
    },
    {
      title: "Revenue Analysis",
      description: "Platform revenue and profit analysis",
      icon: DollarSign,
      metrics: { total: "$125K", change: "+8.7%" },
      lastUpdated: "2024-01-25"
    },
    {
      title: "User Analytics",
      description: "User acquisition and engagement metrics",
      icon: Users,
      metrics: { total: "2,547", change: "+12.3%" },
      lastUpdated: "2024-01-24"
    },
    {
      title: "Investment Performance",
      description: "Portfolio performance and dividend reports",
      icon: TrendingUp,
      metrics: { total: "$1.8M", change: "+18.9%" },
      lastUpdated: "2024-01-24"
    }
  ];

  const quickStats = [
    { label: "Total Loans Disbursed", value: "$2.5M", change: "+15.2%", positive: true },
    { label: "Active Users", value: "2,547", change: "+127", positive: true },
    { label: "Monthly Revenue", value: "$125K", change: "+8.7%", positive: true },
    { label: "Default Rate", value: "2.1%", change: "-0.3%", positive: true },
    { label: "Avg. Loan Amount", value: "$12,500", change: "+5.2%", positive: true },
    { label: "Investment Returns", value: "12.8%", change: "+1.2%", positive: true }
  ];

  return (
    <DashboardLayout userType={userType}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive business intelligence and performance metrics</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button variant="elite">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.positive ? 'text-success' : 'text-destructive'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Categories */}
        <div className="grid gap-6 md:grid-cols-2">
          {reportCards.map((report, index) => (
            <Card key={index} className="shadow-card hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <report.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Updated {report.lastUpdated}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">{report.metrics.total}</p>
                    <p className="text-sm text-success">{report.metrics.change} this month</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="elite">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="h-[100px] bg-accent/20 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">Chart preview would go here</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Charts Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue and profit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Revenue Chart</p>
                  <p className="text-sm">Interactive revenue trends chart would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Loan Portfolio Distribution</CardTitle>
              <CardDescription>Breakdown of loans by category and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Portfolio Distribution</p>
                  <p className="text-sm">Pie chart showing loan distribution would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Key Performance Indicators</CardTitle>
            <CardDescription>Essential business metrics and benchmarks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Loan Performance</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Approval Rate</span>
                    <span className="font-medium">85.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Default Rate</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Processing Time</span>
                    <span className="font-medium">18 hours</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Investment Metrics</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total AUM</span>
                    <span className="font-medium">$1.8M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Return</span>
                    <span className="font-medium">12.8%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Investors</span>
                    <span className="font-medium">847</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Platform Health</h4>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Active Users</span>
                    <span className="font-medium">1,892</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Customer Satisfaction</span>
                    <span className="font-medium">4.7/5</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Support Response</span>
                    <span className="font-medium">&lt; 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reports;