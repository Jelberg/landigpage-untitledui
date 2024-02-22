import Image from "next/image"

export default function Header() {
    return <div className="grid grid-cols-3 place-content-evenly bg-white w-full">
        <div className="flex items-center">
        <Image src="/logo/untitledui.png" alt="untitlrd-ui" width={0} height={0} sizes="100vw" style={{height:"60px", width:"auto"}}/>
        <h3 className="inline-block align-middle">Untitled UI</h3>
        </div>
        
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <ul className="flex">
                <li><a className="text-black" href="#">Home</a></li>
                <li><a className="text-black" href="#">Products</a></li>
                <li><a className="text-black" href="#">Resource</a></li>
                <li><a className="text-black" href="#">Pricing</a></li>
            </ul>
        </nav>

        <div className="flex justify-end gap-5">
            <button className="text-gray-500 bg-transparent">Log in</button>
            <button className="my-5">Sign up</button>
        </div>
  </div>
}