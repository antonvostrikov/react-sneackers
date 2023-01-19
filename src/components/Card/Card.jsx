import React, { useState } from "react";

import styles from './Card.module.scss'

import ContentLoader from "react-content-loader";

export default function Card({ loading=false, onAddToFavorite, id, name, price, image, addToCart }) {
	const [added, setAdded] = useState(false)
	const [favorite, setFavorite] = useState(false)

	const onClickButtonAdd = () => {
		addToCart({id, name, price, image})
		setAdded(!added)
	}

	const onClickButtonFavorite = () => {
		onAddToFavorite({id, name, price, image})
		setFavorite(!favorite)
	}

	return (
		<div className={styles.card}>
			{ loading ? <ContentLoader
					speed={2}
					width={155}
					height={250}
					viewBox="0 0 155 265"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb">
					<rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
					<rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
					<rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
					<rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
					<rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
				</ContentLoader> : 
				<>
				<div className={styles.favorite}>
					<img onClick={onClickButtonFavorite} src={favorite ? '/img/heart-unabled.svg' : '/img/heart-disabled.svg'} alt="disabled" />
				</div>
				<img width={133} height={112} src={image} alt="" />
				<h5>{name}</h5>
				<div className="d-flex justify-between align-center">
					<div className="d-flex flex-column">
						<span>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<button onClick={onClickButtonAdd} className={styles.button}>
						<img width={11} height={11} src={added ? '/img/btn-add.svg' : '/img/plus.svg'} alt="" />
					</button>
				</div>
				</>
			}
		</div>
	)
}