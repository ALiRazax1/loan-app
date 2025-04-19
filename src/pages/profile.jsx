import { DashbordLayout } from "@/components/dashboardlayout";
import { Context } from "@/context/userContext";
import { useContext } from "react";
export function Profile(){
    const {user} = useContext(Context)
   return(
   <DashbordLayout layoutBody={
<>
</>



   }/>
   
   )

}    
