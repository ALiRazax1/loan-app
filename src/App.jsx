// import { Dashboard } from "./pages/dashboard";
import { useEffect } from "react";
// import SignupPage from "./pages/signup";
import { Link, useNavigate } from "react-router";
import { supabase } from "./supabase";
import { Dashboard } from "./pages/dashboard";
import { useRedirect } from "./lib/redirect";
import LoginPage from "./pages/login";
export function App (){
useRedirect()
  return (<>

    <LoginPage/>
 
    
    </>
  )
}