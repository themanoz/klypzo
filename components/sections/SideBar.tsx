"use client";

import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "History", href: "/dashboard/history" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function SideBar() {
  return (
    <div className="flex items-center mt-6 px-12 md:px-20 lg:px-36">
      <div className="flex items-center gap-2">
        <Tabs defaultValue="Dashboard">
          <TabsList>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <TabsTrigger value={link.name}>{link.name}</TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
