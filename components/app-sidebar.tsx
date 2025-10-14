import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { GrGroup } from "react-icons/gr";
import { RiHome6Line } from "react-icons/ri";
import { PiChurch, PiFinnTheHuman } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: RiHome6Line,
  },
  {
    title: "Jadwal Ibadah",
    url: "/dashboard/jadwal-ibadah",
    icon: PiChurch,
  },
  {
    title: "Pelayan",
    url: "/dashboard/pelayan",
    icon: GrGroup,
  },
  {
    title: "Teruna",
    url: "/dashboard/teruna",
    icon: PiFinnTheHuman,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                <IoIosLogOut />
                Sign Out
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
