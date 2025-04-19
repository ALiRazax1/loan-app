"use client"
import { Link,NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,className,
}) {
  return (
    <SidebarGroup >
      <SidebarGroupLabel className={"text-green-500"}>EasyLoan</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible 
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible ">
            <SidebarMenuItem  >
             
            <NavLink className={({ isActive }) =>
    isActive ? "text-blue-500" : "text-black"
  } to={item.link}> <SidebarMenuButton   className={className  }  tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>              </NavLink>

             
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
