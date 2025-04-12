
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MessageSquareIcon } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: ""
    }
  });
  
  const onSubmit = (data: any) => {
    // In a real app, this would send the form data to a server
    console.log(data);
    toast.success("Your message has been sent! We'll be in touch shortly.");
    form.reset();
  };

  return (
    <MainLayout>
      <div className="container py-12 px-4 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <section className="glass rounded-xl p-8 md:p-12 animate-fade-in mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
              <MessageSquareIcon className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions about LeaseLens? Our team is here to help you transform your commercial real estate leasing process.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Contact Form */}
          <div className="md:col-span-3 glass rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your commercial real estate needs..." 
                          className="h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        1234 Business Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567<br />
                        Mon-Fri 9am-6pm EST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MailIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        info@leaselens.com<br />
                        support@leaselens.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ClockIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday-Friday: 9am-6pm EST<br />
                        Saturday-Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Office Location</h3>
                <div className="rounded-lg overflow-hidden h-[200px] bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&auto=format&fit=crop" 
                    alt="Office Location" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <section className="glass rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">How quickly can I get started with LeaseLens?</h3>
              <p className="text-muted-foreground text-sm">
                Most clients are up and running within 48 hours. Our onboarding team will guide you through the setup process and provide training for your team.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Can LeaseLens integrate with our existing systems?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, LeaseLens offers API integrations with most popular CRM, property management, and accounting systems used in commercial real estate.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Is my data secure with LeaseLens?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely. We employ bank-level encryption, regular security audits, and comply with all industry standards for data protection.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Do you offer custom solutions for enterprise clients?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, we offer tailored enterprise solutions for larger organizations with specific needs. Contact our sales team to discuss your requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Contact;
