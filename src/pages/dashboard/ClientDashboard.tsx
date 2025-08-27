import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ClientDashboard = () => {
  const [loanForm, setLoanForm] = useState({
    amount: "",
    purpose: "",
    term: "",
    income: "",
    employment: "",
    description: ""
  });
  const { toast } = useToast();

  const stats = [
    {
      title: "Total Borrowed",
      value: "$15,000",
      icon: DollarSign,
      change: "+12% from last month",
      color: "text-primary"
    },
    {
      title: "Active Loans",
      value: "2",
      icon: CreditCard,
      change: "1 pending approval",
      color: "text-warning"
    },
    {
      title: "Credit Score",
      value: "750",
      icon: TrendingUp,
      change: "+25 points this month",
      color: "text-success"
    },
    {
      title: "Next Payment",
      value: "$450",
      icon: Calendar,
      change: "Due in 5 days",
      color: "text-destructive"
    }
  ];

  const loanApplications = [
    {
      id: "LA001",
      amount: "$10,000",
      purpose: "Business Expansion",
      status: "approved",
      date: "2024-01-15",
      rate: "8.5%"
    },
    {
      id: "LA002", 
      amount: "$5,000",
      purpose: "Personal",
      status: "pending",
      date: "2024-01-20",
      rate: "9.2%"
    },
    {
      id: "LA003",
      amount: "$25,000",
      purpose: "Home Improvement",
      status: "under_review",
      date: "2024-01-22",
      rate: "7.8%"
    }
  ];

  const repaymentSchedule = [
    {
      installment: 1,
      dueDate: "2024-02-01",
      amount: "$450",
      principal: "$380",
      interest: "$70",
      status: "paid"
    },
    {
      installment: 2,
      dueDate: "2024-03-01", 
      amount: "$450",
      principal: "$382",
      interest: "$68",
      status: "upcoming"
    },
    {
      installment: 3,
      dueDate: "2024-04-01",
      amount: "$450",
      principal: "$384",
      interest: "$66",
      status: "upcoming"
    }
  ];

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Loan Application Submitted",
      description: "Your application has been submitted for review. You'll receive an update within 24 hours.",
    });
    setLoanForm({
      amount: "",
      purpose: "",
      term: "",
      income: "",
      employment: "",
      description: ""
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'under_review':
        return <Badge variant="outline">Under Review</Badge>;
      case 'paid':
        return <Badge className="bg-success text-success-foreground">Paid</Badge>;
      case 'upcoming':
        return <Badge variant="outline">Upcoming</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout userType="client">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Dashboard</h1>
          <p className="text-muted-foreground">Manage your loans and track your financial progress</p>
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
        <Tabs defaultValue="application" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="application">Loan Application</TabsTrigger>
            <TabsTrigger value="status">Loan Status</TabsTrigger>
            <TabsTrigger value="repayment">Repayment Schedule</TabsTrigger>
          </TabsList>

          {/* Loan Application Form */}
          <TabsContent value="application" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Apply for a New Loan</CardTitle>
                <CardDescription>
                  Fill out the form below to apply for a loan. Our team will review your application within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLoanSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Loan Amount</Label>
                      <Input
                        id="amount"
                        placeholder="$10,000"
                        value={loanForm.amount}
                        onChange={(e) => setLoanForm({...loanForm, amount: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose</Label>
                      <Select onValueChange={(value) => setLoanForm({...loanForm, purpose: value})} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal</SelectItem>
                          <SelectItem value="business">Business Expansion</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="medical">Medical</SelectItem>
                          <SelectItem value="home">Home Improvement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="term">Loan Term</Label>
                      <Select onValueChange={(value) => setLoanForm({...loanForm, term: value})} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 months</SelectItem>
                          <SelectItem value="12">12 months</SelectItem>
                          <SelectItem value="24">24 months</SelectItem>
                          <SelectItem value="36">36 months</SelectItem>
                          <SelectItem value="60">60 months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="income">Monthly Income</Label>
                      <Input
                        id="income"
                        placeholder="$5,000"
                        value={loanForm.income}
                        onChange={(e) => setLoanForm({...loanForm, income: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employment">Employment Status</Label>
                    <Select onValueChange={(value) => setLoanForm({...loanForm, employment: value})} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Additional Information</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide any additional information about your loan request..."
                      value={loanForm.description}
                      onChange={(e) => setLoanForm({...loanForm, description: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="elite">
                    Submit Loan Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Loan Status */}
          <TabsContent value="status" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Loan Applications Status</CardTitle>
                <CardDescription>Track the progress of your loan applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Interest Rate</TableHead>
                      <TableHead>Date Applied</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loanApplications.map((loan) => (
                      <TableRow key={loan.id}>
                        <TableCell className="font-medium">{loan.id}</TableCell>
                        <TableCell>{loan.amount}</TableCell>
                        <TableCell>{loan.purpose}</TableCell>
                        <TableCell>{loan.rate}</TableCell>
                        <TableCell>{loan.date}</TableCell>
                        <TableCell>{getStatusBadge(loan.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Repayment Schedule */}
          <TabsContent value="repayment" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Repayment Schedule</CardTitle>
                <CardDescription>Your upcoming and completed loan payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Loan Progress</span>
                    <span>1 of 24 payments completed</span>
                  </div>
                  <Progress value={4.2} className="h-2" />
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Installment</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Principal</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {repaymentSchedule.map((payment) => (
                      <TableRow key={payment.installment}>
                        <TableCell className="font-medium">{payment.installment}</TableCell>
                        <TableCell>{payment.dueDate}</TableCell>
                        <TableCell>{payment.amount}</TableCell>
                        <TableCell>{payment.principal}</TableCell>
                        <TableCell>{payment.interest}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;