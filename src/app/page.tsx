import ThemeToggle from "@/components/theme-toggle";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { CTAButtons } from "@/components/landing/cta-buttons";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background px-4 pb-8 pt-12">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <Hero />
        <CTAButtons />
        <Features />
      </div>
    </main>
  );
}
