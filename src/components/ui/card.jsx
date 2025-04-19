export function Card({title,icon,number,className,body}){
    return(<div className="rounded-xl shadow-2xl p-5">{body}
    <p className="text-gray-500">{title}</p><div className="flex text-xl font-semibold py-5">
    <span className={className}>{icon}</span><p className="px-3">{number}</p></div>

</div>)
}