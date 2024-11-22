import ThemeToggle from "@/components/theme-toggle";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CTAButtons } from "@/components/landing/cta-buttons";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background px-4 pb-8 pt-12">
      <div className="fixed right-4 top-4 z-10">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <CTAButtons />
        <Features />
      </div>
    </main>
  );
}
