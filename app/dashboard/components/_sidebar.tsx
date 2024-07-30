"use client";

import { Sidebar } from "flowbite-react";
import { HomeIcon } from "@/app/ui/common/icons";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r">
      <Sidebar.Items className="bg-transparent">
        <Sidebar.ItemGroup>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("link", {
                "text-blue-600": pathname === link.href,
              })}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          {laundryLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("link", {
                "text-blue-600": pathname === link.href,
              })}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export type LinkType = {
  href: string;
  name: string;
  icon?: any;
};

const links: LinkType[] = [
  {
    href: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon />,
  },
  { href: "/dashboard/invoices", name: "Invoices", icon: <HomeIcon /> },
  { href: "/dashboard/customers", name: "Customers", icon: <HomeIcon /> },
  { href: "/dashboard/users", name: "Users", icon: <HomeIcon /> },
];

const laundryLinks: LinkType[] = [
  {
    href: "/dashboard/catalog",
    name: "Catalog",
    icon: <HomeIcon />,
  },
  { href: "/dashboard/baskets", name: "Baskets", icon: <HomeIcon /> },
  { href: "/dashboard/payments", name: "Payments", icon: <HomeIcon /> },
];
