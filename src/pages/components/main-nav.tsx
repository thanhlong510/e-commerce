"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function removeLeadingSlash(str:string) {
  // Kiểm tra xem chuỗi có bắt đầu bằng '/' hay không
  if (str.startsWith('/')) {
    // Trả về chuỗi bỏ đi dấu '/'
    return str.substring(1);
  }
  // Nếu không, trả về chuỗi ban đầu
  return str;
}

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAreaElement>) => {
  const { pathname, push } = useRouter();
  const resultPathname = removeLeadingSlash(pathname)
  // const secondSlashIndex = pathname.indexOf("/", pathname.indexOf("/") + 1); // Tìm vị trí của dấu / thứ hai
  // const billboardName = pathname.substring(secondSlashIndex + 1);
  
  const routes = [
    {
      href: `/billboards`,
      active:`billboards`,
      label: "Billboards",
    },
    {
      href: `/categories`,
      active:`categories`,
      label: "Categories",
    },
    {
      href: `/sizes`,
      active:`sizes`,
      label: "Sizes",
    },
    {
      href: `/colors`,
      active:`colors`,
      label: "Colors",
    },
    {
      href: `/products`,
      active:`products`,
      label: "Products",
    },
    {
      href: `/orders`,
      active:`orders`,
      label: "Orders",
    },
    {
      href: `/settings`,
      active:`settings`,
      label: "Settings",
    },
  ];
console.log(pathname)
  return (
    <nav className="flex justify-center items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <div
            className={
                resultPathname === route.active
                ? " border-b-2 border-solid border-black font-semibold text-black   transition-colors "
                : "text-muted-foreground  font-medium text-slate-500 transition-colors  "
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
