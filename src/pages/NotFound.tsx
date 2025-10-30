import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Text */}
        <div className="space-y-4">
          <h1 className="text-8xl font-orbitron font-black gradient-text animate-pulse-neon">
            404
          </h1>
          <h2 className="text-3xl font-orbitron font-bold text-foreground">
            Monster Not Found
          </h2>
          <p className="text-muted-foreground font-rajdhani text-lg">
            The page you're looking for has vanished into the digital void. 
            Even our monsters couldn't track it down.
          </p>
        </div>

        {/* Glitch Effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-full animate-pulse" />
          <div className="relative w-32 h-32 mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-full flex items-center justify-center">
            <span className="text-4xl">👾</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate("/")}
            className="w-full"
          >
            <Home className="h-5 w-5 mr-2" />
            Return Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="text-sm text-muted-foreground">
          <p>Or try these popular pages:</p>
          <div className="flex justify-center gap-4 mt-2">
            <button
              onClick={() => navigate("/shop")}
              className="hover:text-primary transition-colors"
            >
              Shop
            </button>
            <span>•</span>
            <button
              onClick={() => navigate("/ai-studio")}
              className="hover:text-primary transition-colors"
            >
              AI Studio
            </button>
            <span>•</span>
            <button
              onClick={() => navigate("/drops")}
              className="hover:text-primary transition-colors"
            >
              Drops
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
