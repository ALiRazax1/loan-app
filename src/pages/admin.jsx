// import { useNavigate } from 'react-router';
// import { DashbordLayout } from "@/components/dashboardlayout";
// import { supabase } from "@/supabase";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router";

// export function Admin() {
//     const navigate = useNavigate();
//   const [loanData, setLoanData] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const { data, error } = await supabase.from("loans").select("*");
//       if (error) {
//         console.error(error);
//       } else {
//         setLoanData(data);
//       }
//     }

//     getData();
//   }, []);
//   async function logout() {
//     const { error } = await supabase.auth.signOut()
//     navigate("/login")
    
//     if (error) throw error.message
//   }
//   return (
   
      
      
//         <div>
//             <header  className="flex h-16 place-content-between font-semibold  shrink-0 items-center gap-2 border-b px-4 bg-blue-500 text-white ">
                      
//              <p>Amin Panel</p>          <svg onClick={logout} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
           
            
                      
                      
//                     </header>
//           <div className="grid grid-cols-5 bg-gray-100 font-medium text-slate-700 text-[15px] p-4 border-b border-gray-300">
//             <div>Name</div>
//             <div>Email</div>
//             <div>Date</div>
//             <div>Status</div>
//             <div>Actions</div>
//           </div>

//           {loanData.length > 0 ? (
//             loanData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-5 text-[15px] p-4 items-center ${
//                   index % 2 === 0 ? "bg-blue-50" : "bg-white"
//                 }`}
//               >
//                 <div className="text-slate-900 font-medium">asd</div>
//                 <div className="text-slate-600 font-medium">{item.email}</div>
//                 <div className="text-slate-600 font-medium">
//                   {new Date(item.created_at).toLocaleDateString("en-GB", {
//                     day: "2-digit",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </div>
//                 <div className="text-slate-600 font-medium">{item.status}</div>
//                 <div className="flex gap-2">
//                   <Button 
//                     onClick={() => console.log("Approve", item.id)}
//                     className="bg-green-500 text-white  py-1 rounded hover:bg-green-600"
//                   >
//                     Approve
//                   </Button>
//                   <Button
//                     onClick={() => console.log("Reject", item.id)}
//                     className="bg-red-500 text-white  py-1 rounded hover:bg-red-600"
//                   >
//                     Reject
//                   </Button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-4 text-slate-600">No data found</div>
//           )}
//         </div>
      
    
//   );
// }

import { useNavigate } from 'react-router';
import { DashbordLayout } from "@/components/dashboardlayout";
import { supabase } from "@/supabase";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function Admin() {
  const navigate = useNavigate();
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("loans").select("*");
      if (error) {
        console.error(error);
      } else {
        setLoanData(data);
      }
    }
    getData();
  }, []);

  async function handleAction(id, status) {
    const { error } = await supabase
      .from("loans")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      setLoanData((prev) =>
        prev.map((loan) =>
          loan.id === id ? { ...loan, status } : loan
        )
      );
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
    navigate("/login");
    if (error) throw error.message;
  }

  return (
    <div>
      <header className="flex h-16 place-content-between font-semibold shrink-0 items-center gap-2 border-b px-4 bg-blue-500 text-white">
        <p>Admin Panel</p>
        <svg
          onClick={logout}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        //   className="lucide lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
      </header>

      <div className="text-center grid grid-cols-5 bg-gray-100 font-medium text-slate-700 text-[15px] p-4 border-b border-gray-300">
        <div>Name</div>
        <div>Email</div>
        <div>Date</div>
        <div>Status</div>
        <div>Actions</div>
      </div>

      {loanData.length > 0 ? (
        loanData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 text-[15px] p-4 items-center ${
              index % 2 === 0 ? "bg-blue-50" : "bg-white"
            }`}
          >
            <div className="text-slate-900 text-center font-medium">asd</div>
            <div className="text-slate-600 font-medium text-center">{item.email}</div>
            <div className="text-slate-600 font-medium text-center">
              {new Date(item.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div
              className={`text-white font-medium py-1 px-2 rounded text-center ${
                item.status === "approved"
                  ? "bg-green-500 text-green-800"
                  : item.status === "rejected"
                  ? "bg-red-500 text-red-800"
                  : "bg-amber-300"
              }`}
            >
              {item.status}
            </div>
            <div className="flex justify-center gap-2">
              {item.status === "pending" && (
                <>
                  <Button
                    onClick={() => handleAction(item.id, "approved")}
                    className="bg-green-500 text-white py-1 rounded hover:bg-green-600"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleAction(item.id, "rejected")}
                    className="bg-red-500 text-white py-1 rounded hover:bg-red-600"
                  >
                    Reject
                  </Button>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-slate-600">No data found</div>
      )}
    </div>
  );
}
