import Image from "next/image";
import logo from "@/assets/logo.svg";

export function Hero() {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <div className="mb-8 flex items-center justify-center sm:mb-16">
        <div className="flex items-center space-x-1">
          <Image
            src={logo}
            alt="Lexos logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 sm:h-16 sm:w-16"
          />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lexos
          </h2>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        Create professional resumes with{" "}
        <span className="text-green-600 dark:text-green-400">
          AI assistance
        </span>
      </h1>
      <p className="max-w-[90%] text-base text-muted-foreground sm:max-w-full sm:text-lg">
        Build and customize your resume with our intuitive editor and AI-powered
        content suggestions.
      </p>
    </div>
  );
}
