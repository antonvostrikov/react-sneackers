import React from "react";

import Card from "../components/Card/Card";

export default function Favorite({cartFavorite}) {
	return (
		<div className="Favorite">
			<div className="content p-40">
				<div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
        </div>
				<div className="d-flex flex-wrap">
					{ cartFavorite.map(cart => (
						<Card 
							name={cart.name} 
							price={cart.price} 
							img={cart.img}
							id={cart.id} 
						/>
					)) }
				</div>
			</div>
		</div>
	)
}