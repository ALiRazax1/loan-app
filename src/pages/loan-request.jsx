import { DashbordLayout } from "@/components/dashboardlayout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/supabase";
import { useEffect,useContext } from "react";
import {TableRow} from "@/components/ui/table"
import { ApiContext } from "@/context/dataContext";
import { Card } from "@/components/ui/card";
import { Link } from "react-router";

export function LoanRequest(){
    const {data} = useContext(ApiContext)
    const userId = JSON.parse(localStorage.getItem("user"))
function getData(){
    // console.log(data)
    console.log(new Date(data[0].created_at).toLocaleDateString())
    console.log(userId);
    // console.log(data.map((item)=>{})
    // console.log(data[0].status
    // data.map((item)=>{ console.log(userId==item.userid)
    // })
    let check =data.filter((item)=> item.userid == userId
        
    );console.log(check);
    
    
    
}
    return(
    
    <DashbordLayout layoutBodyClass={""} layoutBody={ 
       
       <div className="shadow-2xl">
        {data.filter(item => item.userid === userId).length > 0 ? (
  <>
    <div className="grid grid-cols-4 bg-gray-100 font-medium text-slate-700 text-[15px] p-4 border-b border-gray-300">
      <div>Name</div>
      <div>Email</div>
      <div>Date</div>
      <div>Status</div>
   
    </div>

    {data
      .filter(item => item.userid === userId)
      .map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 text-[15px] p-4 items-center ${
            index % 2 === 0 ? "bg-blue-50" : "bg-white"
          }`}
        >
          <div className="text-slate-900 font-medium">{item.name}</div>
          <div className="text-slate-600 font-medium">{item.email}</div>
          <div className="text-slate-600 font-medium">
            {new Date(item.created_at).toLocaleDateString()}
          </div>
          <div className="text-slate-600 font-medium">{item.status}</div>
          
        </div>
      ))}
  </>
) : (
  <div className="flex align-middle items-center flex-col text-center my-5 p-4 text-slate-600">
    <h1 className="my-5">No Data Found</h1>
    <Link to={"/new-loan"}><Button >Apply Now </Button></Link></div>
)
        /* {data.filter((item)=>{
          return(
<>
<div className="grid grid-cols-5 bg-gray-100 font-medium text-slate-700 text-[15px] p-4 border-b border-gray-300">
            <div>Name</div>
            <div>Email</div>
            <div>Date</div>
            <div>Status</div>
            <div>Actions</div>
          </div>
          
             <div
             // key={index}
             className={`grid grid-cols-5 text-[15px] p-4 items-center 
             //   index % 2 === 0 ? "bg-blue-50" : "bg-white"
             `
         }
           >
             <div className="text-slate-900 font-medium">asd</div>
             <div className="text-slate-600 font-medium">{data[0].status}</div>
             <div className="text-slate-600 font-medium">{(data[0].created_at)}</div>
             <div className="text-slate-600 font-medium">{data[0].id}</div>
             <div className="flex gap-2">
               <button onClick={getData} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                 Approve
               </button>
               <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                 Reject
               </button>
             </div>
           </div>
</>
        )
       
        })} */}
       
         
         
        
       </div>


       
       }/>
    )
}