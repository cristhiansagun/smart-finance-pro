import { IconDynamicNames } from "@/components/shared/icon-dynamic";

export type MenuItem = {
  label: string;
  icon: IconDynamicNames;
  link: string;
  badge?: number;
}

export type MenuSection = {
  title: string;
  items: MenuItem[];
}