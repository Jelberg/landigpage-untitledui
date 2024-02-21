import Image from "next/image"
import LightningIcon from "@/app/assets/icons/LightningIcon"
import { ComponentElement, ElementType, ReactComponentElement, ReactNode } from "react"

interface IAvatar {
    type : 'img' | 'icon',
    src?: string,
    width: number,
    height: number,
    alt?: string,
    icon?: ReactNode
}
export default function Avatar ({
    type,
    src = "/imgTools/notion.png",
    width,
    height,
    alt = "notion",
    icon
    }: IAvatar) {
    return <div className="flex justify-center border-2 p-1 rounded-xl shadow-sm" style={{width: width, height:height}}>
    { type === "img" ? 
    <Image alt={alt} src={src} width={0} height={0} sizes="100vw" style={{width: "100%", height:"100%"}}/> : <div className="grid place-content-center">{icon}</div> 
}
    </div>
}