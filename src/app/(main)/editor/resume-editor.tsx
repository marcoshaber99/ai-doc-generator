"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import GeneralInfoForm from "./forms/general-info-form";

export default function ResumeEditor() {
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
              <GeneralInfoForm />
            </div>
          </div>

          {/* Right panel - Preview */}
          <div className="hidden md:block md:w-1/2">
            <div className="h-full overflow-y-auto px-6 py-6">
              Preview will go here
            </div>
          </div>
        </div>
      </main>

      <footer className="flex flex-col-reverse gap-4 border-t border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm">
            Previous Step
          </Button>
          <Button size="sm">Next Step</Button>
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
    </div>
  );
}
