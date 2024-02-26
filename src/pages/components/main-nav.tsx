"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAreaElement>) => {
  const { pathname, push } = useRouter();
  const secondSlashIndex = pathname.indexOf("/", pathname.indexOf("/") + 1); // Tìm vị trí của dấu / thứ hai
  const billboardName = pathname.substring(secondSlashIndex + 1);

  const routes = [
    {
      href: `/12345/overview`,
      active:`overview`,
      label: "Overview",
    },
    {
      href: `/12345/billboards`,
      active:`billboards`,
      label: "Billboards",
    },
    {
      href: `/12345/categories`,
      active:`categories`,
      label: "Categories",
    },
    {
      href: `/12345/sizes`,
      active:`sizes`,
      label: "Sizes",
    },
    {
      href: `/12345/colors`,
      active:`colors`,
      label: "Colors",
    },
    {
      href: `/12345/products`,
      active:`products`,
      label: "Products",
    },
    {
      href: `/12345/orders`,
      active:`orders`,
      label: "Orders",
    },
    {
      href: `/12345/settings`,
      active:`settings`,
      label: "Settings",
    },
  ];

  return (
    <nav className="flex justify-center items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <div
            className={
                billboardName === route.active
                ? "hover:text-primary  font-semibold text-black   transition-colors "
                : "text-muted-foreground hover:text-primary  font-medium text-slate-500 transition-colors  "
            }
            onClick={async (e) => {
              e.preventDefault();
              await push(route.href).catch((err) =>
                console.error("Failed to navigate:", err),
              );
            }}
          >
            {route.label}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
