import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navlink = () => {
  const navMenu = [
    { title: "Home", url: "/" },
    { title: "About", url: "/" },
    { title: "Contact", url: "/" },
    { title: "Dashboard", url: "/dashboard" },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu.map((item, index) => (
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
