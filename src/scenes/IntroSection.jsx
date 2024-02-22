import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import introImg from "../assets/logo.png"

const IntroSection = () => {
	return (
		<div id="intro" className="mt-20 w-full h-fit py-2">
			<section className="mx-5 mb-20 sm:mx-10 md:mx-20 lg:mx-40">
				<div className="hidden flex-col space-y-4 absolute start-10 top-80 md:flex">
					<FaFacebook />
					<FaTwitter />
					<FaInstagram />
				</div>
				<div className="flex flex-col space-y-4 justify-between items-center md:flex-row-reverse md:space-y-0 md:space-x-4">
					{/* Image */}
					<img
						src={introImg}
						alt="intro image"
						className="-z-20 w-3/5 md:w-1/2"
					/>
					{/* Left Section */}
					<div className="space-y-4 text-center md:text-start md:w-1/2">
						<h1 className="text-3xl font-extrabold sm:text-5xl lg:text-7xl">
							We Provide Cyber Solutions For Your Security
						</h1>
						<p className="text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Reprehenderit, voluptates nobis. Cumque
							quisquam iure iste.
						</p>
						<div className="flex justify-center items-center space-x-4 md:justify-start">
							<a
								href="#contact"
								className="transition duraton-1000 delay-75 bg-blue-500 p-2 px-6 hover:bg-blue-600 rounded-lg"
							>
								Get Started
							</a>
							<a
								href="#contact"
								className="transition duraton-1000 delay-75 rounded-lg p-2 hover:bg-slate-800 shadow border-slate-700 border-2 px-6"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default IntroSection
