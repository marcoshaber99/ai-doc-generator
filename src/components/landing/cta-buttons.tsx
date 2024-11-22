import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAButtons() {
  return (
    <div className="mb-8 flex w-full flex-col gap-3 px-4 sm:mb-16 sm:flex-row sm:justify-center sm:gap-4 sm:px-0">
      <Button
        asChild
        size="lg"
        className="min-h-[3rem] w-full text-base sm:w-auto"
      >
        <Link href="/resumes">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
      <Button
        variant="outline"
        size="lg"
        asChild
        className="min-h-[3rem] w-full text-base sm:w-auto"
      >
        <Link href="/resumes">Sign In</Link>
      </Button>
    </div>
  );
}
