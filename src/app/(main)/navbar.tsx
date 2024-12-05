"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { UserButton } from "@clerk/nextjs";
import { CreditCardIcon } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-1 transition-opacity hover:opacity-90"
        >
          <Image
            src={logo}
            alt="logo of lexos"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-semibold tracking-tight sm:text-xl">
            Lexos
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 32,
                  height: 32,
                },
                rootBox: {
                  display: "flex",
                  alignItems: "center",
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                href="/billing"
                labelIcon={<CreditCardIcon className="size-4" />}
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
