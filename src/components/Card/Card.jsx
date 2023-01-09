import React, { useState } from "react";

import styles from './Card.module.scss'

export default function Card({ onAddToFavorite, id, name, price, img, addToCart }) {
	const [added, setAdded] = useState(false)
	const [favorite, setFavorite] = useState(false)

	const onClickButtonAdd = () => {
		addToCart({name, price, img})
		setAdded(!added)
	}

	const onClickButtonFavorite = () => {
		onAddToFavorite({id, name, price, img})
		setFavorite(!favorite)
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img onClick={onClickButtonFavorite} src={favorite ? '/img/heart-unabled.svg' : '/img/heart-disabled.svg'} alt="disabled" />
			</div>
			<img width={133} height={112} src={img} alt="" />
			<h5>{name}</h5>
			<b>{id}</b>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<button onClick={onClickButtonAdd} className={styles.button}>
					<img width={11} height={11} src={added ? '/img/btn-add.svg' : '/img/plus.svg'} alt="" />
				</button>
			</div>
		</div>
	)
}