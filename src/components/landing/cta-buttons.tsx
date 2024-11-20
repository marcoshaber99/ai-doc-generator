import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
      <Button asChild size="lg">
        <Link href="/resumes">
          Get Started
          <ArrowRight className="ml-2" />
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href="/resumes">Sign In</Link>
      </Button>
    </div>
  );
}
