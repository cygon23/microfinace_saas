import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock,
  HelpCircle,
  FileText,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = ({ userType = 'client' }: { userType?: 'client' | 'investor' | 'admin' }) => {
  const [contactForm, setContactForm] = useState({
    subject: "",
    category: "",
    priority: "",
    message: ""
  });
  const { toast } = useToast();

  const faqItems = [
    {
      question: "How do I apply for a loan?",
      answer: "To apply for a loan, navigate to your client dashboard and click on 'Loan Application'. Fill out the required information including loan amount, purpose, and personal details. Our team will review your application within 24 hours."
    },
    {
      question: "What documents do I need for loan approval?",
      answer: "Required documents include: Valid ID, proof of income (last 3 months), bank statements, employment verification, and any collateral documents if applicable. All documents can be uploaded securely through your dashboard."
    },
    {
      question: "How long does loan approval take?",
      answer: "Most loan applications are reviewed within 24 hours. Complex applications may take up to 3 business days. You'll receive email notifications about your application status throughout the process."
    },
    {
      question: "What are the interest rates for different loan types?",
      answer: "Interest rates vary by loan type: Personal loans (9-15%), Business loans (8-12%), Emergency loans (10-16%), Education/Medical loans (7-11%). Rates depend on credit score, loan amount, and term length."
    },
    {
      question: "How do I make loan repayments?",
      answer: "Repayments can be made through your dashboard using bank transfer, card payment, or automatic deduction. You can view your repayment schedule and set up auto-pay for convenience."
    },
    {
      question: "What investment options are available?",
      answer: "We offer Fixed Deposits (8.5% p.a.), Mutual Funds (12-15% p.a.), and Equity Shares (15-20% p.a.). Each option has different risk levels and minimum investment amounts."
    },
    {
      question: "How are investment returns calculated?",
      answer: "Returns are calculated based on the investment type and market performance. Fixed deposits offer guaranteed returns, while mutual funds and equity shares have variable returns based on market conditions."
    },
    {
      question: "Is my personal and financial information secure?",
      answer: "Yes, we use bank-level encryption and security measures. All data is encrypted in transit and at rest. We comply with financial regulations and never share your information without consent."
    },
    {
      question: "How can I update my profile information?",
      answer: "Go to Settings > Profile in your dashboard to update personal information, contact details, and banking information. Some changes may require verification."
    },
    {
      question: "What should I do if I can't make a payment on time?",
      answer: "Contact our support team immediately if you anticipate payment difficulties. We can discuss restructuring options, payment deferrals, or alternative arrangements to help you manage your loan."
    }
  ];

  const supportStats = [
    {
      icon: Clock,
      title: "Average Response Time",
      value: "< 2 hours",
      description: "During business hours"
    },
    {
      icon: MessageSquare,
      title: "Support Channels",
      value: "4",
      description: "Contact methods available"
    },
    {
      icon: HelpCircle,
      title: "Resolution Rate", 
      value: "98.5%",
      description: "First contact resolution"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Ticket Created",
      description: "Your support request has been submitted. We'll respond within 2 hours during business hours.",
    });
    setContactForm({
      subject: "",
      category: "",
      priority: "",
      message: ""
    });
  };

  return (
    <DashboardLayout userType={userType}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Support Center</h1>
          <p className="text-muted-foreground">Get help with your Elite Capital account and services</p>
        </div>

        {/* Support Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          {supportStats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm font-medium text-foreground">{stat.title}</p>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="contact" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Contact Support */}
          <TabsContent value="contact" className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Submit a Support Request</CardTitle>
                  <CardDescription>
                    Describe your issue and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your issue"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select onValueChange={(value) => setContactForm({...contactForm, category: value})} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="loan">Loan Support</SelectItem>
                            <SelectItem value="investment">Investment Support</SelectItem>
                            <SelectItem value="payment">Payment Issues</SelectItem>
                            <SelectItem value="account">Account Management</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select onValueChange={(value) => setContactForm({...contactForm, priority: value})} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Provide detailed information about your issue..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" variant="elite">
                      <Send className="h-4 w-4 mr-2" />
                      Submit Support Request
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-4">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Other Ways to Reach Us</CardTitle>
                    <CardDescription>Choose your preferred contact method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <Badge variant="outline" className="text-xs">Mon-Fri 9AM-6PM EST</Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@elitecapital.com</p>
                        <Badge variant="outline" className="text-xs">Response within 4 hours</Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Live Chat</p>
                        <p className="text-sm text-muted-foreground">Available in dashboard</p>
                        <Badge className="bg-success text-success-foreground text-xs">Online Now</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      For urgent financial emergencies or security concerns:
                    </p>
                    <p className="font-medium text-destructive">+1 (555) 911-HELP</p>
                    <p className="text-xs text-muted-foreground">Available 24/7</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find quick answers to common questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources */}
          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Helpful guides and documentation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "User Guide: Getting Started",
                    "Loan Application Process",
                    "Investment Guide for Beginners",
                    "Security Best Practices",
                    "Payment Methods Guide",
                    "Account Management Tips"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 border rounded hover:bg-accent/50 transition-colors cursor-pointer">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">{doc}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Step-by-step video guides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] bg-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-2" />
                      <p>Video Tutorial Library</p>
                      <p className="text-sm">Interactive tutorials would be embedded here</p>
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

export default Support;