import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-elegant border-0 bg-background/95 backdrop-blur-sm">
        <CardContent className="pt-8 pb-6 text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl font-bold text-primary/20 animate-pulse">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center animate-bounce">
                <Search className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-muted-foreground leading-relaxed">
              The page you're looking for seems to have wandered off into the financial stratosphere. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Button asChild size="lg" className="w-full">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link to="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Need help? Contact our{" "}
              <Link to="/dashboard/support" className="text-primary hover:underline">
                support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
