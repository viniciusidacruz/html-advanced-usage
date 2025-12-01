"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, type LucideIcon } from "lucide-react";

import { cn } from "@/shared/config";

type IconType =
  | { type: "lucide"; icon: LucideIcon }
  | { type: "image"; src: string; alt: string };

interface AsideLinkProps {
  href: string;
  label: string;
  icon: IconType;
  collapsed?: boolean;
  isExternal?: boolean;
}

export const AsideLink = ({
  href,
  label,
  icon,
  collapsed = false,
  isExternal = false,
}: AsideLinkProps) => (
  <Link
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className={cn(
      "flex items-center gap-2 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-300 rounded-lg hover:bg-zinc-800/50 transition-colors",
      collapsed && "justify-center"
    )}
  >
    {icon.type === "lucide" ? (
      <icon.icon size={16} />
    ) : (
      <Image src={icon.src} alt={icon.alt} width={16} height={16} />
    )}

    {!collapsed && (
      <>
        <span>{label}</span>
        {isExternal && <ExternalLink size={12} className="ml-auto" />}
      </>
    )}
  </Link>
);

