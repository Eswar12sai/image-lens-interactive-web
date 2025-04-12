
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BuildingIcon, PieChartIcon, ShieldCheckIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      <div className="container py-12 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col space-y-12">
          {/* Hero Section */}
          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
                <BuildingIcon className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Smarter Commercial Lease Management
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Leverage AI-powered analytics, market insights, and risk management tools to optimize your commercial real estate decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button size="lg" asChild className="gap-2">
                  <Link to="/solutions">
                    <span>Explore Solutions</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Our Solutions</h2>
              <p className="text-muted-foreground mt-2">Comprehensive tools for modern real estate professionals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <BuildingIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Lease Analyzer</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Automatically extract key terms, conditions, and obligations from complex lease documents with our AI-powered analysis.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/solutions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <PieChartIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Make informed decisions with real-time market analytics, trend forecasting, and competitive property comparisons.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/solutions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Identify and mitigate potential risks with advanced assessment tools, compliance tracking, and liability analysis.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/solutions">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Stats Section */}
          <section className="glass rounded-xl p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Trusted by Industry Leaders</h2>
              <p className="text-muted-foreground">Powering commercial real estate decisions worldwide</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Enterprise Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">10K+</p>
                <p className="text-sm text-muted-foreground">Properties Analyzed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">$2B+</p>
                <p className="text-sm text-muted-foreground">Transaction Value</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Client Retention</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="glass rounded-xl p-8 md:p-12 animate-fade-in bg-gradient-to-r from-primary/20 to-secondary/20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Transform Your Leasing Process?</h2>
              <p className="text-muted-foreground">
                Join hundreds of commercial real estate professionals who are saving time, reducing risk, and making smarter decisions with LeaseLens.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button size="lg" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
