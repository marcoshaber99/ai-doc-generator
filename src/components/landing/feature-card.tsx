import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon
            className={`size-5 ${
              title === "AI Powered"
                ? "text-orange-500 dark:text-orange-300"
                : null
            }`}
          />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
