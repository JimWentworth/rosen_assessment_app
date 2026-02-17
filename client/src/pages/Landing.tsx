import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Design Philosophy: Academic Clarity with Professional Sophistication
 * - University of Illinois colors (Illini Blue #003478, Illini Orange #E87722)
 * - Serif headings (Lora) for authority and elegance
 * - Asymmetric layout with visual hierarchy
 * - Smooth entrance animations and transitions
 */

export default function Landing() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-12">
        {/* Main Content */}
        <div className="space-y-8 text-center">
          {/* Accent Line */}
          <div className="flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            AI Use in Authentic Assessment
          </h1>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-accent via-primary to-accent rounded-full" />
          </div>

          {/* Main Question */}
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-semibold text-slate-800 leading-tight">
              How is AI impacting your discipline today?
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore six pedagogically grounded approaches to AI-supported assessment that address the core challenges of teaching with artificial intelligence: student retention, academic integrity, and scalability.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={() => navigate("/models")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Explore Assessment Models
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center pt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
