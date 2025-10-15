"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navlink = () => {
  const { data: session } = useSession();

  const navMenu = [
    { title: "Home", url: "/", condition: true },
    // { title: "About", url: "/" },
    // { title: "Contact", url: "/" },
    {
      title: "Dashboard",
      url: "/dashboard",
      condition: session?.user.role === "admin",
    },
    { title: "Login", url: "/signin", condition: !session },
    { title: "Logout", url: "/api/auth/signout", condition: !!session },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu
          .filter((item) => item.condition)
          .map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.url}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navlink;
