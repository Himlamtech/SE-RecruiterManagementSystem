
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-himlam-700 animate-fade-in">HimLam</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Trang chủ</Link>
            <Link to="/jobs" className="nav-link">Việc làm</Link>
            <Link to="/companies" className="nav-link">Công ty</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/my-cv" className="nav-link">CV của tôi</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-himlam-300 hover:border-himlam-500">
                  <User className="h-4 w-4 mr-2" />
                  Đăng nhập
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/login" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>Người dùng</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/employer/login" className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>Nhà tuyển dụng</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="bg-himlam-500 hover:bg-himlam-600 text-white">Đăng ký</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2 animate-fade-in">
            <Link to="/" className="block px-4 py-2 rounded-md hover:bg-himlam-50">Trang chủ</Link>
            <Link to="/jobs" className="block px-4 py-2 rounded-md hover:bg-himlam-50">Việc làm</Link>
            <Link to="/companies" className="block px-4 py-2 rounded-md hover:bg-himlam-50">Công ty</Link>
            <Link to="/blog" className="block px-4 py-2 rounded-md hover:bg-himlam-50">Blog</Link>
            <Link to="/my-cv" className="block px-4 py-2 rounded-md hover:bg-himlam-50">CV của tôi</Link>
            <div className="pt-2 flex flex-col space-y-2 border-t border-gray-100 mt-2">
              <Link to="/login" className="px-4 py-2 text-center border rounded-md">Đăng nhập</Link>
              <Link to="/register" className="px-4 py-2 text-center bg-himlam-500 text-white rounded-md">Đăng ký</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
