import { GalleryVerticalEnd } from "lucide-react"
import { supabase } from "@/supabase"
import { LoginForm } from "@/components/login-form"
import { Link } from "react-router"
import { useState } from "react"

export default function LoginPage() {
const [input,setInput] = useState()
async function signUpUser() {
   const api=await fetch(supabase)
}
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
        
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm btnText={"Login"}  emailValue={input} emailInput={(e)=>{setInput(e.target.value)}} btnFunc={()=>{console.log(input)}}
              btntext={"Login"}/>
          
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpF8fA7K4KurR3OSaGP1Q-AaCgDYQ9VdPKg&s"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to={'/signup.jsx'} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  )
}
