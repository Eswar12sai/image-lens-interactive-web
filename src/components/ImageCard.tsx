
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon, ZapIcon, DownloadIcon, MaximizeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  onClick: () => void;
}

export const ImageCard = ({ src, alt, title, onClick }: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "overflow-hidden border border-white/10 transition-all duration-300 bg-card/70",
        isHovered && "scale-[1.02] shadow-xl shadow-primary/20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative">
        <div className="relative aspect-square overflow-hidden group cursor-pointer" onClick={onClick}>
          <img 
            src={src} 
            alt={alt} 
            className={cn(
              "object-cover w-full h-full transition-transform duration-700",
              isHovered && "scale-105"
            )}
          />
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300",
            isHovered && "opacity-100"
          )}>
            <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end">
              <h3 className="text-sm font-medium text-white truncate">{title}</h3>
              
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-white/10 text-white">
                  <HeartIcon className="h-3.5 w-3.5" />
                </Button>
                <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full bg-white/10 text-white">
                  <ZapIcon className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
