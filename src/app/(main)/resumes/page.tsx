import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import writeIllustration from "@/assets/pen.svg";
import darkWriteIllustration from "@/assets/pen-light.svg";

export const metadata: Metadata = {
  title: "Your Resumes",
};

export default function ResumesPage() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 pb-8 pt-12">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="relative mb-2 h-32 w-32 sm:h-40 sm:w-40">
          <Image
            src={writeIllustration}
            alt="Create Resume"
            fill
            className="hidden object-contain py-4 dark:block"
            priority
          />
          <Image
            src={darkWriteIllustration}
            alt="Create Resume"
            fill
            className="block object-contain py-4 dark:hidden"
            priority
          />
        </div>
        <h2 className="mb-3 mt-4 text-2xl font-semibold tracking-tight">
          No resumes yet
        </h2>
        <p className="mb-8 text-muted-foreground">
          Create your first resume and start your journey
        </p>
        <Button asChild className="flex gap-2">
          <Link href="/editor">
            <PlusCircle className="size-5" />
            Create Resume
          </Link>
        </Button>
      </div>
    </main>
  );
}
