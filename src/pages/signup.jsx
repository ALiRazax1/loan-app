import { LoginForm } from "@/components/login-form"
// import supabase from "../supabase"
export default function SignupPage() {
    
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <h1 className="text-3xl text-blue-500 font-bold">Welcome Easy Loan</h1>
      <div className="w-full max-w-sm">
        <LoginForm  btntext="Sign up" />
      </div>
    </div>
  )
}
