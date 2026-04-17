"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User, Search, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 dark:bg-[#0f172a]/50 border-b border-border/50 dark:border-border/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img
              src="/logo-monogram.png"
              alt="JC&L Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-foreground leading-tight">
              Proserve Inc.
            </span>
            <span className="text-xs text-muted-foreground">Portal</span>
          </div>
        </Link>

        {/* Right Side - User Menu */}
        <div className="flex items-center gap-4">
          {/* <button className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Search className="w-5 h-5" />
          </button> */}
          {/* Center - Search and Navigation (optional) */}
          <div className="hidden lg:flex items-center gap-1">
            <span className="text-xs uppercase text-muted-foreground font-medium">
              Dashboard
            </span>
          </div>
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-background rounded-full transition-all">
                <Avatar className="h-9 w-9 border border-border">
                  <AvatarImage src="https://avatar.vercel.sh/user" alt="User" />
                  <AvatarFallback className="bg-accent text-foreground">
                    JD
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="px-2 py-1.5 text-sm">
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">
                  john.doe@company.com
                </p>
              </div>
              <div className="border-t border-border my-1" />
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <div className="border-t border-border my-1" />
              <DropdownMenuItem className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </nav>
  );
}
