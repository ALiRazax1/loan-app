import { supabase } from "@/supabase"
import { LoginForm } from "@/components/login-form"
import { Link, useNavigate } from "react-router"
import { useContext, useState,useEffect } from "react"
import {  useRedirect } from "@/lib/redirect"
import { Context } from "@/context/userContext"
export default function LoginPage() {
  useRedirect()
  const navigate = useNavigate()
  const [userdata,setUserData] = useState("")
const [input,setInput] = useState("")
const [password,setPassword] = useState("")
const {setUser} = useContext(Context  )
useEffect(()=>{async function getData(){const {data,error}=await supabase.from("user").select()
if (data){console.log(data);
  setUserData(data)
}
}getData()},[])
async function login() {
  // console.log(userdata);
  
 const role = userdata.find((item)=>"admin" == item.role)
 console.log(role.userid);
 
 
  try { const { data, error } = await supabase.auth.signInWithPassword({
    email: input,
    password: password,
  })
    if (error) throw alert(error)
    if (data) {
      localStorage.setItem("user",JSON.stringify(data.user.id))
    if(data.user.id == role.userid){navigate("/admin")}
    else{navigate("/dashboard")}
     
      
   

   
      
    }else{alert("Invalid email or password")}
  } catch (error) {
    console.log(error);
    
  }
  
}
  return (
    <div className="flex justify-center align-middle">
        
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm LoginOrSignUpText={"Login to your account"} btnText={"Login"}  emailValue={input} emailInput={(e)=>{setInput(e.target.value)}} passwordValue={password} passwordInput={(e)=>{setPassword(e.target.value)}} btnFunc={login}
              />
          
          </div>
        </div>
        <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={'/signup'} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
      </div>
     
      
    </div>
  )
}
