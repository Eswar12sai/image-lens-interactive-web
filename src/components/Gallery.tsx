
import { useState } from "react";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { GridIcon, List, SlidersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
    title: string;
  }[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setViewerOpen(true);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Your Images</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-none",
                viewMode === "grid" && "bg-primary/20"
              )}
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-none",
                viewMode === "list" && "bg-primary/20"
              )}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <SlidersIcon className="h-3.5 w-3.5" />
            <span>Filter</span>
          </Button>
        </div>
      </div>
      
      <div className={cn(
        viewMode === "grid" 
          ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" 
          : "space-y-2"
      )}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            src={image.src}
            alt={image.alt}
            title={image.title}
            onClick={() => handleImageClick(image.src)}
          />
        ))}
      </div>
      
      <ImageViewer
        src={selectedImage}
        open={viewerOpen}
        onOpenChange={setViewerOpen}
      />
    </div>
  );
};
