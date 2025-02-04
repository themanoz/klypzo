'use client';

// import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "History", href: "/dashboard/history" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center gap-2 rounded-md p-3 text-sm font-medium ",
              {
                "bg-black text-white": pathname === link.href,
              }
            )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
