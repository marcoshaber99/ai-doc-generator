import Image from "next/image";
import logo from "@/assets/logo.svg";

export function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <div className="mb-16 flex items-center justify-center">
        <div className="gap- flex items-center">
          <Image
            src={logo}
            alt="Lexos logo"
            width={64}
            height={64}
            priority
            className="h-16 w-16"
          />
          <h2 className="text-4xl font-semibold tracking-tight">Lexos</h2>
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Create professional resumes with{" "}
        <span className="text-green-600 dark:text-green-400">
          AI assistance
        </span>
      </h1>
      <p className="text-lg text-muted-foreground">
        Build and customize your resume with our intuitive editor and AI-powered
        content suggestions.
      </p>
    </div>
  );
}
