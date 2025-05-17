
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "Blog", path: "/blog" },
    { name: "Create CV", path: "/my-cv" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-2xl text-himlam-600">
              HimLam
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "nav-link",
                  isActive(item.path) && "text-himlam-600 after:scale-x-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                Sign In
              </Button>
            </Link>
            <Link to="/login?tab=register">
              <Button className="bg-himlam-500 hover:bg-himlam-600">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Trigger */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 py-6">
                  <div className="flex justify-between items-center">
                    <Link to="/" className="font-bold text-2xl text-himlam-600" onClick={() => setIsOpen(false)}>
                      HimLam
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 text-lg",
                          isActive(item.path)
                            ? "text-himlam-600 font-medium"
                            : "text-gray-600 hover:text-himlam-600"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <div className="border-t border-gray-100 pt-4 mt-4">
                      <Link
                        to="/profile"
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block py-2 text-lg",
                          isActive("/profile")
                            ? "text-himlam-600 font-medium"
                            : "text-gray-600 hover:text-himlam-600"
                        )}
                      >
                        My Profile
                      </Link>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full border-himlam-300 hover:border-himlam-500">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/login?tab=register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-himlam-500 hover:bg-himlam-600">
                          Register
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
