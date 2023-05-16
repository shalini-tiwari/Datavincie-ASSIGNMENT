import NavBar from "./components/NavBar";
import "./App.css";
import NavHistory from "./components/NavHistory";
import AppBody from "./components/AppBody";
import { useMediaQuery } from "@mui/material";
import CartMobile from "./components/CartMobile";
import Cart from "./components/Cart";

function App() {
	const res = useMediaQuery("(max-width:768px)");

	return (
		<>
			<NavBar />
			<NavHistory />
			<AppBody />
			{res ? <CartMobile /> : <Cart />}
		</>
	);
}

export default App;
