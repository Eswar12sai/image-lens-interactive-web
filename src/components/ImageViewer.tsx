
import { useState, useRef, useEffect } from "react";
import { 
  ImageIcon, ZoomInIcon, ZoomOutIcon, RotateCwIcon, DownloadIcon, 
  SlidersIcon, WandIcon, ArrowLeftIcon, ShareIcon, XIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

interface ImageViewerProps {
  src?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LENS_SIZE = 200;

export const ImageViewer = ({ src, open, onOpenChange }: ImageViewerProps) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [enableLens, setEnableLens] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableLens || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setLensPosition({ 
      x: Math.max(0, Math.min(x - LENS_SIZE/2, rect.width - LENS_SIZE)), 
      y: Math.max(0, Math.min(y - LENS_SIZE/2, rect.height - LENS_SIZE))
    });
  };
  
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 300));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-hidden glass p-0 border-white/5">
        <DialogHeader className="p-4 border-b border-white/5 flex flex-row items-center">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => onOpenChange(false)} 
              className="rounded-full h-8 w-8"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
            <DialogTitle>Image Viewer</DialogTitle>
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ShareIcon className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <DownloadIcon className="h-4 w-4" />
              <span>Download</span>
            </Button>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <XIcon className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] h-[calc(90vh-8rem)]">
          <div 
            className="relative overflow-hidden bg-black/30 flex items-center justify-center h-full"
            onMouseMove={handleMouseMove}
            ref={containerRef}
          >
            {src ? (
              <div className="relative">
                <img
                  ref={imageRef}
                  src={src}
                  alt="Viewed image"
                  className="max-w-full max-h-[calc(90vh-8rem)] object-contain transition-transform duration-200"
                  style={{ 
                    transform: `scale(${zoomLevel/100}) rotate(${rotation}deg)`,
                  }}
                />
                {enableLens && (
                  <div 
                    className="lens-effect"
                    style={{
                      left: lensPosition.x,
                      top: lensPosition.y,
                      width: LENS_SIZE,
                      height: LENS_SIZE,
                      backgroundImage: `url(${src})`,
                      backgroundSize: `${imageRef.current?.naturalWidth! * zoomLevel * 2 / 100}px`,
                      backgroundPosition: `-${lensPosition.x * 2}px -${lensPosition.y * 2}px`,
                      transform: `rotate(${rotation}deg)`,
                    }}
                  />
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="h-16 w-16 mb-4 opacity-30" />
                <p>No image selected</p>
              </div>
            )}
          </div>
          
          <div className="h-full border-l border-white/5 overflow-y-auto">
            <Tabs defaultValue="tools" className="w-full">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="adjust">Adjust</TabsTrigger>
                <TabsTrigger value="ai">AI</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tools" className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Zoom & Rotation</h3>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 50}
                    >
                      <ZoomOutIcon className="h-4 w-4" />
                    </Button>
                    <Slider 
                      min={50} 
                      max={300} 
                      step={5} 
                      value={[zoomLevel]} 
                      onValueChange={(vals) => setZoomLevel(vals[0])} 
                      className="flex-1"
                    />
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 300}
                    >
                      <ZoomInIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{zoomLevel}%</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleRotate}
                      className="gap-1"
                    >
                      <RotateCwIcon className="h-3.5 w-3.5" />
                      <span>Rotate</span>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Lens Effect</h3>
                    <Button 
                      variant={enableLens ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setEnableLens(!enableLens)}
                      className="gap-1"
                    >
                      {enableLens ? "Disable" : "Enable"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {enableLens 
                      ? "Move your cursor over the image to use the lens effect" 
                      : "Enable the lens effect to examine details"}
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="adjust" className="p-4 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Brightness</h3>
                    <span className="text-xs text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Contrast</h3>
                    <span className="text-xs text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Saturation</h3>
                    <span className="text-xs text-muted-foreground">50%</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Sharpness</h3>
                    <span className="text-xs text-muted-foreground">30%</span>
                  </div>
                  <Slider defaultValue={[30]} max={100} step={1} />
                </div>
              </TabsContent>
              
              <TabsContent value="ai" className="p-4 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">AI Image Enhancement</h3>
                  <p className="text-xs text-muted-foreground">
                    Use AI to automatically enhance your image quality
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button variant="outline" className="gap-1">
                      <WandIcon className="h-3.5 w-3.5" />
                      <span>Enhance</span>
                    </Button>
                    <Button variant="outline" className="gap-1">
                      <SlidersIcon className="h-3.5 w-3.5" />
                      <span>Auto-Adjust</span>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <h3 className="text-sm font-medium">AI Object Detection</h3>
                  <p className="text-xs text-muted-foreground">
                    Identify and highlight objects in your image
                  </p>
                  <Button className="w-full mt-2">Detect Objects</Button>
                </div>
                
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <h3 className="text-sm font-medium">Image Analysis</h3>
                  <p className="text-xs text-muted-foreground">
                    Get AI-powered insights about your image
                  </p>
                  <Button variant="secondary" className="w-full mt-2">Analyze Image</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
