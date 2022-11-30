import { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import Nav from "./components/Nav";
import AllMenu from "./components/AllMenu";
import "./App.css";

const App = () => {
	const [menu, setMenu] = useState(MOCK_DATA);

	const getSpecificMenu = (type) => {
		if (type === "All") {
			return setMenu(MOCK_DATA);
		}
		const getMenu = MOCK_DATA.filter((newMenu) => newMenu.type === type);
		setMenu(getMenu);
	};

	const uniqueMenus = ["All", ...new Set(MOCK_DATA.map((item) => item.type))];

  
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-logo">Our Menu</h1>
				<div className="border"></div>
			</header>
			<div className="nav">
				{uniqueMenus.map((menu, index) => {
					return (
						<Nav key={index} index={index} menu={menu} getSpecificMenu={getSpecificMenu} />
					);
				})}
			</div>

			<div className="allmenu">
				{menu.map((item) => {
					return <AllMenu key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default App;
