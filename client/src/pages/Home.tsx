import { useState } from "react";
import { assessmentModels, synthesisTab } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

/**
 * Design Philosophy: Academic Clarity with Professional Sophistication
 * - University of Illinois colors (Illini Blue #003478, Illini Orange #E87722)
 * - Serif headings (Lora) for authority, sans-serif body (Inter) for readability
 * - Side navigation with numbered badges for visual rhythm
 * - Callout boxes with accent dividers for key insights
 * - Smooth transitions and hover effects for interactivity
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("case-formulation");

  // Combine assessment models with synthesis tab
  const allTabs = [...assessmentModels, synthesisTab];
  const activeContent = allTabs.find((tab) => tab.id === activeTab) || allTabs[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-72 bg-white border-r border-slate-200 shadow-sm overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6">
            <h1 className="text-2xl font-bold text-primary mb-2">
              Assessment Models
            </h1>
            <p className="text-sm text-slate-600">
              AI-Supported Approaches for Abnormal Psychology
            </p>
          </div>

          <nav className="p-4 space-y-2">
            {/* Assessment Models */}
            {assessmentModels.map((model, index) => (
              <button
                key={model.id}
                onClick={() => setActiveTab(model.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group ${
                  activeTab === model.id
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      activeTab === model.id
                        ? "bg-white text-primary"
                        : "bg-slate-200 text-slate-700 group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    {model.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-tight">
                      {model.title.split(":")[0]}
                    </p>
                  </div>
                  {activeTab === model.id && (
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  )}
                </div>
              </button>
            ))}

            {/* Divider */}
            <div className="my-4 border-t border-slate-200" />

            {/* Synthesis Tab */}
            <button
              onClick={() => setActiveTab("synthesis")}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group ${
                activeTab === "synthesis"
                  ? "bg-accent text-white shadow-md"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeTab === "synthesis"
                      ? "bg-white text-accent"
                      : "bg-slate-200 text-slate-700 group-hover:bg-accent group-hover:text-white"
                  }`}
                >
                  ★
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm leading-tight">
                    Why These Approaches Work
                  </p>
                </div>
                {activeTab === "synthesis" && (
                  <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                )}
              </div>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-primary mb-3">
                {activeContent.title}
              </h1>
              {activeContent.subtitle && (
                <p className="text-lg text-slate-600 italic">
                  {activeContent.subtitle}
                </p>
              )}
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {activeContent.sections.map((section, index) => (
                <section key={index} className="space-y-4">
                  {section.isCallout ? (
                    <Card className="border-l-4 border-l-accent bg-blue-50 p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-primary mb-3">
                        {section.heading}
                      </h3>
                      <div className="space-y-2">
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-slate-700 leading-relaxed whitespace-pre-wrap"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </Card>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-primary">
                        {section.heading}
                      </h3>
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="text-slate-700 leading-relaxed whitespace-pre-wrap"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {index < activeContent.sections.length - 1 && (
                        <div className="h-px bg-gradient-to-r from-accent via-accent to-transparent opacity-30 my-6" />
                      )}
                    </>
                  )}
                </section>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
              <Button
                onClick={() => {
                  const currentIndex = allTabs.findIndex(
                    (tab) => tab.id === activeTab
                  );
                  if (currentIndex > 0) {
                    setActiveTab(allTabs[currentIndex - 1].id);
                  }
                }}
                disabled={allTabs.findIndex((tab) => tab.id === activeTab) === 0}
                variant="outline"
              >
                ← Previous
              </Button>
              <span className="text-sm text-slate-600">
                {allTabs.findIndex((tab) => tab.id === activeTab) + 1} of{" "}
                {allTabs.length}
              </span>
              <Button
                onClick={() => {
                  const currentIndex = allTabs.findIndex(
                    (tab) => tab.id === activeTab
                  );
                  if (currentIndex < allTabs.length - 1) {
                    setActiveTab(allTabs[currentIndex + 1].id);
                  }
                }}
                disabled={
                  allTabs.findIndex((tab) => tab.id === activeTab) ===
                  allTabs.length - 1
                }
                className="bg-primary hover:bg-primary/90"
              >
                Next →
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
