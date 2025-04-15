import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { Link } from "react-router"
export function DashbordLayout({layoutBody,layoutBodyClass}){
    return(
        <>
        

        <SidebarProvider>
      <AppSidebar />
      
      <SidebarInset>
        <header  className="flex h-16 place-content-between  shrink-0 items-center gap-2 border-b px-4 bg-blue-500 text-white ">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
<div className="flex justify-between gap-5 font-semibold"> <p>User</p>          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
</div>
          {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4"> 
          <div className="grid auto-rows-min gap-4 " ><div className={layoutBodyClass}> {layoutBody} </div>
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>


     


        </>
    )
}