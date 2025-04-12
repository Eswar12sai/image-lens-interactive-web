
import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { UploadZone } from "@/components/UploadZone";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { PlusIcon, WandIcon, Wand2Icon } from "lucide-react";
import { toast } from "sonner";

// Sample image data (in a real app, this would come from an API/backend)
const SAMPLE_IMAGES = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&auto=format&fit=crop",
    alt: "Woman using laptop",
    title: "Home office setup"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    alt: "Laptop code",
    title: "Programming screen"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
    alt: "Circuit board",
    title: "Tech hardware"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    alt: "Code on screen",
    title: "Development environment"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    alt: "Person using laptop",
    title: "Modern workspace"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    alt: "Woman using laptop",
    title: "Remote work"
  }
];

const Index = () => {
  const [images, setImages] = useState(SAMPLE_IMAGES);
  const [showUpload, setShowUpload] = useState(false);
  
  const handleUpload = (files: File[]) => {
    // In a real app, we would upload these files to a server
    // Here we just create local object URLs for demonstration
    const newImages = files.map((file, index) => ({
      id: Date.now().toString() + index,
      src: URL.createObjectURL(file),
      alt: file.name,
      title: file.name.split('.')[0]
    }));
    
    setImages(prev => [...newImages, ...prev]);
    setShowUpload(false);
    toast.success(`${files.length} image${files.length > 1 ? 's' : ''} uploaded successfully!`);
  };
  
  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      images.forEach(image => {
        if (image.src.startsWith('blob:')) {
          URL.revokeObjectURL(image.src);
        }
      });
    };
  }, [images]);
  
  return (
    <MainLayout>
      <div className="container py-8 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col space-y-8">
          <section className="glass rounded-xl p-6 md:p-8 animate-fade-in">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-block p-3 rounded-full bg-primary/20 mb-2">
                <Wand2Icon className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Explore Images with AI-Powered Lens
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Upload, analyze, and transform your images with our intelligent tools. 
                Zoom in with precision and discover details you never noticed before.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button size="lg" className="gap-2">
                  <PlusIcon className="w-4 h-4" />
                  <span>Upload Images</span>
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <WandIcon className="w-4 h-4" />
                  <span>Try AI Features</span>
                </Button>
              </div>
            </div>
          </section>
          
          {showUpload ? (
            <section className="glass rounded-xl p-6 md:p-8 animate-zoom-in">
              <UploadZone onUpload={handleUpload} />
            </section>
          ) : (
            <section className="flex flex-col md:flex-row gap-4">
              <div className="glass rounded-xl p-6 md:flex-1 animate-fade-in">
                <h2 className="text-xl font-medium mb-4">Start Adding Images</h2>
                <p className="text-muted-foreground mb-4">
                  Upload your images to explore them with our advanced lens technology and AI tools.
                </p>
                <Button onClick={() => setShowUpload(true)}>Upload Images</Button>
              </div>
              
              <div className="glass rounded-xl p-6 md:flex-1 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-xl font-medium mb-4">AI Features</h2>
                <p className="text-muted-foreground mb-4">
                  Our AI can enhance, analyze, and help you discover new aspects of your images.
                </p>
                <Button variant="secondary">Explore AI Tools</Button>
              </div>
              
              <div className="glass rounded-xl p-6 md:flex-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-xl font-medium mb-4">Interactive Lens</h2>
                <p className="text-muted-foreground mb-4">
                  Use our magnifying lens to zoom in and explore the details of your images.
                </p>
                <Button variant="outline">Learn More</Button>
              </div>
            </section>
          )}
          
          <section className="glass rounded-xl p-6 md:p-8 animate-fade-in">
            <Gallery images={images} />
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
