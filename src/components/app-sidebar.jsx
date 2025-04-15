import * as React from "react"
import { Link } from "react-router"
import {
 
  LayoutDashboard,
  CircleDollarSignIcon,
  UserRoundPen ,
  HeartHandshakeIcon,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  // SidebarFooter,
  // SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
 
  teams: [
  ],
  navMain: [
    {
      
      title: "Dashboard",
      icon: LayoutDashboard,
      link:<Link to="/dashboard" /> ,
      isActive: true,
      
    },
    {
      title: "Loan Request",
      link: <Link to={"/login"}/>,
      icon: CircleDollarSignIcon,
      
    },
    {
      title: "New Loan",
      link: "#",
      icon:HeartHandshakeIcon ,
     
    },
    {title:"Profile",
      link:"#",
      icon:UserRoundPen 
    }
  ],
  
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar className={"border-none shadow-xl/30"}  collapsible="icon" {...props}>
      
      <SidebarContent className={"bg-blue-50 outline-none shadow-amber-500"}>
        <NavMain className={"cursor-pointer font-semibold hover:bg-blue-500 hover:text-white hover:transition hover:duration-400 text-base "} items={data.navMain} />
      </SidebarContent>
     
      <SidebarRail  />
    </Sidebar>
  );
}
