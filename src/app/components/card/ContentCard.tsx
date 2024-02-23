
import {  ReactNode } from "react"

interface ICardContent {
    children: ReactNode,
}
export default function CardContent ({
    children
}: ICardContent) {
    
    return <div className="sm:col-span-3 py-20 px-3 sm:py-24 sm:px-20 md:py-24 md:px-20"> 
        {children}
    </div>
}
