import { use, useState } from 'react';
import { DashbordLayout } from "@/components/dashboardlayout";
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect,useContext} from "react";
import {  useRedirect } from "@/lib/redirect"
import  {Card}  from "@/components/ui/card";
import { FileTextIcon,WorkflowIcon } from "lucide-react";
import { supabase } from "@/supabase";
import { ApiContext } from '@/context/dataContext';
import { Context } from '@/context/userContext';
export function Dashboard({}){
 useRedirect()
 const {setUser} = useContext(Context)
 const {setData,data} = useContext(ApiContext)
const userID = JSON.parse(localStorage.getItem("user"))

        useEffect(()=>{
            
            async function getData(){
                const {data,error} = await supabase.from("loans").select("*");
                console.log(data);
                if (error) throw error
              setData(data)
            //   loanData = data
              const {data:user,error:userError} = await supabase.from("user").select("*")
              if (userError) throw userError
              if (user) {
                console.log(user);
                
                setUser(user)
                
              }
              }   getData();
              
        },[])
        let totalAmount=0
        let approvedLoans=0
        let pendingLoans=0
data.map((item)=>{
    if(item.userid == userID){
totalAmount+= item.amount;
if(item.status == "approved"){
    approvedLoans+=1
}if(item.status == "pending"){
    pendingLoans+=1
}

}

})


        
        return(<>
        <DashbordLayout layoutBodyClass={"grid lg:grid-cols-4 md:grid-cols-2 gap-4"}  layoutBody={
            <>
           <Card icon={<FileTextIcon/>} number={approvedLoans} title={"Active Loans"} className={"text-blue-500"}/>
           <Card icon={<WorkflowIcon/>} number={pendingLoans} title={"Pending Request "} className={"text-blue-500"}/>
           <Card icon={<FileTextIcon/>} number={0} title={"Approved Loans"} className={"text-green-500"}/>
           <Card icon={<FileTextIcon/>} number={0} title={"Refrences"} className={"text-blue-500"}/>

            
            </>
        }/>  <button onClick={console.log(userID)
        }>asddddddddddddd</button>
    </>
    )
}