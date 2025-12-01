import { PROJECT, AUTHOR } from "./author";

export const BASE_URL = "https://frontendlab.dev";

export const DEFAULT_METADATA = {
  title: `${PROJECT.name} | ${PROJECT.description}`,
  description: PROJECT.description,
  url: BASE_URL,
  siteName: PROJECT.name,
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
} as const;

export const BLOG_METADATA = {
  title: `Blog | ${PROJECT.name}`,
  description:
    "Artigos sobre desenvolvimento frontend, boas práticas e muito mais.",
  url: `${BASE_URL}/blog`,
} as const;

export const DONATE_METADATA = {
  title: `Doar | ${PROJECT.name}`,
  description:
    "Ajude a manter este projeto vivo e crescendo. Esta aplicação é sem fins lucrativos e foi criada para compartilhar conhecimento em frontend de forma aberta e acessível.",
  url: `${BASE_URL}/donate`,
} as const;

