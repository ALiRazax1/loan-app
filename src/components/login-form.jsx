import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({btnText,btnFunc,emailValue,emailInput,userName,userNameInput,
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
      <div className="grid gap-3">
          <Label htmlFor="email">Full Name</Label>
          <Input value={userName} onChange={userNameInput}  id="email" type="email" placeholder="John Doe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input value={emailValue} onChange={emailInput}  id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button onClick={btnFunc} type="submit" className="w-full">
          {btnText}
        </Button>
      </div>
     
    </form>
  );
}
