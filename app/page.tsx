"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Grid3x3,
  List,
  Package,
} from "lucide-react";

interface App {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  department: string;
  url: string;
  color: string;
}

const APPS: App[] = [
  {
    id: "cheque-voucher",
    name: "Cheque Voucher System",
    description:
      "Manage and process cheque vouchers for financial transactions",
    icon: <FileText className="w-8 h-8" />,
    department: "Finance",
    url: "https://cheque.jclproserve.com/",
    color: "bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent",
  },
  {
    id: "hris",
    name: "HRIS / Employee Portal",
    description: "Access employee information, payroll, and HR services",
    icon: <Users className="w-8 h-8" />,
    department: "Human Resources",
    url: "https://hris.jclproserve.com/",
    color:
      "bg-gradient-to-br from-purple-600/10 via-purple-500/5 to-transparent",
  },
  {
    id: "sales-monitoring",
    name: "Sales Monitoring System",
    description: "Track sales performance and monitor business metrics",
    icon: <TrendingUp className="w-8 h-8" />,
    department: "Operations",
    url: "/sales-monitoring",
    color:
      "bg-gradient-to-br from-emerald-600/10 via-emerald-500/5 to-transparent",
  },
  {
    id: "billing",
    name: "Billing System",
    description: "Process payroll, manage benefits, and compensation",
    icon: <DollarSign className="w-8 h-8" />,
    department: "Finance",
    url: "/billing-system",
    color: "bg-gradient-to-br from-amber-600/10 via-amber-500/5 to-transparent",
  },
  {
    id: "subscription-manager",
    name: "Subscription Manager",
    description: "Manage software licenses, subscriptions, and IT resources",
    icon: <Package className="w-8 h-8" />,
    department: "IT",
    url: "#",
    color: "bg-gradient-to-br from-cyan-600/10 via-cyan-500/5 to-transparent",
  },
];

const DEPARTMENTS = ["All", "Finance", "Human Resources", "Operations", "IT"];

export default function Dashboard() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredApps =
    selectedDept === "All"
      ? APPS
      : APPS.filter((app) => app.department === selectedDept);

  const getDepartmentBadgeColor = (dept: string) => {
    switch (dept) {
      case "Finance":
        return "bg-blue-500/15 text-blue-700 dark:text-blue-300";
      case "Human Resources":
        return "bg-purple-500/15 text-purple-700 dark:text-purple-300";
      case "Operations":
        return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300";
      case "IT":
        return "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="space-y-10">
      {/* Header Section with Stats */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Welcome to JC&L Proserve Inc. Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Access your assigned business applications and tools
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="p-4 border-border/50 bg-linear-to-br from-blue-600/10 via-blue-500/5 to-transparent hover:border-primary/50 transition-all">
            <p className="text-sm text-muted-foreground mb-1">Available Apps</p>
            <p className="text-2xl font-bold text-foreground">{APPS.length}</p>
          </Card>
          <Card className="p-4 border-border/50 bg-linear-to-br from-purple-600/10 via-purple-500/5 to-transparent hover:border-primary/50 transition-all">
            <p className="text-sm text-muted-foreground mb-1">Departments</p>
            <p className="text-2xl font-bold text-foreground">
              {DEPARTMENTS.length - 1}
            </p>
          </Card>
        </div>
      </div>

      {/* Filter System */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Filter by Department
            </h2>
          </div>
          <div className="flex gap-1 p-1 bg-accent rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedDept === dept
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-foreground hover:bg-accent/80"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* App Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredApps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus:outline-none"
            >
              <Card
                className={`h-full p-8 border-border/50 ${app.color} hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg`}
              >
                <div className="space-y-4">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${app.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary`}
                  >
                    {app.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    {/* App Name */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <Badge className={getDepartmentBadgeColor(app.department)}>
                      {app.department}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredApps.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus:outline-none"
            >
              <Card
                className={`p-6 border-border/50 ${app.color} hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-md`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-12 h-12 bg-linear-to-br ${app.color} rounded-lg flex items-center justify-center shrink-0 text-primary`}
                  >
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <Badge className={getDepartmentBadgeColor(app.department)}>
                      {app.department}
                    </Badge>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredApps.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            No applications available for the selected department
          </p>
        </div>
      )}
    </div>
  );
}
