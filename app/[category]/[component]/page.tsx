import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentRenderer } from "./ContentRenderer";
import { CONTENT_CATEGORIES, getContentDefinition } from "@/shared/content";

type PageProps = {
  params: Promise<{
    category: string;
    component: string;
  }>;
};

export function generateStaticParams() {
  return CONTENT_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      category: category.slug,
      component: item.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: Readonly<PageProps>): Promise<Metadata> {
  const { category, component } = await params;
  const content = getContentDefinition(category, component);

  if (!content) {
    return {};
  }

  return {
    title: `${content.title} | Frontend Lab`,
    description: content.description,
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { category, component } = await params;
  const content = getContentDefinition(category, component);

  if (!content) {
    notFound();
  }

  return <ContentRenderer content={content} />;
}
