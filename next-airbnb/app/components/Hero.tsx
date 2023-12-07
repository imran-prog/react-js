import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="Hero Image"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm lg:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-red-400 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  )
}