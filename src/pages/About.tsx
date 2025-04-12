
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BuildingIcon, UsersIcon, TargetIcon, AwardIcon } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container py-12 px-4 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <section className="glass rounded-xl p-8 md:p-12 animate-fade-in mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
              <UsersIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              About LeaseLens
            </h1>
            <p className="text-muted-foreground text-lg">
              Transforming the commercial real estate industry through innovative technology and data-driven insights.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, LeaseLens emerged from a simple observation: commercial real estate professionals were drowning in paperwork and struggling to extract meaningful insights from their lease agreements.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founders, with backgrounds in commercial real estate and artificial intelligence, set out to create a platform that would transform how the industry approaches lease analysis, market research, and risk management.
              </p>
              <p className="text-muted-foreground">
                Today, LeaseLens serves hundreds of clients across the globe, from boutique firms to Fortune 500 companies, all seeking to make smarter, data-driven real estate decisions.
              </p>
            </div>
            <div className="md:w-1/2 p-6 glass rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop" 
                alt="Modern Office Building" 
                className="rounded-lg w-full" 
              />
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <TargetIcon className="w-6 h-6 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower real estate professionals with intelligent tools that transform complex lease data into actionable insights, enabling smarter decisions and better outcomes for all stakeholders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardHeader>
                <AwardIcon className="w-6 h-6 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the global standard for commercial real estate intelligence, creating a future where every lease decision is informed by comprehensive data, predictive analytics, and market expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-12 glass rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <BuildingIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                We constantly push the boundaries of what's possible in real estate technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <TargetIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-muted-foreground text-sm">
                We believe in open, honest communication and clearly demonstrable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <AwardIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We are committed to delivering exceptional quality in everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground text-center mb-3">CEO & Co-Founder</p>
                <Separator className="mb-3" />
                <p className="text-sm text-muted-foreground">
                  Former VP at a global commercial real estate firm with 15+ years of industry experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
                    alt="David Chen" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">David Chen</h3>
                <p className="text-sm text-muted-foreground text-center mb-3">CTO & Co-Founder</p>
                <Separator className="mb-3" />
                <p className="text-sm text-muted-foreground">
                  AI researcher and former tech lead at a major tech company specializing in machine learning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                    alt="Maria Rodriguez" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-center mb-1">Maria Rodriguez</h3>
                <p className="text-sm text-muted-foreground text-center mb-3">COO</p>
                <Separator className="mb-3" />
                <p className="text-sm text-muted-foreground">
                  Operations expert with experience scaling SaaS platforms in the proptech industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
