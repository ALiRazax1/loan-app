// import { Label } from "@/components/ui/Label"
// import { Input } from "@/components/ui/Input"
// import { Button } from "@/components/ui/button"
// import { DashbordLayout } from "@/components/dashboardlayout"
// import { Card } from "@/components/ui/card"
// import {  useContext, useState } from "react"
// import { Context } from "@/context/userContext"
// export default function NewLoan(){
// const [next, setNext] = useState()
// const [loanAmount, setLoanAmount] = useState("")
// const [name,setName] = useState("")
// const [fatherName, setFatherName] = useState("")
// const [mobileNum, setMobileNum] = useState("")
// const userId=JSON.parse(localStorage.getItem('user'))
// async function inserData(){
  
  
//   const { error } = await supabase
//   .from('loans')
//   .insert({userid:userId,name:name,amount:loanAmount,status:'pending' })
//   if(error){
//     console.log(error)
//   }
//   else{alert('Request submitted successfully')}
// }








//     return(
// <>
// {<DashbordLayout layoutBody={
//   <Card body={<form className="m-6 max-w-4xl mx-auto">
//     <div className="grid sm:grid-cols-2 gap-10">
//       <div className="relative flex items-center">
//         <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
//           Name</Label>
//         <Input value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder="Enter first name"
//           className="px-4 py-5 pr-8 bg-white text-slate-900 font-medium w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
       
//       </div>

//       <div className="relative flex items-center">
//         <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">Father
//           Name</Label>
//         <Input value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}} type="text" placeholder="Enter last name"
//           className="px-4 py-6 pr-8 bg-white text-slate-900 font-medium w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        
//       </div>

//       <div className="relative flex items-center">
//         <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">CNIC
//           </Label>
//         <Input value={mobileNum} onChange={(e)=>{setMobileNum(e.target.value)}} type="number" placeholder="Enter phone no."
//           className="px-4 py-6 pr-8 bg-white text-slate-900 font-medium w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        
//       </div>

//       <div className="relative flex items-center">
//         <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">Date of birth</Label>
//         <Input type="date" placeholder="Enter country"
//           className="px-4 py-6 bg-white text-black w-full text-sm outline-[#007bff] rounded" />
        
//       </div>
//       <div className="relative flex items-center">
//         <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">Amount
//           </Label>
//         <Input value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} type="number" placeholder="Enter Loan Amount"
//           className="px-4 py-6 pr-8 bg-white text-slate-900 font-medium w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
       
//       </div>
      

//     </div>
// <div className="flex justify-end">
//    <Button type="button" onClick={inserData}  className={"text-center w-32 mt-3 hover:bg-green-500 transform duration-500"}>Next</Button></div>
//   </form>}> 
//    </Card>} /> }
   





   
// </>
//     )
// }




import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { DashbordLayout } from "@/components/dashboardlayout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { supabase } from "../supabase"; 

export default function NewLoan() {
  const [step, setStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [dob, setDob] = useState("");
  const userId = JSON.parse(localStorage.getItem("user"));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  async function inserData() {
    const { error } = await supabase
      .from("loans")
      .insert({
        userid: userId,
        name: name,
        fathername: fatherName,
        cnic: mobileNum,
        dob: dob,
        amount: loanAmount,
        status: "pending",
      });

    if (error) {
      console.log(error);
    } else {
      alert("Request submitted successfully");
    }
  }

  return (
    <DashbordLayout
      layoutBody={
        <Card
          body={
            <form className="m-6 max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-10">
                {step === 1 && (
                  <>
                    <div className="relative flex items-center">
                      <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
                        Name
                      </Label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter first name"
                        className="px-4 py-5 pr-8 border-2 border-gray-100 rounded"
                      />
                    </div>

                    <div className="relative flex items-center">
                      <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
                        Father Name
                      </Label>
                      <Input
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        type="text"
                        placeholder="Enter father name"
                        className="px-4 py-6 pr-8 border-2 border-gray-100 rounded"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="relative flex items-center">
                      <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
                        CNIC
                      </Label>
                      <Input
                        value={mobileNum}
                        onChange={(e) => setMobileNum(e.target.value)}
                        type="number"
                        placeholder="Enter CNIC"
                        className="px-4 py-6 pr-8 border-2 border-gray-100 rounded"
                      />
                    </div>

                    <div className="relative flex items-center">
                      <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
                        Date of Birth
                      </Label>
                      <Input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="px-4 py-6 border-2 border-gray-100 rounded"
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <div className="relative flex items-center col-span-2">
                    <Label className="text-[13px] bg-white text-slate-900 font-medium absolute px-2 top-[-10px] left-[18px]">
                      Amount
                    </Label>
                    <Input
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      type="number"
                      placeholder="Enter Loan Amount"
                      className="px-4 py-6 pr-8 w-full border-2 border-gray-100 rounded"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-row-reverse justify-between mt-6">
                
                {step < 3 ? (
                  <Button className={" hover:bg-green-500 transition duration-500"} type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button className={" hover:bg-green-500 transition duration-500"} type="button" onClick={inserData}>
                    Submit
                  </Button>
                )}{step > 1 && (
                  <Button className={" hover:bg-green-500 transition duration-500"} type="button" onClick={prevStep}>
                    Back
                  </Button>
                )}
              </div>
            </form>
          }
        />
      }
    />
  );
}
