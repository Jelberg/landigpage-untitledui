'use client'

import { useState } from "react"
import PlusCircleIcon from "@/app/assets/icons/PlusCircleIcon"
import MinusCircleIcon from "@/app/assets/icons/MinusCircleIcon"

interface IQuestionContentent {
    quetion: string,
    summary: string,
    iconColor?: string
    displaySummary?: boolean
}
export default function QuestionContent({
    quetion,
    summary,
    iconColor="gray",
    displaySummary=false
}: IQuestionContentent) {
    const [display, setdisplay] = useState(displaySummary)
    const handleDisplay = () => {
        setdisplay(!display)
    }

    return <div className="grid grid-cols-5 w-full place-content-between" onClick={handleDisplay}>
            <div className="col-start-1 col-span-4">
            <summary className="list-none">
            <h6>{quetion}</h6>
            { display && <p className="py-4">{summary}</p>}
            </summary>
            </div>
            <div className="grid grid-rows-1 min-w-5 place-content-end">
            {
                display ? <MinusCircleIcon color={iconColor} /> : 
                <PlusCircleIcon color={iconColor}/>
            }
            </div>
    </div>
}