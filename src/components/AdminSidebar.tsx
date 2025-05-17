
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Briefcase, 
  Users, 
  LayoutDashboard, 
  Settings,
  LogOut
} from "lucide-react";

type SidebarItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Job Postings",
    href: "/admin/jobs",
    icon: Briefcase,
  },
  {
    title: "Candidates",
    href: "/admin/candidates",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  
  return (
    <div className="h-full w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">HimLam Admin</h1>
      </div>
      
      <nav className="flex-1 py-6 px-2">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Exit Admin</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
