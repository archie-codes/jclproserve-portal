import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Wrench } from "lucide-react";

export default function SalesMonitoringPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] -z-10" />

      <Card className="w-full max-w-2xl p-8 sm:p-12 border-border/50 bg-background/60 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
          <Wrench className="w-6 h-6 text-emerald-500/50" />
        </div>

        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
            <div className="w-24 h-24 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center mb-6 relative overflow-hidden backdrop-blur-md shadow-inner group-hover:bg-emerald-500/20 transition-colors">
              <BarChart3 className="w-12 h-12 text-emerald-500 relative z-10 animate-[bounce_3s_ease-in-out_infinite]" />
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-emerald-400 blur-[2px] animate-[ping_2s_linear_infinite]" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-emerald-600 via-emerald-400 to-emerald-200">
              Sales Monitoring
            </h1>
            <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-500 transition-colors hover:bg-emerald-500/20">
              Work in Progress
            </div>
            <p className="text-muted-foreground pt-4 max-w-md mx-auto text-lg leading-relaxed">
              We&apos;re building an advanced dashboard to track performance and
              keep an eye on metrics. Exciting data insights are on the way!
            </p>
          </div>

          <div className="pt-8 w-full border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white gap-2 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Portal
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
