import { ReactElement } from "react"

export default function Footer(): ReactElement {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">ABOUT</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>Accessibilty</p>
				<p>A real site</p>
				<p>Awesome Clone</p>
				<p>Referrals</p>
				<p>Next Js</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">HOST</h5>
				<p>Learning</p>
				<p>Present By</p>
				<p>Gaming</p>
				<p>Students</p>
				<p>Join Now</p>
			</div>
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Say Hi</p>
				<p>Easter Eggs</p>
				<p>For Me</p>
			</div>
		</div>
	)
}
