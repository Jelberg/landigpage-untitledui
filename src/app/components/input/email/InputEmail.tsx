'use client'

import QuestionIcon from "@/app/assets/icons/QuestionIcon"
export default function InputEmail(){
    const handleOnClick = () => {
        console.log("handleOnClick")
    }
    return <div className="flex flex-row items-center bg-white appearance-none py-4 px-4 border rounded-xl w-full focus-within:border">
        <input className="focus:outline-white w-full focus-within:border" placeholder="Enter your email" type="email"/>
        <div className="focus:bg-slate-600" onClick={handleOnClick}><QuestionIcon color="gray" /></div>
    </div>
      
}