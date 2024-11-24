import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { steps } from "./steps";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export default function Breadcrumbs({
  currentStep,
  setCurrentStep,
}: BreadcrumbsProps) {
  return (
    <div className="mb-8">
      <Breadcrumb>
        <BreadcrumbList className="flex-wrap justify-center gap-1.5">
          {steps.map((step, index) => (
            <React.Fragment key={step.key}>
              <BreadcrumbItem className="min-w-fit">
                {step.key === currentStep ? (
                  <BreadcrumbPage
                    className={cn(
                      "min-w-[100px] rounded-md px-3 py-1 text-center",
                      "font-medium text-foreground",
                      "border-b-2 border-primary",
                      "border-emerald-500 transition-all duration-200",
                    )}
                  >
                    {step.title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep(step.key)}
                      className={cn(
                        "min-w-[100px] px-3 py-1 text-center",
                        "text-muted-foreground hover:text-foreground",
                        "border-b-2 border-transparent font-normal",
                        "hover:border-muted hover:bg-transparent",
                        "transition-all duration-200",
                      )}
                    >
                      {step.title}
                    </Button>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < steps.length - 1 && (
                <BreadcrumbSeparator className="select-none text-muted-foreground/40" />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
