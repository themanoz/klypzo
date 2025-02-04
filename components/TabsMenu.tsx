"use client";

import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link"; 

const tabs = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "History", href: "/dashboard/history" },
  { name: "Billing", href: "/dashboard/billing" },
];

export default function TabsMenu() {
  const pathname = usePathname();

  return (
    <Tabs defaultValue={pathname} className="w-full">
      <TabsList className="flex space-x-4">
        {tabs.map((tab) => {
          return (
            <TabsTrigger
              key={tab.name}
              value={tab.href}
              className={pathname === tab.href ? "text-red" : ""}
            >
              <Link href={tab.href}>
                <span>{tab.name}</span>
              </Link>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
