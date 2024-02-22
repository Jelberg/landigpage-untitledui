import Image from "next/image"
import Pill from "../pills/Pill"

export default function FooterUI() {
    return <div className="grid grid-cols-1 md:grid-cols-6 place-content-between mb-0 bg-white w-full mt-10">
    
    <div className="flex flex-col-reverse md:flex-row w-full md:col-span-6 md:place-content-between">
        <div className="grid grid-cols-2 md:grid-cols-8">
            <nav className="col-start-1 sm:col-span-3 md:cols-span-1 my-5">
            <p className="font-bold mx-3">Product</p>
            <ul className="list-none py-2">
                <li className="mb-2"><a className="" href="#">Overview</a></li>
                <li className="mb-2"><a className="" href="#">Features</a></li>
                <li className="mb-2"><a className="" href="#">Solutions</a><Pill  text="New"/></li>
                <li className="mb-2"><a className="" href="#">Tutorials</a></li>
                <li className="mb-2"><a className="" href="#">Pricins</a></li>
                <li className="mb-2"><a className="" href="#">Releases</a></li>
            </ul>
            </nav>

    <nav className="col-span-1 md:cols-span-1 my-5">
        <p className="font-bold mx-3">Company</p>
        <ul className="list-none py-2">
            <li className="mb-2"><a className="" href="#">About us</a></li>
            <li className="mb-2"><a className="" href="#">Careers</a></li>
            <li className="mb-2"><a className="" href="#">Press</a></li>
            <li className="mb-2"><a className="" href="#">News</a></li>
            <li className="mb-2"><a className="" href="#">Media Kit</a></li>
            <li className="mb-2"><a className="" href="#">Contact</a></li>
        </ul>
    </nav>
        </div>
   

    <div className="grid col-start-1 sm:col-start-1 sm:col-span-2 col-span-2 md:col-start-6 md:col-span-1 gap-2 mx-3">
    <p className="font-bold">Get the app</p>
    <div className="flex flex-row md:flex-col gap-4">
    <Image className="rounded-lg" src="/downloads/store1.png" alt="untitlrd-ui" width={0} height={0} sizes="100vw" style={{height:"auto", width:"150px"}}/>
    <Image className="rounded-lg" src="/downloads/store2.png" alt="untitlrd-ui" width={0} height={0} sizes="100vw" style={{height:"auto", width:"150px"}}/>
    </div>
    </div>

    </div>


    <div className="grid grid-cols-1 sm:grid-cols-1 sm:col-span-1 md:grid-cols-5 md:col-span-5 items-center border-gray-100 my-5 border-t">
     <div className="col-start-1 md:col-span-2 flex items-center ">
        <Image src="/logo/untitledui.png" alt="untitlrd-ui" width={0} height={0} sizes="100vw" style={{height:"60px", width:"auto"}}/>
        <h3 className="inline-block align-middle">Untitled UI</h3>
        </div>
        
        <p className="col-start-1 md:col-start-8 col-span-2 text-gray-500">© 2077 Untitled UI. All Rigth reserved.</p>
    </div>
</div>
}