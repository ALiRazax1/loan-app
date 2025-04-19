import React from "react";

export function TableRow  ({ name, email, status, date,buttons})  {
  return (
    
    <tr className="even:bg-blue-50">
      <td className="p-4 text-[15px] text-slate-900 font-medium">{name}</td>
      <td className="p-4 text-[15px] text-slate-600 font-medium">{email}</td>
       <td className="p-4 text-[15px] text-slate-600 font-medium">{date}</td>
       <td className="p-4 text-[15px] text-slate-600 font-medium">{status}</td>
      <td className="p-4">
        <div className="flex gap-2">
          {buttons}
        </div>
      </td>
    </tr>
  );
};


