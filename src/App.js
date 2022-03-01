import "./App.css";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import {useTheme} from "./ThemeContext";
import Navbar from "./Navbar";
function App() {
	const {theme} = useTheme();
	return (
		<div
			className='App'
			style={{
				marginLeft: "2rem",
				fontSize: "1.6rem",
				backgroundColor: theme == "light" ? "white" : "black",
			}}>
			<h1 style={{color: theme == "light" ? "black" : "white"}}>
				Ecommerce Website
			</h1>
			<Navbar />
			<ProductCard />
			<ProductList />
		</div>
	);
}

export default App;
