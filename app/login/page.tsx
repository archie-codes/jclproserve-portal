import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 w-full">
      <div className="flex flex-col items-center gap-3 mb-8 text-center mt-auto">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
          <Building2 className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Enterprise Portal</h1>
      </div>
      
      <Card className="w-full max-w-sm border border-border bg-card shadow-lg">
        <CardHeader className="space-y-1.5 text-center px-8 pt-8">
          <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">Sign In</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Enter your email and password to access your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-8 pt-4 pb-0">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@company.com" 
              className="bg-background text-foreground h-11" 
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
              <Link href="#" className="text-sm font-medium text-primary hover:underline hover:text-primary/80 transition-colors underline-offset-4">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              className="bg-background text-foreground h-11" 
              required
            />
          </div>
        </CardContent>
        <CardFooter className="px-8 pb-8 pt-6">
          <Button className="w-full h-11 text-base font-semibold transition-all hover:opacity-90 active:scale-[0.98]">
            Sign In
          </Button>
        </CardFooter>
      </Card>
      
      <p className="mt-12 mb-auto text-center text-sm text-muted-foreground flex items-center gap-1">
        <span>&copy; {new Date().getFullYear()} ABC Corporation.</span>
        <span>All rights reserved.</span>
      </p>
    </div>
  );
}
