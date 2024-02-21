'use client'

export default function Pill({text = "This is a pill"}){
    return <a className="bg-lilac rounded-2xl border-2 border-purple-200 hover:border-transparent" >{text}</a>
}