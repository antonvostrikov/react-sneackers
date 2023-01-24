import React from "react";

import Card from "../../components/Card/Card";

import styles from './Favorite.module.scss'

import { Link } from "react-router-dom";
import { AppContext } from "../../context";

export default function Favorite() {
	const { cartFavorite, onAddToFavorite } = React.useContext(AppContext)

	return (
		<div className="Favorite">
			<div className="content p-40">
				<div className="d-flex align-center mb-40 justify-between">
          <h1>Мои закладки</h1>
        </div>
				<div className={`d-flex flex-wrap ${cartFavorite.length > 0 ? '' : 'justify-center'}`}>
					{ cartFavorite.length > 0 ? (
						<>
							{ cartFavorite.map(cart => (
								<Card 
									name={cart.name} 
									price={cart.price} 
									image={cart.image}
									id={cart.id} 
									onAddToFavorite={onAddToFavorite}
								/>
							)) }
						</>
					) : (
						<>
							<div className={styles.favoriteEmpty}>
								<img src="/img/empty-favorite.svg" alt="" />
								<h3>Закладок нет :(</h3>
								<p>Вы ничего не добавляли в закладки</p>
								<Link to="/"><button className={`${styles.greenButton} ${styles.greenButtonEmptyCart}`}>Вернуться назад</button></Link>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}