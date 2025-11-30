import { ComponentProps } from "react";

import { cn } from "@/config/cn";

type RootProps = ComponentProps<"div">;
type TitleProps = ComponentProps<"h3">;
type ItemProps = ComponentProps<"div">;

const Root = ({ children, className, ...props }: RootProps) => (
  <div className={cn("space-y-1", className)} {...props}>
    {children}
  </div>
);

const Title = ({ children, className, ...props }: TitleProps) => (
  <h3
    className={cn(
      "px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

const Item = ({ children, className, ...props }: ItemProps) => (
  <div className={cn("", className)} {...props}>
    {children}
  </div>
);

export const ListMenu = {
  Root,
  Title,
  Item,
};
