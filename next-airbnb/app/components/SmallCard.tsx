import Image from "next/image";
import { ExploreData } from "../lib/types";
import { ReactElement } from "react";

export default function SmallCard({ img, location, distance }: ExploreData): ReactElement {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-16 w-16">
                <Image 
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                    alt={location}
                />
            </div>

            <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}