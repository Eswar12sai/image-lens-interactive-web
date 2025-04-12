
import React from "react";
import { BuildingIcon, BarChart2Icon, ShieldCheckIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-background/90">
      <header className="w-full py-4 px-6 md:px-8 glass border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <BuildingIcon className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              LeaseLens
            </h1>
          </div>

          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="block px-4 py-2 text-sm">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:grid md:grid-cols-2 lg:w-[500px]">
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <BarChart2Icon className="h-4 w-4 text-primary" />
                          <h4 className="text-sm font-medium">AI Lease Analyzer</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">Automated lease analysis with AI-powered insights.</p>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <BarChart2Icon className="h-4 w-4 text-primary" />
                          <h4 className="text-sm font-medium">Market Insights</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">Real-time analytics on market trends and opportunities.</p>
                      </div>
                      <div className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <ShieldCheckIcon className="h-4 w-4 text-primary" />
                          <h4 className="text-sm font-medium">Risk Management</h4>
                        </div>
                        <p className="text-xs text-muted-foreground">Mitigate risks with advanced assessment tools.</p>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/about" className="block px-4 py-2 text-sm">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/contact" className="block px-4 py-2 text-sm">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        {children}
      </main>

      <footer className="w-full py-3 glass text-center text-xs text-muted-foreground border-t border-white/5">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-6 text-left">
          <div>
            <h3 className="text-sm font-medium mb-2">LeaseLens</h3>
            <p className="text-xs text-muted-foreground">Simplifying commercial real estate leasing through smart tools and AI-powered solutions.</p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="text-xs text-muted-foreground hover:text-white">Home</Link></li>
              <li><Link to="/solutions" className="text-xs text-muted-foreground hover:text-white">Solutions</Link></li>
              <li><Link to="/about" className="text-xs text-muted-foreground hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-xs text-muted-foreground hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Contact</h3>
            <address className="not-italic text-xs text-muted-foreground">
              <p>1234 Business Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-1">info@leaselens.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <p className="pt-4 border-t border-white/5">© {new Date().getFullYear()} LeaseLens • Transforming Commercial Real Estate</p>
      </footer>
    </div>
  );
};

export default MainLayout;
