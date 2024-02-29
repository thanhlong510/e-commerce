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
}: React.HTMLAttributes<HTMLAreaElement>) => {
  const { pathname, push } = useRouter();
  const parts = pathname.split("/"); // Chia chuỗi thành mảng các phần tử dựa trên dấu '/'
const secondPart = parts[2]; // Lấy phần tử tương ứng với dấu '/' thứ hai

  const routes = [
    {
      href: `/admin/overview`,
      active:`overview`,
      label: "Overview",
    },
    {
      href: `/admin/billboards`,
      active:`billboards`,
      label: "Billboards",
    },
    {
      href: `/admin/products`,
      active:`products`,
      label: "Products",
    },
    {
      href: `/admin/orders`,
      active:`orders`,
      label: "Orders",
    }
    
  ];

  return (
    <nav className="flex justify-center items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          <div
            className={
                secondPart === route.active
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
