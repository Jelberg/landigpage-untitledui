import Image from "next/image"
import MenuIcon from "@/app/assets/icons/MenuIcon"

export default function Header() {
    return <div className="grid items-center grid-cols-4 sm:grid-cols-9 md:grid-cols-9 place-content-between bg-white w-full">
        <div className="flex items-center col-span-2 sm:col-span-4 ">
        <Image src="/logo/untitledui.png" alt="untitlrd-ui" width={0} height={0} sizes="100vw" style={{height:"60px", width:"auto"}}/>
        <h3 className="inline-block align-middle text-xl sm:text-2xl">Untitled UI</h3>

        <nav className="hidden sm:flex md:flex items-center mx-auto sm:display md:display" aria-label="Global">
            <ul className="flex">
                <li><a className="text-black" href="#">Home</a></li>
                <li><a className="text-black" href="#">Products</a></li>
                <li><a className="text-black" href="#">Resource</a></li>
                <li><a className="text-black" href="#">Pricing</a></li>
            </ul>
        </nav>
        </div>
        
        
        <div className="hidden sm:flex justify-end gap-5 col-start-8 col-span-2">
            <button className="text-gray-500 bg-transparent">Log in</button>
            <button className="my-5">Sign up</button>
        </div>
        <div className="flex sm:hidden md:hidden col-start-4 justify-self-end mx-auto">
            <MenuIcon />
        </div>
  </div>
}