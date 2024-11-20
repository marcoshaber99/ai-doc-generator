import { FileText, Sparkles } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function Features() {
  const features = [
    {
      icon: FileText,
      title: "Easy to Use",
      description:
        "Intuitive drag-and-drop interface to build your resume sections with real-time preview.",
    },
    {
      icon: Sparkles,
      title: "AI Powered",
      description:
        "Get intelligent suggestions for content and improvements as you build your resume.",
    },
  ];

  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2">
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  );
}
