export type CategoryStatus = "available" | "coming-soon";

export interface CategoryItem {
  emoji: string;
  label: string;
}

export interface ContentCategory {
  title: string;
  description: string;
  status: CategoryStatus;
  color: string;
  items: CategoryItem[];
}

export const CONTENT_CATEGORIES: ContentCategory[] = [
  {
    title: "HTML Avançado",
    description: "Elementos nativos que substituem bibliotecas",
    status: "available",
    color: "orange",
    items: [
      { emoji: "💬", label: "Dialog" },
      { emoji: "📂", label: "Details" },
      { emoji: "🔍", label: "Datalist" },
      { emoji: "📋", label: "Template" },
      { emoji: "🖼️", label: "Picture" },
    ],
  },
  {
    title: "JavaScript APIs",
    description: "APIs modernas do navegador",
    status: "coming-soon",
    color: "yellow",
    items: [
      { emoji: "👁️", label: "Intersection Observer" },
      { emoji: "🎬", label: "Web Animations" },
      { emoji: "📎", label: "Clipboard API" },
      { emoji: "💾", label: "Storage API" },
    ],
  },
  {
    title: "Arquitetura Frontend",
    description: "Padrões e estruturas escaláveis",
    status: "coming-soon",
    color: "cyan",
    items: [
      { emoji: "🏗️", label: "Clean Architecture" },
      { emoji: "📦", label: "Micro Frontends" },
      { emoji: "🧩", label: "Module Federation" },
      { emoji: "🔀", label: "Monorepo" },
    ],
  },
  {
    title: "Design Patterns",
    description: "Padrões de projeto aplicados",
    status: "coming-soon",
    color: "violet",
    items: [
      { emoji: "🏭", label: "Factory" },
      { emoji: "👤", label: "Singleton" },
      { emoji: "👀", label: "Observer" },
      { emoji: "🎯", label: "Strategy" },
    ],
  },
  {
    title: "SOLID",
    description: "Princípios de código limpo",
    status: "coming-soon",
    color: "emerald",
    items: [
      { emoji: "S", label: "Single Responsibility" },
      { emoji: "O", label: "Open/Closed" },
      { emoji: "L", label: "Liskov Substitution" },
      { emoji: "I", label: "Interface Segregation" },
      { emoji: "D", label: "Dependency Inversion" },
    ],
  },
  {
    title: "Clean Code",
    description: "Boas práticas de código",
    status: "coming-soon",
    color: "rose",
    items: [
      { emoji: "📝", label: "Naming" },
      { emoji: "🔧", label: "Functions" },
      { emoji: "💬", label: "Comments" },
      { emoji: "🧪", label: "Testing" },
    ],
  },
];

