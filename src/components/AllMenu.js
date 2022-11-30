

const AllMenu = ({ id, price, name, description, type }) => {
	return (
		<div className="deal">
			<img src={`https://picsum.photos/200/300?random=${id}`} alt={name} />
			<div className="right">
				<div className="name_price">
					<h4>{name}</h4>
					<h4 className="price">${price}.00</h4>
				</div>
				<div className="desc">{description}</div>
                <p className="type">{type}</p>
			</div>
		</div>
	);
};

export default AllMenu;
