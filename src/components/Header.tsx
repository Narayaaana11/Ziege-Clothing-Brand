import { useState, useEffect } from "react";
import { Menu, User, Search, Zap, LogOut, UserCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartSheet from "@/components/CartSheet";
import WishlistSheet from "@/components/WishlistSheet";
import EnhancedSearch from "@/components/EnhancedSearch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useInView } from "@/hooks/useInView";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { isAdmin } = useIsAdmin(user?.id);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged Out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };

  const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "AI Studio", href: "/ai-studio" },
    { name: "Drops", href: "/drops" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <div ref={ref} className="absolute top-0 h-1" />
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 relative scan-lines",
        inView 
          ? "bg-background/70 backdrop-blur-lg border-b border-border/30 shadow-none" 
          : "bg-background/95 backdrop-blur-xl border-b border-primary/30 shadow-cyber"
      )}>
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-neon" />
        
        {/* Enhanced Background with gradient blur effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/90 backdrop-blur-xl border-b border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced effects */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-6 w-6 text-primary group-hover:animate-pulse transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))]" />
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-300" />
            </div>
            <div className="relative">
              <h1 className="text-2xl font-orbitron font-black gradient-text group-hover:scale-105 transition-transform duration-300">
                AKUMA
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary"></div>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-foreground hover:text-primary transition-colors duration-300 font-rajdhani font-medium tracking-wide relative group py-2",
                  location.pathname === item.href && "text-primary"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
                <span className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <EnhancedSearch value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Desktop Actions with glow effects */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="lg:hidden relative group">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary transition-colors duration-300"
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <div className="absolute inset-0 bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="relative group">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:text-primary transition-colors duration-300">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-border">
                    <DropdownMenuItem disabled className="font-rajdhani text-xs text-muted-foreground">
                      {user.email}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/profile")} className="font-rajdhani">
                      <UserCircle className="h-4 w-4 mr-2" />
                      My Profile
                    </DropdownMenuItem>
                    {isAdmin && (
                      <DropdownMenuItem onClick={() => navigate("/admin")} className="font-rajdhani">
                        <Shield className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="font-rajdhani text-destructive focus:text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary transition-colors duration-300"
                  onClick={() => navigate("/auth")}
                >
                  <User className="h-5 w-5" />
                </Button>
              )}
              <div className="absolute inset-0 bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="relative group">
              <ThemeToggle />
              <div className="absolute inset-0 bg-primary/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
            <WishlistSheet />
            <CartSheet />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden border-t border-border/30",
            isMobileSearchOpen ? "max-h-20 opacity-100 py-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4">
            <EnhancedSearch value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-500 overflow-hidden backdrop-blur-xl",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 space-y-6 border-t border-border/30 bg-gradient-to-b from-background/95 to-background/90">
            {/* Navigation Links */}
            <div className="space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block text-lg font-rajdhani font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary",
                    location.pathname === item.href && "text-primary bg-primary/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="flex items-center justify-between px-4 pt-4 border-t border-border/30">
              <div className="flex items-center space-x-3">
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-border">
                      <DropdownMenuItem disabled className="font-rajdhani text-xs text-muted-foreground">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => { navigate("/profile"); setIsMenuOpen(false); }} className="font-rajdhani">
                        <UserCircle className="h-4 w-4 mr-2" />
                        My Profile
                      </DropdownMenuItem>
                      {isAdmin && (
                        <DropdownMenuItem onClick={() => { navigate("/admin"); setIsMenuOpen(false); }} className="font-rajdhani">
                          <Shield className="h-4 w-4 mr-2" />
                          Admin Dashboard
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="font-rajdhani text-destructive focus:text-destructive">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:text-primary"
                    onClick={() => {
                      navigate("/auth");
                      setIsMenuOpen(false);
                    }}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                )}
                <ThemeToggle />
              </div>
              <div className="flex items-center space-x-3">
                <WishlistSheet />
                <CartSheet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;