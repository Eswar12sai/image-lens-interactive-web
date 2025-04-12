
import { useState, useRef } from "react";
import { UploadIcon, ImageIcon, FolderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
}

export const UploadZone = ({ onUpload }: UploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length === 0) {
      toast.error("Please drop image files only");
      return;
    }
    
    simulateUpload(files);
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const files = Array.from(e.target.files);
    simulateUpload(files);
  };
  
  const simulateUpload = (files: File[]) => {
    setIsUploading(true);
    setProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          onUpload(files);
          return 0;
        }
        return prev + 5;
      });
    }, 100);
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-xl transition-all duration-200 p-8",
        isDragging 
          ? "border-primary bg-primary/10" 
          : "border-border/50 hover:border-primary/50 hover:bg-muted/30",
        isUploading ? "pointer-events-none" : "cursor-pointer"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleButtonClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        {isUploading ? (
          <>
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center animate-pulse">
              <UploadIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="space-y-2 w-full max-w-md">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">Uploading... {progress}%</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lens-purple to-lens-blue/70 flex items-center justify-center animate-float">
              <ImageIcon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium">Drag & Drop Images</h3>
              <p className="text-muted-foreground mt-1 mb-4">
                or click to select files from your device
              </p>
              <Button className="gap-2">
                <FolderIcon className="h-4 w-4" />
                <span>Select Files</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
