// import { FaFingerprint, FaFolder, FaFolderPlus, FaLaptop } from "react-icons/fa"
import laptop from "../assets/laptop.svg"
import folders from "../assets/folders.svg"
import fingerprint from "../assets/biometric-icon.svg"

const Services = () => {
	return (
		<section className="mx-5 mt-20 mb-20 text-center sm:mx-10 md:mt-36 md:mx-20 lg:mx-40">
			<h1 className="text-slate-600 font-bold text-lg md:text-2xl">
				OUR SERVICES
			</h1>
			<h1 className="text-2xl mb-10 font-extrabold sm:text-3xl md:text-5xl">
				Cyber Security Solutions
			</h1>
			<div className="flex flex-col justify-center flex-wrap space-y-6 sm:items-center sm:flex-row sm:space-x-4 md:space-x-4 md:space-y-0 md:flex-nowrap">
				{/* 1 */}
				<div className="service self-baseline p-6 mx-auto space-y-6 rounded-xl w-5/6 sm:w-2/5 md:w-2/6">
					<img
						src={laptop}
						alt="computer"
						className="mb-4"
					/>
					<h3 className="font-bold text-xl">Computer Security</h3>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Magni reiciendis quod dolore molestiae sed.
					</p>
					<a
						href="#read"
						className="block w-fit mx-auto transition duraton-1000 delay-75 rounded-lg p-2 hover:bg-slate-800 shadow border-slate-700 border-2 px-6"
					>
						Read more
					</a>
				</div>
				{/* 2 */}
				<div className="service self-baseline p-6 mx-auto space-y-6 rounded-xl w-5/6 sm:w-2/5 md:w-2/6">
					<img
						src={folders}
						alt="folders"
						className="w-5/6"
					/>
					<h3 className="font-bold text-xl">Folder Security</h3>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Magni reiciendis quod dolore molestiae sed.
					</p>
					<a
						href="#read"
						className="block w-fit mx-auto transition duraton-1000 delay-75 rounded-lg p-2 hover:bg-slate-800 shadow border-slate-700 border-2 px-6"
					>
						Read more
					</a>
				</div>
				{/* 3 */}
				<div className="service self-baseline p-6 mx-auto space-y-6 rounded-xl w-5/6 sm:w-2/5 md:w-1/3">
					<img
						src={fingerprint}
						alt="fingerprint"
						className="w-5/6"
					/>
					<h3 className="font-bold text-xl">Fingerprint Security</h3>
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Magni reiciendis quod dolore molestiae sed.
					</p>
					<a
						href="#read"
						className="block w-fit mx-auto transition duraton-1000 delay-75 rounded-lg p-2 hover:bg-slate-800 shadow border-slate-700 border-2 px-6"
					>
						Read more
					</a>
				</div>
			</div>
		</section>
	)
}

export default Services
