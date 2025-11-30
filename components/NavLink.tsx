"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/config/cn";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-zinc-200 p-4 w-full rounded-md flex hover:bg-zinc-800",
        isActive && "bg-zinc-800"
      )}
    >
      {children}
    </Link>
  );
}
