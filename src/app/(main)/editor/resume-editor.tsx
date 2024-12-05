"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
// import GeneralInfoForm from "./forms/general-info-form";
// import PersonalInfoForm from "./forms/personal-info-form";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import { useState } from "react";
import { ResumeValues } from "@/lib/validation";

export default function ResumeEditor() {
  const searchParams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>({});

  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-2 border-b border-border px-6 py-8 text-center">
        <div className="mb-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/resumes">← Back to Resumes</Link>
          </Button>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Create Resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved as you go.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute inset-0 flex w-full">
          {/* Left panel - Editor */}
          <div
            className={cn(
              "w-full border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
              "md:w-1/2",
            )}
          >
            <div className="h-full overflow-y-auto px-6 py-6">
              <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
              {FormComponent && (
                <FormComponent
                  resumeData={resumeData}
                  setResumeData={setResumeData}
                />
              )}
            </div>
          </div>

          {/* Right panel - Preview */}
          <div className="hidden md:block md:w-1/2">
            <div className="h-full overflow-y-auto px-6 py-6">
              <pre>{JSON.stringify(resumeData, null, 2)}</pre>
            </div>
          </div>
        </div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}
