"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  IconBook2,
  IconChalkboard,
  IconLayoutDashboard,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    title: "Courses",
    url: "/dashboard/courses",
    icon: IconBook2,
  },
  {
    title: "Teachers",
    url: "/dashboard/teachers",
    icon: IconChalkboard,
  },
  {
    title: "Students",
    url: "/dashboard/students",
    icon: IconUsersGroup,
  },
];

export function NavMain() {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {adminLinks.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.url} passHref>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={pathName === item.url}
                  asChild
                >
                  <div className="flex gap-2">
                    {item.icon && <item.icon className="w-5 h-5" />}
                    <span>{item.title}</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

//  <SidebarMenuSubButton asChild>
//                             <Link href={subItem.url}>
//                               {subItem.icon ? <subItem.icon /> : null}
//                               <span>{subItem.title}</span>
//                             </Link>
//                           </SidebarMenuSubButton>
