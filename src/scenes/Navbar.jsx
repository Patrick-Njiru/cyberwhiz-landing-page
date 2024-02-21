import PropTypes from "prop-types"
import { FaChevronDown } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = ({ dispatch, menuDisplay, openButton }) => {
	return (
		<div className="">
			<nav className="flex mx-4 justify-between items-center mt-6 sm:mx-8 md:mx-16 lg:mx-32">
				{/* logo */}
				<a
					href="#"
					className="font-bold flex items-center z-10 md:font-extrabold"
				>
					<img src={logo} alt="" className="size-6 md:size-12 me-2" />
					<span>Cyber</span>
					<span className="text-orange-500">Whiz</span>
				</a>

				{/* desktop menu */}
				<div className="hidden items-center md:flex md:space-x-4 lg:space-x-8">
					<a
						href="#"
						className="transition duraton-1000 delay-75 hover:text-orange-400"
					>
						Home
					</a>
					<a
						href="#about"
						className="transition duraton-1000 delay-75 hover:text-orange-400"
					>
						About us
					</a>
					<a
						href="#services"
						className="transition duraton-1000 delay-75 hover:text-orange-400"
					>
						Services
					</a>
					<a
						href="#pricing"
						className="transition duraton-1000 delay-75 hover:text-orange-400"
					>
						Pricing
					</a>
					<a
						href="#pages"
						className="transition duraton-1000 delay-75 hover:text-orange-400"
					>
						Pages <FaChevronDown className="inline w-2" />
					</a>
					<a
						href="#contact"
						className="transition duraton-1000 delay-75 bg-orange-600 rounded p-2 hover:bg-orange-700"
					>
						Contact Us
					</a>
				</div>

				{/* hamburger button */}
				<button
					id="menu-btn"
					className="absolute end-10 bg-transparent space-y-1 md:hidden z-10 hover:animate-pulse"
					onClick={() => dispatch({type:'SHOW_OR_HIDE_MENU'})}
				>
					<span
						id="top-line"
						className={openButton + "line h-1 w-8 rounded  block bg-orange-500"}
					></span>
					<span
						id="middle-line"
						className={openButton + "line h-1 w-8 rounded  block bg-orange-500"}
					></span>
					<span
						id="bottom-line"
						className={openButton + "line h-1 w-8 rounded  block bg-orange-500"}
					></span>
				</button>
			</nav>

			{/* mobile menu */}
			<div
				id="mobile-menu"
				className={
					menuDisplay +
					"flex-col absolute top-0 size-full bg-black space-y-12 pt-32 items-center md:hidden"
				}
			>
				<a
					href="#"
					className="transition duraton-1000 delay-75 hover:text-orange-400"
				>
					Home
				</a>
				<a
					href="#about"
					className="transition duraton-1000 delay-75 hover:text-orange-400"
				>
					About us
				</a>
				<a
					href="#services"
					className="transition duraton-1000 delay-75 hover:text-orange-400"
				>
					Services
				</a>
				<a
					href="#pricing"
					className="transition duraton-1000 delay-75 hover:text-orange-400"
				>
					Pricing
				</a>
				<a
					href="#pages"
					className="transition duraton-1000 delay-75 hover:text-orange-400"
				>
					Pages <FaChevronDown className="inline w-2" />
				</a>
				<a
					href="#contact"
					className="transition duraton-1000 delay-75 bg-orange-600 rounded p-2 hover:bg-orange-700"
				>
					Contact Us
				</a>
			</div>
		</div>
	)
}

Navbar.propTypes = {
	dispatch: PropTypes.func.isRequired,
	menuDisplay: PropTypes.string.isRequired,
	openButton: PropTypes.string.isRequired,
}

export default Navbar
