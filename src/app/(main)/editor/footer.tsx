import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export default function Footer({ currentStep, setCurrentStep }: FooterProps) {
  const previousStep = steps.find(
    (_, index) => steps[index + 1]?.key === currentStep,
  )?.key;
  const nextStep = steps.find(
    (_, index) => steps[index - 1]?.key === currentStep,
  )?.key;

  return (
    <footer className="flex flex-col-reverse gap-4 border-t border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          variant="outline"
          size="sm"
          onClick={() => previousStep && setCurrentStep(previousStep)}
          disabled={!previousStep}
        >
          Previous Step
        </Button>
        <Button
          size="sm"
          onClick={() => nextStep && setCurrentStep(nextStep)}
          disabled={!nextStep}
        >
          Next Step
        </Button>
      </div>
      <div className="flex items-center justify-between sm:gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/resumes">Exit</Link>
        </Button>
        <span className="text-xs text-muted-foreground sm:text-sm">
          Saving...
        </span>
      </div>
    </footer>
  );
}
