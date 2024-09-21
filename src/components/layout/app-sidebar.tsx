import React, { Fragment } from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Package2 } from "lucide-react";
import { MenuItem, MenuSection } from "@/types/sidebar";
import { SubscriptionNotice } from "@/components/shared/subscription-notice";

import IconDynamic from "@/components/shared/icon-dynamic";

const iconClassName = 'h-4 w-4'

const menuItems: MenuSection[] = [
  {
    title: 'MAIN MENU',
    items: [
      { label: 'Dashboard', icon: 'LayoutDashboard', link: '/' },
      { label: 'Transactions', icon: 'ChartColumn', link: '/transactions', badge: 6 },
      { label: 'Accounts', icon: 'CreditCard', link: '/accounts' },
      { label: 'Budgets', icon: 'Wallet', link: '/budgets' },
      { label: 'Savings', icon: 'PiggyBank', link: '/savings' },
      { label: 'Investments', icon: 'Handshake', link: '/investments' },
      { label: 'Loans', icon: 'LayoutDashboard', link: '/loans' },
      { label: 'Debts', icon: 'HandCoins', link: '/debts' },
      { label: 'Reports', icon: 'ChartPie', link: '/reports' },
    ]
  },
  {
    title: 'PREFERENCES',
    items: [
      { label: 'Settings', icon: 'Settings', link: '/settings' },
      { label: 'Help Center', icon: 'CircleHelp', link: '/help' },
    ]
  },
]

const AppSidebarMenuItem = ({ key, item }: { key: number, item: MenuItem }) => (
  <Link
    key={key}
    href={item.link}
    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted text-muted-foreground"
  >
    <IconDynamic name={item.icon} className={iconClassName} />
    {item.label}
    {item.badge !== undefined && (
      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {item.badge}
      </Badge>
    )}
  </Link>
)

const AppSidebarSection = ({ key, section }: { key: number, section: MenuSection }) => (
  <Fragment key={key}>
    <div className="px-2 py-4 font-medium">{section.title}</div>
    {section.items.map((item, index) => <AppSidebarMenuItem key={index} item={item} />)}
  </Fragment>
)

export function AppSidebar() {

  return (
    <aside className="fixed left-0 top-0 z-20 hidden h-full w-[220px] flex-col border-r bg-muted/40 lg:w-[280px] md:flex">
      <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Smart Finance Pro</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 py-2">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {menuItems.map((section, index) => <AppSidebarSection key={index} section={section} />)}
        </nav>
      </ScrollArea>
      <SubscriptionNotice show={true} />
    </aside>
  )
}