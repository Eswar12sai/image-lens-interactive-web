
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BuildingIcon, SearchIcon, BarChart2Icon, ShieldCheckIcon, CheckIcon, PieChartIcon, LineChartIcon, BarChartIcon } from "lucide-react";

const Solutions = () => {
  return (
    <MainLayout>
      <div className="container py-12 px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed to optimize every aspect of commercial real estate leasing
          </p>
        </div>

        <Tabs defaultValue="ai-analyzer" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ai-analyzer" className="text-sm">AI Lease Analyzer</TabsTrigger>
            <TabsTrigger value="market-insights" className="text-sm">Market Insights</TabsTrigger>
            <TabsTrigger value="risk-management" className="text-sm">Risk Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai-analyzer" className="space-y-8">
            <div className="glass rounded-xl p-8 md:p-12 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
                    <BuildingIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Lease Analysis</h2>
                  <p className="text-muted-foreground mb-6">
                    Our advanced AI algorithms automatically extract, categorize, and analyze key terms and conditions from your lease documents, saving you hours of manual review and reducing human error.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Automatic extraction of key clauses and obligations</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Comparison with market standards and best practices</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Flag potential risks and unfavorable terms</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Summarize complex documents into actionable insights</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 glass rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop" 
                    alt="AI Lease Analyzer Dashboard" 
                    className="rounded-lg w-full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardHeader>
                  <SearchIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Smart Search</CardTitle>
                  <CardDescription>Find key terms across multiple leases instantly</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our natural language processing enables you to search across your entire lease portfolio using everyday language and get context-aware results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <LineChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Comparative Analysis</CardTitle>
                  <CardDescription>Compare terms against market standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    See how your lease terms stack up against industry standards and similar properties in your target market.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <BarChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Historical Tracking</CardTitle>
                  <CardDescription>Track changes across lease versions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Monitor how terms evolve through negotiations and across lease renewals to ensure continuity and catch unfavorable changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="market-insights" className="space-y-8">
            <div className="glass rounded-xl p-8 md:p-12 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
                    <BarChart2Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Real-Time Market Analytics</h2>
                  <p className="text-muted-foreground mb-6">
                    Access comprehensive market data and analytics to make informed decisions about property values, rental rates, and investment opportunities in your target markets.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Competitive property comparisons by location and class</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Predictive analytics for market trends and forecasts</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Supply and demand analysis by property type</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Custom reporting and visualization tools</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 glass rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" 
                    alt="Market Insights Dashboard" 
                    className="rounded-lg w-full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardHeader>
                  <PieChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Market Benchmarking</CardTitle>
                  <CardDescription>Compare properties against market standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Benchmark lease terms, rental rates, and other key metrics against comparable properties in your target market.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <BarChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Trend Forecasting</CardTitle>
                  <CardDescription>Predict future market movements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our AI-powered forecasting models predict market trends to help you make strategic decisions with confidence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <SearchIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Opportunity Finder</CardTitle>
                  <CardDescription>Discover undervalued properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Identify properties with potential for value appreciation or above-market returns based on our proprietary scoring algorithm.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="risk-management" className="space-y-8">
            <div className="glass rounded-xl p-8 md:p-12 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Comprehensive Risk Assessment</h2>
                  <p className="text-muted-foreground mb-6">
                    Identify and mitigate potential risks in your lease agreements and property portfolio with our advanced risk assessment tools.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Automatic risk detection in lease agreements</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Compliance tracking and notification system</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Financial risk modeling and stress testing</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0" />
                      <p>Environmental and regulatory risk assessments</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6 glass rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop" 
                    alt="Risk Management Dashboard" 
                    className="rounded-lg w-full" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardHeader>
                  <ShieldCheckIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Compliance Tracker</CardTitle>
                  <CardDescription>Stay ahead of regulatory requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Automatically track compliance requirements and get alerts for upcoming deadlines or potential violations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <LineChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Financial Modeling</CardTitle>
                  <CardDescription>Stress test your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Model different financial scenarios to understand how market changes might impact your property portfolio.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <BarChartIcon className="w-5 h-5 text-primary mb-2" />
                  <CardTitle>Risk Scoring</CardTitle>
                  <CardDescription>Quantify and compare risks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our proprietary risk scoring system helps you quantify and prioritize risks across your entire property portfolio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Solutions;
