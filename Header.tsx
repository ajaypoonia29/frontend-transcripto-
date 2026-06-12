import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold">TRANSCRIPTO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/") ? "text-accent" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/about") ? "text-accent" : "text-foreground"
              }`}
            >
              About
            </Link>
            
            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm transition-colors hover:text-accent">
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/programs">All Programs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/weight-loss">Weight Loss</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/muscle-gain">Muscle Gain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/programs/pcos">PCOS Program</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/diet-plans"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/diet-plans") ? "text-accent" : "text-foreground"
              }`}
            >
              Diet Plans
            </Link>
            <Link
              to="/coaches"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/coaches") ? "text-accent" : "text-foreground"
              }`}
            >
              Coaches
            </Link>
            <Link
              to="/success-stories"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/success-stories") ? "text-accent" : "text-foreground"
              }`}
            >
              Success Stories
            </Link>
            <Link
              to="/pricing"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/pricing") ? "text-accent" : "text-foreground"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className={`text-sm transition-colors hover:text-accent ${
                isActive("/blog") ? "text-accent" : "text-foreground"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-3">
            <Link
              to="/"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-2 py-2">
              <div className="text-sm font-medium mb-2">Programs</div>
              <div className="pl-4 space-y-2">
                <Link
                  to="/programs"
                  className="block py-1 text-sm hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Programs
                </Link>
                <Link
                  to="/programs/weight-loss"
                  className="block py-1 text-sm hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Weight Loss
                </Link>
                <Link
                  to="/programs/muscle-gain"
                  className="block py-1 text-sm hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Muscle Gain
                </Link>
                <Link
                  to="/programs/pcos"
                  className="block py-1 text-sm hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PCOS Program
                </Link>
              </div>
            </div>
            <Link
              to="/diet-plans"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diet Plans
            </Link>
            <Link
              to="/coaches"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Coaches
            </Link>
            <Link
              to="/success-stories"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/pricing"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block px-2 py-2 text-sm hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
