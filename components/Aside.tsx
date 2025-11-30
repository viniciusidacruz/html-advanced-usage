import Link from "next/link";

import { NavLink } from "@/components";

export const Aside = () => (
  <aside className="w-sm bg-zinc-900 h-full p-8 shrink-0">
    <Link href="/" className="text-zinc-600 font-bold text-3xl">
      HTML ADVANCED
    </Link>

    <ul className="mt-8">
      <li className="w-full">
        <NavLink href="/dialog">Dialog</NavLink>
      </li>
    </ul>
  </aside>
);
