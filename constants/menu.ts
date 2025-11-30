interface MenuItem {
  label: string;
  shortLabel: string;
  href: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: "HTML",
    items: [
      { label: "Dialog", shortLabel: "Di", href: "/dialog" },
      { label: "Details", shortLabel: "De", href: "/details" },
      { label: "Datalist", shortLabel: "Da", href: "/datalist" },
      { label: "Template", shortLabel: "Te", href: "/template" },
      { label: "Picture", shortLabel: "Pi", href: "/picture" },
    ],
  },
];

