"use client";

import { ReactNode } from "react";

import { useCopy } from "@/hooks/useCopy";

interface Props {
  children: ReactNode;
}

const Root = ({ children }: Props) => (
  <section className="mt-12">{children}</section>
);

const Heading2 = ({ children }: Props) => (
  <h2 className="text-2xl font-bold text-zinc-600 mb-4">{children}</h2>
);

const List = ({ children }: Props) => (
  <ul className="space-y-3 text-zinc-100 max-w-2xl mb-8">{children}</ul>
);

const ListItem = ({ children }: Props) => (
  <li className="flex items-start gap-2">{children}</li>
);

const Dot = () => <span className="text-blue-600 font-bold">•</span>;

const Paragraph = ({ children }: Props) => (
  <p className="text-zinc-100 mb-6 max-w-2xl">{children}</p>
);

const BlockquoteContainer = ({ children }: Props) => (
  <div className="space-y-3 max-w-2xl mb-8">{children}</div>
);

const Blockquote = ({ children }: Props) => (
  <blockquote className="text-zinc-100 mb-6 max-w-2xl bg-zinc-900 p-4 rounded-lg border border-zinc-800">
    {children}
  </blockquote>
);

const Code = ({ children }: Props) => (
  <code className="text-zinc-100 font-mono font-semibold">{children}</code>
);

const Pre = ({ children }: Props) => {
  const { isCopied, copyToClipboard } = useCopy();

  return (
    <div className="relative text-sm text-zinc-100 p-4 mb-6 max-w-2xl bg-zinc-900 rounded-lg border border-zinc-800 overflow-x-auto">
      <button
        type="button"
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => copyToClipboard(children?.toString() ?? "")}
      >
        {isCopied ? "Copiado" : "Copiar"}
      </button>

      <pre>{children}</pre>
    </div>
  );
};

export const Document = {
  Root,
  Heading2,
  List,
  ListItem,
  Dot,
  Paragraph,
  BlockquoteContainer,
  Blockquote,
  Code,
  Pre,
};
