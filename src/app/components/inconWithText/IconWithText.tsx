'use client'
import Image from "next/image"

import Link from "../link/Link"
import Avatar from "../avatar/Avatar"

interface IIconWithText {
    src?: string,
    width: number,
    height: number,
    alt?: string,
    type: string,
    title?: string,
    text?: string,
    textLink?: string
}

export default function IconWithText ({
    src,
    width,
    height,
    type = "img",
    alt = "notion",
    title = "Notion Integration",
    text = "Lorem ipsum dolor sit amet, consectetur adip",
    textLink = "View"
}: IIconWithText){
    return <article className="flex flex-col items-center text-center m-5">
        <Avatar type="img" src={src} alt={alt} width={width} height={height}/>
        <h6 className="m-4">{title}</h6>
        <p>{text}</p>
        <div className="mt-5 mb-5"> <Link text={textLink}/></div>
    </article>
}