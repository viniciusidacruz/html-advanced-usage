import { cn } from "@/shared/config";
import type { ContentCategory, CategoryItem } from "@/shared/constants/home";

const COLOR_VARIANTS: Record<
  string,
  { border: string; bg: string; text: string; badge: string }
> = {
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/5",
    text: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-400",
  },
  yellow: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    text: "text-yellow-400",
    badge: "bg-yellow-500/20 text-yellow-400",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    text: "text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
  violet: {
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    text: "text-violet-400",
    badge: "bg-violet-500/20 text-violet-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    text: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "bg-rose-500/5",
    text: "text-rose-400",
    badge: "bg-rose-500/20 text-rose-400",
  },
};

interface ContentCardRootProps {
  category: ContentCategory;
  children: React.ReactNode;
}

const Root = ({ category, children }: ContentCardRootProps) => {
  const colors = COLOR_VARIANTS[category.color] || COLOR_VARIANTS.cyan;

  return (
    <div
      className={cn(
        "rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02]",
        colors.border,
        colors.bg
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className={cn("font-semibold", colors.text)}>{category.title}</h3>
        <span
          className={cn(
            "text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap",
            category.status === "available"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-zinc-700 text-zinc-400"
          )}
        >
          {category.status === "available" ? "Disponível" : "Em breve"}
        </span>
      </div>
      <p className="text-zinc-500 text-sm mb-4">{category.description}</p>
      {children}
    </div>
  );
};

interface ContentCardItemsProps {
  items: CategoryItem[];
  color: string;
}

const Items = ({ items, color }: ContentCardItemsProps) => {
  const colors = COLOR_VARIANTS[color] || COLOR_VARIANTS.cyan;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item.label}
          className={cn(
            "text-xs px-2 py-1 rounded-md font-medium",
            colors.badge
          )}
        >
          {item.emoji} {item.label}
        </span>
      ))}
    </div>
  );
};

export const ContentCard = {
  Root,
  Items,
};
