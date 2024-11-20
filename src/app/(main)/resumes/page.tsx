import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Your Resumes",
};

export default function ResumesPage() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 pb-8 pt-12">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusCircle className="size-5" />
          Create Resume
        </Link>
      </Button>
    </main>
  );
}
