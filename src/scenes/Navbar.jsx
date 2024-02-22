import PropTypes from "prop-types"
import { FaChevronDown } from "react-icons/fa"
import logo from "../assets/logo.png"

const Navbar = ({ dispatch, menuDisplay, openButton }) => {
	return (
		<header>
			<nav className="flex fixed top-0 left-0 right-0 z-10 mx-5 justify-between items-center py-6 sm:mx-10 md:mx-20 lg:mx-40">
				{/* logo */}
				<a
					href="#"
					className="flex items-center"
				>
					<img
						src={logo}
						alt="logo"
						className="size-6 md:size-10 me-2"
					/>
					<div className="text-lg font-bold md:font-extrabold md:text-xl">
						<span>Cyber</span>
						<span className="text-orange-500">Whiz</span>
					</div>
				</a>

				{/* desktop menu */}
				<div className="hidden items-center md:flex md:space-x-4 lg:space-x-6">
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
					onClick={() => dispatch({ type: "SHOW_OR_HIDE_MENU" })}
				>
					<span
						id="top-line"
						className={
							openButton +
							"line h-1 w-8 rounded  block bg-orange-500"
						}
					></span>
					<span
						id="middle-line"
						className={
							openButton +
							"line h-1 w-8 rounded  block bg-orange-500"
						}
					></span>
					<span
						id="bottom-line"
						className={
							openButton +
							"line h-1 w-8 rounded  block bg-orange-500"
						}
					></span>
				</button>
			</nav>

			{/* mobile menu */}
			<div
				id="mobile-menu"
				className={
					menuDisplay +
					"flex-col fixed top-0 size-full bg-black space-y-12 pt-32 items-center md:hidden"
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
		</header>
	)
}

Navbar.propTypes = {
	dispatch: PropTypes.func.isRequired,
	menuDisplay: PropTypes.string.isRequired,
	openButton: PropTypes.string.isRequired,
}

export default Navbar
