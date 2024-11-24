import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAButtons() {
  const primaryButtonClasses =
    "min-h-[3rem] w-full text-base sm:w-auto bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-lg shadow-md";
  const secondaryButtonClasses =
    "min-h-[3rem] w-full text-base sm:w-auto bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 rounded-lg shadow-md";

  return (
    <div className="mb-8 flex w-full flex-col gap-3 px-4 sm:mb-16 sm:flex-row sm:justify-center sm:gap-4 sm:px-0">
      <SignedOut>
        <Button asChild size="lg" className={primaryButtonClasses}>
          <Link href="/resumes" className="flex items-center justify-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" className={secondaryButtonClasses}>
          <Link href="/resumes" className="flex items-center justify-center">
            Sign In
          </Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button asChild size="lg" className={primaryButtonClasses}>
          <Link href="/resumes" className="flex items-center justify-center">
            Go to Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </SignedIn>
    </div>
  );
}
