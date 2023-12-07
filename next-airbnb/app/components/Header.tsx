import Image from "next/image";
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-5 lg:grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          alt="Next Airbnb Logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex col-span-3 lg:col-span-1 items-center border-2 rounded-full ml-5 lg:ml-0 py-2 md:shadow-sm">
        <input className="flex-grow pl-5 bg-transparent outline-none h-8 text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Place of interest?" />
        <MagnifyingGlassIcon className="inline-flex h-8 bg-red-400 hover:bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2" aria-hidden="false" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden lg:inline text-sm cursor-pointer hover:text-red-400">List your Space</p>
        <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer hover:text-red-400" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer hover:bg-slate-100">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}