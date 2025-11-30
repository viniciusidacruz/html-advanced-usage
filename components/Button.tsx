import { ComponentProps } from "react";

export const Button = ({ children, ...props }: ComponentProps<"button">) => (
  <button
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
    {...props}
  >
    {children}
  </button>
);
