import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs from URL if no items provided
  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      if (index === pathSegments.length - 1) {
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav className={cn("flex items-center space-x-1 text-sm", className)}>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index === 0 && (
            <Home className="h-3 w-3 mr-1" />
          )}
          {item.href ? (
            <Link
              to={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-rajdhani"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-rajdhani font-medium">
              {item.label}
            </span>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="h-3 w-3 mx-2 text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;