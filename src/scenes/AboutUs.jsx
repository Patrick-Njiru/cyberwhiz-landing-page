import { FaCheck } from "react-icons/fa"
import about from "../assets/about-img.jpg"

const AboutUs = () => {
	return (
		<div id="about" className="mt-20 py-20 w-full h-fit">
			<section className="mx-5 mb-20 sm:mx-10 md:mx-20 lg:mx-40">
				<div className="flex flex-col space-y-8 justify-between items-center md:flex-row md:space-y-0 md:items-start md:space-x-6 lg:space-x-10">
					{/* Image */}
					<img
						src={about}
						alt="intro image"
						className="about-img rounded-3xl -z-20 w-3/5 md:w-1/2"
					/>
					{/* Right Section */}
					<div className="space-y-6 text-center md:text-start md:w-1/2">
						<h1 className="text-slate-500 font-bold text-lg md:text-2xl">
							ABOUT US
						</h1>
						<h1 className="text-2xl font-extrabold sm:text-3xl md:text-5xl">
							24/7 Cyber Security Operation Center
						</h1>
						<p className="text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Numquam, dolores aliquid repudiandae
							praesentium expedita qui blanditiis soluta quos
							reprehenderit laborum in corporis accusamus. Animi,
							accusamus consequuntur? Consequuntur facere quam
							molestias.
						</p>
						<ul className="flex flex-wrap text-start justify-center md:justify-start">
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Malware Detection Removal
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Cloud Security
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Content Delivery Network
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Cyber Security
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Security Management
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Identifying Threats
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								SIEM Threat Detection
							</li>
							<li className="w-full my-3 sm:w-1/2 md:w-full lg:w-1/2">
								<FaCheck className="inline mr-2 rounded-full bg-orange-500 text-black p-1 text-xl" />
								Server Security
							</li>
						</ul>
						<a
							href="#contact"
							className="block w-fit mx-auto transition duraton-1000 delay-75 bg-blue-500 rounded-lg p-2 px-6 hover:bg-blue-600 md:mx-0"
						>
							Get Started
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default AboutUs
