import { useReducer } from "react"
import { IntroSection, Navbar } from "./scenes"

const reducer = (state, action) => {
	switch (action.type) {
		case "SHOW_OR_HIDE_MENU":
			return {
				menuDisplay:
					state.menuDisplay == "hidden " ? "flex " : "hidden ",
				openButton: state.menuDisplay == "hidden " ? "open " : "",
			}
		default:
			return {
				...state,
				error: (
					<div className="font-bold bg-white">
						<h1 className="text-red-600 mt-56 py-12 mx-4 md:mx-20 text-4xl text-center">
							No match for action type found!
						</h1>
					</div>
				),
			}
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, {
		menuDisplay: "hidden ",
		openButton: "",
		error: "",
	})

	return (
		<>
			{state.error || (
				<div className="mx-auto">
					<Navbar dispatch={dispatch} {...state} />
					<IntroSection />
				</div>
			)}
		</>
	)
}

export default App
