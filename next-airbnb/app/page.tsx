import Footer from "./components/Footer"
import Hero from "./components/Hero"
import LargeCard from "./components/LargeCard"
import MediumCard from "./components/MediumCard"
import SmallCard from "./components/SmallCard"
import { ExploreData, CategoryData } from "./lib/types"

async function getExploreData(): Promise<ExploreData[]> {
	const res = await fetch("https://www.jsonkeeper.com/b/4G1G")

	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

async function getCategoryData(): Promise<CategoryData[]> {
  const res = await fetch("https://www.jsonkeeper.com/b/OONN")

	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
} 

export default async function Home() {
	const exploreData: ExploreData[] = await getExploreData()
  const categoryData: CategoryData[] = await getCategoryData()

	return (
		<main>
			<Hero />

			<div className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData.map(({ img, location, distance }, index) => (
							<SmallCard key={index} img={img} location={location} distance={distance} />
						))}
					</div>
				</section>

        <section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>

					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{categoryData.map(({ img, title }, index) => (
							<MediumCard key={index} img={img} title={title} />
						))}
					</div>
				</section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Next Airbnb"
          buttonText="Get Inspired"
        />
			</div>

			<Footer />
		</main>
	)
}
  