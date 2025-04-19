import { useState } from 'react'
import { LoginForm } from "@/components/login-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {supabase} from "../supabase"
import { useNavigate,Link } from 'react-router'
import {  useRedirect } from '@/lib/redirect'
import { useEffect } from 'react'
export default function SignupPage() {
 useRedirect()

  const [input,setInput] = useState("")
  const [password,setPassword] = useState("")
  const [fullname,setFullname] = useState("")
  async function signup() {try {
   
  
    const { data, error } = await supabase.auth.signUp({
      email: input,
      password: password,
    })
   if(error) throw error
   if (data){useNavigate("/login");
   
    try {
      const { data: userData, error: userError } = await supabase
      .from("user")
      .insert({
        userid: data.user.id,
        email: input,
        name:fullname,
      })
      .select();
      if (userData){console.log(userData);
      }
      if(userError) throw userError
    } catch (error) {
      console.log(error.message);
      
    }
   } 
    return(data)
  } catch (error) {
    console.log(error.message);
    
  }
    
 
  
}
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <h1 className="text-3xl text-blue-500 font-bold">Welcome To EasyLoan</h1>
      <div className="w-full max-w-sm">
        <LoginForm emailValue={input} emailInput={(e)=>{setInput(e.target.value)}} passwordValue={password} passwordInput={(e)=>setPassword(e.target.value)} btnFunc={signup}
         userNameInput={<>
         <div className="grid gap-3">
                  <Label htmlFor="text">Full Name</Label>
                  <Input value={fullname} onChange={(e)=>setFullname(e.target.value)}
                    id="fullname" type="text" placeholder="John Doe" required />
                </div>
                </>}
                 LoginOrSignUpText={"Create your account"}  btnText="Sign up" />
      </div>
      <Link to={'/login'}><p className='underline'>Already have an account?</p></Link>
    </div>
  )
}
