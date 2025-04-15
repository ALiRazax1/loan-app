import { DashbordLayout } from "@/components/dashboardlayout";
import { Link } from "react-router";
import { Card,CardHeader,CardContent } from "@/components/ui/card";
import { FileTextIcon } from "lucide-react";
export function Dashboard({}){
    return(<>
        <DashbordLayout layoutBodyClass={"grid md:grid-cols-4"}  layoutBody={
            <>
            <div className="shadow-xl p-5">
                <p className="text-gray-500">Active Loans</p><div className="flex text-xl font-semibold py-5">
                <span><FileTextIcon className="text-blue-500"/></span><p className="px-3">0</p></div>

            </div>
           
            <div className="shadow-2xl p-5">
                <p className="text-gray-500">Active Loans</p><div className="flex text-xl font-semibold py-5">
                <span><FileTextIcon className="text-blue-500"/></span><p className="px-3">0</p></div>

            </div>
            <div className="shadow-2xl p-5">
                <p className="text-gray-500">Active Loans</p><div className="flex text-xl font-semibold py-5">
                <span><FileTextIcon className="text-blue-500"/></span><p className="px-3">0</p></div>

            </div>
            <div className="shadow-2xl p-5">
                <p className="text-gray-500">Active Loans</p><div className="flex text-xl font-semibold py-5">
                <span><FileTextIcon className="text-blue-500"/></span><p className="px-3">0</p></div>

            </div>
            
            </>
        }/> 
    </>
    )
}