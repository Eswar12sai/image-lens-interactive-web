
import React from "react";
import { Wand2Icon, ImageIcon, UploadIcon, UserIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-background/90">
      <header className="w-full py-4 px-6 md:px-8 glass border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lens-purple to-lens-magenta flex items-center justify-center animate-pulse-glow">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              LensAI
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="text-sm" size="sm">
              Gallery
            </Button>
            <Button variant="ghost" className="text-sm" size="sm">
              Editor
            </Button>
            <Button variant="ghost" className="text-sm" size="sm">
              AI Tools
            </Button>
            <Button variant="ghost" className="text-sm" size="sm">
              Help
            </Button>
          </nav>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="rounded-full w-9 h-9 p-0">
              <UserIcon className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="rounded-full w-9 h-9 p-0">
              <SettingsIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        {children}
      </main>

      <footer className="w-full py-3 glass text-center text-xs text-muted-foreground border-t border-white/5">
        <p>© {new Date().getFullYear()} LensAI • Powered by AI Image Processing</p>
      </footer>
    </div>
  );
};

export default MainLayout;
