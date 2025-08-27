import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fintech.jpg";
import { useState } from "react"


import { Menu, X } from "lucide-react"

const LandingPage = () => {
  const services = [
    {
      title: "Personal Loans",
      description: "Quick and easy personal loans with competitive rates for your immediate needs.",
      features: ["Up to TZS 50,000", "24-hour approval", "Flexible terms"],
      
    },
    {
      title: "Business Loans", 
      description: "Fuel your business growth with our tailored business financing solutions.",
      features: ["Up to TZS 500,000", "Business credit building", "Equipment financing"]
    },
    {
      title: "Emergency Loans",
      description: "Fast emergency funding when you need it most, available 24/7.",
      features: ["Same-day approval", "No collateral required", "Instant disbursement"]
    },
    {
      title: "Education & Medical",
      description: "Specialized loans for education and medical expenses with favorable terms.",
      features: ["Deferred payments", "Low interest rates", "Flexible repayment"]
    }
  ];

  const investments = [
    {
      title: "Fixed Deposits",
      description: "Secure your future with guaranteed returns on our fixed deposit schemes.",
      return: "8.5% p.a."
    },
    {
      title: "Mutual Funds",
      description: "Diversified portfolio management for long-term wealth creation.",
      return: "12-15% p.a."
    },
    {
      title: "Equity Shares",
      description: "Direct investment opportunities in Elite Capital growth.",
      return: "15-20% p.a."
    }
  ];

  const stats = [
    { value: "50,000+", label: "Happy Clients" },
    { value: "$2.5B+", label: "Loans Disbursed" },
    { value: "15%", label: "Average Returns" },
    { value: "24/7", label: "Customer Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Elite Capital helped me expand my business with their quick approval process and excellent customer service.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investor",
      content: "The investment returns have been consistently strong. Their transparency and professionalism are outstanding.",
      rating: 5
    }
  ];

   const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
 <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gradient">Elite Finance Hub</h1>
            {/* <img className="" src="../../public/logo.jpeg" alt="d"  /> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="hero">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 text-foreground hover:text-primary"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-64 
               /* full black background */
              border-r border-border/40 shadow-lg 
              z-50 p-6 flex flex-col space-y-6 
              transform transition-transform duration-300 
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-xl font-bold text-white">Elite Capital</h1>
    <button onClick={() => setIsOpen(false)} className="p-2 text-white">
      <X size={24} />
    </button>
  </div>

  <nav className="flex flex-col space-y-4">
    <a
      href="#services"
      className="text-gray-300 hover:text-primary transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Services
    </a>
    <a
      href="#about"
      className="text-gray-300 hover:text-primary transition-colors"
      onClick={() => setIsOpen(false)}
    >
      About
    </a>
    <a
      href="#contact"
      className="text-gray-300 hover:text-primary transition-colors"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </a>
    <Link to="/login" onClick={() => setIsOpen(false)}>
      <Button variant="outline" className="w-full">
        Login
      </Button>
    </Link>
    <Link to="/register" onClick={() => setIsOpen(false)}>
      <Button variant="hero" className="w-full">
        Get Started
      </Button>
    </Link>
  </nav>
  </div>
    </nav>
 
      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <img
            src={heroImage}
            alt='Elite Capital Fintech Solutions'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 gradient-hero opacity-80'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='animate-slide-up'>
            <Badge className='mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20'>
              Trusted by 50,000+ clients worldwide
            </Badge>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
              Elite Financial
              <span className='block text-warning'>Solutions</span>
            </h1>
            <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Empowering your financial journey with innovative loan products
              and investment opportunities. Join thousands who trust Elite
              Capital for their financial growth.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/register'>
                <Button size='lg' variant='hero' className='group'>
                  Apply for Loan
                  <ArrowRight className='group-hover:translate-x-1 transition-transform' />
                </Button>
              </Link>
              <Link to='/register'>
                <Button
                  size='lg'
                  variant='outline'
                  className='bg-white/10 border-white/30 text-white hover:bg-white/20'>
                  Invest Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-accent/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              About Elite Capital
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Founded with a vision to democratize financial services, Elite
              Capital Ltd has been at the forefront of fintech innovation,
              providing accessible loans and profitable investment
              opportunities.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div>
                <h3 className='text-2xl font-semibold text-foreground mb-4'>
                  Our Mission
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  To provide innovative, accessible, and transparent financial
                  solutions that empower individuals and businesses to achieve
                  their goals while generating sustainable returns for our
                  investors.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-foreground mb-4'>
                  Our Vision
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  To become the leading fintech platform that bridges the gap
                  between those who need capital and those who have it, creating
                  value for all stakeholders in the ecosystem.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className='text-center shadow-card hover-lift'>
                  <CardContent className='p-6'>
                    <div className='text-3xl font-bold text-gradient mb-2'>
                      {stat.value}
                    </div>
                    <div className='text-muted-foreground'>{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Our Services
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Comprehensive financial solutions designed to meet your unique
              needs
            </p>
          </div>

          {/* Loan Products */}
          <div className='mb-16'>
            <h3 className='text-2xl font-semibold text-foreground mb-8 text-center'>
              Loan Products
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {services.map((service, index) => (
                <Card
                  key={index}
                  className='shadow-card hover-lift gradient-card'>
                  <CardHeader>
                    <CardTitle className='text-foreground'>
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className='space-y-2'>
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className='flex items-center text-sm text-muted-foreground'>
                          <CheckCircle className='h-4 w-4 text-success mr-2' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investment Opportunities */}
          <div>
            <h3 className='text-2xl font-semibold text-foreground mb-8 text-center'>
              Investment Opportunities
            </h3>
            <div className='grid md:grid-cols-3 gap-6'>
              {investments.map((investment, index) => (
                <Card
                  key={index}
                  className='shadow-card hover-lift gradient-card'>
                  <CardHeader>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-foreground'>
                        {investment.title}
                      </CardTitle>
                      <Badge
                        variant='outline'
                        className='text-success border-success'>
                        {investment.return}
                      </Badge>
                    </div>
                    <CardDescription>{investment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant='outline' className='w-full'>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-accent/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              Why Choose Elite Capital?
            </h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: Shield,
                title: "Secure & Trustworthy",
                description:
                  "Bank-level security with regulatory compliance and transparent operations.",
              },
              {
                icon: Clock,
                title: "Quick Processing",
                description:
                  "Fast loan approvals and instant investment processing with 24/7 support.",
              },
              {
                icon: TrendingUp,
                title: "Competitive Returns",
                description:
                  "Industry-leading interest rates for loans and superior returns for investors.",
              },
            ].map((feature, index) => (
              <div key={index} className='text-center group'>
                <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors'>
                  <feature.icon className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-xl font-semibold text-foreground mb-4'>
                  {feature.title}
                </h3>
                <p className='text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
              What Our Clients Say
            </h2>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className='shadow-card'>
                <CardContent className='p-8'>
                  <div className='flex mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='h-5 w-5 text-warning fill-current'
                      />
                    ))}
                  </div>
                  <p className='text-foreground mb-6 leading-relaxed'>
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className='font-semibold text-foreground'>
                      {testimonial.name}
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className='bg-primary text-primary-foreground'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='col-span-2'>
              <h3 className='text-2xl font-bold mb-4'>Elite Capital Ltd</h3>
              <p className='text-primary-foreground/80 mb-6 leading-relaxed'>
                Your trusted partner in financial growth and wealth creation.
                Building a better financial future together.
              </p>
              <div className='flex space-x-4'>
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href='#'
                    className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'>
                    <Icon className='h-5 w-5' />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
              <div className='space-y-3'>
                <div className='flex items-center'>
                  <Phone className='h-4 w-4 mr-3' />
                  <span className='text-primary-foreground/80'>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className='flex items-center'>
                  <Mail className='h-4 w-4 mr-3' />
                  <span className='text-primary-foreground/80'>
                    contact@elitecapital.com
                  </span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='h-4 w-4 mr-3' />
                  <span className='text-primary-foreground/80'>
                    123 Financial District, NY 10004
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>Legal</h4>
              <div className='space-y-2'>
                <a
                  href='#'
                  className='block text-primary-foreground/80 hover:text-white transition-colors'>
                  Privacy Policy
                </a>
                <a
                  href='#'
                  className='block text-primary-foreground/80 hover:text-white transition-colors'>
                  Terms of Service
                </a>
                <a
                  href='#'
                  className='block text-primary-foreground/80 hover:text-white transition-colors'>
                  Risk Disclosure
                </a>
                <a
                  href='#'
                  className='block text-primary-foreground/80 hover:text-white transition-colors'>
                  Regulatory Compliance
                </a>
              </div>
            </div>
          </div>

          <div className='border-t border-white/20 mt-12 pt-8 text-center'>
            <p className='text-primary-foreground/60'>
              © 2024 Elite Capital Ltd. All rights reserved. Licensed Financial
              Services Provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;