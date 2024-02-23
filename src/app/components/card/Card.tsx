import CardContent from "./ContentCard";
import {  ReactNode } from "react"

interface ICard {
    coverRight?: string,
    coverLeft?: string,
    children: ReactNode,
}
export default function Card ({
    coverLeft,
    coverRight,
    children
}:ICard) {
    if (!coverLeft && !coverRight) {
        throw new Error('At least one of coverLeft or coverRight must be provided');
    }
    const img = coverLeft ? coverLeft : coverRight || ""
    const styleImage = { backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover' }
    
    return <section className="bg-purple-ui grid grid-cols-1 sm:grid-cols-5 md:grid-cols-5 rounded-2xl shadow-xl items-center mx-4">    
        {coverLeft ? <>
            <div className="col-span-1 sm:col-span-2 md:col-span-2 w-full h-full min-h-[300px] rounded-t-2xl sm:rounded-l-2xl md:rounded-l-2xl" style={{...styleImage}} /> 
            <CardContent>{children}</CardContent>
        </> : <>
            <CardContent>{children}</CardContent> 
            <div className="col-span-1 sm:col-span-2 md:col-span-2 w-full h-full min-h-[300px] rounded-b-2xl sm:rounded-r-2xl md:rounded-r-2xl" style={{...styleImage}} /> 
        </>
        }
    </section>
}
