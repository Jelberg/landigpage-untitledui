'use client'
import Image from "next/image"

import Link from "../link/Link"
import Avatar from "../avatar/Avatar"
import { ReactNode } from "react"

export interface IIconWithText {
    src?: string,
    width?: number,
    height?: number,
    icon?: ReactNode,
    alt?: string,
    type: "img" | "icon",
    title?: string,
    text?: string,
    textLink?: string
}

export default function IconWithText ({
    src,
    width=30,
    height=30,
    type = "img",
    icon,
    alt = "notion",
    title = "Notion Integration",
    text = "Lorem ipsum dolor sit amet, consectetur adip",
    textLink = "View"
}: IIconWithText){
    return <article className="flex flex-col items-center text-center m-5">
        <Avatar type={type} src={src} alt={alt} width={width} height={height} icon={icon}/>
        <h6 className="m-4">{title}</h6>
        <p>{text}</p>
        <div className="mt-5 mb-5"> <Link text={textLink}/></div>
    </article>
}