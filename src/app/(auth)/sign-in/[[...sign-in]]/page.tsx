import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center p-3">
      <SignIn />
    </main>
  );
}
