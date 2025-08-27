import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InvestorDashboard = () => {
  const [investmentForm, setInvestmentForm] = useState({
    amount: "",
    investmentType: "",
    term: ""
  });
  const { toast } = useToast();

  const stats = [
    {
      title: "Total Portfolio Value",
      value: "$125,450",
      icon: DollarSign,
      change: "+8.2% this month",
      changeType: "increase"
    },
    {
      title: "Total Invested",
      value: "$100,000",
      icon: TrendingUp,
      change: "Across 12 investments",
      changeType: "neutral"
    },
    {
      title: "Monthly Returns",
      value: "$1,850",
      icon: PieChart,
      change: "+12.5% from last month",
      changeType: "increase"
    },
    {
      title: "Next Dividend",
      value: "$450",
      icon: Calendar,
      change: "Expected in 3 days",
      changeType: "neutral"
    }
  ];

  const investments = [
    {
      type: "Fixed Deposit",
      amount: "$25,000",
      return: "8.5%",
      maturity: "2024-12-01",
      status: "active"
    },
    {
      type: "Mutual Fund",
      amount: "$40,000", 
      return: "12.3%",
      maturity: "2025-06-15",
      status: "active"
    },
    {
      type: "Equity Shares",
      amount: "$35,000",
      return: "15.7%",
      maturity: "Open-ended",
      status: "active"
    }
  ];

  const dividendHistory = [
    {
      date: "2024-01-15",
      type: "Fixed Deposit",
      amount: "$212.50",
      status: "paid"
    },
    {
      date: "2024-01-10",
      type: "Mutual Fund",
      amount: "$410.00",
      status: "paid"
    },
    {
      date: "2024-01-05",
      type: "Equity Shares",
      amount: "$275.50",
      status: "paid"
    },
    {
      date: "2024-02-01",
      type: "Fixed Deposit",
      amount: "$212.50",
      status: "pending"
    }
  ];

  const portfolioBreakdown = [
    { type: "Fixed Deposits", allocation: 25, value: "$25,000", return: "8.5%" },
    { type: "Mutual Funds", allocation: 40, value: "$40,000", return: "12.3%" },
    { type: "Equity Shares", allocation: 35, value: "$35,000", return: "15.7%" }
  ];

  const handleInvestmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Investment Submitted",
      description: "Your investment request has been submitted for processing.",
    });
    setInvestmentForm({
      amount: "",
      investmentType: "",
      term: ""
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case 'paid':
        return <Badge className="bg-success text-success-foreground">Paid</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <ArrowUpRight className="h-4 w-4 text-success" />;
      case 'decrease':
        return <ArrowDownRight className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType="investor">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Investor Dashboard</h1>
          <p className="text-muted-foreground">Monitor your investments and track your returns</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className="flex items-center space-x-1">
                  <stat.icon className="h-4 w-4 text-primary" />
                  {getChangeIcon(stat.changeType)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="portfolio" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="portfolio">Portfolio Overview</TabsTrigger>
            <TabsTrigger value="invest">New Investment</TabsTrigger>
            <TabsTrigger value="dividends">Dividend History</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Portfolio Overview */}
          <TabsContent value="portfolio" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Current Investments</CardTitle>
                  <CardDescription>Your active investment portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Return</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {investments.map((investment, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{investment.type}</TableCell>
                          <TableCell>{investment.amount}</TableCell>
                          <TableCell className="text-success">{investment.return}</TableCell>
                          <TableCell>{getStatusBadge(investment.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                  <CardDescription>Distribution of your investments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {portfolioBreakdown.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.type}</span>
                        <span className="text-muted-foreground">{item.value} ({item.allocation}%)</span>
                      </div>
                      <Progress value={item.allocation} className="h-2" />
                      <div className="text-xs text-success">Return: {item.return}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Investment Form */}
          <TabsContent value="invest" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Make a New Investment</CardTitle>
                <CardDescription>
                  Choose your investment type and amount to grow your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInvestmentSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Investment Amount</Label>
                      <Input
                        id="amount"
                        placeholder="$10,000"
                        value={investmentForm.amount}
                        onChange={(e) => setInvestmentForm({...investmentForm, amount: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investmentType">Investment Type</Label>
                      <Select onValueChange={(value) => setInvestmentForm({...investmentForm, investmentType: value})} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select investment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fixed-deposit">Fixed Deposit (8.5% p.a.)</SelectItem>
                          <SelectItem value="mutual-fund">Mutual Fund (12-15% p.a.)</SelectItem>
                          <SelectItem value="equity-shares">Equity Shares (15-20% p.a.)</SelectItem>
                          <SelectItem value="bonds">Corporate Bonds (7-9% p.a.)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="term">Investment Term</Label>
                    <Select onValueChange={(value) => setInvestmentForm({...investmentForm, term: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="12">1 year</SelectItem>
                        <SelectItem value="24">2 years</SelectItem>
                        <SelectItem value="36">3 years</SelectItem>
                        <SelectItem value="60">5 years</SelectItem>
                        <SelectItem value="open">Open-ended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-accent/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Investment Summary</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Minimum investment: $1,000</div>
                      <div>Processing fee: 0.5% of investment amount</div>
                      <div>Expected processing time: 1-2 business days</div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" variant="elite">
                    Submit Investment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dividend History */}
          <TabsContent value="dividends" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Dividend History</CardTitle>
                <CardDescription>Track your dividend payments and earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Investment Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dividendHistory.map((dividend, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{dividend.date}</TableCell>
                        <TableCell>{dividend.type}</TableCell>
                        <TableCell className="text-success font-medium">{dividend.amount}</TableCell>
                        <TableCell>{getStatusBadge(dividend.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance */}
          <TabsContent value="performance" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Investment Performance</CardTitle>
                <CardDescription>Charts and analytics for your portfolio performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                      <p>Portfolio Performance Chart</p>
                      <p className="text-sm">Chart visualization would go here</p>
                    </div>
                  </div>
                  <div className="h-[300px] bg-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <PieChart className="h-12 w-12 mx-auto mb-2" />
                      <p>Asset Allocation Chart</p>
                      <p className="text-sm">Pie chart visualization would go here</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InvestorDashboard;