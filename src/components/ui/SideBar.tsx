
"use client";

import { useState } from "react";
import { Nav } from "~/components/ui/nav";

type Props = {
    link? : string
};

import {
  ShoppingCart,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  ChevronLeft,
  ShoppingBag
} from "lucide-react";
import { Button } from "~/components/ui/button";



export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
    
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
       
            {!isCollapsed ?  <ChevronLeft/> : <ChevronRight/> }
           
          </Button>
        </div>
   
    
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/admin/overview",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Users",
            href: "/admin/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Orders",
            href: "/admin/orders",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Products",
            href: "/admin/products",
            icon: ShoppingBag,
            variant: "ghost"
          },
          {
            title: "Settings",
            href: "/admin/settings",
            icon: Settings,
            variant: "ghost"
          }

        ]}
      />
    </div>
  );
}