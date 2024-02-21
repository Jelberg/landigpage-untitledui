import Image from "next/image"

interface ICollage {
    images? : []
}
export default function Collage({images}: ICollage) {
    return <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-4">
      {/* Primera fila */}
      <div className="col-span-1 md:col-span-3 flex justify-end items-end">
        <Image src={"/img/group/1.png"} alt="Imagen 1" className="w-full h-auto" width={0} height={0} sizes="100vw" style={{width:"80%", height:"auto"}}/>
      </div>
      <div className="col-span-1 sm:col-span-3 md:col-span-3 flex justify-start items-end">
        <Image src={"/img/group/2.png"} alt="Imagen 2" className="w-full h-auto" width={0} height={0} sizes="100vw" style={{width:"80%", height:"auto"}}/>
      </div>
      {/* Segunda fila */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src="/img/group/3.png" alt="Imagen 3" className="w-full h-auto" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}/>
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src="/img/group/4.png" alt="Imagen 4" className="w-full h-auto" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}/>
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src={"/img/group/5.png"} alt="Imagen 5" className="w-full h-auto" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}}/>
      </div>
    </div>
  </div>  
  
}