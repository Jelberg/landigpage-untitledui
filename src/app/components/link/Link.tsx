'use client'
import ArrowIcon from "@/app/assets/icons/ArrowIcon"
export default function Link({
    text= "View Integration", 
    icon= <ArrowIcon />
}) {
    return <a className="flex flex-row items-center">{text} {icon}</a>
}