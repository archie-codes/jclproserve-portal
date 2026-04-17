import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Cog } from "lucide-react";

export default function BillingSystemPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] -z-10 animate-pulse transition-all duration-5000" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />

      <Card className="w-full max-w-2xl p-8 sm:p-12 border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
          <Clock className="w-6 h-6 text-amber-500/50" />
        </div>

        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
            <div className="w-24 h-24 bg-amber-500/10 rounded-2xl border border-amber-500/20 flex items-center justify-center mb-6 relative backdrop-blur-md shadow-inner">
              <Cog className="w-12 h-12 text-amber-500 animate-[spin_4s_linear_infinite]" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-amber-600 via-amber-400 to-amber-200">
              Billing System
            </h1>
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-500 transition-colors hover:bg-amber-500/20">
              Currently Under Development
            </div>
            <p className="text-muted-foreground pt-4 max-w-md mx-auto text-lg leading-relaxed">
              We&apos;re crafting a seamless and powerful billing experience.
              Our team is working hard to bring this feature to life. Stay
              tuned!
            </p>
          </div>

          <div className="pt-8 w-full border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white gap-2 shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portal
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
