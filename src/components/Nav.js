const Nav = ({ menu, getSpecificMenu }) => {
	return (
		<div className="menu-cont">
			<ul>
				<li>
					<button onClick={() => getSpecificMenu(menu)}>{menu}</button>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
