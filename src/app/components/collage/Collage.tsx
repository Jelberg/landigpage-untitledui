'use client'
import Image from "next/image"
export interface IPhoto{
    imageUrl: string
}
interface ICollage {
    images : IPhoto[]
}

//TODO: Refactorizar este codigo 
export default function Collage({images}: ICollage) {
    return images.length === 5 && <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 gap-4">
      {/* Primera fila */}
      <div className="col-span-1 md:col-span-3 flex justify-end items-end">
        <Image src={images[0].imageUrl} alt="Imagen 1" className="w-full sm:w-[80%] h-auto" width={0} height={0} sizes="100vw" />
      </div>
      <div className="col-span-1 sm:col-span-3 md:col-span-3 flex justify-start items-end">
        <Image src={images[1].imageUrl} alt="Imagen 2" className="w-full sm:w-[80%] h-auto" width={0} height={0} sizes="100vw" />
      </div>
      {/* Segunda fila */}
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src={images[2].imageUrl} alt="Imagen 3" className="w-full h-auto" width={0} height={0} sizes="100vw" />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src={images[3].imageUrl} alt="Imagen 4" className="w-full h-auto" width={0} height={0} sizes="100vw" />
      </div>
      <div className="col-span-1 sm:col-span-2 md:col-span-2 flex justify-center items-start">
        <Image src={images[4].imageUrl} alt="Imagen 5" className="w-full h-auto" width={0} height={0} sizes="100vw" />
      </div>
    </div>
  </div>  
  
}