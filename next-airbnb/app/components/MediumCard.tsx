import { ReactElement } from "react"
import { CategoryData } from "../lib/types"
import Image from "next/image"

export default function MediumCard({ img, title }: CategoryData): ReactElement {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-xl"
                    objectFit="cover"
                    alt={title}
                />
            </div>
            <h3 className="text-xl mt-3">{title}</h3>
        </div>
    )
}