import {
  Bell,
  ChevronsLeft,
  ChevronsRight,
  Cpu,
  LayoutDashboard,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type AdminSidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const navItems = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: Package,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    name: "AI Designs",
    href: "/admin/ai-designs",
    icon: Cpu,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: LineChart,
  },
];

const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const NavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary hover:bg-muted-foreground/10",
      isActive &&
        "text-brand-neon-red bg-brand-neon-red/10 hover:text-brand-neon-red hover:bg-brand-neon-red/20",
      !isOpen && "justify-center"
    );

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 h-screen border-r border-border-secondary bg-background-secondary transition-all duration-300 ease-in-out lg:static lg:block",
        isOpen ? "w-64" : "w-20",
        // Mobile state: hidden by default
        "w-64 -translate-x-full lg:translate-x-0"
      )}
    >
      <div className="flex h-full max-h-screen flex-col">
        {/* Header with Logo and Toggle */}
        <div className="flex h-16 items-center justify-between border-b border-border-secondary px-6">
          <NavLink
            to="/admin"
            className="flex items-center gap-2 font-orbitron font-semibold"
          >
            <Cpu className="h-7 w-7 text-brand-neon-red" />
            <span className={cn("transition-opacity", !isOpen && "opacity-0")}>
              Akuma
            </span>
          </NavLink>
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronsLeft className="h-5 w-5" />
            ) : (
              <ChevronsRight className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/admin"} // Ensures 'Dashboard' is only active on index
              className={NavLinkClass}
            >
              <item.icon className="h-5 w-5" />
              <span
                className={cn(
                  "truncate transition-opacity",
                  !isOpen && "opacity-0"
                )}
              >
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Footer (Settings) */}
        <nav className="mt-auto border-t border-border-secondary px-4 py-6 space-y-2">
          <NavLink to="/admin/settings" className={NavLinkClass}>
            <Settings className="h-5 w-5" />
            <span
              className={cn(
                "truncate transition-opacity",
                !isOpen && "opacity-0"
              )}
            >
              Settings
            </span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;